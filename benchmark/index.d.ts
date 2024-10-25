declare module 'prettyoutput' {
    const prettyoutput: (input: unknown, opts: Record<string, unknown>, indent?: number) => string

    export = prettyoutput
}
