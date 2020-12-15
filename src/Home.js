import { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Logo from "./Components/Logo/Logo";
import { IpButton } from "./Components/Buttons/Buttons";
import Player from "./Components/Player/Player";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import { motion, useAnimation } from 'framer-motion'
import './Home.css';
import BlogPreview from './Components/BlogPreview/BlogPreview';
import client from './Components/client'
import VisibilitySensor from 'react-visibility-sensor'

const Home = () => {

    const [articles, setArticles] = useState([]);

    const pageVariants = {
        visible: {
          opacity: 1,
          background: 'url("/images/bricks.jpg")',
          transition: {
            when: "beforeChildren",
            duration: 0.5,
            staggerChildren: 2,
            delay: 0.5
          },
        },
        hidden: {
          opacity: 0,
          background: 'url("/images/bricks.jpg")',
          transition: {
            when: "afterChildren",
            duration: 0.25,
            staggerChildren: 2,
          },
        },
      }

      const blogVariants = {
        visible: {
          background: 'linear-gradient(to top, #e5b754 0%, rgba(229, 183, 82, 0) 0%)',
          transition: {type: "easeInOut", duration: 0.75}
        },
        hidden: {
          background: 'linear-gradient(to top, #e5b754 45%, rgba(229, 183, 82, 0) 0%)',
          transition: {type: "easeInOut", duration: 0.75}
        }
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
      
      const controls = useAnimation();

      const animateIn = () => {
        controls.start("visible");
      }

      const animateOut = () => {
        controls.start("hidden")
      }

      const onChange = (isVisible) => {
        if(isVisible) {
          animateIn()
        }
        else 
        animateOut();
        console.log(isVisible)
      }

  return (
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
          <Header link="/images/newBg.jpg" position='center'/>
          <Navbar/>
          <Logo/>
          <IpButton/>
          <Player/>
          <Team />
          <motion.div className="centerer"
          style={{paddingTop: '10vh'}}
          animate={controls}
          variants={blogVariants}
          >
          <BlogPreview posts={articles}/>
          </motion.div>
          <VisibilitySensor partialVisibility={true} onChange={onChange}>
          <Footer />
          </VisibilitySensor>
      </motion.div>
  );
}

export default Home