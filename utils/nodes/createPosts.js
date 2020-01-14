const slash = require( 'slash' );
const createPagination = require( './createPagination' );
const postTemplate = require.resolve( '../../src/templates/post.js' );
const blogListTemplate = require.resolve( '../../src/templates/blogList.js' );


module.exports = ( { data, createPage } ) => {

    // Create posts
    data.edges.map( ( { node } ) => {

        // Create page for post
        createPage({
            path: `/post/${ node.slug }`,
            component: slash( postTemplate ),
            context: {
                id: node.id,
            }
        });


        // Create paginated posts for blog list
        const perPage = 9;

        createPagination({
            perPage,
            numPages: Math.ceil( data.edges.length / perPage ),
            prefix: 'blog',
            slug: '',
            toContext: { id: node.id },
            createPage,
            component: blogListTemplate,
        });
    });
};