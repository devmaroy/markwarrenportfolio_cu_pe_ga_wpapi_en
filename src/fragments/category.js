import { graphql } from 'gatsby';


export const query = graphql`
    fragment CategoryData on wordpress__CATEGORY {
        id
        name
        slug
        count
    }
`;