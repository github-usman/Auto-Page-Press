import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import money_1 from './../../assets/hero/money_1.png';
import money_2 from './../../assets/hero/money_2.png';
import money_3 from './../../assets/hero/money_3.png';
import money_4 from './../../assets/hero/money_4.png';
import money_5 from './../../assets/hero/money_5.png';
import phone__and_couple from './../../assets/hero/phone__and_couple.png';
import placeholderImage from './../../assets/hero/phone__and_couple_x1.png';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="custom-template custom-w relative m-auto md:h-[90%] items-center flex-col gap-3 lg:gap-[8rem] md:flex-row justify-center">
      <img
        src={money_1}
        className="h-auto max-w-[140px] w-full absolute top-0 start-0"
        alt="money on1"
      />
      <img
        src={money_2}
        className="h-auto max-w-[140px] w-full absolute -z-10 top-0 md:-top-8 right-[26%]"
        alt="money on2"
      />
      <img
        src={money_3}
        className="h-auto max-w-[140px] w-full absolute top-0 end-0"
        alt="money on3"
      />
      <div className="flex flex-col gap-3 lg:gap-[20px] mt-[4rem] lg:mt-0 p-0 lg:p-2 items-center sm:items-start">
        <div className="bg-inherit lg:ms-5">
          <h1 className='text-[2.05rem] w-full lg:text-[3.4rem] mxl:text-[3.8rem] font-[700] font-["roboto"] lg:text-nowrap bg-inherit leading-none'>
            1000+ pages in&nbsp;
            <br className="hidden lg:inline" />
            one Minute
          </h1>
        </div>
        <div className="bg-inherit lg:ms-5">
          <p className='lg:text-[40px] text-[20px] font-["roboto"] bg-inherit'>
            This is free and
            <br className="hidden lg:inline" /> Fully
            <span className=" text-[1.5rem] lg:text-5xl font-semibold text-dblue bg-inherit">
              &nbsp; customize
            </span>
          </p>
        </div>
        <Link
          to={'/dashboard'}
          className="repel__effect border-[1px] px-2 py-1 font-semibold rounded-lg"
        >
          Create Pages
        </Link>
      </div>
      <div className="bg-[#0c0a0a00] transition-transform duration-300 w-[100%] lg:w-[58%] lg:h-[100%]">
        <img
          src={money_4}
          className="h-auto max-w-[140px] w-full absolute z-10 bottom-0 md:bottom-[4%] right-[70%] md:right-[35%]"
          alt="money on1"
        />

        <img
          src={money_5}
          className="h-auto max-w-[140px] w-full absolute -z-10 bottom-[35%] right-[5%]"
          alt="money on2"
        />
        <div className="bg-inherit flex justify-start items-center h-[100%] lg:w-[100%]">
          <img
            src={imageLoaded ? phone__and_couple : placeholderImage}
            alt="phone and couple"
            className="object-contain z-0 bg-inherit"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
