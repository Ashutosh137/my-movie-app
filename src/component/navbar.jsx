import { Link } from "react-router-dom";
import Search from "./search";
const NavBar = () => {
  return (
    <nav className="p-4 sm:px-12  flex  bg-gray-800 align-middle text-white">
      <h3 className=" text-2xl my-auto sm:text-3xl capitalize text-pretty">
        movie hub
      </h3>
      <ul className="flex my-auto space-x-4 sm:space-x-10 ml-auto">
        <li className="my-auto">
          <Search />
        </li>
        <li className="my-auto text-lg">
          <Link to="/">Movie List</Link>
        </li>
        <li className="my-auto text-lg">
          <Link to="/favorites">Favorite Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
