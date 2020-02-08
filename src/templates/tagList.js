import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import TaxonomyBaseTemplate from './taxonomyBase';


const TagListTemplate = ( { data, pageContext } ) => {
    const posts = data.posts.edges;
    const { currentPage, numPages } = pageContext;
    const info = {
        type: 'tag',
        ...data.tag
    }

    return (
        <TaxonomyBaseTemplate
            info={ info }
            content={ posts }
            currentPage={ currentPage }
            numPages={ numPages }
        />
    )
};


TagListTemplate.propTypes = {
    pageContext: PropTypes.shape({
        id: PropTypes.string.isRequired,
        limit: PropTypes.number.isRequired,
        skip: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        numPages: PropTypes.number.isRequired,
    }).isRequired,
    data: PropTypes.shape({
        tag: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,                    
            count: PropTypes.number.isRequired,
        }).isRequired,
        posts: PropTypes.shape({
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
            }).isRequired )
        }).isRequired 
    }).isRequired,
};


export default TagListTemplate;


// Template Query
export const templateQuery = graphql`
    query( $id: String!, $skip: Int!, $limit: Int! ) {
        tag: wordpressTag( id: { eq: $id } ) {
            ...TagData
        }
        posts: allWordpressPost( limit: $limit, skip: $skip, filter: {
            tags: {
                elemMatch: {
                    id: {
                        eq: $id
                    }
                }
            }
        }) {
            edges {
                node {
                    ...AllPostData
                    ...PostFeaturedImageFluidData
                }
            }
        }
    }
`;