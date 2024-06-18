import { Link, NavLink } from "react-router-dom";
import Authentication from "./Authentication";
import image from "../assets/user.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const { loggedOutWithGoogle, getUserData } =
    Authentication();
  useEffect(() => {
    const data = handleGetUserData();
    setTimeout(() => {
      handleGetUserData(data);
    }, 1000);
  }, []);
  const handleLogout = async () => {
    await loggedOutWithGoogle();
    handleGetUserData();
  };
  const handleGetUserData = async () => {
    const data = await getUserData();
    console.log(data);
    setUserData(data);
    return data;
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/737/861/non_2x/restaurant-logo-on-letter-f-concept-with-chef-hat-spoon-and-fork-for-restaurant-logo-free-vector.jpg"
              className="h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Food-Food
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {/* <Authentication /> */}
            <Link
              to="/login"
              className="text-gray-900 dark:text-white hover:underline"
            >
              Login
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-900 dark:text-white hover:underline"
            >
              Log Out
            </button>
            <button
              onClick={handleGetUserData}
              to="/profile"
              className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80"
            >
              <img
                src={`${userData?.photoURL || image}`}
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-md"
              />
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  activeClassName="font-bold"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="text-gray-900 dark:text-white hover:underline"
                  activeClassName="font-bold"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="text-gray-900 dark:text-white hover:underline"
                  activeClassName="font-bold"
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-900 dark:text-white hover:underline"
                  activeClassName="font-bold"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
