import {Link} from "react-router-dom"
import './BlogPreview.css'

const BlogPreview = ({posts}) => {

      if (posts.length === 0) return <h1 style={{fontSize: '100px', color: 'white', width: '100%', textAlign: 'center', fontFamily: 'MCTen'}}>Loading...</h1>

      return (
          <div className="blogLayout">
            <h1 className="bobTitle" style={{fontWeight: 'lighter'}}><img src="/images/Pixel Icons/Letter.png" className="float" />  Check out the latest news!</h1>
              <h2 className="blogSub">Read our latest blog articles on what's going on!</h2>
          <div className="blogPreviewContainer">

            <Link to={'/blog/' + posts[2].fields.path} className="side" style={{backgroundImage: 'url(' + posts[2].fields.thumbnail.fields.file.url + ')'}}/>
              <Link to={'/blog/' + posts[0].fields.path} className="center" style={{backgroundImage: 'url(' + posts[0].fields.thumbnail.fields.file.url + ')'}}/>
            <Link to={'/blog/' + posts[1].fields.path} className="side" style={{backgroundImage: 'url(' + posts[1].fields.thumbnail.fields.file.url + ')'}}/>

          </div>

            <div className="centerer" style={{height: '5vh', marginTop: '3vh'}}><Link to="/blog" className="viewBlogs">VIEW BLOGS</Link></div>

          </div>
      )

}

export default BlogPreview