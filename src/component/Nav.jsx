import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../features/authSlice";

const Nav = () => {
  const {favorites} = useSelector((state) => state.favorite)
  console.log("Nav : ",favorites);
  
  const { isAuth, currentUser } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  return (
    <Navbar className="shadow-lg shadow-black-500/25 p-4" fluid>
      <NavbarBrand>
        <img
          className="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Movieverse
        </span>
      </NavbarBrand>

      <NavbarToggle />
      <NavbarCollapse>
        <Link to="/" className="hover:text-red-400 font-medium">
          Home
        </Link>
        <Link to="/tv" className="hover:text-red-400 font-medium">
          TV Shows
        </Link>
        <Link to="/favorites" className="hover:text-red-400 font-medium">
          Favorites {isAuth ? `(${favorites.length})` : ""}
        </Link>
        <Link to="/search" className="hover:text-red-400 font-medium">
          Search
        </Link>

        {isAuth ? (
          <div className="flex items-center gap-4">
            <span className="font-semibold text-blue-600 mb-2">
              Hello, {currentUser?.name || "User"}
            </span>
            <button
              onClick={() => dispatch(logOutUser())}
              className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 mb rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="hover:text-red-400 font-medium">
            Login
          </Link>
        )}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
