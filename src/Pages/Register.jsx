import { useContext } from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';





const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const providerGoogle = new GoogleAuthProvider()
  const { setUser, createUser } = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData);
    const { name, email, photoUrl, password, confirmPassword } = userData;


    // Password Matching
    if (password !== confirmPassword) {
      toast.error('Password does not match!')
    }

    // Validation of Password
    if (!password == /[A-Z]/.test(password))
      return toast.error("Password must contain at least 1 Uppercase letter.");
    if (!password == /[a-z]/.test(password))
      return toast.error("Password must contain at least 1 Lowercase letter.");
    if (!password == /[0-9]/.test(password))
      return toast.error("Password must contain at least 1 Number.");
    if (!password == /[!@#$%^&*(),.?":{}|<>]/.test(password))
      return toast.error("Password must contain at least 1 Special Character.");
    if (!password == password.length >= 8)
      return toast.error("Password must be at least 6 characters long.");



    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: 'success',
          title: 'Account created successfully!',
          html: `<span class="font-bold text-green-500 text-2xl">Welcome <span class="text-amber-600 font-bold text-2xl">${name}</span></span>`,
          showConfirmButton: true,
          confirmButtonText: 'Continue',
          timer: 3000,
          timerProgressBar: true,
        });
      })
      .catch((error) => {
        console.log(error.message);
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
          timer: 3000,
          timerProgressBar: true,
        });


      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }



  return (
    <div className="flex items-center justify-center w-11/12 mx-auto min-h-screen">
      <div className="bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] text-white p-8 rounded-xl shadow-2xl w-full max-w-xl">
        <h2 className="text-2xl md:text-4xl text-center mb-6">Create Your Account</h2>

        <form
          onSubmit={handleRegister}
        >
          <div className="mb-4">
            <label className="block text-xl font-bold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name..."
              className="w-full h-12 p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-bold mb-1">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="leroy@jenkins.com"
              className="w-full h-12 p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xl font-bold mb-1">Photo Url</label>
            <input
              type="url"
              name="photoUrl"
              placeholder="//https://img-link"
              className="w-full h-12 p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-xl font-bold mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="*****"
              className="w-full h-12 p-2 rounded bg-gray-800 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              className="absolute top-11 right-3 text-gray-400 cursor-pointer bg-[#0F665E] p-1 rounded"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div className="mb-4 relative">
            <label className="block text-xl font-bold mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="*****"
              className="w-full h-12 p-2 rounded bg-gray-800 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              className="absolute top-11 right-3 text-gray-400 cursor-pointer bg-[#0F665E] p-1 rounded"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <p className="text-lg text-center text-gray-300 my-5">Already have an account?
            <Link to="/auth/login"
              className="text-cyan-400 hover:text-amber-400 hover:border-b-2 border-amber-600 "> Login
            </Link>
          </p>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-amber-600 hover:scale-110 duration-300 cursor-pointer hover:text-white transition"
            >
              Register
            </button>
          </div>


          {/* Google and Github */}
          <div className="flex items-center justify-center my-5">
            <div className="border-t border-gray-600 w-full"></div>
            <span className="px-3 text-white">OR</span>
            <div className="border-t border-gray-600 w-full"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-amber-600 hover:scale-110 duration-300 transform hover:rounded-full cursor-pointer text-white py-2 px-4 rounded mb-3">
            <FaGoogle />
            Login with Google
          </button>

          <button 
          type='button' 
          className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-amber-600 hover:scale-110 hover:rounded-full cursor-pointer text-white py-2 px-4 rounded mb-5">
            <FaGithub />
            Login with GitHub
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
