import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { Component } from "react";
import Home from "../pages/Home/Home/Home";
import Banner from "../pages/Home/Banner/Banner";
import Shope from "../pages/HeroNavber/Shope/Shope";





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
            }
            
        ]
    }
])