import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber/Navber";
// import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
         <Navber></Navber>
        <div className="py-16">
        <Outlet></Outlet>
        </div>
       
            
        </div>
    );
};

export default Layout;