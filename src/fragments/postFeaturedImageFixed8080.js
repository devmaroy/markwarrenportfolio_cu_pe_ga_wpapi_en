import { graphql } from 'gatsby';


export const query = graphql`
    fragment PostFeaturedImageFixed8080Data on wordpress__POST {
        featured_media {
            localFile {
                childImageSharp {
                    fixed( width: 80, height: 80, quality: 100 ) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`;