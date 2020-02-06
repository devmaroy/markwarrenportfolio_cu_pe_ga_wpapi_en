import React from 'react';
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