// Check if provided url is external URL
export const isExternalLink = ( url ) => {
    return url.indexOf('://') > 0 || url.indexOf('//') === 0;
};


// Create local link
export const createLocalLink = ( url, wordpressUrl ) => {
    if ( '#' === url ) {
        return url;
    }

    return url.replace( wordpressUrl, '' );
}


// Check if provides url is external link (based on wordpress url)
// e.q. https://google.com will be matched as external link (true) but https://mywebsite.com/about-me not because it's our own website
export const isWordpressExternalLink = ( url, wordpressUrl ) => {
    return url.indexOf( wordpressUrl ) === - 1 && isExternalLink( url );
}