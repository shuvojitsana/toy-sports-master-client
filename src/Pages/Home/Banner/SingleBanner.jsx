

const SingleBanner = () => {
    return (
        <div className="hero min-h-[300px]" style={{ backgroundImage: `url("https://www.babiesrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwe98ff8a0/images/9E946E70_5.jpg?sw=767&sh=767&sm=fit")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-7 text-6xl font-bold text-[#ef7b84]">
                        <span className="text-3xl text-stone-200 font-extralight">THE ESSENTIALS</span>
                        <br />
                        <span className=" hover:animate-pulse hover:bg-opacity-80">Baby Sports Toys</span></h1>
                    <p className="mb-7 text-stone-200">Check out - and check off - our list of
                        must - haves for the new arrival</p>
                    <button className="btn text-white btn-outline hover:bg-[#e98e8e] hover:border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBanner;