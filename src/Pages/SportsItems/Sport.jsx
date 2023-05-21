import { Link } from "react-router-dom";


const Sport = ({ sport }) => {
    const { title, picture, _id} = sport;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-6">
            <figure><img className="h-[230px] rounded" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e]  hover:border-none hover:animate-pulse">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sport;