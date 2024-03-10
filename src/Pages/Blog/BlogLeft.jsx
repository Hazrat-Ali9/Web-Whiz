import Slider from "react-slick";
import blogImg from '../../assets/images/blg.png'
import backgroundImage from '../../assets/images/blogbg.png'


const BlogLeft = () => {
   var settings = {
      dots: true,
     infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     initialSlide: 1,
     
     
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
    <div className="" >
       <Slider {...settings}>
          <div className="" >
           <img className="   " src={blogImg} alt="" />
          </div>
          <div className=''>
           <img src={blogImg} alt="" />
          </div>
          <div className=''>
           <img src={blogImg} alt="" />
          </div>
          
         
          
        </Slider>
    </div>
  );
};

export default BlogLeft;