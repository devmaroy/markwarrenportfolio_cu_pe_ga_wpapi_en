import React from 'react';
import PropTypes from 'prop-types';
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
                        results.map( ( { id, slug, title, categories } ) => (
                            <li key={ id } className="search-results__item">
                                <Link
                                    to={ `/post/${ slug }` }
                                    className="search-results__link"
                                >
                                    { title }
                                </Link>
                            
                                <ul className="search-results__categories">
                                    {
                                        categories.map( ( { id, name, slug } ) => (
                                            <li key={ id } className="search-results__categories-item">
                                                <Link
                                                    to={ `/category/${ slug }` }
                                                    className="search-results__link search-results__link--secondary search-results__categories-link"
                                                >
                                                    { name }
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};


SearchResults.propTypes = {
    query: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
};


export default SearchResults;