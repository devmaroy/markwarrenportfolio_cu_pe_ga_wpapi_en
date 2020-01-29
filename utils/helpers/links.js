// Check if provided url is external URL
export const isExternalLink = ( url ) => {
    return url.indexOf('://') > 0 || url.indexOf('//') === 0;
};