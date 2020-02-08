import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import SidebarHeading from './sidebarHeading';


// Query
const query = graphql`
    {
        allWordpressTag( sort: { fields: count, order: DESC } ) {
            edges {
                node{ 
                    ...TagData
                }
            }
        }
    }
`;


const Tags = ( { data } ) => {
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
};


Tags.propTypes = {
    data: PropTypes.shape({
        allWordpressTag: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    count: PropTypes.number.isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <Tags data={ data } { ...props } /> } />
)