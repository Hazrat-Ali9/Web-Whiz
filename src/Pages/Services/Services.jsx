import React from 'react';
import  {services}  from '../../../services.data';
import ServiceCard from './ServiceCard';
import './services.css'
import Container from '../../Shared/Container/Container';
import Title from '../../Shared/Title/Title';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';

const Services = () => {
  
  return (
    <div className=' bg-img'>
       <div className=' py-20' >
      <div className=' mb-[40px] md:flex justify-between items-center'>
        <div className='md:w-1/2 text-start'>
            <Title title='Services' />
            <MiddleTitle first='Where  ' second='Creativity ' third='Meets Functionality' />
        </div>
        <div className='md:w-1/2 '>
          <RightTitle text="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity." />
        </div>
      </div>
      <Container>
         <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 '>
      {
        services.map(service=> <ServiceCard key={service.title} service={service}/>)
      }
    </div>
     </Container>
    </div>
   </div>
  );
};

export default Services;