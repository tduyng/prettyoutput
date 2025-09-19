#!/usr/bin/env node
const fs = require('node:fs')
const { prettyoutput } = require('../lib/cjs/index.js')
const { colors } = require('../lib/cjs/colors.js')

const { version } = require('../package.json')

const args = process.argv.slice(2)
const options = {
    indentationLength: undefined,
    noColor: false,
    maxDepth: undefined,
}
let debug = false
const files = []

const showHelp = () => {
    console.log(`Usage: pretty_output [options] <file ...>

Options:
  -i, --indent <indent>    Space per indent
  -n, --noColor           Disable color
  -d, --depth <depth>     Max depth inspection
      --debug             debug mode
  -V, --version           output the version number
  -h, --help              display help for command`)
    process.exit(0)
}

const showVersion = () => {
    console.log(version)
    process.exit(0)
}

for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    if (arg === '-h' || arg === '--help') {
        showHelp()
    } else if (arg === '-V' || arg === '--version') {
        showVersion()
    } else if (arg === '-i' || arg === '--indent') {
        const nextArg = args[++i]
        if (nextArg === undefined) {
            console.error('Error: option requires argument -- indent')
            process.exit(1)
        }
        options.indentationLength = Number.parseInt(nextArg, 10)
        if (Number.isNaN(options.indentationLength)) {
            console.error('Error: indent must be a number')
            process.exit(1)
        }
    } else if (arg === '-n' || arg === '--noColor') {
        options.noColor = true
    } else if (arg === '-d' || arg === '--depth') {
        const nextArg = args[++i]
        if (nextArg === undefined) {
            console.error('Error: option requires argument -- depth')
            process.exit(1)
        }
        options.maxDepth = Number.parseInt(nextArg, 10)
        if (Number.isNaN(options.maxDepth)) {
            console.error('Error: depth must be a number')
            process.exit(1)
        }
    } else if (arg === '--debug') {
        debug = true
    } else if (arg.startsWith('-')) {
        console.error(`Error: unknown option '${arg}'`)
        process.exit(1)
    } else {
        files.push(arg)
    }
}

const renderInput = (data) => {
    let input = data
    try {
        input = JSON.parse(data)
    } catch {
        if (debug) console.error(`${colors.red('Error:')} unparsable content`)
    }

    console.log(prettyoutput(input, options))
}

if (files.length) {
    const filename = files[0]
    try {
        renderInput(fs.readFileSync(filename, 'utf8'))
    } catch {
        console.error(`${colors.red('Error:')} File ${filename} does not exist"`)
        process.exit(1)
    }
} else {
    let streamData = ''

    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', (chunk) => {
        if (chunk === '\n') {
            renderInput(streamData)
            streamData = ''
            return
        }
        streamData += chunk
    })
    process.stdin.on('end', () => {
        renderInput(streamData)
    })
}
