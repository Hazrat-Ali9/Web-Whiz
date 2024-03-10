import React from 'react';

const MiddleTitle = ({first,second,third}) => {
  return (
    <div>
      <h2 className=' text-[#130929] font-bold text-[40px] '>{first} <span className=' bg-gradient-to-b from-white to-blue-200 text-blue-400 '>{second}</span> {third} </h2>
    </div>
  );
};

export default MiddleTitle;