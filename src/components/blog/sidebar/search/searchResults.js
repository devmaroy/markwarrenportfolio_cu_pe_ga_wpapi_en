import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchResults = ( { query, results } ) => {
    const resWord = results.length === 1 ? 'result' : 'results';
    const resCount = results.length;

    return results.length > 0 && (
        <div className="search-results">
            <div className="search-results__inner dont-break-out">
                <div className="search-results__icon">
                    <FontAwesomeIcon icon="caret-up" />
                </div>    

                <h4 className="search-results__heading">
                    { resCount } { resWord } for: <span>{ query }</span>
                </h4>

                <ul className="search-results__list">

                    {
                        results.map( ( { id, title } ) => (
                            <li key={ id } className="search-results__item">
                                <Link to={ `/post/${ title }` } className="search-results__link">{ title }</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};


export default SearchResults;