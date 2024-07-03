import React from 'react';
import companyImg from '../img/home/home.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        
        {/* <div className='flex flex-col justify-center'>
          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>Umphakathi Artists</h1>
            <p className='text-[22px] lg:text-[36px] font-primary italic mb-4 lg:mb-12'>A community of artists</p>
            <Link to={'/contact'} className='btn mb-[30px] font-primary text-[26px] px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'>
              Donate now
            </Link>
          </div>
          <div className='flex justify-end lg:max-h-max'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <img src={companyImg} alt='company' />
            </div>
          </div>
        </div> */}

        {/* text + img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={companyImg} alt='company' />
          </div>

          {/* text */}
          <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>Our programs</h1>
            <p className='mb-12 max-1-sm'>
              first paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in nunc ultrices
            </p> <br/>

            <p className='mb-12 max-1-sm'>Our collaborators</p>

            {/* insert the scrolling carousel thingy from ascernity */}
            <p>/* insert the scrolling carousel thingy from ascernity */</p>
            
            <br/>
            <Link to={'/portfolio'} className='btn'> View more about us here </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
