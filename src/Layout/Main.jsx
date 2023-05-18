import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shards/Footer/Footer";
import Header from "../Pages/Shards/Header/Header";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;