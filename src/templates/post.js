import React from 'react';
import PropTypes from 'prop-types';
import { taxonomyPropTypes, featuredMediaFluidPropTypes } from '../propTypesValues';
import { graphql } from 'gatsby';
import Layout from '../layout/base/layout';
import Post from '../components/post/post';


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
                ...taxonomyPropTypes,
            })).isRequired,
            tags: PropTypes.arrayOf(PropTypes.shape({
                ...taxonomyPropTypes,
            })).isRequired,
            ...featuredMediaFluidPropTypes,
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