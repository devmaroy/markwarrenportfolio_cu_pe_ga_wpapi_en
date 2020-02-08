import React from 'react';
import PropTypes from 'prop-types';
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
        id: PropTypes.string.isRequired,
        limit: PropTypes.number.isRequired,
        skip: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        numPages: PropTypes.number.isRequired,
    }).isRequired,
    data: PropTypes.shape({
        allWordpressPost: PropTypes.shape({
            edges: PropTypes.arrayOf( PropTypes.shape({
                node: PropTypes.shape({
                    wordpress_id: PropTypes.number.isRequired,
                    id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,                    
                    date: PropTypes.string.isRequired,
                    excerpt: PropTypes.string.isRequired,
                    categories: PropTypes.arrayOf(PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        slug: PropTypes.string.isRequired,
                    })).isRequired,
                    featured_media: PropTypes.shape({
                        localFile: PropTypes.shape({
                            childImageSharp: PropTypes.shape({
                                fluid: PropTypes.object.isRequired
                            }).isRequired
                        }).isRequired
                    }).isRequired
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