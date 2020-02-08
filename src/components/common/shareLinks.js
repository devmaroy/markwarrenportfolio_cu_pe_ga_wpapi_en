import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShareLinks = ( { url } ) => {
    return (
        <ul className="share-links">
            <li className="share-links__item">
                <a 
                    href={ `https://www.facebook.com/sharer/sharer.php?u=${ url }` }
                    className="share-links__link"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'facebook-f' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `https://twitter.com/intent/tweet/?text=Check this out&url=${ url }&via=imariohernandez` }
                    className="share-links__link"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'twitter' ] } fixedWidth />
                    
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `https://www.linkedin.com/shareArticle?mini=true&url=${ url }&title=Jonathan%20Suh&source=https%3A%2F%2Fjonsuh.com%2F&summary=Short%20summary` } 
                    className="share-links__link"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'linkedin-in' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `https://www.pinterest.com/pin/create/button/?url=${ url }&media=https%3A%2F%2Fjonsuh.com%2Ficon.png&description=Short%20description&hashtags=web,development` }
                    className="share-links__link"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'pinterest' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `http://www.reddit.com/submit/?url=${ url }` }
                    className="share-links__link"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={ [ "fab", 'reddit' ] } fixedWidth />
                </a>
            </li>
        </ul>
    );
};


export default ShareLinks;