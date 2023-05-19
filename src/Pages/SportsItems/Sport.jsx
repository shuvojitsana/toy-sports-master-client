

const Sport = ({ sport }) => {
    const { title, picture, balance, about, rating } = sport;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-[400px] rounded" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Views more</button>
                </div>
            </div>
        </div>
    );
};

export default Sport;