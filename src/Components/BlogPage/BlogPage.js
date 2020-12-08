import React, {Component, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import client from '../client'
import Navbar from '../Navbar/Navbar'
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import ReactMarkdown, {astPlugins} from 'react-markdown'
import { motion } from 'framer-motion'
import './BlogPage.css'

const BlogPage = () => {

    const [article, setArticle] = useState({});
    const [image, setImage] = useState("");
    const [content, setContent] = useState();
    const url = window.location.pathname;
    const location = url.substring(url.lastIndexOf('/') + 1);
    const formattedDate = new Date(article.date).toDateString();


    const fetchData = async() => {
      try {
        const resp = await client.getEntries({
            content_type: 'blog',
            'fields.path': location
          })
        setArticle(resp.items[0].fields);
        setImage(resp.items[0].fields.thumbnail.fields.file.url)
        setContent(resp.items[0].fields.content)
 
      } catch (error) {
        console.log(error);
      }
      
    }

    useEffect(() => {
        fetchData();
      }, []);

      let style = "";

      switch(article.status) {
        case 'DEV':
          style += "statusPink";
          break;
        case 'UPDATE':
          style += "statusOrange";
          break;
        case 'MISC':
          style += "statusGreen";
          break;
        case 'INFO':
          style += "statusBlue";
          break;
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
            <Header link={image}/>
            <Navbar />
              <div className="centerer">
                <div className="blogPost">
                <img className="blogPostThumbnail" src={image} alt={article.title} title={article.title}/>
                <div className="articleHeader">
                  <h2 className="articleTitle">{article.title}</h2>
                    <div className="bFlex">
                    <h3 className={style}>{article.status}</h3>
                      &nbsp;&nbsp;<b>-</b> &nbsp;
                        <h3>{formattedDate.slice(4)}</h3> 
                    </div>
                </div>
                    <ReactMarkdown allowDangerousHtml={true} className="articleContent">
                      {article.content}
                    </ReactMarkdown>
                </div>
              </div>
              <div className="centerer">
              <Link to="/blog" className="backToBlog">BACK TO BLOG</Link>
              </div>
              <Footer/>
            </motion.div>
        )

}

export default BlogPage