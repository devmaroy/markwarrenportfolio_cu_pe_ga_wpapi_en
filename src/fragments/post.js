import { graphql } from 'gatsby';


export const query = graphql`
    fragment PostData on wordpress__POST {
        id
        title
        slug
        content
        date
        featured_media {
            source_url
        }
        categories {
            id
            name
            slug
        }
        tags {
            id
            name
            slug
        }  
    }
`;