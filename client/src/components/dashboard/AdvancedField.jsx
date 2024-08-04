import React, { useState } from 'react';
import warning from '../../assets/log-regi/warning.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const AdvancedField = () => {
  const [fieldName, setFieldName] = useState('');
  const [fieldValue, setFieldValue] = useState('');
  const [errors] = useState({});

  const [openItem, setOpenItem] = useState(true);

  const handleItemClick = () => {
    setOpenItem((val) => !val);
  };

  return (
    <div
      className={`custom-template grid  lg:grid-cols-[4fr_6fr] px-1 gap-[1rem] ${openItem === true ? 'cursor-pointer' : 'cursor-pointer'}`}
      onClick={!openItem ? handleItemClick : undefined}
    >
      <div
        className="flex text-logoColor items-center h-full justify-between lg:justify-center py-2 cursor-pointer"
        onClick={!openItem ? undefined : handleItemClick}
      >
        <h1 className=" font-bold text-[18px] text-center w-fit lg:m-auto">
          Advance Customfield
        </h1>
        <div
          className={`${openItem === true ? 'rotate-180 transition-max-rotate duration-300 ease-in-out' : 'rotate-0 transition-max-rotate duration-300 ease-in-out'}`}
        >
          <MdOutlineKeyboardArrowDown size={25} />
        </div>
      </div>

      <div
        className={`flex flex-col gap-[1px]  transition-max-height duration-1000 ease-in-out overflow-hidden ${openItem === true ? 'max-h-screen opacity-100 mb-1' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col">
          <label htmlFor="fieldName" className="mb-1 font-semibold">
            Field Name
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="advance field name"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            onChange={(e) => setFieldName(e.target.value)}
            value={fieldName}
            name="fieldName"
            id="fieldName"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errors.fieldName ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errors.fieldName}
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="fieldValue"
            className="mb-1 font-semibold text-[#EEEEF0]"
          >
            Field value
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="advance Field value"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            onChange={(e) => setFieldValue(e.target.value)}
            value={fieldValue}
            name="fieldValue"
            id="fieldValue"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errors.fieldValue ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errors.fieldValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedField;
