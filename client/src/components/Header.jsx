import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { toggleModal } from '../redux/slices/modalSlices';
import { logout } from '../redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handToggleNav = () => {
    setIsOpenNav((val) => !val);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleLogoutMobile = () => {
    dispatch(logout());
    handToggleNav();
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
        {user ? (
          <nav className="md:max-w-screen-mxl md:w-full md:relative">
            <nav className="items-center text-[#c3c3c3]  gap-2 hidden md:flex justify-end ">
              <FaUserCircle
                size={25}
                className={`text-[#9a9797] cursor-pointer transition-max-height duration-300  overflow-hidden  hover:text-white `}
                onClick={handToggleNav}
              />
              <div
                className={`absolute  right-0 bg-conetentBg rounded-b-lg  max-w-[400px] w-full top-[37px] pb-[1rem] transition-opacity duration-700 ${isOpenNav ? 'opacity-100 visible' : 'opacity-0 invisible'} border-[1px] border-t-0 border-[#9a979789]`}
              >
                <div className="flex items-center text-[#9a9797] flex-col gap-2">
                  <button className="text-white text-[28px]">
                    {user.name}
                  </button>
                  <button className="px-[1rem] py-[0.2rem]  text-white bg-[#e8d93958]">
                    {user.email}
                  </button>
                  <button className="px-[1rem] py-[0.2rem] rounded-lg text-[#b7f36d]">
                    Access all features of {user.roles[0]} is available for you
                    because your role is &#34;{user.roles[0]}&#34;.
                  </button>
                  <button
                    className="text-white px-5 border-none py-1 shadow-lg bg-red-500 hover:bg-red-700 rounded-lg"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </nav>
            <div className="md:hidden">
              <RxCross2
                size={25}
                className={`text-[#9a9797] cursor-pointer transition-max-height duration-300  overflow-hidden  hover:text-white ${isOpenNav === false ? 'max-h-0 opacity-0' : 'opacity-100 '}}`}
                onClick={handToggleNav}
              />
              <RxHamburgerMenu
                size={25}
                className={`text-[#9a9797] cursor-pointer transition-opacity duration-300  overflow-hidden  hover:text-white ${isOpenNav === false ? 'opacity-100 ' : 'max-h-0 opacity-0'}`}
                onClick={handToggleNav}
              />
              <div
                className={`absolute left-0 right-0 bg-conetentBg rounded-b-lg max-w-[720px] w-[95%] mx-auto top-[49px] pb-[1rem] transition-opacity duration-700 ${isOpenNav ? 'opacity-100 visible' : 'opacity-0 invisible'} border-[1px] border-t-0 border-[#9a979789]`}
              >
                <div className="flex items-center text-[#9a9797] flex-col gap-2">
                  <button className="text-white text-[28px]">
                    {user.name}
                  </button>
                  <button className="px-[1rem] py-[0.2rem] rounded-lg text-white bg-[#e8d93958]">
                    {user.email}
                  </button>
                  <button className="px-[1rem] py-[0.2rem] rounded-lg text-[#b7f36d]">
                    Access all features of {user.roles[0]} is available for you
                    because your role is &#34;{user.roles[0]}&#34;.
                  </button>
                  <button
                    className="text-white px-5 border-none py-1 shadow-lg bg-red-500 hover:bg-red-700 rounded-lg"
                    onClick={handleLogoutMobile}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </nav>
        ) : (
          // non login user
          <nav>
            <div className=" items-center text-[#c3c3c3]  gap-2 hidden md:flex">
              <Link to={'/about-us'} className="hover:text-white">
                About Us
              </Link>
              <button
                className="bg-[#e8d9393a] px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
                onClick={() => dispatch(toggleModal('register'))}
              >
                Register
              </button>
              <button
                className="bg-[#e8d9393a]  px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
                onClick={() => dispatch(toggleModal('login'))}
              >
                Sign in
              </button>
            </div>
            <div className="md:hidden">
              <RxCross2
                size={25}
                className={`text-[#9a9797] cursor-pointer transition-max-height duration-300  overflow-hidden  hover:text-white ${isOpenNav === false ? 'max-h-0 opacity-0' : 'opacity-100 '}}`}
                onClick={handToggleNav}
              />
              <RxHamburgerMenu
                size={25}
                className={`text-[#9a9797] cursor-pointer transition-opacity duration-300  overflow-hidden  hover:text-white ${isOpenNav === false ? 'opacity-100 ' : 'max-h-0 opacity-0'}`}
                onClick={handToggleNav}
              />
              <div
                className={`absolute left-0 right-0 bg-conetentBg rounded-b-lg max-w-[720px] w-[95%] mx-auto top-[49px] pb-[1rem] transition-opacity duration-700 ${isOpenNav ? 'opacity-100 visible' : 'opacity-0 invisible'} border-[1px] border-t-0 border-[#9a979789]`}
              >
                <div className="flex items-center text-[#9a9797] flex-col gap-2">
                  <Link
                    to={'/about-us'}
                    className="hover:text-white"
                    onClick={handToggleNav}
                  >
                    About Us
                  </Link>
                  <button
                    className="bg-[#e8d9394a] px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
                    onClick={() => handleClickMobile('register')}
                  >
                    Register
                  </button>
                  <button
                    className="bg-[#e8d9394a] px-[1rem] py-[0.2rem] rounded-lg hover:text-white hover:bg-[#e8d93958]"
                    onClick={() => handleClickMobile('login')}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}
      </nav>
    </div>
  );
};

export default Header;
