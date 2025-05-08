import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";
import ViewAllProducts from "../pages/Home/AllProducts/ViewAllProducts";
import ViewAllWeekProducts from "../pages/Home/WeekProducts/ViewAllWeekProducts";
import PrivetRoute from "./PrivetRoute";
import ProductDetails from "../pages/AddToCartPage/ProductDetails";
import AllShopingCart from "../pages/AllShopingCart/AllShopingCart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allProducts",
                element: <ViewAllProducts></ViewAllProducts>
            },
            {
                path: "allWeekProducts",
                element: <ViewAllWeekProducts></ViewAllWeekProducts>
            },
            {
                path: "detailsProduct/:id",
                element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>
            },
            {
                path:"allShopingCart",
                element:<AllShopingCart></AllShopingCart>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    }
]);