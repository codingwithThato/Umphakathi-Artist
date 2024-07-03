import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';

//menu variants:
const menuVariants = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

const MobileNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return <nav className='text-primary xl:hidden'>
    {/* nav open button */}
    <div 
    onClick={()=> setIsOpenMenu(true)} 
    className='text-3xl cursor-pointer'>
      <CgMenuRight className='text-2xl' />
    </div>

    {/*menu*/}
    <motion.div 
      variants={menuVariants}
      initial='hidden'
      animate={isOpenMenu ? 'visible' : ''}
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
   
    {/* icon */}
      <div 
      onClick={()=> setIsOpenMenu(false)}
      className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
        <IoMdClose />
      </div>
      
      {/* menu list */}
      <ul className='flex flex-col gap-y-8 text-primary font-primary items-center justify-center h-full'>
        <li>
          <Link to='/' className='text-2xl'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='text-2xl'>Projects</Link>
        </li>
        <li>
          <Link to='/portfolio' className='text-2xl'>Our Team</Link>
        </li>
        <li>
          <Link to='/contact' className='text-2xl'>Donate</Link>
        </li>
      </ul>
    </motion.div>
  </nav>;
};

export default MobileNav;
