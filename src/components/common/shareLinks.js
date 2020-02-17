import React from 'react';
import { Location , globalHistory, ServerLocation} from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShareLinks = ( { location, url } ) => {
    const { origin } = location;
 
    const openPopup = ( url, title, w, h ) => {
        var left = (window.screen.width/2)-(w/2);
        var top = (window.screen.height/2)-(h/2);
        return window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes, width='+w+', height='+h+', top='+top+', left='+left);
    }
    
    
    return typeof window !== 'undefined' && (
        <ul className="share-links">
            <li className="share-links__item">
                <a 
                    href={ `https://www.facebook.com/sharer/sharer.php?u=${ origin }${ url }` }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => openPopup( `https://www.facebook.com/sharer/sharer.php?u=${ origin }${ url }`, '', 500, 500 ) }
                >
                    <FontAwesomeIcon icon={ [ "fab", 'facebook-f' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ `https://twitter.com/intent/tweet/?url=${ origin }${ url }` }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => openPopup( `https://twitter.com/intent/tweet/?url=${ origin }${ url }`, '', 500, 500 ) }
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