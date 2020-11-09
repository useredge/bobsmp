import React from 'react'
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion'
import './Help.css';

const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.5,
        staggerChildren: 2,
        delay: 0.2
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.5,
        staggerChildren: 2,
        delay: 0.2
      },
    },
  }

const Help = () => {

    return (
        <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        >
            <Header link="/images/helpbg.jpg"/>
            <Navbar />
                <div className="centerer">
                  <div className="helpContainer">
                      <img src="/images/book.png" alt="thumbnail" className="helpThumbnail"/>
                      <h1 className="helpTitle"><i class="fas fa-wrench"/> This page is currently work-in-progress</h1>
                      <p className="helpText">Come back later!</p>
                  </div>
                </div>
        <Footer />
        </motion.div>
    )

}

export default Help;