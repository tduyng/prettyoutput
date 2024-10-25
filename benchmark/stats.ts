export const fixedInt = (v: number): number => Math.floor(v)

type Stats = {
    min: number
    max: number
    mean: number
    total: number
}

type PrettyStats = {
    min: string
    max: string
    mean: string
    total: string
}

/**
 * Converts time from nanoseconds to a human-readable format.
 * @param {number} time - Time in nanoseconds.
 */
export const prettyTime = (time: number): string => {
    const mn = fixedInt(time / 1e12)
    const s = fixedInt(time / 1e9) - mn * 1e3
    const ms = fixedInt(time / 1e6) - mn * 1e6 - s * 1e3
    const micros = fixedInt(time / 1e3) - mn * 1e9 - s * 1e6 - ms * 1e3
    const ns = fixedInt(time) - mn * 1e12 - s * 1e9 - ms * 1e6 - micros * 1e3

    return `${mn ? `${mn}mn ` : ''}${s ? `${s}s ` : ''}${ms ? `${ms}ms ` : ''}${micros ? `${micros}µs ` : ''}${ns}ns`
}

export const stats = (diffs: number[]): Stats => {
    const total = diffs.reduce((acc, diff) => acc + diff, 0)
    const min = Math.min(...diffs)
    const max = Math.max(...diffs)
    return { min, max, mean: total / diffs.length, total }
}

export const prettyStats = (stats: Stats): PrettyStats => ({
    min: prettyTime(stats.min),
    max: prettyTime(stats.max),
    mean: prettyTime(stats.mean),
    total: prettyTime(stats.total),
})
