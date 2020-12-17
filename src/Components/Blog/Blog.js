import {useEffect, useState} from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import './Blog.css';
import client from '../client'
import BlogItem from '../BlogItem/BlogItem'
import Footer from "../Footer/Footer"
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'
import {Link} from 'react-router-dom'

const Blog = () => {
  
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async() => {
      const resp = await client.getEntries();
      setArticles(resp.items);
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

  const slides = articles.slice(0, 3).map((article, index) => <SwiperSlide tag={Link} to={"blog/" + article.fields.path} key={index}><img src={article.fields.thumbnail.fields.file.url} className="slide"/></SwiperSlide>)

  if (articles.length === 0) return <h1 style={{fontSize: '100px', color: 'transparent', width: '100%', textAlign: 'center', fontFamily: 'MCTen'}}>Loading...</h1>

  return (
      <motion.div
        variants={list}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{backgroundColor: '#190f1d'}}
      >
      <Navbar />
        <div className="centerer">
          <div className="carousel">
          <Swiper 
            id="main"
            spaceBetweenSlides={0}
            >
            {slides}
          </Swiper>
          </div>
        </div>
        <Footer/>
    </motion.div>
    )
    
  }

export default Blog;