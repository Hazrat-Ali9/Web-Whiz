import React from 'react';
import RightTitle from '../../Shared/RightTitle/RightTitle';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from '../../assets/images/contact/contact.png'
import sms from '../../assets/images/sms.png'
import call from '../../assets/images/call.svg'
import clock from '../../assets/images/clock.svg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import {  FaLocationArrow, FaMailBulk, FaMobile, FaPhone } from "react-icons/fa";
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zv4ir8a', 'template_3r7r9ww', form.current, 'VjgLXv1xV-qLzaGnj')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
  title: 'Success!',
  text: 'your email send successfully',
  icon: 'success',
  confirmButtonText: 'Congratulation!'
})
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='py-24 mb-16'>
      <div className='md:w-1/3 space-y-2 mb-10'>
        <SectionTitle title='Contact me' />
          <RightTitle text='Feel free to reach out to us at any time. We value your  feedback, inquiries, and collaboration.'/>
    </div>
       <div className='md:flex gap-24 items-center justify-between'>
      
      <div className='lg:w-1/2' >
        <form ref={form} onSubmit={sendEmail} className='lg:w-2/3 lg:pl-10  space-y-4'>
          <input className=' w-full py-4 px-7  border-gray-300 border-0 border-b text-[#64656D]' type="text" placeholder='Name' />
        <br />
        <input className=' w-full py-4 px-7  border-gray-300 border-0 border-b text-[#64656D]' type="text" placeholder='Email' />
        <br />
          <input className=' w-full py-4 px-7  border-gray-300 border-0 border-b text-[#64656D]' type="text" placeholder='Message' />
          <button type='submit' className="btn btn-block rounded-full text-white bg-gradient-to-r from-[#5F90F0] to-[#185AD9] font-medium">Submit</button>
        </form>
      </div>
      <div className='flex-1 '>
          <div className=' relative'>
            <img className='rounded-xl w-full' src={img} alt="" />
            <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-xl"></div>
            <div className=' hidden lg:block absolute bg-white z-10   lg:p-8 lg:pr-16 shadow-xl rounded-2xl   -left-24 space-y-4 top-24'>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="vuesax/linear/building">
<g id="building">
<path id="Vector" d="M16.667 29.3334H5.44029C3.89362 29.3334 2.62695 28.0934 2.62695 26.5734V6.78673C2.62695 3.29339 5.22695 1.70673 8.41362 3.26673L14.3336 6.17339C15.6136 6.80006 16.667 8.46672 16.667 9.88006V29.3334Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M29.2937 20.0802V25.1202C29.2937 28.0002 27.9603 29.3336 25.0803 29.3336H16.667V13.8936L17.2937 14.0269L23.2937 15.3736L26.0003 15.9736C27.7603 16.3602 29.2003 17.2669 29.2803 19.8269C29.2937 19.9069 29.2937 19.9869 29.2937 20.0802Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M7.33301 12.0002H11.9597" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M7.33301 17.3335H11.9597" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" d="M23.293 15.3735V19.6669C23.293 21.3202 21.9463 22.6669 20.293 22.6669C18.6396 22.6669 17.293 21.3202 17.293 19.6669V14.0269L23.293 15.3735Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_6" d="M29.2796 19.8269C29.1996 21.4002 27.893 22.6669 26.293 22.6669C24.6396 22.6669 23.293 21.3202 23.293 19.6669V15.3735L25.9996 15.9735C27.7596 16.3602 29.1996 17.2669 29.2796 19.8269Z" stroke="#64656D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
                <p>michael.mitc@example.com</p>
              </div>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <img src={sms} alt="" />
                <p>michael.mitc@example.com</p>
              </div>
             
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <img src={clock} alt="" />
                <p>michael.mitc@example.com</p>
              </div>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <img src={call} alt="" />
                <p>michael.mitc@example.com</p>
              </div>
            </div>
            <div className='block lg:hidden absolute bg-white z-10 p-4   shadow-xl rounded-2xl left-12 mx-auto   space-y-2 top-2/4'>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <img src={call} alt="" />
                <p>
michael.mitc@example.com
</p>
              </div>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <img src={clock} alt="" />
                <p>michael.mitc@example.com</p>
              </div>
              <div className=' gap-2 flex text-[#64656D] items-center'>
                <img src={sms} alt="" />
                <p>michael.mitc@example.com</p>
              </div>
             
            </div>
         
          </div>
          
          
          
      </div>
    </div>
   </div>
  );
};

export default Contact;