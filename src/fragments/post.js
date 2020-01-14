import { graphql } from 'gatsby';


export const query = graphql`
    fragment PostData on wordpress__POST {
        id
        title
        slug
        content
        plainDate: date
        date( formatString: "MMMM DD, YYYY" ) 
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