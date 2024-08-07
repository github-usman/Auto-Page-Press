import React, { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import log_regi_bg from '../assets/log-regi/log-regi-bg.webp';
import warning from '../assets/log-regi/warning.webp';
import { registerUser } from '../redux/slices/authSlice';
import { toggleModal } from '../redux/slices/modalSlices';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    error: formError,
    isLoading,
  } = useSelector((state) => state.auth);

  const isEmail = validator.isEmail(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (name === '') newErrors.name = 'Name is required';
    if (email === '' || !isEmail) newErrors.email = 'Valid email is required';
    if (password.length < 8)
      newErrors.password = 'Password must be at least 8 characters';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      const registerData = {
        name,
        email,
        password,
      };
      try {
        await dispatch(registerUser(registerData)).unwrap();
      } catch (error) {
        setErrors({ form: 'Login failed. Please try again.' });
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(toggleModal(null));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className="fixed inset-0 overflow-y-hidden flex items-center justify-center bg-[#00000080] backdrop-blur-[2px] bg-opacity-70  z-50">
      <div
        style={{ backgroundImage: `url(${log_regi_bg})` }}
        className=" bg-cover  bg-no-repeat custom-template  border-[1px] border-[#bfbabab4] border-solid sm:px-0  bg-opacity-50 max-w-[450px] w-[95%] sm:w-full  relative rounded-xl grid items-center"
      >
        <button
          className="absolute ml-5 text-black rounded-lg flex justify-center items-center right-0 top-[-40px] w-8 h-8  bg-white"
          onClick={() => dispatch(toggleModal(null))}
        >
          <RxCross2 size={24} />
        </button>

        <div className="shadow-lg py-5 px-5 ">
          <h3 className="text-2xl font-bold bg-inherit text-dblue text-center">
            Register
          </h3>
          <form
            className="mt-1 text-[14px] flex flex-col lg:px-8"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="name"
              className=" mb-1 font-semibold text-[#EEEEF0]"
            >
              Full Name
            </label>
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter your name (required)"
              className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              id="name"
            />
            <p
              className={`text-[12px] text-[red] opacity-${errors.name ? '100' : '0'} flex items-center gap-1 ps-2`}
            >
              <img src={warning} className="h-[10px] w-[10px]" alt="warning" />{' '}
              {errors.name}
            </p>
            <label
              htmlFor="email"
              className="mb-1  mt-[1.2rem] font-semibold text-[#EEEEF0]"
            >
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              placeholder="Email (required)"
              className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              id="email"
            />
            <p
              className={`text-[12px] text-[red] opacity-${errors.email ? '100' : '0'} flex items-center gap-1 ps-2`}
            >
              <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
              {errors.email}
            </p>
            <label
              htmlFor="password"
              className="mb-1  mt-[1.2rem] font-semibold text-[#EEEEF0]"
            >
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              placeholder="Enter new password (required)"
              className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              id="password"
            />
            <p
              className={`text-[12px] text-[red] opacity-${errors.password ? '100' : '0'} flex items-center gap-1 ps-2`}
            >
              <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
              {errors.password}
            </p>

            <p className="text-[12px] text-white text-center py-2">
              By submitting the form, you agree to our{' '}
              <span className="text-dblue">Terms and Conditions</span> and our
              <span className="text-dblue"> Privacy Policy</span>
            </p>
            <button
              type="submit"
              className="w-full bg-dblue text-white border-[#9a979792] border text-[15px] rounded-lg font-bold py-2 referal__benefits__shadow__all_program"
              onClick={handleSubmit}
            >
              {isLoading ? 'Logging in...' : 'Create Account'}
            </button>
            {formError && (
              <p className="text-[14px] text-[red] flex items-center gap-1 justify-center">
                <img
                  src={warning}
                  className="h-[14px] w-[14px]"
                  alt="warning"
                />{' '}
                {formError}
              </p>
            )}
            <div className="flex items-center gap-5">
              <div className="h-[1px] bg-[#9a979792] w-full my-5 relative"></div>
              <p className="">OR</p>
              <div className="h-[1px] bg-[#9a979792] w-full my-5 relative"></div>
            </div>

            <button
              type="submit"
              className="w-full bg-inputBg  border-[#9a979792] border text-[15px] rounded-lg font-bold py-2 referal__benefits__shadow__all_program"
              onClick={() => dispatch(toggleModal('login'))}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
