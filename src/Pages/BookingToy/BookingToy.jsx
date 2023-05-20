import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingNow from "./BookingNow";
import SingleBanner from "../Home/Banner/SingleBanner";


const BookingToy = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/booking?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(data)
            })
    }, [url])

    const handleDelete = id => {
        const proceed = confirm("Are you sure you went to delete")
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)

                    }
                })
        }
    }

    const handleBookingUpdate = id =>{
        fetch(`http://localhost:5000/booking/${id}`, {
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        
                        const remaining = bookings.filter(booking => booking._id !== id)
                        const update = bookings.find(booking => booking._id === id)
                        update.status = 'confirm'
                        const newBooking = [update, ...remaining]
                        setBookings(newBooking)

                    }
                })
    }

    return (
        <div>
            <SingleBanner></SingleBanner>

            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Toy Name</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Service</th>
                        </tr>
                    </thead>
                    <tbody>


                        {bookings.map(booking => <BookingNow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingUpdate={handleBookingUpdate}
                        ></BookingNow>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BookingToy;