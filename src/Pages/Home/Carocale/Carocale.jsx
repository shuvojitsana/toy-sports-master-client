import img from "../../../assets/little-boy-with-soccer-ball-his-hands-white-background-child-is-novice-football-player-sport-children-little-athlete-yellow-blue-football-kit-kids_173815-27087.jpg"

const Carocale = () => {
    return (
        <div className="carousel w-full h-[450px] my-6">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute h-full  flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="pl-12 space-y-7">
                        <h2 className=" mb-5 text-6xl text-white font-bold">The quality toys of your <br />
                            child’s dreams</h2>
                        <p className="mb-5 text-white">If you’re looking for a toy shop then look no further. <br></br>
                            Go on, trat the kids with out huge selection of online toys shops.</p>
                        <button className="btn btn-outline  text-white hover:bg-[#e98e8e] hover:border-none">Show Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <a href="#slide4" className="btn btn-circle   bg-slate-300 hover:bg-slate-300 bg-opacity-10 border-none">❮</a>
                    <a href="#slide2" className="btn btn-circle   bg-slate-300 hover:bg-slate-300 bg-opacity-20 border-none">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/trucker-hat-with-basketball_23-2149410032.jpg?w=900&t=st=1684405285~exp=1684405885~hmac=163ba017fe703a983137fb438aef8422fb6edb571beb4403b6d9b316bc55a13b" className="w-full" />
                <div className="absolute h-full  flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="pl-12 space-y-7">
                        <h2 className=" mb-5 text-6xl text-white font-bold">The quality toys of your <br />
                            child’s dreams</h2>
                        <p className="mb-5 text-white">If you’re looking for a toy shop then look no further. <br></br>
                            Go on, trat the kids with out huge selection of online toys shops.</p>
                        <button className="btn btn-outline  text-white hover:bg-[#e98e8e] hover:border-none">Show Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-opacity-10">
                    <a href="#slide1" className="btn btn-circle  bg-slate-300 hover:bg-slate-300 bg-opacity-10 border-none">❮</a>
                    <a href="#slide3" className="btn btn-circle  bg-slate-300 hover:bg-slate-300 bg-opacity-20 border-none">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/active-leisure-hobby-tennis-sport-entertainment-girl-adorable-child-play-tennis-practicing-tennis-skills-having-fun-great-day-play-athlete-kid-tennis-racket-blue-background_474717-56347.jpg?w=1060" className="w-full" />
                <div className="absolute h-full  flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="pl-12 space-y-7">
                        <h2 className=" mb-5 text-6xl text-white font-bold">The quality toys of your <br />
                            child’s dreams</h2>
                        <p className="mb-5 text-white">If you’re looking for a toy shop then look no further. <br></br>
                            Go on, trat the kids with out huge selection of online toys shops.</p>
                        <button className="btn btn-outline  text-white hover:bg-[#e98e8e] hover:border-none">Show Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-opacity-10">

                    <a href="#slide2" className="btn btn-circle  bg-slate-300 hover:bg-slate-300 bg-opacity-10 border-none">❮</a>
                    <a href="#slide4" className="btn btn-circle  bg-slate-300 hover:bg-slate-300 bg-opacity-20 border-none">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/3d-rendering-sport-balls-wooden-backgorund_92790-807.jpg?w=900" className="w-full" />
                <div className="absolute h-full  flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="pl-12 space-y-7">
                        <h2 className=" mb-5 text-6xl text-white font-bold">The quality toys of your <br />
                            child’s dreams</h2>
                        <p className="mb-5 text-white">If you’re looking for a toy shop then look no further. <br></br>
                            Go on, trat the kids with out huge selection of online toys shops.</p>
                        <button className="btn btn-outline  text-white hover:bg-[#e98e8e] hover:border-none">Show Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 bg-opacity-10">
                    <a href="#slide3" className="btn btn-circle  bg-slate-300 hover:bg-slate-300 bg-opacity-10 border-none">❮</a>
                    <a href="#slide1" className="btn btn-circle  bg-slate-300 hover:bg-slate-300 bg-opacity-20 border-none">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carocale;