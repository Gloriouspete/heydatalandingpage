import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
export const Boxman = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='boxman'>
        <Link to="/">
          <div className="homie"><p className='layer'>HOME</p>
          </div>
        </Link>

        <Link to="/signup"><div className='homie'
        >
         <p className='layer'>CREATE / JOIN HALL</p>
        </div></Link>
        <Link to="/socials">
          <div className='homie'>
          <p className='layer'>DONATE</p>
          </div>
        </Link>
      </motion.div>
    </>
  )
}