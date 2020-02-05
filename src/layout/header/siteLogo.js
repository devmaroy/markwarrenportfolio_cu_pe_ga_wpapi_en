import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
//import siteLogo from '../../images/icons/logov3.svg';

// Query

const query = graphql`
    {
        allWordpressWpLogo {
            edges {
                node {
                    url
                }
            }
        }
    }
`;


const SiteLogo = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const siteLogoUrl = data.allWordpressWpLogo.edges[0].node.url;

            return (
                <div className="site-logo">
                    <Link to="/" className="site-logo__link">
                        <img src={ siteLogoUrl } alt="Site logo" className="site-logo__img" />
                    </Link>
                </div>
            )
        }} />
    );
};


export default SiteLogo;