import clsx from 'clsx'
import {FC, ReactNode} from "react";

interface ButtonProps {
    typeBtn?: 'link' | 'button',
    onClick?: any,
    link?: string,
    children: ReactNode,
    className?: string
}

export const Button:FC<ButtonProps> = ({
    typeBtn,
    onClick,
    link,
    children,
    className,
    ...props
}) => {
    const classNameBuilder = clsx('', className)

    const buttonBuilder = () => {
        switch (typeBtn) {
            case 'link':
                return (
                    <a href={link} className={classNameBuilder} {...props}>
                        {children}
                    </a>
                )
            case 'button':
                return (
                    <button className={classNameBuilder} onClick={onClick} {...props}>
                        {children}
                    </button>
                )
            default:
                return (
                    <button className={classNameBuilder} onClick={onClick} {...props}>
                        {children}
                    </button>
                )
        }
    }

    return buttonBuilder()
}