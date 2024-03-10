import React from 'react';

const Cat = ({ cat }) => {
  console.log(cat);
  return (
    <div>
      <img src={cat?.img} alt="" />
   </div>
  );
};

export default Cat;