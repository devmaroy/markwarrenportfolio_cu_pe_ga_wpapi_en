import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SideArticle from '../common/sideArticle';


// Query
const query = graphql`
    {
        allWordpressPost {
            edges {
                node {
                    ...AllPostData
                }
            }
        }
    }
`;


const RelatedArticles = ( { relatedArticles } ) => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const posts = data.allWordpressPost.edges;
            
            const filteredPosts = posts.filter(( post ) => relatedArticles.includes( post.node.wordpress_id ) );
                
            return filteredPosts.map( ( { node: post } ) => (
                <SideArticle 
                    key={ post.id }
                    imgSrc={ post.featured_media.source_url }
                    imgAlt="Related article"
                    title={ post.title }
                    slug={ post.slug }
                    categories={ post.categories }
                    date={ post.date }
                />
            ))
        }} />
    );
};


export default RelatedArticles;