import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" header-bg py-6">
      <div className="container">
        <Link to={'/'} className="flex justify-center items-center w-full gap-2">
          <img src="/assets/logo.png" className="w-11 sm:w-12 lg:w-16" alt="Espresso Emporium" />
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Espresso Emporium</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
