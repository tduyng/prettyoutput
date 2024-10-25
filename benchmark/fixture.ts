type Weights = Record<string, number>

const makeArray = async (): Promise<unknown[]> => []
const makeObject = async (): Promise<Record<string, unknown>> => ({})
const makeMultilineString = async (): Promise<string> => 'A multi \nline \nstring'
const makeSerializable = async (): Promise<unknown> => {
    const set = [true, false, 1, 2.3, null, new Date(), 'A single line string', []]
    return set[Math.floor(Math.random() * set.length)]
}
const makeError = async (): Promise<Error> => new Error('An error')

const weightedRand = (weights: Weights): string | undefined => {
    const entries = Object.entries(weights)
    const weightSum = entries.reduce((sum, [, weight]) => sum + weight, 0)
    const randomPointer = Math.random() * weightSum

    let runningSum = 0
    for (const [key, weight] of entries) {
        runningSum += weight
        if (randomPointer < runningSum) {
            return key
        }
    }
    return undefined
}

const makeLevelArray = async (weights: Weights, keysCount: number): Promise<unknown[]> => {
    const types = Array.from({ length: keysCount }, () => weightedRand(weights))
    return Promise.all(
        types.map(async (type) => {
            switch (type) {
                case 'array':
                    return makeArray()
                case 'object':
                    return makeObject()
                case 'multilineString':
                    return makeMultilineString()
                case 'serializable':
                    return makeSerializable()
                case 'error':
                    return makeError()
                default:
                    return undefined
            }
        })
    )
}

const makeLevelObject = async (
    weights: Weights,
    keysCount: number
): Promise<Record<string, unknown>> => {
    const types = Array.from(
        { length: keysCount },
        (_, idx) => [`key${idx}`, weightedRand(weights)] as const
    )
    const entries = await Promise.all(
        types.map(async ([key, type]) => {
            switch (type) {
                case 'array':
                    return [key, await makeArray()]
                case 'object':
                    return [key, await makeObject()]
                case 'multilineString':
                    return [key, await makeMultilineString()]
                case 'serializable':
                    return [key, await makeSerializable()]
                case 'error':
                    return [key, await makeError()]
                default:
                    return [key, null]
            }
        })
    )
    return Object.fromEntries(entries)
}

const makeLevelElements = async (
    weights: Weights,
    keysCount: number,
    levelElements: unknown[]
): Promise<unknown[]> => {
    const nextLevel: unknown[] = []

    await Promise.all(
        levelElements.map(async (element) => {
            if (Array.isArray(element)) {
                const arrayContent = await makeLevelArray(weights, keysCount)
                element.push(...arrayContent)
                nextLevel.push(...arrayContent)
            } else if (typeof element === 'object' && element !== null) {
                const objContent = await makeLevelObject(weights, keysCount)
                Object.assign(element, objContent)
                nextLevel.push(...Object.values(objContent))
            }
        })
    )

    return nextLevel
}

export const makeElement = async (
    weights: Weights,
    levels: number,
    keysCount: number
): Promise<unknown> => {
    const topType = weightedRand({ array: 0.5, object: 0.5 })
    const top = topType === 'array' ? await makeArray() : await makeObject()

    let levelElements: unknown[] = [top]

    for (let level = 0; level < levels; level++) {
        levelElements = await makeLevelElements(weights, keysCount, levelElements)
    }

    return top
}

// const weights = { serializable: 0.9, array: 0.3, object: 0.4, multilineString: 0.3, error: 0.2 }
// const levels = 4
// const keysCount = 5
// console.log(JSON.stringify(await makeElement(weights, levels, keysCount)))
