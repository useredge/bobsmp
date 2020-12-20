import {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import './Blog.css';
import client from '../client'
import BlogItem from '../BlogItem/BlogItem'
import Footer from "../Footer/Footer"
import { motion } from 'framer-motion'
import { AnimateOnChange } from 'react-animation'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, EffectCoverflow} from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import {Link} from 'react-router-dom'

const Blog = () => {

  SwiperCore.use([EffectCoverflow])
  
  const [articles, setArticles] = useState([]);
  const [current, setCurrent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async() => {
    setIsLoading(true);
      const resp = await client.getEntries({
        content_type: 'blog',
        order: '-fields.date'
      });
      setArticles(resp.items);
      setCurrent(resp.items[1])
      setIsLoading(false)
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

  const slides = articles.slice(0, 3).map((article, index) => 
  <SwiperSlide
      tag={Link}
      to={"blog/" + article.fields.path} 
      key={index} 
      style={{backgroundImage: 'url(' + article.fields.thumbnail.fields.file.url + ')'}}
      alt={article.fields.date}
      virtualIndex={index}
      >
  </SwiperSlide>)

  const swapPositions = (array, a ,b) => {
    [array[a], array[b]] = [array[b], array[a]]
  }

  swapPositions(slides, 2, 0);
  swapPositions(slides, 1, 2);

  if (isLoading) return 'Loading...'
  
  return (
      <motion.div
        variants={list}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{backgroundColor: '#190f1d'}}
      >

      <Navbar />

      <div className="blogHeader">

        <p className="updates">Keep up with our latest updates!</p>
          <AnimateOnChange
            animationIn="fadeIn"
            animationOut="fadeOut"
            durationOut={1000}>

            <p className="selectedArticle">{current.fields.title}</p>

            <div className="statusDate">
              <p>{current.fields.status}&nbsp;-</p>
              <p>&nbsp;{current.fields.date}</p>
            </div>
            </AnimateOnChange>

      </div>

          <Swiper 
            id="main"
            effect="coverflow"
            loop={false}
            grabCursor={true}
            coverflowEffect={{rotate: 20, depth: 1000, slideShadows: true}}
            centeredSlides={true}
            spaceBetween={-200}
            slidesPerView={3}
            initialSlide={1}
            preloadImages={true}
            onSlideChange={(swiper) => {setCurrent(articles[swiper.realIndex])}}
            >
            {slides}
          </Swiper>

        <Footer/>
    </motion.div>
    )
    
  }

export default Blog;