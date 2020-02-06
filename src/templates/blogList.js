import React from 'react';
import { graphql } from 'gatsby';
import LayoutBlog from '../layout/base/layoutBlog';
import FeedItem from '../components/common/feedItem';
import Pagination from '../components/common/pagination';


const BlogListTemplate = ( { data, pageContext } ) => {
    const posts = data.allWordpressPost.edges;
    const { currentPage, numPages } = pageContext;

    return (
        <LayoutBlog>
            {
                posts.map( ( { node: post } ) => (
                    <FeedItem key={ post.id } { ...post } />
                ))
            }

            <Pagination 
                numberOfPages={ numPages }
                currentPage={ currentPage }
                prefix="blog"
            />
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
                    ...PostFeaturedImageFluidData
                }
            }
        }
    }
`;