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
  </nav>;
};

export default MobileNav;
