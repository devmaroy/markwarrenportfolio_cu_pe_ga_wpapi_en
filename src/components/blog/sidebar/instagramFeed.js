import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SidebarHeading from './sidebarHeading';
import InstagramFeedItem from '../../common/instagramFeedItem';


const query = graphql`
    {
        allInstaNode( limit: 9 ) {
            edges {
                node {
                    id
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;


const InstagramFeed = ( { data } ) => {
    const instagramFeed = data.allInstaNode.edges;

    return (
        <div className="blog-sidebar-instagram-feed">
            <SidebarHeading heading="Follow me" />  

            <div className="blog-sidebar-instagram-feed__list">
                {
                    instagramFeed.map( ( { node: feedItem } ) => (
                        <InstagramFeedItem 
                            key={ feedItem.id }
                            id={ feedItem.id }
                            imgSrc={ feedItem.localFile.childImageSharp.fluid } 
                            imgAlt="Instagram feed" 
                            isAnimated={ false }
                        />
                    ))
                }
            </div>
        </div>
    )
};


InstagramFeed.propTypes = {
    data: PropTypes.shape({
        allInstaNode: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    localFile: PropTypes.shape({
                        childImageSharp: PropTypes.shape({
                            fluid: PropTypes.object.isRequired
                        }).isRequired
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <InstagramFeed data={ data } { ...props } /> }  />
)