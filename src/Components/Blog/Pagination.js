import {useState} from 'react'
import './Pagination.css'

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage, maxPages}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const [inactive, setInactive] = useState(false);

    return (
        <nav className="pageNavbar">

            <ul>
                <li style={{display: 'flex', alignItems: 'center'}} onClick={() => {
                    if (currentPage <= 1) {
                        paginate(1)
                    }
                    else {
                        paginate(currentPage - 1)
                    }
                }} className="arrowItem"><img className={inactive ? 'inactive invertedArrow' : 'invertedArrow'} src="/images/Pixel Icons/doublearrow.png"/></li>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <p onClick={() => {paginate(number)}} className="pageNumber">
                                {number}
                            </p>
                        </li>
                    ))
                }
                <li style={{display: 'flex', alignItems: 'center'}} onClick={() => {
                    if (currentPage >= maxPages) {
                        paginate(3)
                    }
                    else {
                        paginate(currentPage + 1)
                    }
                }} className="arrowItem"><img className={inactive ? 'inactive arrow' : 'arrow'} src="/images/Pixel Icons/doublearrow.png"/></li>
            </ul>

        </nav>
    )

}

export default Pagination