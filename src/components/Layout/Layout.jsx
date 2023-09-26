import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber/Navber";
// import Footer from "../Footer/Footer";

// const Layout = () => {
//     return (
//         <div style={{backgroundImage:''}} className="max-w-[1300px] mx-auto">
//          <Navber></Navber>
//         <div className="py-16">
//         <Outlet></Outlet>
//         </div>
       
            
//         </div>
//     );
// };

// export default Layout;


// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navber from '../Header/Navber/Navber';
 // Import your background image
const Layout = () => {
 
  
    return (
      <div className="max-w-[1300px] mx-auto">
       <div>
       <Navber></Navber>
       </div>
        <div className="py-16">
          <Outlet></Outlet>
        </div>
      
      </div>
    );
  };
  
  export default Layout;
  