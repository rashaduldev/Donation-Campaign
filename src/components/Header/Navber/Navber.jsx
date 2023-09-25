import { NavLink } from "react-router-dom";
import Logo from "../../ChildPage/Logo/Logo";

const Navber = () => {
    return (
     <div>
       <div className="flex justify-between items-center">
        <nav><Logo></Logo></nav>
       <ul className="flex gap-5">
            <li>
                <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                }
                >
                Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                }
                >
                Donation
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
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

