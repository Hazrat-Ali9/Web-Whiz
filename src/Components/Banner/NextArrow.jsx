import React from 'react';
import img from '../../assets/images/right.png'

const NextArrow = ({onClick}) => {
  return (
    <div className=' absolute left-20 -bottom-8' onClick={onClick}>
      <div className=''>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default NextArrow;