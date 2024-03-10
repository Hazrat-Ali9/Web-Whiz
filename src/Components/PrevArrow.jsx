
import img1 from '../assets/images/left.png'

const PrevArrow = ({onClick}) => {
  return (
    <div className=' absolute left-6 -bottom-8' onClick={onClick}>
      <div  >
         <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default PrevArrow;