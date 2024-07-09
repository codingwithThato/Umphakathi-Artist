import React from 'react';
import './Button28.css'; // Import the CSS file for custom hover and active states

const Button28 = ({ children, disabled }) => {
  return (
    <button
      className={`button-28 
        appearance-none 
        bg-transparent 
        border-2 
        border-black 
        rounded-lg 
        box-border 
        text-gray-800 
        cursor-pointer 
        inline-block 
        font-sans 
        font-semibold 
        text-base 
        leading-normal 
        m-0 
        min-h-15 
        p-4 
        text-center 
        no-underline 
        transition-all 
        duration-300 
        ease-in-out 
        select-none 
        w-full 
        transform 
        ${disabled ? 'pointer-events-none' : ''}`}
      role="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button28;
