import React, { useState, useRef, useEffect } from 'react';
import warning from '../../assets/log-regi/warning.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { updateBody } from '../../redux/slices/wordpresFormSlice';

const Body = () => {
  const dispatch = useDispatch();
  const bodyContent = useSelector((state) => state.wordpressForm.body);
  const errors = {};
  const [openItem, setOpenItem] = useState(true);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [bodyContent]);

  const handleItemClick = () => {
    setOpenItem((val) => !val);
  };

  const handleChange = (e) => {
    dispatch(updateBody(e.target.value));
  };

  return (
    <div
      className={`custom-template grid grid-col px-1 gap-[1rem] ${openItem ? 'cursor-pointer' : 'cursor-pointer'}`}
    >
      <div
        className="flex text-logoColor justify-between lg:justify-center cursor-pointer py-2 lg:py-1 gap-5"
        onClick={handleItemClick}
      >
        <h1 className="font-bold text-[18px] text-center md:border-none w-fit">
          Body Content
        </h1>
        <div
          className={`${openItem ? 'rotate-180 transition-max-rotate duration-300 ease-in-out' : 'rotate-0 transition-max-rotate duration-300 ease-in-out'}`}
        >
          <MdOutlineKeyboardArrowDown size={25} />
        </div>
      </div>

      <div
        className={`flex flex-col gap-[1px] transition-max-height duration-1000 ease-in-out overflow-hidden ${openItem ? 'max-h-screen opacity-100 mb-1' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col">
          <label htmlFor="bodyContent" className="mb-1 font-semibold">
            Body Content
          </label>
          <textarea
            ref={textareaRef}
            placeholder="Web page body content"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2 resize-none"
            onChange={handleChange}
            value={bodyContent}
            name="bodyContent"
            id="bodyContent"
            rows={6}
          />
          <p
            className={`text-[12px] text-[red] opacity-${errors.bodyContent ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errors.bodyContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
