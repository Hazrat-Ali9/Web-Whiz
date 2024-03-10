import React from 'react';

const RoudedBtn = ({text}) => {
  return (
    <div>
      <button className="self-center px-8 py-3 text-[14px] text-white rounded-full uppercase bg-gradient-to-r from-[#5F90F0] to-[#185AD9] ">{ text}</button>
    </div>
  );
};

export default RoudedBtn;