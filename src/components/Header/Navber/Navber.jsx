import { NavLink } from "react-router-dom";
import Logo from "../../ChildPage/Logo/Logo";

const Navber = () => {
    return (
     <div>
       <div className="flex flex-col lg:flex-row justify-between items-center mx-auto">
        <nav className="my-5"><Logo></Logo></nav>
       <ul className="flex gap-5 text-xl">
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                }
                >
                Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                }
                >
                Donation
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                }
                >
                Statistics
                </NavLink>
            </li>
        </ul>
       </div>
     </div>
    );
};

export default Navber;

