import React from 'react'
import BlogItem from '../BlogItem/BlogItem';
import './BlogItems.css'

const BlogItems = ({posts}) => {

    return (
        <div>
        <div className="topPostContainer">
        <h1 className="topPost">Keep up with our updates</h1>
        {
          posts.slice(0,1).map((article, index) => <BlogItem article={article} key={index}/>)
        }
        </div>

        <div className="blogGridContainer">
        <div className="centerer">
          <h1 className="morePosts"><i class="fas fa-arrow-circle-down"/> CHECK OUT MORE POSTS!</h1>
        </div>
            {
            posts.slice(1).map((article, index) => <BlogItem
                article={article}
                key={index}
              />
            )
            }
        </div>
        </div>
    )
}

export default BlogItems