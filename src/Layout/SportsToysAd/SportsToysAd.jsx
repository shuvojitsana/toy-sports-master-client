import { useLoaderData } from "react-router-dom";
import SingleBanner from "../../Pages/Home/Banner/SingleBanner";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const SportsToysAd = () => {
    const sports = useLoaderData();
    console.log(sports)
    const { price,  title} = sports;
    const {user} = useContext(AuthContext)

    const handleBookToys = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const picture = form.picture.value;
        const email = form.email.value;
        const balance = form.balance.value;
        const rating = form.rating.value;
        const about = form.about.value;
        const order = {
            customerName:  name,
            email:email,
            balance: balance,
            title: title,
            picture:picture,
            rating: rating,
            about: about,

        }
        console.log(order)

        fetch('http://localhost:5000/booking', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.insertedId) {
                alert('Service Send Successfully!');
            }
        })


    }


    return (


        <div>
            <SingleBanner></SingleBanner>
            <h2 className="text-6xl text-center">{title}</h2>
            <form onSubmit={handleBookToys} className="my-6 ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="url" name="picture" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName}  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Balance</span>
                        </label>
                        <input type="text" name="balance" defaultValue={'$ '+ price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">About</span>
                        </label>
                        <input type="text" name="about" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-block">Add Toys</button>
                </div>
            </form>
        </div>


    )
};

export default SportsToysAd;