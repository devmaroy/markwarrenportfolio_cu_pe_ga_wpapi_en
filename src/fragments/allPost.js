import { graphql } from 'gatsby';


export const query = graphql`
    fragment AllPostData on wordpress__POST {
        wordpress_id
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
    }
`;