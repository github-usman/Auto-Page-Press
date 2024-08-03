import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { faqItems } from '../../assets/constants/constants.js';

const Faq = () => {
  const [openItem, setOpenItem] = useState(0);

  const handleItemClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="custom-template custom-w full-width p-1 grid grid-cols-1 md:grid-cols-2">
      <h1 className="text-logoColor font-bold text-[22px] text-center border-b-[3px] md:border-none w-fit m-auto">
        Frequently Asked Questions
      </h1>
      <div>
        <div>
          {faqItems.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => handleItemClick(index)}
                className={`flex items-center justify-between py-4 cursor-pointer ${index !== 0 ? 'border-t-[1px]' : ''} border-solid`}
              >
                <h3 className="text-left leading-6 cursor-pointer">
                  {item.question}
                </h3>
                <div
                  className={`${openItem === index ? 'rotate-180 transition-max-rotate duration-300 ease-in-out' : 'rotate-0 transition-max-rotate duration-300 ease-in-out'}`}
                >
                  <MdOutlineKeyboardArrowDown size={25} />
                </div>
              </div>
              <div
                className={`text-sm text-gray-400 transition-max-height duration-300 ease-in-out overflow-hidden ${openItem === index ? 'max-h-screen opacity-100 mb-1' : 'max-h-0 opacity-0'}`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
