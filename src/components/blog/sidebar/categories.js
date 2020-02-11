import React from 'react';
import PropTypes from 'prop-types';
import { taxonomyPropTypes } from '../../../propTypesValues';
import { graphql, StaticQuery, Link } from 'gatsby';
import SidebarHeading from './sidebarHeading';


// Query
const query = graphql`
    {
        allWordpressCategory( sort: { fields: count, order: DESC } ) {
            edges {
                node{ 
                    ...CategoryData
                }
            }
        }
    }
`;


const Categories = ( { data } ) => {
    const categories = data.allWordpressCategory.edges;

    return ( 
        <div className="blog-sidebar-categories">
            <SidebarHeading heading="Categories" />

            <ul className="blog-sidebar-categories__list">
                {
                    categories.map( ( { node: category } ) => (
                        <li key={ category.id } className="blog-sidebar-categories__item">
                            <Link 
                                to={ `/category/${ category.slug }` } 
                                className="blog-sidebar-categories__link"
                            >
                                { `${ category.name }(${ category.count })`  }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div> 
    )
}


Categories.propTypes = {
    data: PropTypes.shape({
        allWordpressCategory: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    ...taxonomyPropTypes,
                    count: PropTypes.number.isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <Categories data={ data } { ...props } /> } />
)