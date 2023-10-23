import {DefaultLayout} from "@/layouts/DefaultLayout.tsx";
import {PokemonsList} from "@/components/Products/PokemonsList.tsx";

export const MainPage = () => {


    return (
        <DefaultLayout>
            <PokemonsList />
        </DefaultLayout>
    )
}