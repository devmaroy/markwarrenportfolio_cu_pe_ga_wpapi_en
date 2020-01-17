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
    }
`;


const Meta = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const favicon = data.allWordpressWpFavicon.edges[0].node.url.source_url; 

            return (
                <Helmet>
                    <link rel="icon" href={ favicon } />
                </Helmet>
            )
        } } />
    );
};


export default Meta;