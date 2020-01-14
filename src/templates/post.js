import React from 'react';
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


export default PostTemplate;


// Query

export const query = graphql`
    query( $id: String! ) {
        post: wordpressPost( id: { eq: $id } ) {
            ...PostData
        }
    }
`;