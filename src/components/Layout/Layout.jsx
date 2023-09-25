import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Header/Navber/Navber";

const Layout = () => {
    return (
        <div>
            hello
            <Footer></Footer>
            <Outlet></Outlet>
            <Navber></Navber>
        </div>
    );
};

export default Layout;