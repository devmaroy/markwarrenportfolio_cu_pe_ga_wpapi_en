import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import closeIcon from '../../images/icons/close.svg';


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
                        title
                        url
                    }
                }
            }
        }
    }
`;


const Menu = ( { toggleMenu } ) => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;
            console.log(menuItems);
            

            return (
                <nav className="menu-list-wrapepr">
                    <ul className="menu-list">
                        <li className="menu-list__item close" onClick={ toggleMenu }>
                            <img src={ closeIcon } alt="Close icon" />
                        </li>
                    
                        {
                            menuItems.map( ( { object_id, title, url } ) => (
                                <li key={ object_id } className="menu-list__item">
                                    <Link to={ url } className="menu-list__link" activeClassName="active">
                                        { title }
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            )
        }} />
    )
}


export default Menu;