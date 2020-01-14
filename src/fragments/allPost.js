import { graphql } from 'gatsby';


export const query = graphql`
    fragment AllPostData on wordpress__POST {
        id
        title
        slug
        date
        excerpt
        categories {
            id
            name
            slug
        }
        featured_media {
            source_url
        }
    }
`;