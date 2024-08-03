import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-conetentBg opacity-95 h-[50px] sticky top-0 z-50 backdrop-blur-[2px] border-solid border-b-[1px] border-[#9a979789]">
      <nav className="max-w-screen-mxl h-full items-center justify-between flex m-auto border-solid px-4 md:px-6  ">
        <div className="text-white flex items-center gap-2">
          <img src={logo} alt="auto page press" className="h-[40px] w-[40px]" />{' '}
          <p className="text-logoColor font-bold text-[18px] md:text-[22px]">
            AutoPagePress
          </p>
        </div>
        <div className="flex items-center text-[#9a9797] gap-2">
          <Link>About Us</Link>
          <button className="bg-[#e8d9391f] px-[1rem] py-[0.2rem] rounded-lg">
            Register
          </button>
          <button className="bg-[#e8d9391f] px-[1rem] py-[0.2rem] rounded-lg ">
            Sign in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
