import { House } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <h1 className="text-red-500">LOGO</h1>
                    <NavLink to={"/"}>Inicio</NavLink>
                    <NavLink to={"/nosso-cafe"}>Nosso Café</NavLink>
                    <NavLink to={"/noticias"}>Notícias</NavLink>
                    <NavLink to={"/contato"}>Contato</NavLink>
                    <NavLink to={"/cardapio"}>Cardápio</NavLink>
                </nav>
                <Link to={"/franquia"}>Seja um franqueado</Link>
                <House />
            </header>
        </>
    );
}

export default Header;