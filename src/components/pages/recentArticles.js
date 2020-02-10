import React from 'react';
import PropTypes from 'prop-types'
import { taxonomyPropTypes, featuredMediaFluidPropTypes } from '../../propTypesValues';
import { graphql, StaticQuery } from 'gatsby';
import Heading from '../common/heading';
import SideArticle from '../common/sideArticle';


// Query
const query = graphql`
    {
        allWordpressPost( sort: { fields: [ date ], order: DESC }, limit: 3 ) {
            edges {
                node {
                    ...AllPostData
                    ...PostFeaturedImageFluidData
                }
            }
        }
    }
`;


const RecentArticles = ( { data } ) => {
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
                                imgSrc={ post.featured_media.localFile.childImageSharp.fluid }
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
}


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
                        ...taxonomyPropTypes,
                    })).isRequired,
                    ...featuredMediaFluidPropTypes,
                }).isRequired,
            })).isRequired,
        }).isRequired,
    }).isRequired,
};


export default ( props ) => ( 
    <StaticQuery query={ query } render={ ( data ) => <RecentArticles data={ data } { ...props } /> } />
)
