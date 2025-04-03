import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Inicio from "../pages/Inicio";
import NossoCafe from "../pages/NossoCafe";
import NotFound from "../pages/NotFound";
import Noticias from "../pages/Noticias";
import Contato from "../pages/Contato";
import Cardapio from "../pages/Cardapio";

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