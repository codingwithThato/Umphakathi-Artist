import React from 'react';

import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/image02.jpeg';
import Image3 from '../img/portfolio/image03.jpeg';
import Image4 from '../img/portfolio/4.png';
import Image5 from '../img/portfolio/8.jpeg';
import Image6 from '../img/portfolio/7.jpeg';
import Image7 from '../img/portfolio/2.jpeg';
import Image8 from '../img/portfolio/12.png';

// images for card-stack
import Event1 from '../img/events/event0.jpg';
import Event2 from '../img/events/event1.jpeg';
import Event3 from '../img/events/event2.jpeg';
import Event4 from '../img/events/event3.jpeg';
import Event5 from '../img/events/event4.jpeg';
import Event6 from '../img/events/event5.jpeg';
import Event7 from '../img/events/event6.jpeg';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CardStack } from '../components/ui/card-stack';
import Button28 from '../components/Button28'; 

// card components
import { CardDemo } from '../components/CardDemo';
import { CardDemo2 } from '../components/CardDemo2';
import { CardDemo3 } from '../components/CardDemo3';
import { CardDemo4 } from '../components/CardDemo4';

const items = [
  {
    id: 1,
    image: Event1,
  },
  {
    id: 2,
    image: Event2,
  },
  {
    id: 3,
    image: Event3,
  },
  {
    id: 4,
    image: Event4,
  },
  {
    id: 5,
    image: Event5,
  },
  {
    id: 6,
    image: Event6,
  },
  {
    id: 7,
    image: Event7,
  }
];

const Portfolio = () => {
  return ( 
    <motion.section 
    initial={{ opacity: 0, y: '100%' }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: '100%' }}  
    transition={ transition1 }
    className='section bg-creme min-h-screen overflow-y-auto'>
      
      {/* main container div */}
      <div className='container mx-auto h-full relative overflow-y-hidden'>
        {/* first section */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div 
          initial={{ opacity: 0, y: '-80%' }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: '-80%' }}  
          className='flex-1 pt-26 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'> 
            <h1 className='h1'>Our programs</h1>
            <p className='mb-12 max-w-md'>
              We have a variety of programs that we run to help uplift our community. 
              These programs are aimed at providing a platform for local artists to showcase their work, 
              as well as to provide a space for the community to come together and enjoy the arts.
            </p>

            {/* ask if this wording for btn is fine */}
            <Link to={'/contact'}>
              <Button28>Donate now</Button28>
            </Link>
          </motion.div> 

          {/* image grid */}
          <div className='lg:grid grid-cols-2 lg:gap-2 hidden mb-0 lg:mb-12'>
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

      {/* second section w card */}
      <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-24 mt-12 lg:mt-24 justify-center items-center lg:items-start sm:mx-10">
      <a href="#community"><CardDemo /></a>
      <a href="#hours"><CardDemo2 /></a>
      <a href="#experiences"><CardDemo3 /></a>
      <a href="#bioskop"><CardDemo4 /></a>
      
      {/* <ScrollLink to="experiences" smooth={true} duration={500}><CardDemo4 /></ScrollLink> */}

      </div>

      {/* sections to explain each topic further */}

      {/* bioskop screenings */}
      <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-24 my-12 lg:mt-24 justify-center items-center sm:mx-10 p-11">
        <div className='flex-1 flex flex-col p-4 ml-12 lg:items-start'>
        {/* <h1 className="font-primary text-xl md:text-2xl">C O M M U N I T Y  &nbsp;&nbsp;&nbsp;&nbsp;B I O S K O P  &nbsp;&nbsp;&nbsp;&nbsp;S C R E E N I N G S</h1> */}
        <h1 id="community" className="font-primary italic lg:text-[36px] text-[26px]">Community Bioskop Screenings</h1>
          <ul className='list-disc pl-5 font-normal text-xl my-4'>
            <li>The Biskop Exhibition is a monthly social initiative
            inclusive of screening local films for people and
            children in underprivileged communities to enable
            access to a cinematic experience. We provide free
            popcorn and a relatable movie for the audience to
            ensure a full cinematic experience.</li>
            <li>This program further serves as a social gathering,
            building community through art, and using art; in
            this particular instance the medium of film, to
            foster positive change in society. Contributing
            social cohesion within our communities.</li>
            <li>The program further serves as a reimagining of
            the local film distribution model and making it
            inclusive.</li>
          </ul>
        </div>
      
        <div className='flex-1 flex justify-center'>
          {/* <div className='overflow-hidden'> */}
            <img src={Image5} alt='Community Initiative: Bioskop Screenings' className='w-full rounded'/>
          {/* </div> */}
        </div>
      </div>

      {/* T H E P E O P L E ’ S B I S K O P */}
      <div className="flex flex-col lg:flex-row-reverse gap-y-12 lg:gap-x-24 my-12 lg:mt-24 justify-center items-center sm:mx-10 p-11">
       
        <div className='flex-1 flex flex-col p-4 ml-12 lg:items-start'>
          {/* <h1 className="font-primary  text-xl md:text-2xl">T H E &nbsp;&nbsp;&nbsp;&nbsp;P E O P L E ' S &nbsp;&nbsp;&nbsp;&nbsp;B I S K O P</h1> */}
        <h1 id="bioskop" className="font-primary italic lg:text-[36px] text-[26px]">The People's Bioskop</h1>
          <ul className='list-disc pl-5 font-normal text-xl my-4'>
            <li>A commemorative experience honoring the Class of 1976 through a curated experience of local cinema in multiple townships within Soweto.</li>
            <li>Tin collaboration with a number of creative
            organisations, and with the buy in of local
            filmmakers, young volunteers, and the
            community at large we were able to facilitate
            screenings in 11 different locations around
            Soweto, with 10% of the proposed budget.</li>
          </ul>
        </div> 
        <div className='flex-1 flex justify-center'>
          <img src={Image6} alt='Community Initiative: Bioskop Screenings' className='w-full rounded'/>
        </div>
      </div>

       {/* H/OURS */}
       <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-24 my-12 lg:mt-24 justify-center items-center sm:mx-10 p-11">
        <div className='flex-1 flex flex-col p-4 ml-12 lg:items-start'>
        {/* <h1 className="font-primary text-xl md:text-2xl">H / O U R S</h1> */}
        <h1 id="hours" className="font-primary italic lg:text-[36px] text-[26px]">H/OURS</h1>
          <ul className='list-disc pl-5 font-normal text-xl my-4'>
            <li>H/OURS is an extra mural cultural activity
            facilitated in public schools that do not have
            access to creative education. The purpose of
            this program is to have scholars engage in
            social endeavors after school that have
            numerous benefits. These programs will be
            scheduled once every once every month in the
            respective schools. </li>
            <li>The program currently runs
            a film club at the National School of the Arts
            where students are introduced to methods of
            filmmaking using the recourses they have
            available to them like their phones.</li>
          </ul>
        </div>
      
        <div className='flex-1 flex justify-center'>
          {/* <div className='overflow-hidden'> */}
            <img src={Image7} alt='Community Initiative: Bioskop Screenings' className='w-full rounded'/>
          {/* </div> */}
        </div>
      </div>

      {/* EXPERIENCES */}
      <div className="flex flex-col lg:flex-row-reverse gap-y-12 lg:gap-x-24 my-12 lg:mt-24 justify-center items-center sm:mx-10 p-11">
        <div className='flex-1 flex flex-col p-4 ml-12 lg:items-start'>
          {/* <h1 className="font-primary text-xl md:text-2xl">E X P E R I E N C E S</h1> */}
        <h1 id="experiences" className="font-primary italic lg:text-[36px] text-[26px]">Experiences</h1>
          <ul className='list-disc pl-5 font-normal text-xl my-4'>
            <li>As creative non-profit organisation we
            understand that our community initiatives work
            in tandem with our curated experiences to
            elevate the social viability of the work that we do
            for people. especially artists, to get involved and
            play a part in contributing to the betterment of
            their society.</li><br/>
            {/* songs of freedom ==> caption for image actually */}
            <p className='italic'> Songs of Freedom:
            A multi-media piece featuring a jazz ensemble and
            audiovisual presentation exploring what freedom
            means to the youth of today through renditions of
            freedom songs. This took place at the prestigious
            Market Theatre on 18 May 2024.</p>
          </ul>
        </div>
        <div className='flex-1 flex justify-center'>
          <img src={Image8} alt='Community Initiative: Bioskop Screenings' className='w-full rounded'/>
        </div>
      </div>

      {/* images showcasing the different events held */}
      {/* <div className='items-center flex flex-col mb-5 lg:grid-cols-4 gap-2'>
        <h1 className='font-primary lg:text-[36px] text-[26px]'>Events</h1>
        <CardStack items={items} offset={15} scaleFactor={0.05} />
      </div> */}
      <br/>
      <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-24 lg:mt-24 justify-center items-center sm:mx-10 p-11">
        <div className='flex-1 flex p-4 mb-12'>
          <h1 className='font-primary lg:ml-80 lg:text-[36px] text-[26px]'>Events we have held:</h1>
        </div>
        <div className='flex-1 flex justify-center'>
        <CardStack items={items} offset={15} scaleFactor={0.05} /> 
        </div>
      </div>

      {/* more images showacasing umphakathi artists */}
      {/* <div className='justify-center flex flex-auto lg:grid-cols-4 gap-2'>
        <h2 className='font-primary text-xl md:text-2xl'>Gallery</h2>
       
      </div> */}
      
    </motion.section> 
    
  );
};

export default Portfolio;
