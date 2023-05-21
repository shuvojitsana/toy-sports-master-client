

// import Sport from "../../SportsItems/Sport";
// import SportsItems from "../../SportsItems/SportsItems";
import SportsItems from "../../SportsItems/SportsItems";

import Carocale from "../Carocale/Carocale";
import Category from "../Category/Category";
import Gallery from "../Gallary/Gallery";


const Home = () => {
    return (
        <div>
            <Carocale></Carocale>
            
            <Gallery></Gallery>
            <Category></Category>
            
            <SportsItems></SportsItems>
           
            
            
            
        </div>
    );
};

export default Home;