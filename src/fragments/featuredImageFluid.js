import { graphql } from 'gatsby';


export const query = graphql`
    fragment FeaturedImageFluidData on wordpress__POST {
        featured_media {
            localFile {
                childImageSharp {
                    fluid( maxWidth: 1200, quality: 100 ) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;