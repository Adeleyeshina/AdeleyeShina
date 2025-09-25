import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin,  FaWhatsapp, } from "react-icons/fa";

const Footer = () => {
   const phoneNumber = "+2349056159803"; 
  const message = encodeURIComponent("Hello, I’d like to get in touch with you!");
  return (
    <footer className="w-full bg-surface py-7 px-7 md:px-30 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Name */}
        <Link to="/" className="text-brand text-2xl font-bold">
          SA.
        </Link>

        {/* Navigation Links */}
        <nav className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-sm text-secondarytext">
          <Link to="/about" className="hover:text-brand transition-colors">
            About
          </Link>
          <Link to="/projects" className="hover:text-brand transition-colors">
            Projects
          </Link>
          <Link to="/services" className="hover:text-brand transition-colors">
            Services
          </Link>
          <Link to="/contact" className="hover:text-brand transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <Link
            to="https://github.com/Adeleyeshina/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarytext hover:text-brand transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarytext hover:text-brand transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
            to={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primarytext hover:text-brand transition-colors"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center text-xs text-secondarytext">
        © {new Date().getFullYear()} Adeleye Shina. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
