import { graphql } from 'gatsby';


export const query = graphql`
    fragment TagData on wordpress__TAG {
        id
        name
        slug
        count
    }
`;