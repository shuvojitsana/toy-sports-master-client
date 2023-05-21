
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';




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
                <h2 className="text-center font-bold text-3xl my-9 underline">React Tabs</h2>
                <Tabs>
                    <TabList>
                        <Tab>Cricket Toys: </Tab>
                        <Tab>Football Toys: </Tab>
                        <Tab>Badminton Toys:</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/free-vector/male-cricket-player_1308-83784.jpg?w=740&t=st=1684388351~exp=1684388951~hmac=e3019da5771dc8f551c5b9477ac07a8669ae88018b9d63c85728ab70471b7d81" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Mona Richard</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.6</p>
                                        <p>Price: $750.87</p>
                                    </div>
                                    <p>total_view: 450</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc5674b'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/free-vector/cricket-professional-sportsman-uniform-batsman-sport-equipment-illustration_575670-436.jpg?w=740&t=st=1684388437~exp=1684389037~hmac=842706968e1d71fe017b1a3831b09a76ea3ca8267eb1ff71f1c591d50846b709" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Cricket Items</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 5.9</p>
                                        <p>Price: $941.87</p>
                                    </div>
                                    <p>total_view: 560</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc5674c'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/premium-vector/bat-playing-cricket-sport-vector-illustration-isolated-white-background_110233-2853.jpg?w=740" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Bats Ball</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.5</p>
                                        <p>Price: $398.87</p>
                                    </div>
                                    <p>total_view: 450</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc5674d'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/premium-photo/little-boy-with-soccer-ball-his-hands-white-background-child-is-novice-football-player-sport-children-little-athlete-yellow-blue-football-kit-kids_173815-27087.jpg?w=900" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Baby Catch Ball</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.9</p>
                                        <p>Price: $141.87</p>
                                    </div>
                                    <p>total_view: 470</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc5674e'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/free-photo/real-leather-colorful-multi-colour-soccer-ball-green-grass_1232-3057.jpg?w=900&t=st=1684388667~exp=1684389267~hmac=411921f5354c1dccc7a8872f90a1c5db737dad168c5fe7b598b74d297b92496d" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Color ful Football</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.0</p>
                                        <p>Price: $697.87</p>
                                    </div>
                                    <p>total_view: 405</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc5674f'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://i.ebayimg.com/images/g/zk0AAOSw0t5e2nLP/s-l500.png" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Football or barpost</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.6</p>
                                        <p>Price: $225.16</p>
                                    </div>
                                    <p>total_view: 400</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc56750'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/premium-psd/clipboard-mockup-with-fitness-concept_23-2148069631.jpg?w=360" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Batminton Sets</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.7</p>
                                        <p>Price: $495.87</p>
                                    </div>
                                    <p>total_view: 420</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc56751'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/free-vector/girl-playing-tennis-cartoon-sticker_1308-87255.jpg?w=740&t=st=1684389070~exp=1684389670~hmac=8135cf242d3cd9a4aeb98a8e03f2f01181dcdff07fcafefed4cd5a0273a1c935" alt="Movie" /></figure>
                                <div className="card-body">
                                <h2 className="card-title">Minu Palying Tannis</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.7</p>
                                        <p>Price: $473.62</p>
                                    </div>
                                    <p>total_view: 530</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc56752'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.freepik.com/premium-vector/boy-holds-soccer-ball_160901-1505.jpg?w=740" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Handball !</h2>
                                    <div className="flex justify-between">
                                        <p>Rating: 4.8</p>
                                        <p>Price: $602.85</p>
                                    </div>
                                    <p>total_view: 480</p>
                                    <div className="card-actions justify-end">
                                        <Link to={'/checkout/64673f93ea83df021dc56753'}>
                                            <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                                        </Link>
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