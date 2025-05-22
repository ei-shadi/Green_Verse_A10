import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logInUser, setUser } = useContext(AuthContext)
  const providerGoogle = new GoogleAuthProvider()
  const providerGithub = new GithubAuthProvider()
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData);
    const { email, password } = userData;

     // Set In LocalStorage
    localStorage.setItem('email', email);

    // Login User
    logInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully!',
          html: `<span class="font-bold text-green-500 text-2xl">Welcome <span class="text-amber-600 font-bold text-2xl">${user.displayName}</span></span>`,
          showConfirmButton: true,
          confirmButtonText: 'Continue',
          timer: 2000,
          timerProgressBar: true,
        });
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage)
      });

  };


  // Login With Google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user)
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully with Google!',
          html: `<span class="font-bold text-green-500 text-2xl">Welcome <span class="text-amber-600 font-bold text-2xl">${user.displayName}</span></span>`,
          showConfirmButton: true,
          confirmButtonText: 'Continue',
          timer: 2000,
          timerProgressBar: true,
        });
        navigate(`${location.state ? location.state : '/'}`);
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  // Login With GitHub
  const handleGithubLogin = () => {
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        setUser(user)
        Swal.fire({
          icon: 'success',
          title: 'Logged in successfully with GitHub!',
          html: `<span class="font-bold text-green-500 text-2xl">Welcome <span class="text-amber-600 font-bold text-2xl">${user.displayName}</span></span>`,
          showConfirmButton: true,
          confirmButtonText: 'Continue',
          timer: 2000,
          timerProgressBar: true,
        });
        navigate(`${location.state ? location.state : '/'}`);
        // IdP data available using getAdditionalUserInfo(result)
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  }


  return (
    <div className="min-h-[calc(100vh-76px)] flex items-center justify-center w-11/12 mx-auto">
      <div className="bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] text-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl md:text-4xl text-center mb-6 ">Welcome Back!</h2>

        <form
          onSubmit={handleLogin}
          className="space-y-4">
          <div>
            <label className="block text-xl font-bold mb-1">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="levi@ackerman.com"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xl font-bold">Password</label>
              <button 
                className="text-cyan-400 hover:text-amber-400"> Forget Password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="**********"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
              />
              <span
                className="absolute right-3 top-2.5 text-xl text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEye size={17} /> : <IoEyeOff size={17} />}
              </span>
            </div>
          </div>

          <button 
          type="submit" 
          className="w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-amber-600 hover:scale-105 duration-300 cursor-pointer hover:text-white transition">
            Login
          </button>
        </form>

        <p className="text-lg text-center text-gray-300 my-5">Don't have an account?
          <Link to="/auth/register"
            className="text-cyan-400 hover:text-amber-400 hover:border-b-2 border-amber-600 "> Register
          </Link>
        </p>

        {/* Google and Github */}
        <div className="flex items-center justify-center mb-5">
          <div className="border-t border-gray-600 w-full"></div>
          <span className="px-3 text-white">OR</span>
          <div className="border-t border-gray-600 w-full"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-amber-600 hover:scale-105 duration-300 transform cursor-pointer text-white py-2 px-4 rounded mb-3">
          <FaGoogle />
          Login with Google
        </button>

        <button
          onClick={handleGithubLogin}
          type="button"
          className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-amber-600 hover:scale-105 duration-300 transform cursor-pointer text-white py-2 px-4 rounded mb-3">
          <FaGithub />
          Login with GitHub
        </button>

      </div>
    </div>
  );
};

export default Login;