import { useState } from "react";

import { mainLogo, menu, close } from "../assets";
import { navbarLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const body = document.querySelector("body");
  const toggleMenu = (e) => {
    e.target.innerText === "Home" && scrollUp();

    setIsMenuOpen(!isMenuOpen);
    body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };
  const scrollUp = () => {
    document.documentElement.scrollTop = 0;
    window.history.pushState("", "", "/");
  };
  return (
    <nav className="sticky inset-0 z-30 mb-6 flex h-20 w-full items-center justify-between rounded-lg bg-white ">
      <div
        onClick={scrollUp}
        className="z-10 flex w-[64px] cursor-pointer items-center md:w-[84px] lg:w-[124px]  "
      >
        <img src={mainLogo} alt="sub logo" className="h-auto w-full object-contain" />
      </div>

      <div className="hidden md:flex">
        <ul className="flex items-center justify-end space-x-8">
          {navbarLinks.map((link) => (
            <li className="cursor-pointer" key={link.id}>
              <a
                href={link.id !== "home" ? `#${link.id}` : null}
                onClick={link.id !== "home" ? null : scrollUp}
                className="text-[18px] text-lightGray hover:text-darkGray"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primaryDarker"
            >
              Help Center
            </a>
          </li>
        </ul>
      </div>

      <div className="z-40 flex justify-center md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={close} alt="close menu" className="h-6 w-6" />
          ) : (
            <img src={menu} alt="open menu" className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 h-screen bg-white md:hidden">
          <ul className="flex h-full flex-col items-center justify-center space-y-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id !== "home" ? `#${link.id}` : null}
                  className="block cursor-pointer px-4 py-2 text-xl text-lightGray hover:text-darkGray"
                  onClick={toggleMenu}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block rounded-md bg-primary px-4 py-2 text-xl text-white hover:bg-primaryDarker "
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
