/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Catagories from "./Catagories/Catagories";


const Home = () => {
    const allCard=useLoaderData();
    console.log(allCard.items);

    if (!Array.isArray(allCard)) {
        return null; // Or display an appropriate error message
    }
    return (
        <div>
        
            <Banner></Banner>
            <Catagories allCard={allCard}></Catagories>
            
        </div>
    );
};

export default Home;