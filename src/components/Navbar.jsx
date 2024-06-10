
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect , logout } = useAuth0();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://static.vecteezy.com/system/resources/previews/017/737/861/non_2x/restaurant-logo-on-letter-f-concept-with-chef-hat-spoon-and-fork-for-restaurant-logo-free-vector.jpg" className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Food-Food</span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <button onClick={loginWithRedirect} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</button>
            <button onClick={logout} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Log Out</button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink to="/" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-bold" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-bold">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-bold">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-900 dark:text-white hover:underline" activeClassName="font-bold">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
