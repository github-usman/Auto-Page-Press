import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cross from '../assets/log-regi/cross.svg';
import log_regi_bg from '../assets/log-regi/log-regi-bg.png';
import warning from '../assets/log-regi/warning.png';
import { loginUser } from '../redux/slices/authSlice';
import { toggleModal } from '../redux/slices/modalSlices';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);

  // const emailRegex =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    // validation error
    // const newErrors = {};
    // if (name === '') newErrors.name = 'Name is required';
    // if (email === '' || !email.match(emailRegex))
    //   newErrors.email = 'Valid email is required';
    // if (setPassword.length < 10)
    //   newErrors.setPassword = 'Valid phone number is required';
    // newErrors.refereeEmail =
    //   'Your email and your friend email should be diffrent';

    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    // setLoading((val) => !val);
    // } else {
    //   setErrors({});
    const referalData = {
      email,
      password,
    };
    try {
      dispatch(loginUser(referalData));

      // if (user.success) {
      //   toggleModal();
      //   // setLoading((val) => !val); // success loading spineer off
      //   // setSuccesstLoading((val) => !val);
      // } else {
      //   // setLoading((val) => !val); // response promise resolve loading spineer off
      //   // setFailed(response.message); // failed due some reason
      // }
    } catch (error) {
      setErrors(error); // response promise resolve loading spineer off
      // setFailed('server issue please try again'); // failed due some reason
    }
    // }
  };

  return (
    <div className="fixed inset-0 overflow-y-hidden flex items-center justify-center bg-[#00000080] backdrop-blur-[2px] bg-opacity-70  z-50">
      <div
        style={{ backgroundImage: `url(${log_regi_bg})` }}
        className=" bg-cover  bg-no-repeat custom-template  border-[1px] border-[#bfbabab4] border-solid sm:px-0  bg-opacity-50 max-w-[450px] w-[95%] sm:w-full  relative rounded-xl grid items-center"
      >
        <button
          className="absolute ml-5 text-black right-0 top-[-40px] w-8 h-8 rounded-md bg-white"
          onClick={() => dispatch(toggleModal('login'))}
        >
          <img src={cross} alt="close button" />
        </button>

        <div className="shadow-lg py-5 px-5 ">
          <h3 className="text-2xl font-bold bg-inherit text-dblue text-center">
            Sign In
          </h3>
          <form
            className="mt-1 text-[14px] flex flex-col lg:px-8"
            onSubmit={handleSubmit}
          >
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
              Login
            </button>
            <div className="flex items-center gap-5">
              <div className="h-[1px] bg-[#9a979792] w-full my-5 relative"></div>
              <p className="">OR</p>
              <div className="h-[1px] bg-[#9a979792] w-full my-5 relative"></div>
            </div>

            <button
              type="submit"
              className="w-full bg-inputBg  border-[#9a979792] border text-[15px] rounded-lg font-bold py-2 referal__benefits__shadow__all_program"
              onClick={() => dispatch(toggleModal('register'))}
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
