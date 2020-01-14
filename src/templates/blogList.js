import React from 'react';
import { graphql } from 'gatsby';
import LayoutBlog from '../layout/base/layoutBlog';
import ArticleFeedItem from '../components/blog/main/articleFeedItem';


const BlogListTemplate = ( { data } ) => {
    const posts = data.allWordpressPost.edges;
    
    return (
        <LayoutBlog>
            {
                posts.map( ( { node: post } ) => (
                    <ArticleFeedItem key={ post.id } { ...post } />
                ))
            }
        </LayoutBlog>
    )
};


export default BlogListTemplate;


// Template Query

export const templateQuery = graphql`
    query( $skip: Int!, $limit: Int! ) {
        allWordpressPost( sort: { fields: [ date ], order: DESC } , skip: $skip, limit: $limit ) {
            edges {
                node {
                    ...AllPostData
                }
            }
        }
    }
`;