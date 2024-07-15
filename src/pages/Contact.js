import React from 'react';
import companyImg from '../img/contact/9.jpeg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebookF } from 'react-icons/fa';
import Button28 from '../components/Button28';

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
            <p className='font-primary text-[20px] mb-12'>Bank: FNB/RMB <br/>Account Holder: UMPHAKATHI ARTISTS GROUP NPO<br/>Account type: GOLD BUSINESS ACCOUNT<br/>Account Number: 63093389899<br/>Branch Code: 250655</p> 
            <p className='font-primary text-[20px] mb-3'>Keep in touch with us below:</p>
            
            <ul className="flex gap-x-4 justify-center lg:justify-start">
              <li>
                <a href="mailto:info@umphakathiartists.org" target="_blank" rel="noopener noreferrer">
                  <MdOutlineEmail className="text-2xl text-primary" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/umphakathi_artists?igsh=MWlxcnJyaTU2djJ6ZA==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-primary" />
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029VaePKZHDeON9y9rFo63Y" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl text-primary" />
                </a>
              </li>
              <li>
                <a href="https://x.com/umphakathi_art?s=11" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl text-primary" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100071002278104&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-2xl text-primary" />
                </a>
              </li>
            </ul>
            
            <br/>
            <a href='https://linktr.ee/umphakathiartists?utm_source=linktree_profile_share' target='_blank' rel='noreferrer' className='mt-4'>
              <Button28>Linktree</Button28>  <br/><br/>
            </a>
          </motion.div>

          {/* image */}
          <motion.div 
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ transition: transition1, duration: 1.5 }} 
          className='lg:flex-1'>
            <img src={companyImg} alt='company' className='opacity-80' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
