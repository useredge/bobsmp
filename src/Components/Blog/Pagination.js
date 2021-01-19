import {useEffect, useState} from 'react'
import './Pagination.css'

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage, maxPages}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const [inactiveR, setInactiveR] = useState(false);
    const [inactiveL, setInactiveL] = useState(true);

    useEffect(() => {
        if(currentPage == 1) {setInactiveL(true)} else setInactiveL(false)
        if(currentPage == 3) {setInactiveR(true)} else setInactiveR(false)
    })

    return (
        <nav className="pageNavbar">

            <ul>
                <li style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={() => {
                    if (currentPage <= 1) {
                        paginate(1)
                    }
                    else {
                        paginate(currentPage - 1)
                    }
                }} className="arrowItem"><img className={inactiveL ? 'inactive invertedArrow' : 'invertedArrow'} src="/images/Pixel Icons/doublearrow.png"/></li>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <p onClick={() => {
                                paginate(number)
                                }} className="pageNumber">
                                {number}
                            </p>
                        </li>
                    ))
                }
                <li style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={() => {
                    if (currentPage >= maxPages) {
                        paginate(3)
                    }
                    else {
                        paginate(currentPage + 1)
                    }
                }} className="arrowItem"><img className={inactiveR ? 'inactive arrow' : 'arrow'} src="/images/Pixel Icons/doublearrow.png"/></li>
            </ul>

        </nav>
    )

}

export default Pagination