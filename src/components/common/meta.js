import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';


// Query
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

const Meta = ( { data } ) => {
    const favicon = data.allWordpressWpFavicon.edges[0].node.url.source_url; 
    const { name, description } = data.allWordpressSiteMetadata.edges[0].node; 

    return (
        <Helmet>
            <link rel="icon" href={ favicon } />
            <title>{ name } - { description }</title>
        </Helmet>
    )
};


Meta.propTypes = {
    data: PropTypes.shape({
        allWordpressWpFavicon: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    url: PropTypes.shape({
                        source_url: PropTypes.string.isRequired,
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
        allWordpressSiteMetadata: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <Meta data={ data } { ...props } /> } />
)