import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { format } from 'timeago.js';
import SidebarHeading from './sidebarHeading';


// Query
const query = graphql`
    {
        allWordpressPost( sort: { fields: [ date ], order: DESC }, limit: 4 ) {
            edges {
                node {
                    ...AllPostData
                }
            }
        }
    }
`;


const RecentArticles = () => {
    return (
        <StaticQuery query={ query } render={ ( data ) => {
            const posts = data.allWordpressPost.edges;
            
            return ( 
                <div className="blog-sidebar-recent-articles">
                    <SidebarHeading heading="Recent articles" />

                    {
                        posts.map( ( { node: post } ) => (
                            <div key={ post.id } className="blog-sidebar-recent-article">
                                <div className="blog-sidebar-recent-article__header">
                                    <img 
                                        src={ post.featured_media.source_url } 
                                        alt="Recent article image" 
                                        className="blog-sidebar-recent-article__img" 
                                    />
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
        } } />
    );
};


export default RecentArticles;