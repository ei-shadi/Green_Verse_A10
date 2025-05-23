import { Link, NavLink, useNavigate } from "react-router";
import logo from '../assets/logo.png'
import { RiMenuFoldLine } from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import Button from "../Utilities/Button";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet-async";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const { user, logOutUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        setIsOpen(!isOpen)
        Swal.fire({
          icon: 'success',
          title: 'Logout successfully! ',
          showConfirmButton: true,
          confirmButtonText: 'Continue',
          timer: 2000,
          timerProgressBar: true,
        });
        navigate('/')

      })
      .catch((error) => {
        toast.error(error.message)
      });
  }

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
            <h1 className="text-2xl md:text-3xl whitespace-nowrap bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent">Green Verse</h1>
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


                  {
                    user ? <div className="flex flex-col gap-2">
                      {/*  Logout */}
                      <NavLink
                        onClick={handleLogout}
                        className={({ isActive }) => (isActive ? "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white"
                          :
                          "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white")}
                      >
                        Logout
                      </NavLink>
                    </div>
                      : <div className="flex flex-col gap-2">
                        {/*  Login */}
                        <NavLink
                          to="/auth/login"
                          onClick={() => setIsOpen(!isOpen)}
                          className={({ isActive }) => (isActive ? "text-xl font-extrabold text-white  rounded-full py-1 bg-amber-600 "
                            :
                            "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white")}
                        >
                          Login
                        </NavLink>

                        {/*  Register */}
                        <NavLink
                          to="/auth/register"
                          onClick={() => setIsOpen(!isOpen)}
                          className={({ isActive }) => (isActive ? "text-xl font-extrabold text-white  rounded-full py-1 bg-amber-600 "
                            :
                            "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white")}
                        >
                          Register
                        </NavLink>
                      </div>
                  }
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="lg:flex gap-5 hidden items-center">

            {
              user ? <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="h-12 rounded-full">
                    <img
                      data-tooltip-id="my-tooltip-inline"
                      data-tooltip-content={user?.displayName}
                      alt="Tailwind CSS Navbar component"
                      src={user ? user?.photoURL : logo}
                      className="object-cover "
                      />

                    <Tooltip
                      id="my-tooltip-inline"
                      style={{ backgroundColor: "#588157", color: "#ffffff", fontSize: "20px", fontWeight: "bold", padding: "10px", zIndex: "9999" }} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow ">
                  <Button label="Logout" onClick={handleLogout} />
                </ul>
              </div>
                :
                <div className="flex gap-5">
                  <Link
                    to="/auth/login">
                    <Button label="Login" />
                  </Link>

                  <Link
                    to="/auth/register">
                    <Button label="Register" />
                  </Link>
                </div>
            }



          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;