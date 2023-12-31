/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useHistory } from 'react-router-dom';

const Card = ({data,updateSumOfValues}) => {
    const{id,img,price,title,description,category,card_bg_color,text_button_bg_color,category_bg_text_color}=data;

      const handleFavaroite=()=>{
        console.log("clicked");
        const addecdFavArray=[];
        const favIteam=JSON.parse(localStorage.getItem('favorites'));

        if (!favIteam) {
          addecdFavArray.push(data);
          localStorage.setItem('favorites',JSON.stringify(addecdFavArray))
          toast.success("Added to favorites");
        } else {
          const isExist = favIteam.find(item => item.id === id);

          if (!isExist) {
            favIteam.push(data);
            localStorage.setItem('favorites', JSON.stringify(favIteam));
            toast.success("Added to Donation");
          } else {
            toast.error("Item already exists in Donation");
          }
         
        }
      }
      
    console.log(data);
    return (
        <div>
              <div className="h-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
 <div className='relative'>
 <div className="w-full rounded-xl text-white">
    <img className='h-3/6 w-full object-cover rounded-lg'
      src={img}
      layout="fill"
    />
  </div>
  <div className="absolute bottom-[0px] lg:bottom-[0px] left-0 w-full p-4 bg-black opacity-80 rounded-b-xl">
    <button
    onClick={handleFavaroite}
    style={{ backgroundColor: category_bg_text_color}}
      className="p-3 text-white font-bold rounded"
      type="button"
      data-ripple-light="true"
    >
      Donate ${price}
    </button>
  </div>
 </div>
  <div className="p-6 text-center lg:text-left">
    <h5 className="mb-2 block font-sans text-3xl lg:text-4xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold my-5">
     {category}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {description}
    </p>
  </div>
 
</div>
        </div>
    );
};

export default Card;


