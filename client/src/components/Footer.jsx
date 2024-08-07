import React from 'react';
import logo from '../assets/logo.webp';

const Footer = () => {
  return (
    <div className="max-w-screen-mxl mx-auto pb-[1rem] border-solid px-4 md:px-6  flex-col md:flex-row items-center flex justify-between text-[#9a9797]">
      <p className="text-center">
        Copyright © 2024 AutoPagePress Help Center | Terms | Privacy Policy
      </p>
      <div className="flex gap-[0.7rem] items-center">
        <img src={logo} className="h-[22px] w-[22px]" alt="Auto page press" />
        <p className="text-logoColor font-bold text-nowrap"> AutoPagePress</p>
      </div>
    </div>
  );
};

export default Footer;
