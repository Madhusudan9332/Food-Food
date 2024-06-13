import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer className="bg-gradient-to-r from-red-500 to-indigo-800 text-white py-12 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/5">
          <Link to="/">
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/737/861/non_2x/restaurant-logo-on-letter-f-concept-with-chef-hat-spoon-and-fork-for-restaurant-logo-free-vector.jpg"
              alt="Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
          </Link>
          <p className="text-sm mt-4">© 2024 React Tailwind. All Rights Reserved.</p>
        </div>
        <div className="w-full md:w-1/5 mt-6 md:mt-0">
          <h6 className="font-semibold text-lg mb-4">Useful Links</h6>
          <ul className="text-sm">
            <li className="mb-2"><NavLink to="/about">About Us</NavLink></li>
            <li className="mb-2"><NavLink to="/services">Services</NavLink></li>
            <li className="mb-2"><NavLink to="/projects">Projects</NavLink></li>
            <li className="mb-2"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mt-6 md:mt-0">
          <h6 className="font-semibold text-lg mb-4">Follow Us</h6>
          <ul className="text-sm">
            <li className="mb-2"><a href="#">Facebook</a></li>
            <li className="mb-2"><a href="#">Twitter</a></li>
            <li className="mb-2"><a href="#">Instagram</a></li>
            <li className="mb-2"><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5 mt-6 md:mt-0">
          <h6 className="font-semibold text-lg mb-4">Subscribe</h6>
          <form>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full bg-gray-200 rounded py-2 px-4 mb-2"
            />
            <button
              type="submit"
              className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
