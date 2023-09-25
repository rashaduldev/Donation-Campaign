import React from 'react';

const Card = ({data}) => {
    const{id,img,price,title,description,category,card_bg_color,text_button_bg_color,category_bg_text_color}=data;
    console.log(data);
    return (
        <div>
              <div className="relative flex h-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="w-full mx-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img className='mx-auto w-full '
      src={img}
      layout="fill"
    />
  </div>
  <div className="p-6 pt-0">
    <button
    style={{ backgroundColor: text_button_bg_color}}
      className="p-3"
      type="button"
      data-ripple-light="true"
    >
      Donate ${price}
    </button>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
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