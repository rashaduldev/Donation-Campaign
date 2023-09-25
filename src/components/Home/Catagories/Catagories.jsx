/* eslint-disable react/prop-types */

import Catagory from "../Catagory/Catagory";


const Catagories = ({allCard}) => {
    console.log(allCard);
    return (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 my-6">
          {
                allCard?.map(card=> <Catagory key={card.id} card={card}></Catagory>)
          }
          </div>
        </div>
    );
};

export default Catagories;