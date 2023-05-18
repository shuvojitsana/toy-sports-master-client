

const Banner = () => {
    return (
        <div className="hero  min-h-screen" style={{ backgroundImage: `url('https://businesslug.com/wp-content/uploads/2022/05/different_sports-780x438.jpeg')` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className=" text-neutral-content">
                <div className="">
                    <h1 className="mb-7 text-6xl font-bold text-[#ef7b84]">
                        <span className="text-3xl text-stone-200 font-extralight">THE ESSENTIALS</span>
                        <br />
                        <span className=" hover:animate-pulse">Baby Sports Toys</span></h1>
                    <p className="mb-7 text-stone-200">Check out - and check off - our list of
                        must - haves for the new arrival</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

// https://businesslug.com/wp-content/uploads/2022/05/different_sports-780x438.jpeg
// https://img.freepik.com/premium-photo/little-boy-with-soccer-ball-his-hands-white-background-child-is-novice-football-player-sport-children-little-athlete-yellow-blue-football-kit-kids_173815-26610.jpg?w=900

export default Banner;