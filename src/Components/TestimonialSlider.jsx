import Slider from "react-slick";
import star from '../assets/test/star.png'
import TestPrev from "./TestPrev";
import TestNext from "./TestNext";

const TestimonialSlider = () => {
  var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    initialSlide: 1,
       arrows: true,
      prevArrow:<TestPrev />,
      nextArrow:<TestNext />,
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
    <div>
       <Slider {...settings}>
          <div className=" bg-white  border border-[#5F90F0] p-6 rounded-xl" >
          <div className=" text-left
           flex justify-between gap-10 ">
            <div className=" text-left ">
            <h3 className=" text-[#130929] font-semibold text-xl">Maria Sarapavoo</h3>
          <p className=" text-[#64656D] text-[14px]">Whistleblower and privacy advocate</p>
          </div>
          <div className=" flex gap-2 items-center">
            <h3 className=" text-[#130929] font-semibold text-xl">4.5</h3>
            <img src={star} alt="" />
          </div>
          </div>
          <p className=" text-left text-[#64656D] mt-3 ">
            The team at WebWhiz consistently delivered outstanding results surpassing our expectations in 
          </p>
          </div>
          <div className=" bg-white border border-[#5F90F0] p-6 rounded-xl" >
          <div className=" text-left
           flex justify-between gap-10 ">
            <div className=" text-left ">
            <h3 className=" text-[#130929] font-semibold text-xl">Maria Sarapavoo</h3>
          <p className=" text-[#64656D] text-[14px]">Whistleblower and privacy advocate</p>
          </div>
          <div className=" flex gap-2 items-center">
            <h3 className=" text-[#130929] font-semibold text-xl">4.5</h3>
            <img src={star} alt="" />
          </div>
          </div>
          <p className=" text-left text-[#64656D] mt-3 ">
            The team at WebWhiz consistently delivered outstanding results surpassing our expectations in 
          </p>
          </div>
          <div className=" bg-white border border-[#5F90F0] p-6 rounded-xl" >
          <div className=" text-left
           flex justify-between gap-10 ">
            <div className=" text-left ">
            <h3 className=" text-[#130929] font-semibold text-xl">Maria Sarapavoo</h3>
          <p className=" text-[#64656D] text-[14px]">Whistleblower and privacy advocate</p>
          </div>
          <div className=" flex gap-2 items-center">
            <h3 className=" text-[#130929] font-semibold text-xl">4.5</h3>
            <img src={star} alt="" />
          </div>
          </div>
          <p className=" text-left text-[#64656D] mt-3 ">
            The team at WebWhiz consistently delivered outstanding results surpassing our expectations in 
          </p>
          </div>
          <div className=" bg-white border border-[#5F90F0] p-6 rounded-xl" >
          <div className=" text-left
           flex justify-between gap-10 ">
            <div className=" text-left ">
            <h3 className=" text-[#130929] font-semibold text-xl">Maria Sarapavoo</h3>
          <p className=" text-[#64656D] text-[14px]">Whistleblower and privacy advocate</p>
          </div>
          <div className=" flex gap-2 items-center">
            <h3 className=" text-[#130929] font-semibold text-xl">4.5</h3>
            <img src={star} alt="" />
          </div>
          </div>
          <p className=" text-left text-[#64656D] mt-3 ">
            The team at WebWhiz consistently delivered outstanding results surpassing our expectations in 
          </p>
          </div>
          <div className=" bg-white border border-[#5F90F0] p-6 rounded-xl" >
          <div className=" text-left
           flex justify-between gap-10 ">
            <div className=" text-left ">
            <h3 className=" text-[#130929] font-semibold text-xl">Maria Sarapavoo</h3>
          <p className=" text-[#64656D] text-[14px]">Whistleblower and privacy advocate</p>
          </div>
          <div className=" flex gap-2 items-center">
            <h3 className=" text-[#130929] font-semibold text-xl">4.5</h3>
            <img src={star} alt="" />
          </div>
          </div>
          <p className=" text-left text-[#64656D] mt-3 ">
            The team at WebWhiz consistently delivered outstanding results surpassing our expectations in 
          </p>
          </div>
         
        </Slider>
    </div>
  );
};

export default TestimonialSlider;