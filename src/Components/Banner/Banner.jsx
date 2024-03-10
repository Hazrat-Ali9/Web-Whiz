import React from 'react';
import bannerImg from '../../assets/me.png'
import bannerImg1 from '../../assets/images/banner/banner.png'
import RightTitle from '../../Shared/RightTitle/RightTitle';
import RoudedBtn from '../../Shared/RoudedBtn/RoudedBtn';
import MiddleTitle from '../../Shared/MiddleTitle/MiddleTitle';
import Container from '../../Shared/Container/Container';
import './banner.css'
import roundImg from '../../assets/images/banner/round.png';
import ellips from '../../assets/images/banner/Ellipse 2.png'
import userImg from '../../assets/images/banner/user.png'
import crown from '../../assets/images/banner/crown.png'
import manager from '../../assets/images/banner/manager.png'
import arrowImg from '../../assets/icon/arrowblue.png'

const Banner = () => {
  return (
    <div>
      <div className=" py-10 ">
        <Container>
          <div className=" py-10  flex-col gap-7 md:flex md:flex-row-reverse justify-between items-center">
          <div className='banner-bg relative   md:w-1/2'>
              <img className='md:pl-24 w-4/5 ' src={bannerImg1} />
              <img className=' absolute -top-8 right-20 -z-10 ' src={roundImg} alt="" />
              <img src={ellips} className=' absolute  right-24  -bottom-0  ' alt="" />
             
              <div className=' flex items-center gap-2 text-left bg-white absolute shadow-xl p-4 rounded-xl top-5 left-0'>
                <div >
                  <img className=' w-[50px] h-[50px] rounded-full' src={manager} alt="" />
                </div>
                <div className=' hidden md:block'>
                  <h3 className=' text-[#130929] font-bold'>Hazrat Ali</h3>
                  <h3 className=' text-[#64656D] font-medium'>JavaScript Developer</h3>
                </div>
              </div>
             
              <div className=' flex items-center gap-2 text-left bg-white absolute shadow-xl p-4 rounded-xl bottom-8  right-0'>
                <div >
                  <img src={crown} alt="" />
                </div>
                <div>
                  <h3 className=' text-[#130929] font-bold'>Project Done</h3>
                  <h3 className=' text-[#64656D] font-medium'>10+</h3>
                </div>
              </div>
              <div className='  flex items-center gap-2 text-left bg-white absolute shadow-xl p-4 rounded-xl bottom-1/2 right-0'>
                <div >
                  <img src={userImg} alt="" />
                </div>
                <div>
                  <h3 className=' text-[#130929] font-bold'>15,235</h3>
                  <h3 className=' text-[#64656D] font-medium'>Visitors</h3>
                </div>
                <div className=' flex gap-1 items-center'>
                  <img src={arrowImg} alt="" />
                  <p className=' font-medium text-[#185AD9] text-[14px]'>25%</p>
                </div>
              </div>
              
  </div>
    <div className=' md:w-1/2'>
            <div className='text-start'>
              <MiddleTitle first='Turning' second='Imagination' third='into Innovation'/>
      </div>
      <p className="py-6"><RightTitle text="Welcome to my digital playground, where creativity knows no bounds. I'm a passionate JavaScript developer on a mission to turn innovative ideas into stunning digital realities."/></p>
            <div className=' flex gap-3'>
              <RoudedBtn text='Hire me' />
              <button className='btn rounded-full border border-[#5F90F0]'>View Portfolio</button>
      </div>
    </div>
  </div>
  </Container>
</div>
    </div>
  );
};

export default Banner;