import React from 'react';
import PropTypes from 'prop-types';
import { templatePostPropTypes, templatePaginationPropTypes, taxonomyPropTypes } from '../propTypesValues';
import { graphql } from 'gatsby';
import TaxonomyBaseTemplate from './taxonomyBase';


const CategoryListTemplate = ( { data, pageContext } ) => {
    const posts = data.posts.edges;
    const { currentPage, numPages } = pageContext;
    const info = {
        type: 'category',
        ...data.category
    };

    
    return (
        <TaxonomyBaseTemplate 
            info={ info } 
            content={ posts } 
            currentPage={ currentPage }
            numPages={ numPages }
        />
    )
};


CategoryListTemplate.propTypes = {
    pageContext: PropTypes.shape({
        ...templatePaginationPropTypes,
    }).isRequired,
    data: PropTypes.shape({
        category: PropTypes.shape({
            ...taxonomyPropTypes,                   
            count: PropTypes.number.isRequired,
        }).isRequired,
        posts: PropTypes.shape({
            edges: PropTypes.arrayOf( PropTypes.shape({
                node: PropTypes.shape({
                    ...templatePostPropTypes,         
                }).isRequired
            }).isRequired )
        }).isRequired 
    }).isRequired,
};


export default CategoryListTemplate;


// Template Query
export const templateQuery = graphql`
    query( $id: String!, $skip: Int!, $limit: Int! ) {
        category: wordpressCategory( id: { eq: $id } ) {
            ...CategoryData
        }
        posts: allWordpressPost( limit: $limit, skip: $skip, filter: {
            categories: {
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