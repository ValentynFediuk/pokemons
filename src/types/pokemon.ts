export type PokemonData = {
    count: number
    next: string | null
    previous: string | null
    results: PokemonDataResult[]
}

export type PokemonDataResult = {
    name: string
    url: string
}