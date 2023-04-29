import { useState } from "react";
import { Link } from "react-router-dom";
import { mainLogo, menu, close } from "../assets";
import { navbarLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mb-6 flex h-20 items-center justify-between rounded-sm   ">
      <div className="flex items-center">
        <img src={mainLogo} alt="sub logo" className="h-auto w-24" />
      </div>

      <div className="hidden md:flex">
        <ul className="flex items-center justify-end space-x-8">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.id !== "" ? `#${link.id}` : "#home"} //FIXME
                className="text-gray-500 hover:text-gray-900"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="rounded-md bg-primary px-4 py-2 text-white">
              Help Center
            </a>
          </li>
        </ul>
      </div>

      <div className="z-50 flex justify-center md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={close} alt="close menu" className="h-6 w-6" />
          ) : (
            <img src={menu} alt="open menu" className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-0  bg-white md:hidden">
          <ul className="flex h-full flex-col items-center justify-center space-y-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`#${link.id}`}
                  className="block px-4 py-2 text-gray-500 hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block rounded-md bg-primary px-4 py-2 text-white "
                onClick={toggleMenu}
              >
                Help Center
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
