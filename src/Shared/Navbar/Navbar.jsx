
import { NavLink } from "react-router-dom";


import Container from '../Container/Container';
import logo from '../../assets/logo.png'
import RoudedBtn from "../RoudedBtn/RoudedBtn";

const Navbar = () => {
	
  return (
    <div>
			<Container>
				

				<div className="navbar py-5 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Home</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/portfolio" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Portfolio</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">About us</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Services</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/testimonial" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Testimonials</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Blogs</NavLink>
			</li>
		
      </ul>
    </div>
						<NavLink to='/' className="btn btn-ghost text-xl">
							<img src={logo} alt="" className='' />
		</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Home</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/portfolio" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Portfolio</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">About us</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/services" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Services</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/testimonial" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Testimonials</NavLink>
			</li>
			<li id="sidebar"  className="flex">
				<NavLink rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 text-[#64656D] text-[16px] font-semibold ">Blogs</NavLink>
			</li>
		
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/contact'><RoudedBtn text='contact'/></NavLink>
  </div>
</div>
		 </Container>
    </div>
  );
};

export default Navbar;