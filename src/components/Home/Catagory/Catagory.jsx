import { useEffect, useState } from "react";


const Catagory = ({card}) => {
    const{id,img,title,category,card_bg_color}=card;
    return (
        <div>
                <div style={{ backgroundColor: card_bg_color || 'red' }} className="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 shadow-2xl cursor-pointer">
    <div className="relative overflow-hidden rounded-t-md bg-white bg-clip-border text-gray-700">
        <img
        src={img}
        className="h-3/6 w-full object-cover"
        />
    </div>
    <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {title}
        </p>
        
        {/* <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            $95.00
        </p> */}
        </div>
        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {category}
        </p>
        {/* <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
        With plenty of talk and listen time, voice-activated Siri access, and an
        available wireless charging case.
        </p> */}
    </div>
    <div className="p-6 pt-0">
    </div>
                </div>
        </div>
    );
};

export default Catagory;