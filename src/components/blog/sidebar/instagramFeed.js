import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SidebarHeading from './sidebarHeading';
import InstagramFeedItem from '../../common/instagramFeedItem';


const query = graphql`
    {
        allInstaNode {
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


const InstagramFeed = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const instagramFeed = data.allInstaNode.edges;

            return (
                <div className="blog-sidebar-instagram-feed">
                    <SidebarHeading heading="Follow me" />  
        
                    <div className="blog-sidebar-instagram-feed__list">
                        {
                            instagramFeed.map(( { node: feedItem }) => (
                                <InstagramFeedItem 
                                    key={ feedItem.id }
                                    id={ feedItem.id }
                                    imgSrc={ feedItem.localFile.childImageSharp.fluid } 
                                    imgAlt="Instagram feed" 
                                />
                            ))
                        }
                    </div>
                </div>
            )
        }} />

    );
};


export default InstagramFeed;