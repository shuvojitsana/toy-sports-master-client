import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import SportsItems from "../Pages/SportsItems/SportsItems";
import Checkout from "../Pages/Checkout/Checkout";

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
                path:"/checkout",
                element:<SportsItems></SportsItems>,
             
                
            },
            {
                path:"/checkout/:id",
                element:<Checkout></Checkout>,
                loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    },
]);

export default router;