import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const { signIn, handleGoogleSignIn, user } = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const login = { email, password };
        console.log(login);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                event.target.reset();

            })
            .catch(error => {
                console.log(error)
                setError(error.massage)

            })
    }
    return (
        <div className="hero min-h-screen bg-white-100 my-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="">
                    <img className="" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1684399282~exp=1684399882~hmac=6e6c5f6261e783b79e5d37ca47a885d9214f95d971a0bd586fbba5b73e50bba6" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h2 className="text-3xl text-center font-mono">Login </h2>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>

                    </form>
                    <p className="text-red-600">{error}</p>
                    <p className="text-center py-4">New toys creator please: <Link className="font-bold text-rose-600" to="/signup">Sign Up</Link></p>
                    <br />
                    <button onClick={handleGoogleSignIn}>Google sign in</button>
                    {user && <div>
                        <h4>user: {user.displayName}</h4>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Login;