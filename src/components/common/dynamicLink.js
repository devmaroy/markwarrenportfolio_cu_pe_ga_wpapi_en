import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import { isWordpressExternalLink, createLocalLink } from '../../../utils/helpers/links';
import { Location } from '@reach/router';


const query = graphql`
    {
        allWordpressSiteMetadata {
            edges {
                node {
                    url
                }
            }
        }
    }
`;


const DynamicLink = ( { url, children, location, className, activeClassName, navigate, ...rest } ) => {

    // Helper function for rendering link
    const renderLink = ( url, wordpressUrl ) => {

        if ( ( url.includes( '#' ) && location.pathname.includes( 'blog' ) ) || isWordpressExternalLink( url, wordpressUrl ) ) {

            return (
                <a 
                    href={ url.includes( '#' ) ? `/${ url }` : url }
                    className={ className }
                >
                    { children }
                </a>
            )
        } else if ( url.includes( '#' ) && ! location.pathname.includes( 'blog' ) ) {
            return (
                <ScrollLink
                    to={ url.substring(1) } 
                    className={ className }
                    activeClass={ activeClassName }
                    spy={ true }
                    hashSpy={ true }
                    smooth={ true }
                    duration={ 500 }
                    { ...rest }
                >
                    { children }
                </ScrollLink>
            )
        } else {   
            return (
                <Link
                    to={ createLocalLink( url, wordpressUrl ) }
                    className={ className }
                    activeClassName={ activeClassName }
                >
                    { children }
                </Link>
            )
        }
    }

    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const wordpressUrl = data.allWordpressSiteMetadata.edges[0].node.url;

            return renderLink( url, wordpressUrl );
        }} />
    )
};



DynamicLink.propTypes = {
    url: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    navigate: PropTypes.func,
    children: PropTypes.node.isRequired,
};


export default ( props ) => (
    <Location>
        { locationProps => <DynamicLink { ...locationProps } { ...props } /> }
    </Location>
);