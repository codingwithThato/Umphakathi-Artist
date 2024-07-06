import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { transition1 } from '../transitions';

//importing images below
import CompanyImg from '../img/home/bioskop-home.jpeg';

const Home = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }} 
    transition={transition1} 
    className='section bg-creme'>
      <div className=' container mx-auto h-full relative'>
        {/* text + img wrapper */}
        <div className='flex flex-col justify-center'>
          
          {/* text */}
          <motion.div 
          initial={{ opacity: 0, y: '-50%' }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: '-50%' }} 
          transition={transition1} 
          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>Umphakathi Artists</h1>
            <p className='text-[22px] lg:text-[36px] font-primary italic mb-4 lg:mb-12'>A community of artists</p>
            <p className='text-[16px] lg:text-[26px]  mb-4 lg:mb-12'>Together we can use art to influence and engender active citizenry and foster positive change in our communities and society at large.</p>
 
            <Link to={'/contact'} className='btn mb-[30px] font-primary text-[26px] px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'>
                Donate now 
            </Link>   

            <p className='mb-5 max-1-sm'>Our collaborators</p>

            {/* insert the scrolling carousel thingy from ascernity */}
            <p> ---- insert the scrolling carousel thingy from ascernity --- </p>

            <br/><br/>
            <Link to={'/about'} className='btn'>Who we are</Link>
                
          </motion.div>

          {/* img */}
          <div className='flex justify-end lg:max-h-max'>
            <motion.div
            //  initial={{ scale: 0 }} 
            //  animate={{ scale: 1 }} 
            //  exit={{ scale: 0 }}  
            //  transition={ transition1 } 
             className='relative lg:-right-40 overflow-hidden '>
              <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={CompanyImg} alt='company' />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
