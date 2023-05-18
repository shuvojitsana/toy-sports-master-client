import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const login = { email, password };
        console.log(login);
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
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                        <p className="text-center py-4">New toys creator please: <Link className="font-bold text-rose-600" to="/signup">Sign Up</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;