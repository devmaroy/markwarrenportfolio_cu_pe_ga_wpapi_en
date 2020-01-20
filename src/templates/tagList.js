import React from 'react';
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
                }
            }
        }
    }
`;