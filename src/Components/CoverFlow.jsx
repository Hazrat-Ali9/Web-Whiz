
import Slider from "react-slick";

// import required modules


import slide_image_1 from '../assets/test/test1.png'
import slide_image_2 from '../assets/test/test2.png'
import slide_image_3 from '../assets/test/test1.png'
import slide_image_4 from '../assets/test/test2.png'
import slide_image_5 from '../assets/test/test1.png'
import slide_image_6 from '../assets/test/test2.png'

const CoverFlow = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return (
    <div>
        <Slider {...settings}>
          <div>
            <img src={slide_image_1} alt="" />
          </div>
          <div>
            <img src={slide_image_1} alt="" />
          </div>
          <div>
            <img src={slide_image_2} alt="" />
          </div>
          <div>
            <img src={slide_image_3} alt="" />
          </div>
          <div>
            <img src={slide_image_4} alt="" />
          </div>
          <div>
            <img src={slide_image_5} alt="" />
          </div>
          <div>
            <img src={slide_image_6} alt="" />
          </div>
         
        </Slider>
    </div>
  );
};

export default CoverFlow;