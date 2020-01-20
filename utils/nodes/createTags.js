const createPagination = require( './createPagination' );
const tagListTemplate = require.resolve( '../../src/templates/tagList.js' );


module.exports = ( { data, createPage } ) => {

    // Create tags
    data.edges.map( ( { node } ) => {
        
        // Create paginated tags for tag list
        const perPage = 2;

        createPagination({
            perPage,
            numPages: Math.ceil( node.count / perPage ),
            prefix: 'tag',
            slug: node.slug,
            toContext: { id: node.id },
            createPage,
            component: tagListTemplate,
        });
    });
};