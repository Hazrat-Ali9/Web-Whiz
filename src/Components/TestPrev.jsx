
import img1 from '../assets/images/left.png'

const TestPrev = ({onClick}) => {
  return (
    <div className=' absolute right-20 -top-16' onClick={onClick}>
      <div  >
         <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default TestPrev;