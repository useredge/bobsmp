import React from 'react'
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion'
import './Shop.css';

const variants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.5,
        delayChildren: 2,
        delay: 0.2
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.25,
        delayChildren: 2,
      },
    },
  }

const Shop = () => {

    return (
        <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        >
            <Header link="/images/shopBg.png"/>
            <Navbar />
              <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1, transitionDuration: 2.5}}
              >
                  <div className="iframeContainer">
                    <div className="gradientTop"/>
                    <iframe title="Shop" className="frame" src="https://buy.bobssmp.store"/>
                    <div className="gradientBottom"/>
                  </div>
                </motion.div>
        <Footer />
        </motion.div>
    )
}

export default Shop;