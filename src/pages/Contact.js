import React from 'react';
import companyImg from '../img/home/bioskop-home.jpeg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={ transition1 }
    className='section bg-creme'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          
          {/* bg */}
          {/* <div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>bg</div> */}

          {/* text + contact deeets */}
          <motion.div 
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }} 
          className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Donate</h1>
            <p className='mb-12'>Under Construction: bank details go here</p> 
          </motion.div>

          {/*  */}
          {/* contact deeets section --> click on highlighted hovered-over email + banking deets*/}
          {/*  */}

          {/* image */}
          <motion.div 
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ transition: transition1, duration: 1.5 }} 
          className='lg:flex-1'>
            <img src={companyImg} alt='company' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
