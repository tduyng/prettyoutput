import util from 'node:util'
import { dump } from '@poppinss/dumper/console'
import columnify from 'columnify'
import prettyjson from 'prettyjson'

import { prettyOutput } from '../src/index.js'
import { makeElement } from './fixture.js'
import { prettyStats, stats } from './stats.js'

type Weights = Record<string, number>

interface BenchDesc {
    levels: number
    keys: number
    loops: number
    weights: string
}

async function runFunction(loopCount: number, fn: () => void): Promise<number[]> {
    const diffs: number[] = []

    for (let i = 0; i < loopCount; i++) {
        const time = process.hrtime()
        fn()
        const rawDiff = process.hrtime(time)
        const diff = rawDiff[0] * 1e9 + rawDiff[1]
        diffs.push(diff)
    }

    return diffs
}

async function runPrettyOutput(element: unknown, loopCount: number): Promise<number[]> {
    return runFunction(loopCount, () => {
        prettyOutput(element, { noColor: true, maxDepth: 100 })
    })
}

async function runUtilInspect(element: unknown, loopCount: number): Promise<number[]> {
    return runFunction(loopCount, () => {
        util.inspect(element, { depth: 100 })
    })
}

async function runPrettyJson(element: unknown, loopCount: number): Promise<number[]> {
    return runFunction(loopCount, () => {
        prettyjson.render(element, { noColor: true })
    })
}

async function runDumper(element: unknown, loopCount: number): Promise<number[]> {
    return runFunction(loopCount, () => {
        dump(element, { depth: 100 })
    })
}

function prettyWeights(weights: Weights): string {
    return Object.entries(weights)
        .map(([key, value]) => `${key}: ${value}`)
        .join('    ')
}

async function makeBenchResults(
    weights: Weights,
    levels: number,
    keysCount: number,
    loopCount: number
): Promise<string> {
    const benchDesc: BenchDesc = {
        levels,
        keys: keysCount,
        loops: loopCount,
        weights: prettyWeights(weights),
    }

    const element = await makeElement(weights, levels, keysCount)

    // Running the benchmarks
    const prettyOutputDiffs = await runPrettyOutput(element, loopCount)
    const prettyJsonDiffs = await runPrettyJson(element, loopCount)
    const utilInspectDiffs = await runUtilInspect(element, loopCount)
    const dumperDiffs = await runDumper(element, loopCount)

    // Calculating the stats
    const prettyOutputStats = stats(prettyOutputDiffs)
    const prettyJsonStats = stats(prettyJsonDiffs)
    const utilInspectStats = stats(utilInspectDiffs)
    const dumperStats = stats(dumperDiffs)

    const result = [
        { name: 'prettyoutput', ...prettyStats(prettyOutputStats) },
        { name: 'prettyjson', ...prettyStats(prettyJsonStats) },
        { name: 'util.inspect', ...prettyStats(utilInspectStats) },
        { name: '@poppinss/dumper', ...prettyStats(dumperStats) },
    ]
    const benchHeader = `\n${columnify([benchDesc], { columnSplitter: ' | ' })}\n\n`
    const resultString = `${columnify(result, { columnSplitter: ' | ' })}\n`
    const separator =
        '--------------------------------------------------------------------------------------------------------------\n'

    // Returning the header, results, and separator
    return benchHeader + resultString + separator
}

async function main(): Promise<void> {
    const testInput = {
        keys: 20,
        loops: 100,
        weights: {
            serializable: 0.9,
            array: 0.3,
            object: 0.5,
            multilineString: 0.3,
            error: 0.2,
        },
    }

    const tests = [
        {
            ...testInput,
            levels: 1,
        },
        {
            ...testInput,
            levels: 2,
        },
        {
            ...testInput,
            levels: 3,
        },
        {
            ...testInput,
            levels: 4,
        },
        {
            ...testInput,
            levels: 4,
            loops: 200,
        },
        {
            ...testInput,
            levels: 5,
            keys: 10,
        },
    ]

    const allResults: string[] = []

    for (const test of tests) {
        console.log(
            `Preparing mock data for levels: ${test.levels}, keys: ${test.keys}, loops: ${test.loops}`
        )
        const result = await makeBenchResults(test.weights, test.levels, test.keys, test.loops)
        allResults.push(result)
    }

    console.log(allResults.join('\n'))
}

await main().catch(console.error)
