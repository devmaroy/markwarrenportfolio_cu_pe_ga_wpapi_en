import React from 'react';
import { Link } from 'gatsby';


const Pagination = ( { numberOfPages, currentPage, prefix } ) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage = currentPage - 1 === 1 ? `/${ prefix }` : `/${ prefix }/${ currentPage - 1 }`;
    const nextPage = `/${ prefix }/${ currentPage + 1 }`;

    return (
        <ul className="pagination">
            {
                ! isFirst && (
                    <li className="pagination__item">
                        <Link className="pagination__link" to={ previousPage }>
                            &lt; 
                        </Link>
                     </li>
                )  
            }
            {
                Array.from( { length: numberOfPages } ).map(( _, i ) => (
                    <li key={ i } className="pagination__item">
                        <Link 
                            to={ i === 0 ? `/${ prefix }` : `/${ prefix }/${ i + 1 }` }
                            className={ i + 1 === currentPage ? 'pagination__link active' : 'pagination__link' }
                        >
                            { i + 1}
                        </Link>
                    </li>
                ))
            }
            {
                ! isLast && (
                    <li className="pagination__item">
                        <Link className="pagination__link" to={ nextPage }>
                            &gt; 
                        </Link>
                     </li>
                )  
            }
        </ul>
    );
};


export default Pagination;