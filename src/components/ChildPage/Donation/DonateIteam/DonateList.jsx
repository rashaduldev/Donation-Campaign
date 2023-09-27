/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const DonateList = ({card}) => {
    // eslint-disable-next-line no-unused-vars
    const{id,img,price,title,description,category,card_bg_color,text_button_bg_color,category_bg_text_color}=card;
    return (
        <div>
          <div  style={{ backgroundColor: text_button_bg_color || 'red'}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
  <div className="mb-2 flex items-center justify-between">
        <p style={{ backgroundColor: text_button_bg_color || 'red' ,color:category_bg_text_color || 'red'}}  className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased shadow-2xl px-1 rounded-md">
            {title}
        </p>
        </div>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {category}
    </h4>
    <p  style={{color:category_bg_text_color || 'red'}}  className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
   ${price}.00
    </p>
    <a className="inline-block" href="#">
      <Link to={`/catagory/${id}`}>
      <button  style={{ backgroundColor: category_bg_text_color || 'red'}} 
        className="text-white p-2 rounded-md font-bold text-[16px]"
        type="button"
      >
    View Details
      </button>
      </Link>
    </a>
  </div>
</div>        
</div>
    );
};

export default DonateList;