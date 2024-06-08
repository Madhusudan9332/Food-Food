import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-indigo-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/5">
          <Link to="/">
            <img
              src="data:image/jpeg;base64,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"
              alt="Logo"
              className="h-10 w-10"
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
