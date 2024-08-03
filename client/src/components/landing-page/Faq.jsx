import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Faq = () => {
  const [openItem, setOpenItem] = useState(0);
  const handleItemClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Is it going to be hard to set up?',
      answer:
        'No. In fact, the setup could not be easier. You just need to enter your credentials and content, and specify the names of the dynamic pages you want to create.',
    },
    {
      question: 'Is the service free and fully customizable?',
      answer:
        'Yes, our service is free and fully customizable. You only need to enter your credentials and content, and specify the list of dynamic pages you want to create.',
    },
    {
      question: 'What is a dynamic page in WordPress?',
      answer:
        'A dynamic page in WordPress is a page that displays content that can change based on certain criteria or user interactions. This can include displaying different content based on user inputs, database queries, or third-party data sources.',
    },
    {
      question: 'Is coding knowledge required to use this service?',
      answer:
        'No, coding knowledge is not required. Our service provides a user-friendly interface where you can set up the parameters and criteria for dynamic page creation. The system handles the technical aspects in the background.',
    },
    {
      question: 'Can I customize the design of the dynamic pages?',
      answer:
        "Yes, you can customize the design of the dynamic pages using WordPress themes and templates. Our service allows you to specify which template to use for each dynamic page, ensuring consistency with your site's overall design.",
    },
  ];

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
