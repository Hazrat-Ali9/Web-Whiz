import React from 'react';


// Container 
const Container = ({children}) => {
  return (
    <div className='max-w-[1140px] mx-auto '>
      {children}
    </div>
  );
};

export default Container;