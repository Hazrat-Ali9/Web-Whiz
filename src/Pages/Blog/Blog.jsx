import React from 'react';
import Container from '../../Shared/Container/Container';
import Title from '../../Shared/Title/Title';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';
import blog from '../../assets/test.jpg'
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import Slider from "react-slick";
import PrevArrow from '../../Components/PrevArrow';
import NextArrow from '../../Components/Banner/NextArrow';
import BlogLeft from './BlogLeft';
import backgroundImage from '../../assets/images/blogbg.png'


const Blog = () => {
   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     initialSlide: 0,
      arrows: true,
      prevArrow:<PrevArrow />,
      nextArrow:<NextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <Container>
      <div className=' py-24'>
         <div className=" ">
  <div className=" flex flex-col  md:flex-row gap-10">
          <div className='   md:w-1/2'>
              <div className=' relative '  >
                <img src={backgroundImage} alt="" />
                <div className=' md:pl-14 absolute left-0 right-0 mx-auto bottom-24 '>
                   <BlogLeft />
               </div>
          </div>
    </div>
    <div className=' md:w-1/2'>
            <div className=' ml-8 text-left'>
              <Title title='blog' />
            </div>
              <div className=' ml-8  text-left'>
                <h2 className=' text-[#130929] font-bold text-[40px] '>Our <span className=' bg-gradient-to-b from-white to-blue-200 text-blue-400 '>satisfied customers</span> <br /> share their stories </h2>
             
            </div>
               <div>
       
        <Slider {...settings}>
          <div className=''>
           <p className="py-6 "><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
            <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          <div>
             <p className="py-6"><RightTitle text="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology " /></p>
          </div>
          
        </Slider>
      </div>
            
      
      
    </div>
  </div>
</div>
      </div>
   </Container>
  );
};

export default Blog;