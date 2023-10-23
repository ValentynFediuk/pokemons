import {Title} from "@/components/ui/Title.tsx";
import {FC} from "react";
import {PokemonDataResult} from "@/types/pokemon.ts";

export interface ProductProps {
    pokemon: PokemonDataResult
}
export const Pokemon:FC<ProductProps> = ({pokemon}) => {
    const {name, url} = pokemon
    return (
        <a href={url}>
            <Title typeTitle='h3'>{name}</Title>
        </a>
    )
}