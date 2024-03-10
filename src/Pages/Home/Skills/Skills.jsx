import React from 'react';
import LastTitle from '../../../Shared/LastTitle/LastTitle';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/images/about/js.png'
import img2 from '../../../assets/images/about/react.png'
import img3 from '../../../assets/images/about/next.png'
import img4 from '../../../assets/images/about/node-js.png'
import img5 from '../../../assets/images/about/express.png'
import img6 from '../../../assets/images/about/Firebase.png'
import img7 from '../../../assets/images/about/html.png'
import img8 from '../../../assets/images/about/css.png'
import img9 from '../../../assets/images/about/tailwind.png'
import img10 from '../../../assets/images/about/mongodb.png'
import img11 from '../../../assets/images/about/mui.png'
import img12 from '../../../assets/images/about/figma.png'

const Skills = () => {
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
     cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
     
      
    };
  return (
    <div>
      <div className='mt-10'>
        <LastTitle first='My' second='Skills' />
      </div>
       <div className='py-10'>
       
        <Slider {...settings}>
          <div>
            <img src={img1} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img2} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img3} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img4} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img5} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img6} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img7} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img8} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img9} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img10} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img11} className='w-[100px] h-[100px] ' alt="" />
          </div>
          <div>
            <img src={img12} className='w-[100px] h-[100px] ' alt="" />
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default Skills;