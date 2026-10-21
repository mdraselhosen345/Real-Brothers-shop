import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Shope from "../pages/HeroNavber/Shope/Shope";
import Dettels from "../pages/HeroNavber/Shope/Dettels";
import Servecing from "../pages/HeroNavber/Servecing/Servecing";
import Homeservice from "../pages/HeroNavber/Homeservice/Homeservice";
import LaptopPc from "../pages/HeroNavber/Homeservice/Homecard/LaptopPc";
import Glass from "../pages/HeroNavber/HomeService/Homecard/Glass";
import Cctv from "../pages/HeroNavber/Homeservice/Homecard/Cctv";
import Electronic from "../pages/HeroNavber/Homeservice/Homecard/Electronic";
import AboutUs from "../pages/HeroNavber/About Us/AboutUs";
import Contact from "../pages/HeroNavber/Contact/Contact";
import Complne from "../pages/HeroNavber/Complne/Complne";
import Account from "../pages/Acount/Account";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AllProduct from "../pages/Admin/AllProduct/AllProduct";
import Orders from "../pages/Admin/Orders/Orders";
import Services from "../pages/Admin/Services/Services";
import Customers from "../pages/Admin/Customers/Customers";
import Payments from "../pages/Admin/Payments/Payments";
// import Homeservice from "../pages/HeroNavber/Homeservice/Homeservice";





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
            {
                path: "Account",
                Component: Account
            },

 




            {
                path: "Dashboard",
                Component: Dashboard,
            },
            {
                path: "AddProduct",
                Component: AddProduct,
            },
            {
                path: "AllProduct",
                Component: AllProduct,
            },
            {
                Path: "Orders",
                Component: Orders
            },
            {
                path: "Services",
                Component: Services
            },
            {
                path: "Customers",
                Component: Customers
            },
            {
                path: "Payments",
                Component: Payments
            }
        
            
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
            },
            {
                path: "Glass",
                Component: Glass
            }
        ]
    },
])