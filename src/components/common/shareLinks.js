import React from 'react';
import { Location } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ShareLinks = ( { location, url } ) => {
    const { origin } = location;

    // Social Share URLs

    const facebookShareUrl = `https://facebook.com/sharer/sharer.php?u=${ origin }${ url }`;
    const twitterShareUrl = `https://twitter.com/intent/tweet/?url=${ origin }${ url }`
    const linkedinShareUrl = `https://linkedin.com/shareArticle?mini=true&url=${ origin }${ url }`;
    const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${ origin }${ url }`;
    const redditShareUrl = `http://reddit.com/submit/?url=${ origin }${ url }`

 
    const openPopup = ( url, width = 500, height = 300 ) => {
        var left = ( window.screen.width / 2 ) - ( width / 2 );
        var top = ( window.screen.height / 2 )-( height / 2 );

        return window.open(
            url, 
            '', 
            `menubar=no,toolbar=no,resizable=yes,scrollbars=yes, width=${ width }, height=${ height }, top=${ top }, left=${ left } `);
    }
    
    
    return typeof window !== 'undefined' && (
        <ul className="share-links">
            <li className="share-links__item">
                <a 
                    href={ facebookShareUrl }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => openPopup( facebookShareUrl ) }
                >
                    <FontAwesomeIcon icon={ [ "fab", 'facebook-f' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ twitterShareUrl }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => openPopup( twitterShareUrl ) }
                >
                    <FontAwesomeIcon icon={ [ "fab", 'twitter' ] } fixedWidth />
                    
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ linkedinShareUrl } 
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => openPopup( linkedinShareUrl ) }
                >
                    <FontAwesomeIcon icon={ [ "fab", 'linkedin-in' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ pinterestShareUrl }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => openPopup( pinterestShareUrl ) }
                >
                    <FontAwesomeIcon icon={ [ "fab", 'pinterest' ] } fixedWidth />
                </a>
            </li>
            <li className="share-links__item">
                <a 
                    href={ redditShareUrl }
                    className="share-links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => openPopup( redditShareUrl ) }
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