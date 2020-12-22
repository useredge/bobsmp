import './Pagination.css'
import {Link} from 'react-router-dom'
import { animate } from 'framer-motion';

const Pagination = ({postsPerPage, totalPosts, paginate, animateIn, animateOut}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="pageNavbar">

            <ul>
                <li><img className="invertedArrow pageNumber" src="/images/Pixel Icons/doublearrow.png"/></li>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <p onClick={() => {paginate(number)}} to='' className="pageNumber">
                                {number}
                            </p>
                        </li>
                    ))
                }
                <li><img className="arrow pageNumber" src="/images/Pixel Icons/doublearrow.png"/></li>
            </ul>

        </nav>
    )

}

export default Pagination