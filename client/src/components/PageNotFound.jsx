import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const PageNotFound = () => {
  return (
    <div className="max-w-screen-mxl h-[calc(100vh-(54px+2rem))] grid  mx-auto px-4 md:px-6   items-center  justify-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h3>404 Page Not Found</h3>
        <p>
          The page you are looking for is unavailable. It might have been
          removed, had its name changed or moved.
        </p>
        <div className="text-white flex items-center gap-2 rounded-lg border-[1px] border-yellow-100 px-2 py-1">
          <img src={logo} alt="auto page press" className="h-[40px] w-[40px]" />{' '}
          <Link
            to={'/'}
            className="text-logoColor font-bold text-[18px] md:text-[22px]"
          >
            AutoPagePress
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
