import React from 'react'
import {Link} from 'react-router-dom'
import marked from 'marked'
import './BlogItem.css'

const BlogItem = ({ article }) => {
    const { title, path, description, thumbnail, status, date, content } = article.fields;
    const postDescription = marked(description);
    const formattedDate = new Date(date).toDateString();

    let style = "";

      switch(status) {
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

    return (
        <Link to={{pathname: '/blog/' + path, state: {article: article}}} style={{ textDecoration: 'none', color: 'white' }} className="blogItemContainer">
            {thumbnail && <img className="blogItemThumbnail" src={thumbnail.fields.file.url} alt={title} title={title}/> }
            <p className="itemTitle">{title}</p>
            <div className="bFlex">
                <h3 className={style}>{status}</h3>
                &nbsp; - &nbsp;
                <h4>{formattedDate.slice(4)}</h4>
            </div>
            <section dangerouslySetInnerHTML={{ __html: postDescription}} className="itemDescription" />
        </Link>
    )
}

export default BlogItem