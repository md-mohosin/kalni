import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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