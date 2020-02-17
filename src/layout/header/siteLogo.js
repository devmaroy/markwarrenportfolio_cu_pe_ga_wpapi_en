import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';


// Query
const query = graphql`
    {
        allWordpressWpLogo {
            edges {
                node {
                    url {
                        source_url
                    }
                }
            }
        }
    }
`;


const SiteLogo = ( { data } ) => {
    const siteLogoUrl = data.allWordpressWpLogo.edges[0].node.url.source_url;
    
    return (
        <div className="site-logo">
            <Link to="/" className="site-logo__link">
                <img src={ siteLogoUrl } alt="Site logo" className="site-logo__img" />
            </Link>
        </div>
    )
};


SiteLogo.propTypes = {
    data: PropTypes.shape({
        allWordpressWpLogo: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <SiteLogo data={ data } { ...props } /> } />
)