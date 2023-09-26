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
            // If it doesn't exist, add the new item to favorites
            favIteam.push(data);
            localStorage.setItem('favorites', JSON.stringify(favIteam));
            toast.success("Added to Donation");
          } else {
            // If it exists, show an error toast message
            toast.error("Item already exists in Donation");
          }
         
        }
      }


    console.log(data);
    return (
        <div>
              <div className="relative flex h-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="w-full  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img className='mx-auto w-full '
      src={img}
      layout="fill"
    />
  </div>
  <div className="absolute bottom-[178px] left-0 w-full p-4 bg-black opacity-50 rounded-b-xl">
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
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-4xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold my-5">
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


