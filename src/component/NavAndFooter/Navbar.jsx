import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons"; // Correct import

const navItems = [
  { name: "Home", icon: faHome },
  { name: "Html", icon: faHtml5 },
  { name: "Css", icon: faCss3Alt },
  { name: "Js", icon: faJs },
  { name: "Python", icon: faPython },
];

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white h-[100px]flex items-center px-6 shadow-lg py-5 sticky top-0 ">
      <div className="flex space-x-6">
        {navItems.map(({ name, icon }) => (
          <NavLink
            key={name}
            to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-blue-800 text-white scale-105 shadow-md"
                  : "text-blue-200 hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
              }`
            }
          >
            <FontAwesomeIcon icon={icon} className="mr-2 text-lg" />
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
