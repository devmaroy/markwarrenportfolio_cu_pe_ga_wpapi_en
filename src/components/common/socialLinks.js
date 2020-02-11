import React from 'react';
import PropTypes from 'prop-types';
import { menuPropTypes } from '../../propTypesValues';
import { graphql, StaticQuery } from 'gatsby';
import SocialIcon from './socialIcon';


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


const SocialLinks = ( { data, type, fixedWidth } ) => {
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
};


SocialLinks.propTypes = {
    data: PropTypes.shape({
        ...menuPropTypes,
    }).isRequired,
    type: PropTypes.string,
    fixedWidth: PropTypes.bool,
};


SocialLinks.defaultProps = {
    type: 'normal',
    fixedWidth: false,
}


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <SocialLinks data={ data } { ... props } /> } />
)