import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber/Navber";
const Layout = () => {
    return (
      <div className="max-w-[1300px] mx-auto">
       <div>
       <Navber></Navber>
       </div>
        <div className="py-16">
         
        </div>
        <Outlet></Outlet>
      </div>
    );
  };
  
  export default Layout;
  