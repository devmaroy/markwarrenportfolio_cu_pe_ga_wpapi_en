import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import SidebarHeading from './sidebarHeading';


// Query
const query = graphql`
    {
        allWordpressTag {
            edges {
                node{ 
                    ...TagData
                }
            }
        }
    }
`;


const Tags = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const tags = data.allWordpressTag.edges;

            return (
                <div className="blog-sidebar-tags">
                    <SidebarHeading heading="Tags" />  

                    <ul className="blog-sidebar-tags__list">
                        {
                            tags.map( ( { node: tag } ) => (
                                <li key={ tag.id } className="blog-sidebar-tags__item">
                                    <Link 
                                        to={ `/tag/${ tag.slug }` }
                                        className="button button--primary button--primary-light button--noshadow button--small blog-sidebar-tags__link"
                                    >
                                        { `${ tag.name }(${ tag.count })`  }
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }} />
    );
};


export default Tags;