import React from 'react';
import PropTypes from 'prop-types';
import { templatePostPropTypes, templatePaginationPropTypes } from '../propTypesValues';
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

BlogListTemplate.propTypes = {
    pageContext: PropTypes.shape({
        ...templatePaginationPropTypes,
    }).isRequired,
    data: PropTypes.shape({
        allWordpressPost: PropTypes.shape({
            edges: PropTypes.arrayOf( PropTypes.shape({
                node: PropTypes.shape({
                    ...templatePostPropTypes,
                }).isRequired
            }).isRequired ).isRequired,
        }).isRequired
    }).isRequired,
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