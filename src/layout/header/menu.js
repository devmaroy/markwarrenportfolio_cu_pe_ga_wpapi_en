import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import closeIcon from '../../images/icons/close.svg';
import { Location } from '@reach/router';


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


const Menu = ( { toggleMenu, location } ) => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items;  

            return (
                <nav className="menu-list-wrapepr">
                    <ul className="menu-list">
                        <li className="menu-list__item close" onClick={ toggleMenu }>
                            <img src={ closeIcon } alt="Close icon" />
                        </li>
                        {
                            menuItems.map( ( { object_id, title, url } ) => {
                                return (
                                    <li key={ object_id } className="menu-list__item">
                                        {
                                            url.includes( '#' ) && ! location.pathname.includes( 'blog' ) ? (
                                                <ScrollLink
                                                    to={ url.substring(1) } 
                                                    className="menu-list__link"
                                                    activeClass="active"
                                                    spy={ true }
                                                    hashSpy={ true }
                                                    smooth={ true }
                                                    duration={ 500 }
                                                    onClick={ toggleMenu }
                                                >
                                                    { title }
                                                </ScrollLink>
                                            ) : (
                                                <Link
                                                    to={ url }
                                                    className="menu-list__link"
                                                    activeClassName="active"
                                                    onClick={ toggleMenu }
                                                >
                                                    { title }
                                                </Link>
                                            )   
                                        }
                                    </li>                         
                                )
                            })
                        }
                    </ul>
                </nav>
            )
        }} />
    )
}


export default ( props ) => (
    <Location>
        { locationProps => <Menu { ...locationProps } { ...props } /> }
    </Location>
);