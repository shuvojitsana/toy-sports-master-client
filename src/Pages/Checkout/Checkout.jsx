// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import SingleBanner from "../Home/Banner/SingleBanner";


// import { useEffect } from "react";
// import { useParams } from "react-router-dom";


const Checkout = () => {
    const toys = useLoaderData();
    // const {id} = useParams();
    // useEffect(() =>{
    //     fetch(`http://localhost:5000/toys/${id}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[id])

    return (
        <div>

                <SingleBanner></SingleBanner>
            <div className="text-center">
                <h2 className="text-4xl underline font-bold">Book service</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Officiis sed quod officia suscipit debitis fugiat sapiente, facere dolore praesentium assumenda!</p>
            </div>

            <div className="hero min-h-screen bg-base-200 my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">{toys.title}</h1>
                        <p className="py-6">Rating: <span className="font-bold">{toys.rating.number}</span></p>
                        <div className="flex justify-between pb-4">
                            <p className="">Total views: <span className="font-bold">{toys.total_view}</span> views</p>
                            <p className="">Price: <span  className="font-bold">{toys.balance}</span> </p>
                        </div>
                        <p>{toys.about}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <img src={toys.picture} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;