// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";


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
           
            <h2>Book service: {toys.title}</h2>
        </div>
    );
};

export default Checkout;