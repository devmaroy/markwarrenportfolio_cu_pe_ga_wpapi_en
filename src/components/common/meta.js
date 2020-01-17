import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';


const query = graphql`
    {
        allWordpressWpFavicon {
            edges {
                node {
                    url {
                        source_url
                    }
                }
            }
        }
        allWordpressSiteMetadata {
            edges {
                node {
                    name
                    description
                }
            }
        }
    }
`;


const Meta = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const favicon = data.allWordpressWpFavicon.edges[0].node.url.source_url; 
            const { name, description } = data.allWordpressSiteMetadata.edges[0].node; 

            return (
                <Helmet>
                    <link rel="icon" href={ favicon } />
                    <title>{ name } - { description }</title>
                </Helmet>
            )
        } } />
    );
};


export default Meta;