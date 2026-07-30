import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Shope from "../pages/HeroNavber/Shope/Shope";
import Dettels from "../pages/HeroNavber/Shope/Dettels";
import Servecing from "../pages/HeroNavber/Servecing/Servecing";




export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children : [
            {
                index: true,
                Component: Home
            },
            {
                path: "shope",
                Component: Shope
            },
            {
                path: "/shope/:id",
                Component: Dettels,
            },
            {
                path: "Servecing",
                Component: Servecing
                
            }
            
        ]
    }
])