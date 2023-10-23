import cn from 'clsx'
import {FC, ReactNode} from "react";

interface TitleProps {
    children: ReactNode,
    typeTitle: string,
    className?: string
    center?: boolean
}

export const Title: FC<TitleProps> = ({
    children,
    typeTitle,
    className,
    center = true,
    ...props
}) => {
    const classNameBuilder = cn( center ? 'text-center' : 'text-left', 'font-bold text-3xl', className)

    const titleBuilder = () => {
        switch (typeTitle) {
            case 'h1':
                return (
                    <h1 className={cn('text-3xl', classNameBuilder)} {...props}>
                        {children}
                    </h1>
                )
            case 'h2':
                return (
                    <h2 className={cn('text-2xl', classNameBuilder)} {...props}>
                        {children}
                    </h2>
                )
            case 'h3':
                return (
                    <h3 className={cn('text-xl', classNameBuilder)} {...props}>
                        {children}
                    </h3>
                )
            default:
                return (
                    <h1 className={cn('text-3xl', classNameBuilder)} {...props}>
                        {children}
                    </h1>
                )
        }
    }

    return titleBuilder()
}