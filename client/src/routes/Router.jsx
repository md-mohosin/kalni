import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";
import ViewAllProducts from "../pages/Home/AllProducts/ViewAllProducts";
import ViewAllWeekProducts from "../pages/Home/WeekProducts/ViewAllWeekProducts";
import PrivetRoute from "./PrivetRoute";
import ProductDetails from "../pages/AddToCartPage/ProductDetails";

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
                path:"allProducts",
                element:<PrivetRoute><ViewAllProducts></ViewAllProducts></PrivetRoute>
            },
            {
                path:"allWeekProducts",
                element:<PrivetRoute><ViewAllWeekProducts></ViewAllWeekProducts></PrivetRoute>
            },
            {
                path:"detailsProduct/:id",
                element:<ProductDetails></ProductDetails>
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/signup",
        element:<Signup></Signup>
    }
]);