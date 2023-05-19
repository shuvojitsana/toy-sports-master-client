import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import SportsItems from "../Pages/SportsItems/SportsItems";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPages></ErrorPages>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/blogs",
                
            },
            
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<Register></Register>
            },
            {
                path:"/sportsItems",
                element:<SportsItems></SportsItems>
            },
        ]
    },
]);

export default router;