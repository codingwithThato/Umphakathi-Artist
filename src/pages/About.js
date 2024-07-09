import React from 'react';
import companyImg from '../img/about/house.jpeg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import Button28 from '../components/Button28';
import InfiniteMovingCards from '../components/InfiniteMovingCards'; 

//images
import accessibility from '../img/about/accessibility.svg';
import community from '../img/about/community.svg';
import localArt from '../img/about/localArtist.svg';

// Importing images for horizontal scroll thingy below
import Collaborator1 from '../img/about/collaborator1.jpeg';
import Collaborator2 from '../img/about/collaborator2.jpeg';
import Collaborator3 from '../img/about/collaborator3.jpeg';
import Collaborator4 from '../img/about/collaborator4.jpeg';
import Collaborator5 from '../img/about/collaborator5.jpeg';
import Collaborator6 from '../img/about/collaborator6.jpeg';
import Collaborator7 from '../img/about/collaborator7.jpeg';
import Collaborator8 from '../img/about/collaborator8.jpeg';
import Collaborator9 from '../img/about/collaborator9.jpeg';
import Collaborator10 from '../img/about/collaborator10.jpeg';
import Collaborator11 from '../img/about/collaborator11.jpeg';
import Collaborator12 from '../img/about/collaborator12.jpeg';

const About = () => {
  const collaboratorImages = [Collaborator1, Collaborator2, Collaborator3, Collaborator12, Collaborator4, Collaborator5, Collaborator6, Collaborator7, Collaborator8, Collaborator9, Collaborator10, Collaborator11];

  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: '100%' }}  
      transition={ transition1 }
      className='section bg-creme min-h-screen overflow-y-auto'>
      
      {/* main container div */}
      <div className='container mx-auto h-full relative px-4'>

        {/* text + img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none hidden lg:block '>
            <img src={companyImg} alt='company' className='opacity-80'/>
          </div>

          {/* text */}
          <motion.div 
          initial={{ opacity: 0, y: '-80%' }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: '-80%' }}  
          transition={ transition1 } 
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1 lg:text-[100px]'>Who we are</h1>
            <p className='mb-12 max-1-sm'>
            Umphakathi Artist is a Non-Profit Organisation
            established in 2019, meaning a Community of Artists.
            </p> 

            <p className='text-[20px] lg:text-[20px] font-primary italic mb-4 lg:mb-12'>Our collaborators</p>

            {/* insert the scrolling carousel thingy from ascernity */}
            <InfiniteMovingCards images={collaboratorImages} />

            <br/>
              <Link to={'/portfolio'}>
                <Button28>More about our programs</Button28>
              </Link>
            </motion.div>
        </div>

        {/* 3 icons */}
        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-24 mt-12 lg:mt-24 justify-center items-center lg:items-start sm:mx-10">
          <div className="flex flex-col text-center p-4 mt-11 lg:mt-0 items-center">
            <img src={community} alt="community" className="w-40 h-40 object-contain" />
            <h2 className="text-[20px] font-primary mt-4">Building Community</h2>
            <p className="text-[16px]">
              Art has the power to bring people together. <br />
              Through our programs we aim to build community <br />
              and foster social cohesion with the spirit of ubuntu at our core.
            </p>
          </div>

          <div className="flex flex-col text-center items-center">
            <img src={accessibility} alt="accessibility" className="w-40 h-40 object-contain" />
            <h2 className="text-[20px] font-primary mt-4">Enabling Accessibility</h2>
            <p className="text-[16px]">
              With the programs that we run we aim to enable accessibility <br />
              to experiences that would be usually reserved for the privileged. <br />
              We further aim to give young artists platforms to showcase their work <br />
              and get a start in the industry
            </p>
          </div>

          <div className="flex flex-col text-center items-center">
            <img src={localArt} alt="local art" className="w-40 h-40 object-contain" />
            <h2 className="text-[20px] font-primary mt-4">Contributing to the local artists landscape</h2>
            <p className="text-[16px]">
              Overall, we wish to make a contribution <br />
              to the growing the artistic landscape <br />
              of this country through the programs and initiatives that we run.  <br />
              To ensure sustainability so we can measure our impact 
              in the <br />communities that we operate in.
            </p>
          </div>
        </div>
        <br/><br/>
      </div>
    </motion.section>
  );
};

export default About;
