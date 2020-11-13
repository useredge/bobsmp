import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Logo from "./Components/Logo/Logo";
import Buttons from "./Components/Buttons/Buttons";
import Player from "./Components/Player/Player";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import { motion } from 'framer-motion'
import './Home.css';

const Home = () => {

    const variants = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            duration: 0.5,
            staggerChildren: 2,
            delay: 0.5
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
            duration: 0.25,
            staggerChildren: 2,
          },
        },
      }

  return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
          <Header link="/images/bareboneBg.webp"/>
          <Navbar/>
          <Logo/>
          <Buttons/>
          <Player/>
          <Team />
          <Footer />
      </motion.div>
  );
}

export default Home