
import Title from '../../Shared/Title/Title'
import LastTitle from '../../Shared/LastTitle/LastTitle';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import Container from '../../Shared/Container/Container';
import img1 from '../../assets/portfolio.png';
import img2 from '../../assets/fitness.png';
import img3 from '../../assets/eventLab.png';
import img4 from '../../assets/fruit.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../../public/Portfolio';
import { category } from '../../../public/Category';
import Cat from '../../Components/Cat';

import { useState } from 'react';

console.log(data);

const Portfolio = () => {
   const [filteredItems, setFilteredItems] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("all");
  const filterItems = (category) => {
     const filtered =
      category === "all"
        ? data
        : data?.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  }

   const showAll = () => {
    setFilteredItems(data);
    setSelectedCategory("all");
     
  };
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
     cssEase: "linear",
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
    <div className=' py-16 bg-[#f2f3f5fc]'>
      <Container>
         <div className=' md:flex gap-16 justify-between items-center'>
      <div className=' md:w-1/2 text-left'>
      <Title title='portfolio' />
      <LastTitle first='Discovering digital mastery and' second='Creative innovation' />
    </div>
      <div className=' md:w-1/2'>
      <RightTitle text="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."/>
          </div>
          
        </div>
        <div>
          <section className="">
    <div className="container px-6 py-10 mx-auto">
              <div className='flex mb-12'>
                <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("UI/UX Design")}
              className={selectedCategory === "UI/UX Design" ? "active" : ""}
            >
              UI/UX Design
            </button>
            <button
              onClick={() => filterItems("Graphic Design")}
              className={selectedCategory === "Graphic Design" ? "active" : ""}
            >
              Graphic Design
            </button>
            <button
              onClick={() => filterItems("Developments")}
              className={selectedCategory === "Developments" ? "active" : ""}
            >
              Developments
            </button>
           


               
              </div>

        
                

                

              

               
                <Slider {...settings}>
                
                   {
                  filteredItems?.map((cat,index)=> <Cat key={index} cat={cat} />)
         }
               
          
          
        </Slider>
        
    </div>
</section>
        </div>
      </Container>
   </div>
  );
};

export default Portfolio;