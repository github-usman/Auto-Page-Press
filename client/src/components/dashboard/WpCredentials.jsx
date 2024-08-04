import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import warning from '../../assets/log-regi/warning.png';
import { updateWpCredentials } from '../../redux/slices/wordpresFormSlice';

const WpCredetials = () => {
  const dispatch = useDispatch();
  const wpCredentials = useSelector(
    (state) => state.wordpressForm.wpCredentials
  );

  const handleChange = (e) => {
    dispatch(updateWpCredentials({ [e.target.name]: e.target.value }));
  };

  const [errors] = useState({});

  const [openItem, setOpenItem] = useState(true);

  const handleItemClick = () => {
    setOpenItem((val) => !val);
  };

  return (
    <div
      className={`custom-template grid lg:grid-cols-[4fr_6fr] px-1 gap-[1rem] ${openItem ? 'cursor-pointer' : 'cursor-pointer'}`}
      onClick={!openItem ? handleItemClick : undefined}
    >
      <div
        className="flex text-logoColor h-full items-center justify-between lg:justify-center py-2 cursor-pointer"
        onClick={!openItem ? undefined : handleItemClick}
      >
        <h1 className="font-bold text-[18px] w-fit lg:m-auto">
          Wordpress Credentials
        </h1>
        <div
          className={`${openItem ? 'rotate-180 transition-transform duration-300 ease-in-out' : 'rotate-0 transition-transform duration-300 ease-in-out'}`}
        >
          <MdOutlineKeyboardArrowDown size={25} />
        </div>
      </div>

      <div
        className={`flex flex-col gap-[1px] transition-max-height duration-1000 ease-in-out overflow-hidden ${openItem ? 'max-h-screen opacity-100 mb-1' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 font-semibold">
            Username
          </label>
          <input
            type="text" // Corrected type from "username" to "text"
            autoComplete="off"
            placeholder="wordpress username (required)"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            value={wpCredentials.username}
            onChange={handleChange}
            name="username"
            id="username"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errors.username ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errors.username}
          </p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="baseUrl"
            className="mb-1 font-semibold text-[#EEEEF0]"
          >
            Base Url
          </label>
          <input
            type="text" // Corrected type from "baseUrl" to "text"
            autoComplete="off"
            placeholder="wordpress baseUrl (required)"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            value={wpCredentials.baseUrl}
            onChange={handleChange}
            name="baseUrl"
            id="baseUrl"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errors.baseUrl ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errors.baseUrl}
          </p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 font-semibold text-[#EEEEF0]"
          >
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Enter wordpress password (required)"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            value={wpCredentials.password}
            onChange={handleChange}
            name="password"
            id="password"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errors.password ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errors.password}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WpCredetials;
