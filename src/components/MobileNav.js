import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';

const MobileNav = () => {
  return <nav>
    {/* nav open button */}
    <div className='text-3xl cursor-pointer'>
      <CgMenuRight className='text-2xl' />
    </div>
    {/*menu*/}
    <div className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      <div>icon</div>
      {/* menu list */}
      <ul className='flex flex-col gap-y-4 items-center justify-center h-full'>
        <li>
          <Link to='/' className='text-2xl'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='text-2xl'>About</Link>
        </li>
        <li>
          <Link to='/portfolio' className='text-2xl'>Portfolio</Link>
        </li>
        <li>
          <Link to='/contact' className='text-2xl'>Contact</Link>
        </li>
      </ul>
      </div>
  </nav>;
};

export default MobileNav;
