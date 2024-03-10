import CoverFlow from '../../../Components/CoverFlow';
import TestimonialSlider from '../../../Components/TestimonialSlider';
import RightTitle from '../../../Shared/RightTitle/RightTitle';

const Reviews = () => {
  return (
    <div>
      <header className="bg-white py-10 ">
        <div>
          <h2 className=' font-bold text-[40px] text-left'>Client Reviews</h2>
          <div className=' w-1/3'>
            <RightTitle text='The team at  consistently delivered outstanding surpassing expectations ' />
          </div>
  </div>

    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex ">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                   <CoverFlow />
                </div>
            </div>

            <div className=" w-full  mt-20 lg:mt-0 lg:w-1/2">
              <TestimonialSlider />
            </div>
        </div>
    </div>
</header>
    </div>
  );
};

export default Reviews;