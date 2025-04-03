import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Inicio from "../pages/inicio/Inicio";
import NossoCafe from "../pages/nossoCafé/NossoCafe";
import NotFound from "../pages/notFound/NotFound";
import Noticias from "../pages/noticias/Noticias";
import Contato from "../pages/contato/Contato";
import Cardapio from "../pages/cardapio/Cardapio";

const Paths = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: "nosso-cafe",
                element: <NossoCafe />
            },
            {
                path: "noticias",
                element: <Noticias />   
            },
            {
                path: "contato",
                element: <Contato />   
            },
            {
                path: "cardapio",
                element: <Cardapio />   
            }
        ]        
    }
])

export default Paths