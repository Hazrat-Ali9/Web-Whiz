
import img1 from '../assets/images/right.png'

const TestNext = ({onClick}) => {
  return (
    <div className=' absolute right-6 -top-16' onClick={onClick}>
      <div  >
         <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default TestNext;