import { Link } from "react-router-dom";



const Header = () => {

    const navItem = <>
        <li><Link className="hover:text-[#e98e8e]" to="/">Home</Link></li>
        <li><Link className="hover:text-[#e98e8e]" to="/login">Login</Link></li>
        <li><Link className="hover:text-[#e98e8e]" to="/blogs">Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to="/" className=" font-mono  normal-case text-xl">
                {/* <img className="h-[50px] w-[50px] rounded-full" src={logo} alt="" /> */}
                Sports Master
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            <Link to="/"><button className="btn btn-outline text-white   bg-[#e98e8e] hover:bg-[#e98e8e] hover:border-none">Gat Started</button></Link>
            </div>
        </div>
    );
};

export default Header;