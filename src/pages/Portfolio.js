import React from 'react';

import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import Button28 from '../components/Button28'; 

const Portfolio = () => {
  return ( 
    <motion.section 
    initial={{ opacity: 0, y: '100%' }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: '100%' }}  
    transition={ transition1 }
    className='section bg-creme'>
      <div className='container mx-auto h-full relative overflow-y-hidden'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div 
          initial={{ opacity: 0, y: '-80%' }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: '-80%' }}  
          className='flex flex-col p-4 lg:items-start'> 
            <h1 className='h1'>Our programs</h1>
            <p className='mb-12 max-1-sm'>
              Under Construction: Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
              Nullam nec dui in nunc ultrices
            </p> <br/>

            {/* ask if this wording for btn is fine */}
            <Link to={'/contact'}>
              <Button28>Donate now</Button28>
            </Link>
          </motion.div> 

          {/* image grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            {/* image 1 */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image1} alt='Community Initiative: Bioskop Screenings' 
              className='h-full lg:h-[220px] hover:scale-110 transition-all duration-500 object-cover'/>
            </div>
            {/* image 2 */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image2} alt='Community Initiative: Bioskop Screenings' 
              className='h-full lg:h-[220px] hover:scale-110 transition-all duration-500 object-cover'/>
            </div>
            {/* image 3 */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image3} alt='Community Initiative: Bioskop Screenings' 
              className='h-full lg:h-[220px] hover:scale-110 transition-all duration-500 object-cover'/>
            </div>
            {/* image 4 */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image4} alt='Community Initiative: Bioskop Screenings' 
              className='h-full lg:h-[220px] hover:scale-110 transition-all duration-500 object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </motion.section> 
    
  );
};

export default Portfolio;
