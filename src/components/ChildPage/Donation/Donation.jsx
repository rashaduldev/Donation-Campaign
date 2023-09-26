import { useEffect, useState } from "react";
import Catagory from "../../Home/Catagory/Catagory";
import DonateList from "./DonateIteam/DonateList";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noData, setNoData] = useState("");
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);

  useEffect(() => {
    const favIteam = JSON.parse(localStorage.getItem('favorites'));
    if (favIteam) {
      setDonate(favIteam);
    } else {
      setNoData("No Data Found");
    }
    
    // Move the console.log here if you want to log favIteam
    console.log(favIteam);
  }, []);

  return (
    <div>
     {
       noData ? (
         <p className="text-3xl flex items-center justify-center text-center h-[60vh]">
           {noData}
         </p>
       ) : (
         <div className="grid grid-cols-1 mx-5 lg:grid-cols-2 gap-5">
           {
          isShow? donate.map(card => (
            <DonateList key={card.id} card={card}></DonateList>
           ))
           :
           donate.slice(0,4).map(card => (
            <DonateList key={card.id} card={card}></DonateList>
           ))
           }
         </div>
        
       )
     }
      {!isShow && (
       <div>
         <button
           onClick={() => setIsShow(true)}
           className="flex justify-center items-center text-center mx-auto mt-6 bg-[#009444] py-2 rounded text-white px-6"
         >
           See all
         </button>
       </div>
     )}
     {/* <div>
     <button onClick={()=>setIsShow(!isShow)} className="flex justify-center items-center text-center mx-auto mt-6 bg-[#009444] py-2 rounded text-white px-6">{!isShow?"See all": "hidde"}</button>
     </div> */}
    </div>
  );
};

export default Donation;
