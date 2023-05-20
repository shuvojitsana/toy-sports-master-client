
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import bat from "../../../assets/bat1.png"



const Category = () => {

    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('Category.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])
    return (
        <div className="mt-7">
            
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Cricket Toys: </Tab>
                        <Tab>Football Toys: </Tab>
                        <Tab>Badminton Toys:</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={bat} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;