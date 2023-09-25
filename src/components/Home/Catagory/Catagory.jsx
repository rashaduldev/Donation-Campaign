/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Catagory = ({card}) => {
    // eslint-disable-next-line no-unused-vars
    const{id,img,title,category,card_bg_color,text_button_bg_color,category_bg_text_color}=card;
    return (
        <div>
                <Link to={`/catagories/${id}`}>
                <div style={{ backgroundColor: card_bg_color || 'red' }} className="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 shadow-2xl cursor-pointer">
    <div className="relative overflow-hidden rounded-t-md bg-white bg-clip-border text-gray-700">
        <img
        src={img}
        className="h-3/6 w-full object-cover"
        />
    </div>
    <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
        <p style={{ backgroundColor: text_button_bg_color || 'red' ,color:category_bg_text_color || 'red'}}  className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased shadow-2xl px-4 py-1 rounded-md">
            {title}
        </p>
        </div>
        <p style={{color:category_bg_text_color || 'red'}}  className="block font-sans text-base  leading-relaxed text-blue-gray-900 antialiased font-bold">
            {category}
        </p>
    </div>
    <div className="p-6 pt-0">
    </div>
                </div>
                </Link>
        </div>
    );
};

export default Catagory;