import { Link, NavLink, useNavigate } from "react-router";
import logo from '../assets/logo.png';
import { RiMenuFoldLine } from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import Button from "../Utilities/Button";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuRef = useRef();
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        setIsOpen(false);
        Swal.fire({
          icon: 'success',
          title: 'Logout successfully!',
          showConfirmButton: true,
          confirmButtonText: 'Continue',
          timer: 2000,
          timerProgressBar: true,
        });
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Click outside to close menu
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
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/30 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className=" ">

      <div className="navbar w-11/12 mx-auto py-3">
        {/* Navbar Start */}
        <div className="navbar-start">
          <Link to="/" className="flex italic items-center gap-2">
            <img className="h-15 w-15" src={logo} alt="Logo" />
            <h1 className="text-2xl md:text-3xl whitespace-nowrap bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent">Green Verse</h1>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex items-center gap-12 bg-white/70 px-10 py-3 rounded-4xl my-2 backdrop-blur-md">
          {["/", "/explore-gardeners", "/browse-tips", "/share-garden-tips", "/my-tips"].map((path, index) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-2xl font-extrabold text-amber-600 border-b-4 rounded px-4"
                  : "italic font-semibold hover:text-[#588157] hover:scale-110 duration-100 ease-in-out hover:border-b-4 rounded text-lg hover:px-3"
              }
            >
              {["Home", "Explore Gardeners", "Browse Tips", "Share Garden Tips", "My Tips"][index]}
            </NavLink>
          ))}
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* Mobile Menu Button */}
          <div className="relative lg:hidden" ref={menuRef}>
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
                <div className="menu menu-compact text-center w-full flex flex-col gap-2 p-3">
                  {user && (
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={user?.photoURL || logo}
                        alt="User Avatar"
                        className="w-16 h-16 object-cover rounded-full border-2 border-green-500"
                      />
                      <p className="font-semibold">{user?.displayName || "User"}</p>
                    </div>
                  )}

                  {["/", "/explore-gardeners", "/browse-tips", "/share-garden-tips", "/my-tips"].map((path, index) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-xl font-extrabold text-white rounded-full py-1 bg-amber-600"
                          : "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white"
                      }
                    >
                      {["Home", "Explore Gardeners", "Browse Tips", "Share Garden Tips", "My Tips"][index]}
                    </NavLink>
                  ))}

                  <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="bg-gradient-to-r from-amber-500 to-green-600 text-white px-3 py-1 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out mt-2"
                  >
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                  </button>

                  {user ? (
                    <NavLink
                      onClick={handleLogout}
                      className="italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white"
                    >
                      Logout
                    </NavLink>
                  ) : (
                    <>
                      <NavLink
                        to="/auth/login"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "text-xl font-extrabold text-white rounded-full py-1 bg-amber-600"
                            : "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white"
                        }
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/auth/register"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "text-xl font-extrabold text-white rounded-full py-1 bg-amber-600"
                            : "italic font-semibold bg-[#588157] rounded-2xl text-lg py-1 text-white"
                        }
                      >
                        Register
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Controls */}
          <div className="lg:flex gap-5 hidden items-center">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bg-gradient-to-r from-amber-500 to-green-600 text-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:ring-4 hover:ring-green-500 transition duration-200 cursor-pointer hover:scale-110"
                >
                  <div className="w-full h-12 rounded-full overflow-hidden">
                    <img
                      data-tooltip-id="my-tooltip-inline"
                      data-tooltip-content={user?.displayName}
                      alt="User Avatar"
                      src={user?.photoURL || logo}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow"
                >
                  <Button label="Logout" onClick={handleLogout} />
                </ul>
              </div>
            ) : (
              <div className="flex gap-5">
                <Link to="/auth/login">
                  <Button label="Login" />
                </Link>
                <Link to="/auth/register">
                  <Button label="Register" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
