import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallary/Gallery";


const Home = () => {
    return (
        <div>
            <h2>This is home component</h2>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;