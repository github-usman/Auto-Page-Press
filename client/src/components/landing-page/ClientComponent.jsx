import React from 'react';
import star from '../../assets/clients/star.svg';

const ClientComponent = ({ clientName, review, image, stars }) => {
  return (
    <div className="mx-[0.5rem]">
      <div className="custom-template flex flex-col gap-[1.5rem] p-1 min-h-[190px] h-full">
        <p className="text-center text-sm text-gray-400">{review}</p>
        <div className="flex items-center justify-center gap-[1rem]">
          <img src={image} alt={clientName} className="rounded-full h-[45px]" />
          <div className="flex flex-col gap-[0.3rem]">
            <h5>{clientName}</h5>
            <div className="flex ">
              {Array.from({ length: stars }, (_, index) => {
                return (
                  <img key={index} src={star} alt="star" className="w-[18px]" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
