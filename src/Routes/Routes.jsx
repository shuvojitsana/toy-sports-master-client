import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import SportsItems from "../Pages/SportsItems/SportsItems";
import Checkout from "../Pages/Checkout/Checkout";
import SportsToysAd from "../Layout/SportsToysAd/SportsToysAd";
import BookingToy from "../Pages/BookingToy/BookingToy";
import PrivetRoutes from "./PrivetRoutes";
import Blogs from "../Pages/Blogs/Blogs";

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
                element:<Blogs></Blogs>
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
                path:"/addToys",
                element:<SportsToysAd></SportsToysAd>,
                loader:() => fetch("http://localhost:5000/toys")
            },
            {
                path:"/bookingToy",
                element:<PrivetRoutes><BookingToy></BookingToy></PrivetRoutes>
            },
            {
                path:"/checkout/:id",
                element:<PrivetRoutes><Checkout></Checkout></PrivetRoutes>,
                loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    },
]);

export default router;