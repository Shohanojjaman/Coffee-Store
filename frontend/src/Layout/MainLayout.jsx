import { Outlet } from 'react-router-dom';
import Footer from '../Utilities/Footer';
import Header from '../Utilities/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
