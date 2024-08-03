import React from 'react';
import { btnData } from '../../assets/constants/constants';
import parent__image from '../../assets/hero/how-do-refer/steps__bg.png';

const HowDoRefer = () => {
  return (
    <div className=" border-2 border-solid border-[#222325] bg-opacity-70 rounded-2xl w-full items-center bg-conetentBg backdrop-blur-[3px] all__side__shadow  custom-w    h-full ">
      <div className="px-10 xl:px-52 lg:h-[382px] h-[1022px]   flex flex-col lg:justify-center justify-between items-center gap-[0px]">
        <h1 className="text-logoColor font-bold text-[22px] text-center border-b-[3px] md:border-none ">
          How Do I <span className=" text-white">Use?</span>
        </h1>
        <div
          style={{ backgroundImage: `url(${parent__image})` }}
          className=" h-[320px]  xsm:h-[491px] w-[982px] bg-contain transition-transform duration-300  rotate-90 lg:rotate-0 bg-center flex bg-no-repeat items-center justify-center gap-[10%] xsm:gap-[7%]"
        >
          {btnData.map((val, index) => (
            <div
              key={index}
              className="transition-transform duration-300 rotate-[-90deg] lg:rotate-0 w-[250px] h-[250px]  border-[1px] border-solid border-[#393a3a] backdrop-blur-lg all__side__shadow right__down__shaow p-4 bg-opacity-0 rounded-full grid"
            >
              <val.icon className="h-[72px] text-logoColor mb-0 w-[72px] m-auto" />
              <p className="text-[14px] mt-0 text-center">{val.textValue}</p>
            </div>
          ))}
        </div>
        <div className="z-10"></div>
      </div>
    </div>
  );
};

export default HowDoRefer;
