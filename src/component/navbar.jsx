import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./search";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 sm:px-12 flex flex-col sm:flex-row bg-gray-800 text-white">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <h3 className="text-2xl sm:text-3xl capitalize text-pretty ">
          movie hub
        </h3>
        <div className="sm:hidden ml-auto">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`w-full my-auto  ml-auto sm:w-auto ${
          isOpen ? "block" : "hidden"
        } sm:flex flex-col sm:flex-row sm:items-center`}
      >
        <ul className="flex my-auto justify-around  items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-10 mt-4 sm:mt-0">
          <li className="my-auto">
            <Search />
          </li>
          <li className="my-auto text-xl">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Movie List
            </Link>
          </li>
          <li className="my-auto text-xl">
            <Link to="/favorites" onClick={() => setIsOpen(false)}>
              Favorite Movies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
