import { ComponentPropsWithoutRef } from "react";

interface HeaderProps extends ComponentPropsWithoutRef<'header'>{}

export function Header(props: HeaderProps){
    return(
        <header>
            <div className="header-content">
                <div className="header-logo">
                </div>
                <h2>Gerenciador de Fornecedores</h2>
                {props.children}
            </div>
        </header>
    )
}