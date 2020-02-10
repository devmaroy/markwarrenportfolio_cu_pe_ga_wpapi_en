import React from 'react';
import PropTypes from 'prop-types';
import { previewPostPropTypes } from '../../propTypesValues';
import { graphql, StaticQuery } from 'gatsby';
import SideArticle from '../common/sideArticle';


// Query
const query = graphql`
    {
        allWordpressPost {
            edges {
                node {
                    ...AllPostData
                    ...PostFeaturedImageFluidData
                }
            }
        }
    }
`;


const RelatedArticles = ( { data, relatedArticles } ) => {
    const posts = data.allWordpressPost.edges;
    const filteredPosts = posts.filter(( post ) => relatedArticles.includes( post.node.wordpress_id ) );

    return filteredPosts.map( ( { node: post } ) => (
        <SideArticle 
            key={ post.id }
            imgSrc={ post.featured_media.localFile.childImageSharp.fluid }
            imgAlt="Related article"
            title={ post.title }
            slug={ post.slug }
            categories={ post.categories }
            date={ post.date }
        />
    ));
};


RelatedArticles.propTypes = {
    data: PropTypes.shape({
        allWordpressPost: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    ...previewPostPropTypes
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
    relatedArticles: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <RelatedArticles data={ data } { ...props } /> } />
)