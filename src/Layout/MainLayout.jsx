import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ScrollToTop from '../Utilities/ScrollToTop';

const MainLayout = () => {
  return (
    <div>

      <ScrollToTop />

      <header className='h-[96px]'>
        <Navbar />
      </header>

      <main className='min-h-screen'>
        <Outlet />
      </main>

      <footer className='bg-[#3a5a40]'>
        <Footer />
      </footer>

    </div>
  );
};

export default MainLayout;