import axiosRequest from "@/http/axios.ts";
import {PokemonData} from "@/types/pokemon.ts";

export const usePokemons = async () => {
    const response = await axiosRequest({
        method: 'GET',
        url: '/pokemon/?limit=100'
    })


    const {data, error} = response as { data: PokemonData, error: string };
    return {data, error}
}