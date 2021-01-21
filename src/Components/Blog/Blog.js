import {useEffect, useState, useRef} from "react";
import Navbar from "../Navbar/Navbar";
import './Blog.css';
import client from '../client'
import BlogItem from '../BlogItem/BlogItem'
import Footer from "../Footer/Footer"
import { motion } from 'framer-motion'
import { AnimateOnChange } from 'react-animation'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {EffectCoverflow} from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import {Link} from 'react-router-dom'
import Pagination from './Pagination'

const Blog = () => {

  SwiperCore.use([EffectCoverflow])
  
  const [articles, setArticles] = useState([]);
  const [current, setCurrent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
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
  
  const pageTransition = {
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

  //pagination logic

  const postsPerPage = 4;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const maxPages = Math.ceil(articles.length / postsPerPage);
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {setCurrentPage(pageNumber)}

  const scrollRef = useRef();

  let mobileView = false;
  if(window.innerWidth <= 1080) {mobileView = true}
  else {mobileView = false}

  if (isLoading) return 'Loading...'
  
  return (
      <motion.div
        variants={pageTransition}
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
            coverflowEffect={{rotate: 20, depth: mobileView ? 2000 : 1250, slideShadows: true}}
            centeredSlides={true}
            spaceBetween={mobileView ? -100 : -200}
            slidesPerView={3}
            initialSlide={1}
            preloadImages={true}
            direction={mobileView ? 'vertical' : 'horizontal'}
            onSlideChange={(swiper) => {setCurrent(articles[swiper.realIndex])}}
            >
            {slides}
          </Swiper>

            <div className="centerer">
              <AnimateOnChange
            animationIn="fadeIn"
            animationOut="fadeOut"
            durationOut={1000}
            className="articleDescription">
              {current.fields.description}
            </AnimateOnChange>
            </div>

          <div className="centerer" ref={scrollRef}>
            <AnimateOnChange 
            animationIn="fadeIn"
            animationOut="fadeOut"
            durationOut={5000}
            style={{
              width: '85vw',
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}>
              {currentPosts.map((article) => <BlogItem article={article}/>)}
            </AnimateOnChange>
          </div>

          <div onClick={() => scrollRef.current.scrollIntoView({behavior: 'smooth', duration: 0.3})} className="centerer">
            <Pagination postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate} currentPage={currentPage} maxPages={maxPages}/>
          </div>

        <Footer/>
    </motion.div>
    )
    
  }

export default Blog;