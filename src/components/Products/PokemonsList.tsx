import {useEffect, useState} from "react";
import {Title} from "@/components/ui/Title.tsx";
import {Pokemon} from "@/components/Products/Pokemon.tsx";
import {PokemonDataResult} from "@/types/pokemon.ts";
import {usePokemons} from "@/hooks/usePokemons.ts";


export const PokemonsList = () => {
    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState<PokemonDataResult[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const {data, error} = await usePokemons()
            setPokemons(data?.results)
            setError(error)
            setLoading(false)
        };

        fetchData();
    }, []);

    return (
        <div className='p-4 container'>
            <Title typeTitle='h2'>Pokedex</Title>
            {loading ?
                <div>Loading...</div>
                :
                <div>
                    {pokemons.map((pokemon) => (
                        <Pokemon pokemon={pokemon} key={pokemon.name} />
                    ))}
                </div>
            }

            {error && <p className='text-red-600'>{error}</p>}
        </div>
    )
}