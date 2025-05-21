import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='bg-[#a3b18a]'>

      <header className=''>
        <Navbar />
      </header>

      <main className='w-11/12 mx-auto min-h-screen'>
        <Outlet />
      </main>

      <footer className='bg-[#3a5a40]'>
        <Footer />
      </footer>

    </div>
  );
};

export default MainLayout;