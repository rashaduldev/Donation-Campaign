/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Catagories from "./Catagories/Catagories";
import './Home.css'
// import backgroundImage from '../../../public/Resources/donation.png';


const Home = () => {
    // const divStyle = {
    //     backgroundImage: `url(${backgroundImage})`, // Set the background image
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     minHeight: '100vh', // Adjust as needed
    //   };

    const allCard=useLoaderData();
    console.log(allCard.items);

    if (!Array.isArray(allCard)) {
        return null; // Or display an appropriate error message
    }
    return (
        <div>
            <div className="layout-container">
            <div className="overlay"></div>
            <Banner></Banner>
           
            </div>
            
            <Catagories allCard={allCard}></Catagories>
            
        </div>
    );
};

export default Home;