import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SocialIcon from './SocialIcon';


// Query

const query = graphql`
    {
        allWordpressWpApiMenusMenusItems( filter: {
            name: {
                eq: "Main social links"
            }
        }) {
            edges {
                node {
                    items {
                        ...MenuItemsData
                    }
                }
            }
        }
    }
`;


const SocialLinks = ( { type, fixedWidth } ) => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const socialItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;

            return (
                <ul className="social-links">
                    {
                        socialItems.map( ( { object_id, title, url } ) => (
                            <li key={ object_id } className="social-links__item">
                                <a href={ url } className="social-links__link">
                                    <SocialIcon icon={ title } type={ type } fixedWidth={ fixedWidth }  />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            )
        }} /> 
    );
};


export default SocialLinks;