import { graphql } from 'gatsby';


export const query = graphql`
    fragment PostData on wordpress__POST {
        id
        title
        slug
        content
        date
        featured_media {
            localFile {
                childImageSharp {
                    fluid( maxWidth: 1200, quality: 100 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
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
        acf {
            related_articles
        }  
    }
`;