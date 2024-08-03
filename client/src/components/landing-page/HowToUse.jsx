import React from 'react';
import { btnData } from '../../assets/constants/constants';
import steps__bg__vertical from '../../assets/hero/how-do-refer/steps__bg__vertical.png';
import steps__bg from '../../assets/hero/how-do-refer/steps__bg.png';

const HowDoRefer = () => {
  return (
    <div className=" custom-w items-center justify-center h-[100%]">
      <div className="lg:hidden">
        <h1 className="text-logoColor font-bold text-[22px] mb-6 text-center w-fit m-auto border-b-[3px] md:border-none ">
          How Do I <span className=" text-white">Use?</span>
        </h1>
        <div
          style={{
            backgroundImage: `url(${steps__bg__vertical})`,
          }}
          className="bg-contain bg-center h-[800px] bg-m-auto items-center  flex flex-col bg-no-repeat"
        >
          <div className="w-[300px] gap-4 flex items-center flex-col">
            {btnData.map((val, index) => (
              <div
                key={index}
                className="transition-transform duration-300  w-[210px] h-[210px] mt-9 border-[1px] border-solid border-[#393a3a] backdrop-blur-lg all__side__shadow right__down__shaow p-4 bg-opacity-0 rounded-full grid"
              >
                <val.icon className="h-[72px] text-logoColor mb-0 w-[72px] m-auto" />
                <p className="text-[14px] mt-0 text-center">{val.textValue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-10 xl:px-52 lg:h-[382px] h-[990px]   hidden lg:flex flex-col lg:justify-center justify-between items-center gap-[0px]">
        <h1 className="text-logoColor font-bold text-[22px] text-center border-b-[3px] md:border-none ">
          How Do I <span className=" text-white">Use?</span>
        </h1>
        <div
          style={{ backgroundImage: `url(${steps__bg})` }}
          className=" h-[320px]  xsm:h-[491px] w-[922px] xlg:w-[982px]   bg-contain transition-transform duration-300  rotate-90 lg:rotate-0 bg-center flex bg-no-repeat items-center justify-center gap-[5%] xlg:gap-[4.5rem]"
        >
          {btnData.map((val, index) => (
            <div
              key={index}
              className="transition-transform duration-300 rotate-[-90deg] lg:rotate-0 w-[250px] h-[250px]  border-[1px] border-solid border-[#393a3a] backdrop-blur-[3px]   bg-conetentBg all__side__shadow right__down__shaow p-4 bg-opacity-30 rounded-full grid"
            >
              <val.icon className="h-[72px] text-logoColor mb-0 w-[72px] m-auto" />
              <p className="text-[14px] mt-0 text-center">
                {val.textValue}dsfsdfdsf
              </p>
            </div>
          ))}
        </div>
        <div className="z-10"></div>
      </div>
    </div>
  );
};

export default HowDoRefer;
