import React from 'react';
import arrow from '../../assets/icon/arrowservice.png'

const ServiceCard = ({ service }) => {
  
  const {image, title, description} = service
  return (
    <div className=' p-7 bg-white rounded-[32px] '>
      <div className=' flex justify-between'>
        <div className=' rounded-2xl bg-[#a9c1ed] p-3'>
          <img  src={image} alt="" />
        </div>
        <div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <h2 className=' text-[#130929] text-[28px] mt-4 mb-2 font-bold text-start'>{title }</h2>
      <p className=' text-[#64656D] text-start'>{description }</p>
    </div>
  );
};

export default ServiceCard;