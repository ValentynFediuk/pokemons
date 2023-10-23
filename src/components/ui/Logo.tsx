import logoUrl from '@/assets/logo.png'
import {Title} from "@/components/ui/Title.tsx";

export const Logo = () => (
    <a className='w-10 flex gap-2 items-center' href="/">
        <img src={logoUrl} alt="Logo"/>
        <Title typeTitle='h1'>Pokemons</Title>
    </a>
)