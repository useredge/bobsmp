import { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Logo from "./Components/Logo/Logo";
import { IpButton } from "./Components/Buttons/Buttons";
import Player from "./Components/Player/Player";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import { motion } from 'framer-motion'
import './Home.css';
import BlogPreview from './Components/BlogPreview/BlogPreview';
import client from './Components/client'

const Home = () => {

    const [articles, setArticles] = useState([]);

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

      const fetchData = async() => {
        try {
          const resp = await client.getEntries({limit: 3})
          setArticles(resp.items);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchData();
      }, [])

  return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{backgroundImage: "url('/images/bricks.jpg')"}}
      >
          <Header link="/images/newBg.jpg" position='center'/>
          <Navbar/>
          <Logo/>
          <IpButton/>
          <Player/>
          <Team />
          <BlogPreview posts={articles}/>
          <Footer />
      </motion.div>
  );
}

export default Home