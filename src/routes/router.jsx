import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Shope from "../pages/HeroNavber/Shope/Shope";
import Dettels from "../pages/HeroNavber/Shope/Dettels";
import Servecing from "../pages/HeroNavber/Servecing/Servecing";
import Homeservice from "../pages/HeroNavber/Homeservice/Homeservice";
import LaptopPc from "../pages/HeroNavber/Homeservice/Homecard/LaptopPc";
import Cctv from "../pages/HeroNavber/Homeservice/Homecard/Cctv";
import Electronic from "../pages/HeroNavber/Homeservice/Homecard/Cctv";
import AboutUs from "../pages/HeroNavber/About Us/AboutUs";
import Contact from "../pages/HeroNavber/Contact/Contact";
import Complne from "../pages/HeroNavber/Complne/Complne";




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
                
            },
            {
                path: "Homeservice",
                Component: Homeservice
            },
            {
                 path: "AboutUs",
                 Component: AboutUs
            },
            {
                 path: "Contact",
                 Component: Contact
            },
        
            
        ]
    },

         {
                path: "Complne",
                Component: Complne
            },
    {
        path: '/',
        children: [
            {
                path: "LaptopPc",
                Component: LaptopPc
            },
            {
                path: "Cctv",
                Component: Cctv
            },
            {
                path: "Electronic",
                Component: Electronic
            }
        ]
    }
])