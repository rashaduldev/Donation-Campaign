import { useEffect, useState } from "react";
import Catagory from "../../Home/Catagory/Catagory";
import DonateList from "./DonateIteam/DonateList";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noData, setNoData] = useState("");

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
           {donate.map(card => (
            <DonateList key={card.id} card={card}></DonateList>
            //  <Catagory key={card.id} card={card}></Catagory>
           ))}
         </div>
       )
     }
    </div>
  );
};

export default Donation;
