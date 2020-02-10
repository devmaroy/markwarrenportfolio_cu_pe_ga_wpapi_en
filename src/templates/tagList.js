import React from 'react';
import PropTypes from 'prop-types';
import { templatePostPropTypes, templatePaginationPropTypes, taxonomyPropTypes } from '../propTypesValues';
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
        ...templatePaginationPropTypes,
    }).isRequired,
    data: PropTypes.shape({
        tag: PropTypes.shape({
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