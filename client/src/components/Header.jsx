import React, { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { toggleModal } from '../redux/slices/modalSlices';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpenNav, setIsOpenNav] = useState(true);

  const handToggleNav = () => {
    setIsOpenNav((val) => !val);
  };

  const handleClickMobile = (value) => {
    dispatch(toggleModal(value));
    handToggleNav();
  };

  return (
    <div className="bg-conetentBg opacity-95 h-[50px] sticky top-0 z-50 backdrop-blur-[2px] border-solid border-b-[1px] border-[#9a979789]">
      <nav className="max-w-screen-mxl h-full items-center justify-between flex m-auto border-solid px-4 md:px-6  ">
        <div className="text-white flex items-center gap-2">
          <img src={logo} alt="auto page press" className="h-[40px] w-[40px]" />{' '}
          <Link
            to={'/'}
            className="text-logoColor font-bold text-[18px] md:text-[22px]"
          >
            AutoPagePress
          </Link>
        </div>

        <div className=" items-center text-[#9a9797]  gap-2 hidden md:flex">
          <Link to={'/about-us'} className="hover:text-white">
            About Us
          </Link>
          <button
            className="bg-[#e8d9391f] px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
            onClick={() => dispatch(toggleModal('register'))}
          >
            Register
          </button>
          <button
            className="bg-[#e8d9391f]  px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
            onClick={() => dispatch(toggleModal('login'))}
          >
            Sign in
          </button>
        </div>
        <div className="md:hidden">
          <RxHamburgerMenu
            size={25}
            className={`text-[#9a9797] cursor-pointer transition-max-height duration-300  overflow-hidden  hover:text-white ${isOpenNav === false ? 'max-h-0 opacity-0' : 'opacity-100 '}}`}
            onClick={handToggleNav}
          />
          <RxCross2
            size={25}
            className={`text-[#9a9797] cursor-pointer transition-opacity duration-300  overflow-hidden  hover:text-white ${isOpenNav === false ? 'opacity-100 ' : 'max-h-0 opacity-0'}`}
            onClick={handToggleNav}
          />
          <div
            className={`absolute left-0 right-0 bg-conetentBg  rounded-b-lg max-w-[720px] w-[95%] mx-auto top-[49px] pb-[1rem] transition-opacity duration-700 ${isOpenNav && 'opacity-0'}  border-[1px] border-t-0 border-[#9a979789]`}
          >
            <div className="flex   items-center  text-[#9a9797] flex-col gap-2 ">
              <Link
                to={'/about-us'}
                className="hover:text-white"
                onClick={handToggleNav}
              >
                About Us
              </Link>
              <button
                className="bg-[#e8d9391f] px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
                onClick={() => handleClickMobile('register')}
              >
                Register
              </button>
              <button
                className="bg-[#e8d9391f]  px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
                onClick={() => handleClickMobile('login')}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
