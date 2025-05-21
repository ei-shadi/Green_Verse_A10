import { FaGoogle, FaGithub } from "react-icons/fa";
import {  useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);



  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData);
    const { email, password } = userData;

  };







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
              <Link to="/auth/register"
                className="text-cyan-400 hover:text-amber-400"> Forget Password?
              </Link>
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

          <button type="submit" className="w-full bg-white text-black font-semibold py-2 rounded mt-4 hover:bg-gray-200">
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
          <span className="px-3 text-gray-400">OR</span>
          <div className="border-t border-gray-600 w-full"></div>
        </div>

        <button className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded mb-3">
          <FaGoogle />
          Login with Google
        </button>

        <button className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded mb-5">
          <FaGithub />
          Login with GitHub
        </button>

      </div>
    </div>
  );
};

export default Login;