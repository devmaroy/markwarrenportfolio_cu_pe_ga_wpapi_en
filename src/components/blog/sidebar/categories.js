import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import SidebarHeading from './sidebarHeading';


// Query
const query = graphql`
    {
        allWordpressCategory {
            edges {
                node{ 
                    ...CategoryData
                }
            }
        }
    }
`;


const Categories = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const categories = data.allWordpressCategory.edges;

            console.log(categories);
            

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
        } } />
    );
};

export default Categories;