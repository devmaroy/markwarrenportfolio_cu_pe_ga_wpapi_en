import React from 'react';
import PropTypes from 'prop-types';
import { menuPropTypes } from '../../propTypesValues';
import { graphql, StaticQuery } from 'gatsby';
import closeIcon from '../../images/icons/close.svg';
import DynamicLink from '../../components/common/dynamicLink';


// Query
const query = graphql`
    {
        allWordpressWpApiMenusMenusItems( filter: {
            name: {
                eq: "Main menu"
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


const Menu = ( { data, toggleMenu } ) => {
    const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;  

    return (
        <nav className="menu-list-wrapepr">
            <ul className="menu-list">
                <li className="menu-list__item close">
                    <button onClick={ toggleMenu }>
                        <img src={ closeIcon } alt="Close icon" />
                    </button>
                </li>
                {
                    menuItems.map( ( { object_id, title, url } ) => {    
                        return (
                            <li key={ object_id } className="menu-list__item">
                                <DynamicLink 
                                    url={ url }
                                    className="menu-list__link"
                                    onClick={ toggleMenu }
                                    activeClassName="active"
                                >
                                    { title }
                                </DynamicLink>
                            </li>                         
                        )
                    })
                }
            </ul>
        </nav>
    )
};


Menu.propTypes = {
    data: PropTypes.shape({
        ...menuPropTypes,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <Menu data={ data } { ...props } /> } /> 
)