
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
// import Swal from 'sweetalert2'





const Register = () => {
    const {createUser, handleGoogleSignIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {

        event.preventDefault();
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const login = { email, password, name, photo };
        console.log(login);
    
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                event.target.reset();
                setSuccess('user successfully login')
            })
            .catch(error => {
                console.log(error);
                setError(error.massage);
                setSuccess('');
            })
                 
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-white-100 my-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="">
                        <img className="" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1684399282~exp=1684399882~hmac=6e6c5f6261e783b79e5d37ca47a885d9214f95d971a0bd586fbba5b73e50bba6" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}>
                            <div className="card-body">
                                <h2 className="text-3xl text-center font-mono"> Sign Up </h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="photo" name="photo" placeholder="photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                            
                        </form>
                        <p className="text-red-600">{error}</p>
                        <p className="text-center py-4">Already have an account? <Link className="font-bold text-rose-600" to="/login">Login</Link></p>
                        <br />
                        <button onClick={handleGoogleSignIn}>Google sign in</button>
                        <p className="text-green-400">{success}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;