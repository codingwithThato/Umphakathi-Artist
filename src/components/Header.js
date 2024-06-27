import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* Logo here !*/}
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='logo' 
          className='w-[100px] lg:w-[150px]' /> {/* the className + stuff is added by copilot */}
        </Link>

        {/* nav bar here !*/}
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to='/' className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to='/about' className='text-[#696c6d] hover:text-primary transition'>Projects</Link>
          <Link to='/portfolio' className='text-[#696c6d] hover:text-primary transition'>Our Team</Link>
          <Link to='/contact' className='text-[#696c6d] hover:text-primary transition'>Donate</Link>
        </nav>
      </div>
      
      {/* socials here !*/}
      <Socials />
      {/* mobile nav here !*/}
      <MobileNav />
    </header>
  );
};

export default Header;
