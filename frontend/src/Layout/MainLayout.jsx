import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../Utilities/Footer';
import Header from '../Utilities/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default MainLayout;
