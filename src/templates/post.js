import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layout/base/layout';
import Post from '../components/post/Post';


const PostTemplate = ( { data } ) => {
    const { post } = data;

    return (
        <Layout>
            <Post { ...post } />
        </Layout>
    );
};


PostTemplate.propTypes = {
    data: PropTypes.shape({
        post: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,                    
            date: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            categories: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            })).isRequired,
            tags: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
            })).isRequired,
            featured_media: PropTypes.shape({
                localFile: PropTypes.shape({
                    childImageSharp: PropTypes.shape({
                        fluid: PropTypes.object.isRequired
                    }).isRequired
                }).isRequired
            }).isRequired,
            acf: PropTypes.shape({
                related_articles: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
            }).isRequired,
        }).isRequired
    }).isRequired,
};


export default PostTemplate;


// Template Query
export const query = graphql`
    query( $id: String! ) {
        post: wordpressPost( id: { eq: $id } ) {
            ...PostData
        }
    }
`;