import { useEffect, useState } from "react";

import DonateList from "./DonateIteam/DonateList";
import Statistics from "../Statistics/Statistics";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [noData, setNoData] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const favIteam = JSON.parse(localStorage.getItem('favorites'));
    console.log(favIteam);
    if (favIteam) {
      setDonate(favIteam);
      donate.map(item=><Statistics key={item.id} item={item}></Statistics>)
    } else {
      setNoData("No Data Found");
    }
  }, []);

  return (
    <div>
      {noData ? (
        <p className="text-3xl flex items-center justify-center text-center h-[60vh]">
          {noData}
        </p>
      ) : (
        <div className="grid grid-cols-1 mx-5 lg:grid-cols-2 gap-5">
          {isShow ? (
            donate.map(card => (
              <div key={card.id}>
              <DonateList card={card} />
            </div>
            ))
          ) : (
            donate.slice(0, 4).map(card => (
              <DonateList key={card.id} card={card}></DonateList>
            ))
          )}
        </div>
      )}

      {donate.length > 4 && !isShow && (
        <div>
          <button
            onClick={() => setIsShow(true)}
            className="flex justify-center items-center text-center mx-auto mt-6 bg-[#009444] py-2 rounded text-white px-6"
          >
            See all
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
