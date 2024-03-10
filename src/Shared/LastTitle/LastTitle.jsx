import React from 'react';

const LastTitle = ({first,second}) => {
  return (
    <div>
        <div>
      <h2 className=' text-[#130929] font-bold text-[40px] '>{first} <span className=' bg-gradient-to-b from-white to-blue-200 text-blue-400 '>{second}</span>  </h2>
    </div>
    </div>
  );
};

export default LastTitle;