import { Link, NavLink } from "react-router";

const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex gap-16">
                    <h1>LOGO</h1>          
                
                    <nav>                    
                        <NavLink to={"/"}>Inicio</NavLink>
                        <NavLink to={"/nosso-cafe"}>Nosso Café</NavLink>
                        <NavLink to={"/noticias"}>Notícias</NavLink>
                        <NavLink to={"/contato"}>Contato</NavLink>
                        <NavLink to={"/cardapio"}>Cardápio</NavLink>
                    </nav>
                </div>

                <Link to={"/franquia"}>Seja um franqueado</Link>
            </div>
        </>
    );
}

export default Header; 