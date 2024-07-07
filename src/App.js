import React, { useContext } from 'react';

import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';

import { CursorContext } from './context/CursorContext';

const App = () => {
  const {cursorVariants} = useContext(CursorContext);
  console.log(cursorVariants);
  return ( 
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* cursor */}
      <motion.div 
      variants={cursorVariants}
      animate={'default'}
      className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 z-50 pointer-events-none'
      ></motion.div>
    </>
  )
};

export default App;
