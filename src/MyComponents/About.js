import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mt-5">
      <motion.div
        className="card shadow-lg p-4 bg-dark text-light rounded-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="card-title mb-4">About This Todo App</h2>
        <p className="card-text">
          This is a simple React application built to help you organize your daily tasks. 
          You can add, view, and delete your todos to keep track of what needs to be done.
        </p>
        <p className="card-text">
          It is built with <strong>React</strong> and <strong>React Router</strong> for smooth page transitions, 
          along with <strong>Bootstrap</strong> to make it look clean and responsive.
        </p>
        <p className="card-text">
          Created by <strong>Imran</strong> with ❤️ and dedication.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
