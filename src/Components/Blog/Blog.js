import {useEffect, useState} from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import './Blog.css';
import client from '../client'
import BlogItems from '../BlogItems/BlogItems'
import Footer from "../Footer/Footer"
import { motion } from 'framer-motion'

const Blog = () => {
  
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async() => {
    try {
      const resp = await client.getEntries();
      setArticles(resp.items);

    } catch (error) {
      console.log(error);
    }
    
  }
  
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 2,
        duration: 1,
        delay: 0.5
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        delayChildren: 2,
        duration: 0.25,
      },
    },
  }

  return (
      <motion.div
        variants={list}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
      <Navbar />
        <div className="centerer">
          <div className="blogGridContainer">
            <BlogItems posts={articles}/>
          </div>
        </div>
        <Footer/>
    </motion.div>
    )
    
  }

export default Blog;