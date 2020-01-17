import React from 'react';
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


const SiteLogo = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const siteLogoUrl = data.allWordpressWpLogo.edges[0].node.url.source_url;
            
            return (
                <div className="site-logo">
                    <Link to="/" className="site-logo__link">
                        <img src={ siteLogoUrl } alt=""/>
                    </Link>
                </div>
            )
        }} />
    );
};


export default SiteLogo;