import React from 'react';
import { Location } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShareLinks = ( { location, url } ) => {
    const { origin } = location;
    console.log(origin);
    

    return (
        <ul className="share-links">
            <li className="share-links__item">
                <a 
                    href={ origin }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'facebook-f' ] } fixedWidth />
                    { origin }
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ origin }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'twitter' ] } fixedWidth />
                    
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `https://www.linkedin.com/shareArticle?mini=true&url=${ origin }${ url }` } 
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'linkedin-in' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `https://www.pinterest.com/pin/create/button/?url=${ origin }${ url }` }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'pinterest' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `http://www.reddit.com/submit/?url=${ origin }${ url }` }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'reddit' ] } fixedWidth />
                </a>
            </li>
        </ul>
    );
};


export default ( props ) => (
    <Location>
        { locationProps => <ShareLinks { ...locationProps } { ...props } /> }
    </Location>
);