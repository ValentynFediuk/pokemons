import {Header} from "@/components/Header.tsx";
import {FC, ReactNode} from "react";

interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout:FC<DefaultLayoutProps> = ({children}) => (
    <>
        <Header/>
        <main>
            {children}
        </main>
    </>
)