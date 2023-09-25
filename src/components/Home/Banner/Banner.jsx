

const Banner = () => {
    return (
        <div className="text-center p-0 lg:py-28">
            <div className=" relative mx-10">
            <h1 className="text-3xl font-bold my-8 lg:text-5xl">  I Grow By Helping People In Need</h1>
           
           <input className="p-2 mt-8 w-full lg:w-2/5 rounded" style={{border:'1px solid black'}} type="text"  placeholder="Search here...."/>
           <div className="absolute top-[137px] right-[1px] md:top-[101px] lg:top-[113px] lg:right-[367px]">
           <button className=" text-white bg-red-500 p-2 rounded-r-sm ">Search</button>
           </div>
            </div>
           
        </div>
    );
};

export default Banner;