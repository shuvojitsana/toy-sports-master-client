import { useEffect, useState } from "react";
import Sport from "./Sport";


const SportsItems = () => {
    const [sports, setSports] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])
    return (
        <div className="mt-6 text-center">
            <h2 className="text-4xl  underline font-bold">Sports Master</h2>
            <p className="mt-5">If you’re looking for a toy shop then look no further. <br />
                Go on, trat the kids with out huge selection of online toys shops.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    sports.map(sport => <Sport
                        key={sport._id}
                        sport={sport}
                    ></Sport>)
                }
            </div>


        </div>
    );
};

export default SportsItems;
