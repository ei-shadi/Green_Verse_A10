import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png'
import { RiMenuFoldLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import Button from "../Utilities/Button";




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Optional: Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="bg-[#dad7cd]">
      <div className="navbar w-11/12 mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <Link
            to="/"
            className="flex italic items-center gap-2">
            <img className="h-15 w-15" src={logo} alt="Logo" />
            <h1 className="text-2xl md:text-3xl whitespace-nowrap bg-gradient-to-r from-amber-600 to-[#344e41] bg-clip-text text-transparent">Green Verse</h1>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex items-center gap-12 bg-white px-10 py-3 rounded-4xl">

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-2xl font-extrabold text-amber-600 border-b-4 rounded px-4 " : "italic font-semibold hover:text-[#588157] hover:scale-110 duration-100 ease-in-out hover:border-b-4 rounded text-lg hover:px-3")}
          >
            Home
          </NavLink>

          {/* Explore Gardeners */}
          <NavLink
            to="/explore-gardeners"
            className={({ isActive }) => (isActive ? "text-2xl font-extrabold text-amber-600 border-b-4 rounded px-4 " : "italic font-semibold hover:text-[#588157] hover:scale-110 duration-100 ease-in-out hover:border-b-4 rounded text-lg hover:px-3")}
          >
            Explore Gardeners
          </NavLink>

          {/*  Browse Tips */}
          <NavLink
            to="/browse-tips"
            className={({ isActive }) => (isActive ? "text-2xl font-extrabold text-amber-600 border-b-4 rounded px-4 " : "italic font-semibold hover:text-[#588157] hover:scale-110 duration-100 ease-in-out hover:border-b-4 rounded text-lg hover:px-3")}
          >
            Browse Tips
          </NavLink>

          {/*   Share Garden Tip */}
          <NavLink
            to="/share-garden-tips"
            className={({ isActive }) => (isActive ? "text-2xl font-extrabold text-amber-600 border-b-4 rounded px-4 " : "italic font-semibold hover:text-[#588157] hover:scale-110 duration-100 ease-in-out hover:border-b-4 rounded text-lg hover:px-3")}
          >
            Share Garden Tips
          </NavLink>

          {/*   My Tips */}
          <NavLink
            to="/my-tips"
            className={({ isActive }) => (isActive ? "text-2xl font-extrabold text-amber-600 border-b-4 rounded px-4 " : "italic font-semibold hover:text-[#588157] hover:scale-110 duration-100 ease-in-out hover:border-b-4 rounded text-lg hover:px-3")}
          >
            My Tips
          </NavLink>

        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="relative lg:hidden" ref={menuRef}>
            {/* Menu Button */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RiMenuFoldLine size={30} />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-5 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
                <div className="menu menu-compact text-center w-full flex flex-col gap-2">

                  {/* Home */}
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => (isActive ? "text-xl font-extrabold text-white  rounded-full py-1 bg-amber-600 "
                      :
                      "italic font-semibold bg-[#588157] rounded-xl text-lg py-1 text-white")}
                  >
                    Home
                  </NavLink>

                  {/* Explore Gardeners */}
                  <NavLink
                    to="/explore-gardeners"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => (isActive ? "text-xl font-extrabold text-white  rounded-full py-1 bg-amber-600 "
                      :
                      "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white")}
                  >
                    Explore Gardeners
                  </NavLink>

                  {/*  Browse Tips */}
                  <NavLink
                    to="/browse-tips"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => (isActive ? "text-xl font-extrabold text-white  rounded-full py-1 bg-amber-600 "
                      :
                      "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white")}
                  >
                    Browse Tips
                  </NavLink>

                  {/*   Share Garden Tips */}
                  <NavLink
                    to="/share-garden-tips"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => (isActive ? "text-xl font-extrabold text-white  rounded-full py-1 bg-amber-600 "
                      :
                      "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white")}
                  >
                    Share Garden Tips
                  </NavLink>

                  {/*   My Tips */}
                  <NavLink
                    to="/my-tips"
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) => (isActive ? "text-xl font-extrabold text-white  rounded-full py-1 bg-amber-600 "
                      :
                      "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white")}
                  >
                    My Tips
                  </NavLink>

                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="lg:flex gap-5 hidden items-center">
            <div className="avatar w-16 h-16 ">
                <img
                className="rounded-full"
                src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
            </div>
            <Button label="Login" />
            <Button label="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;