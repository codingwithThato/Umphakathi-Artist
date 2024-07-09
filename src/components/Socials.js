import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
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
    </div>
  );
};

export default Socials;
