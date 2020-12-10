import {Link} from "react-router-dom"
import './BlogPreview.css'

const BlogPreview = ({posts}) => {

      if (posts.length === 0) return <h1 style={{fontSize: '100px', color: 'white'}}>Loading...</h1>

      return (
        <div className="centerer" style={{background: 'linear-gradient(to top, #e5b754 50%, rgba(0,0,0,0) 0%)'}}>
          <div className="blogLayout">
            <p className="bobTitle"><img src="/images/Pixel Icons/Letter.png" className="float" />  Check out the latest news!</p>
              <p className="blogSub">Read our latest blog articles on what's going on!</p>
          <div className="blogPreviewContainer">

            <Link to={'/blog/' + posts[2].fields.path} className="side" style={{backgroundImage: 'url(' + posts[2].fields.thumbnail.fields.file.url + ')'}}/>
              <Link to={'/blog/' + posts[0].fields.path} className="center" style={{backgroundImage: 'url(' + posts[0].fields.thumbnail.fields.file.url + ')'}}/>
            <Link to={'/blog/' + posts[1].fields.path} className="side" style={{backgroundImage: 'url(' + posts[1].fields.thumbnail.fields.file.url + ')'}}/>

          </div>

            <div className="centerer" style={{height: '5vh', marginTop: '3vh'}}><Link to="/blog" className="viewBlogs">VIEW BLOGS</Link></div>

          </div>
        </div>
      )

}

export default BlogPreview