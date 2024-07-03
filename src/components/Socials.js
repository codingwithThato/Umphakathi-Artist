import React from 'react';
import { MdOutlineEmail } from "react-icons/md";

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href="info@umphakathiartists.org" target='_blank'> {/* this is the email link fix !!! */} 
            <MdOutlineEmail className='text-2xl text-primary' />
            
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
