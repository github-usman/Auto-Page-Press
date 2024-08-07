import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import warning from '../../assets/log-regi/warning.webp';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateMetaDescAndContent,
  addPage,
  removePage,
} from '../../redux/slices/wordpresFormSlice';

const MetaDescAndContent = ({ errorsDashb }) => {
  const dispatch = useDispatch();
  const metaDescAndContent = useSelector(
    (state) => state.wordpressForm.metaDescAndContent
  );
  const [openItem, setOpenItem] = useState(true);

  const handleChange = (e) => {
    dispatch(updateMetaDescAndContent({ [e.target.name]: e.target.value }));
  };

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
        <h1 className="font-bold text-[18px] text-center w-fit lg:m-auto">
          Meta Descriptions
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
          <label htmlFor="mainTitle" className="mb-1 font-semibold">
            Title
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="WordPress title (required)"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            value={metaDescAndContent.mainTitle}
            onChange={handleChange}
            name="mainTitle"
            id="mainTitle"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errorsDashb.mainTitle ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errorsDashb.mainTitle}
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="slug" className="mb-1 font-semibold text-[#EEEEF0]">
            Slug
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Your Page Slug (required)"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            value={metaDescAndContent.slug}
            onChange={handleChange}
            name="slug"
            id="slug"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errorsDashb.slug ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errorsDashb.slug}
          </p>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="customMetaDesc"
            className="mb-1 font-semibold text-[#EEEEF0]"
          >
            meta description
          </label>
          <textarea
            type="text"
            autoComplete="off"
            placeholder="Your Page meta Description (required)"
            className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
            value={metaDescAndContent.customMetaDesc}
            onChange={handleChange}
            name="customMetaDesc"
            id="customMetaDesc"
          />
          <p
            className={`text-[12px] text-[red] opacity-${errorsDashb.customMetaDesc ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errorsDashb.customMetaDesc}
          </p>
        </div>

        <div className="flex flex-col cursor-default">
          <a className="mb-1 font-semibold text-[#EEEEF0]">
            Dynamic Pages value
          </a>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
            {metaDescAndContent.pages.map((page, index) => (
              <div key={index} className="flex flex-col relative">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={`Enter Dynamic content ${index + 1}`}
                  className="focus:outline-none bg-inputBg focus:border-dblue border-[#9a979792] border-[0.5px] rounded-lg p-2"
                  value={page}
                  onChange={(e) => {
                    const updatedPages = [...metaDescAndContent.pages];
                    updatedPages[index] = e.target.value;
                    dispatch(updateMetaDescAndContent({ pages: updatedPages }));
                  }}
                  name={`page-${index}`}
                  id={`page-${index}`}
                />
                <button
                  type="button"
                  onClick={() => dispatch(removePage(index))}
                  className="text-red-500 absolute right-0 top-1/2 -translate-y-1/2"
                >
                  <RxCross2 className="text-[#9a9797] hover:text-white text-[22px]" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => dispatch(addPage())}
              className="bg-blue-500 text-white rounded-lg w-fit"
            >
              <IoIosAddCircle className="text-[#9a9797] w-fit hover:text-white text-[28px]" />
            </button>
          </div>
          <p
            className={`text-[12px] text-[red] opacity-${errorsDashb.pages ? '100' : '0'} flex items-center gap-1 ps-2`}
          >
            <img src={warning} className="h-[12px] w-[12px]" alt="warning" />{' '}
            {errorsDashb.pages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetaDescAndContent;
