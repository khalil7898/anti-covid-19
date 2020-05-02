import React from 'react'


const Pagination = ({cardPerPage, totalCardes , paginate}) => {
    const pageNumber =[];
    for (let i= 1; i <= Math.ceil(totalCardes / cardPerPage); i++) {
        pageNumber.push(i);
    }
    return(
        <nav>
            <ul className="pagination">
                {pageNumber.map( number =>(
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#root > div > div:nth-child(2) > div > div > div.col-lg-8 > div > div > div:nth-child(2)'" className='page-link'>
                            {number} 
                        </a>
                    </li>
                    
                ))}
            </ul>
        </nav>
    )
}
export default Pagination;