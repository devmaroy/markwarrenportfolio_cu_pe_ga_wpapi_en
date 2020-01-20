import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Heading from '../common/heading';
import SideArticle from '../common/sideArticle';


// Query
const query = graphql`
    {
        allWordpressPost( sort: { fields: [ date ], order: DESC }, limit: 3 ) {
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
                <section className="recent-articles divider-space">
                    <div className="container">
                        <div className="recent-articles__inner grid-container">
                            <Heading main="My Recent Articles" sub="Blog" />
                            
                            {
                                posts.map( ( { node: post } ) => (
                                    <SideArticle 
                                        key={ post.id }
                                        imgSrc={ post.featured_media.source_url }
                                        imgAlt="Recent article"
                                        title={ post.title }
                                        slug={ post.slug }
                                        categories={ post.categories }
                                        date={ post.date }
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            )
        } } />
    );
};


export default RecentArticles;