const createPagination = require( './createPagination' );
const categoryListTemplate = require.resolve( '../../src/templates/categoryList.js' );


module.exports = ( { data, createPage } ) => {

    // Create categories
    data.edges.map( ( { node } ) => {
        
        // Create paginated categories for category list
        const perPage = 2;

        createPagination({
            perPage,
            numPages: Math.ceil( node.count / perPage ),
            prefix: 'category',
            slug: node.slug,
            toContext: { id: node.id },
            createPage,
            component: categoryListTemplate,
        });
    });
};