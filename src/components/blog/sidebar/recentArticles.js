import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link } from 'gatsby';
import { format } from 'timeago.js';
import SidebarHeading from './sidebarHeading';
import Img from 'gatsby-image';


// Query
const query = graphql`
    {
        allWordpressPost( sort: { fields: [ date ], order: DESC }, limit: 4 ) {
            edges {
                node {
                    ...AllPostData
                    ...PostFeaturedImageFixed8080Data
                }
            }
        }
    }
`;


const RecentArticles = ( { data } ) => {
    const posts = data.allWordpressPost.edges;

    return (
        <div className="blog-sidebar-recent-articles">
            <SidebarHeading heading="Recent articles" />

            {
                posts.map( ( { node: post } ) => (
                    <div key={ post.id } className="blog-sidebar-recent-article">
                        <div className="blog-sidebar-recent-article__header">
                            <Link to={ `/post/${ post.slug }` }>
                                <Img
                                    fixed={ post.featured_media.localFile.childImageSharp.fixed } 
                                    alt="Recent article image" 
                                    className="blog-sidebar-recent-article__img" 
                                />
                            </Link>
                        </div>

                        <div className="blog-sidebar-recent-article__content">
                            <Link
                                to={ `/post/${ post.slug }` }
                                className="blog-sidebar-recent-article__link"
                            >
                                { post.title }
                            </Link>
                        

                            <div className="blog-sidebar-recent-article__meta">
                                <ul className="blog-sidebar-recent-article__categories">
                                    {
                                        post.categories.map( ( { id, slug, name } ) => (
                                            <li key={ id }>
                                                <Link
                                                    to={ `/category/${ slug }` }
                                                    className="blog-sidebar-recent-article__category"
                                                >
                                                    { name }
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <time 
                                    dateTime={ post.date } 
                                    className="blog-sidebar-recent-article__date"
                                >
                                    { format( post.date ) }
                                </time>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div> 
    )
};


RecentArticles.propTypes = {
    data: PropTypes.shape({
        allWordpressPost: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    wordpress_id: PropTypes.number.isRequired,
                    id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    date: PropTypes.string.isRequired,
                    excerpt: PropTypes.string.isRequired,
                    categories: PropTypes.arrayOf(PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired,
                        slug: PropTypes.string.isRequired,
                    })).isRequired,
                    featured_media: PropTypes.shape({
                        localFile: PropTypes.shape({
                            childImageSharp: PropTypes.shape({
                                fixed: PropTypes.object.isRequired
                            }).isRequired
                        }).isRequired
                    }).isRequired,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => (
    <StaticQuery query={ query } render={ ( data ) => <RecentArticles data={ data } { ...props } /> } />
)