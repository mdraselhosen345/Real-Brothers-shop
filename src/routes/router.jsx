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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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

    
{
  path: "/admin/Dashboard",
  element: (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  ),
},
{
  path: "/admin/AllProduct",
  element: (
    <PrivateRoute>
      <AllProduct />
    </PrivateRoute>
  ),
},
{
  path: "/admin/AddProduct",
  element: (
    <PrivateRoute>
      <AddProduct />
    </PrivateRoute>
  ),
},
{
  path: "/admin/Orders",
  element: (
    <PrivateRoute>
      <Orders />
    </PrivateRoute>
  ),
},
{
  path: "/admin/Services",
  element: (
    <PrivateRoute>
      <Services />
    </PrivateRoute>
  ),
},
{
  path: "/admin/Customers",
  element: (
    <PrivateRoute>
      <Customers />
    </PrivateRoute>
  ),
},
{
  path: "/admin/Payments",
  element: (
    <PrivateRoute>
      <Payments />
    </PrivateRoute>
  ),
},

])