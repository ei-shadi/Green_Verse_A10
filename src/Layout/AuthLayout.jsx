import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";


const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className='bg-gradient-to-b from-[#a3b18a] to-[#d38e0e]'>
        <Outlet />
      </main>

      <footer className="bg-[#3a5a40]">
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;