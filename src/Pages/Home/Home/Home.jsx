

import Banner from "../Banner/Banner";
import Carocale from "../Carocale/Carocale";
import Category from "../Category/Category";
import Gallery from "../Gallary/Gallery";


const Home = () => {
    return (
        <div>
            <h2>This is home component</h2>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Carocale></Carocale>
            
            
        </div>
    );
};

export default Home;