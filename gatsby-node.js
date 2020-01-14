const createPosts = require( './utils/nodes/createPosts' );


exports.createPages = async ( { graphql, actions } ) => {
    const { createPage, createRedirect } = actions;
    //createRedirect( { fromPath: '/', toPath: '/blog', redirectInBrowser: true, isPermanent: true } );

    // Create graphql query
    const result = await graphql(`
        {
            allWordpressPage {
                edges {
                    node {
                        id
                        path
                        slug
                        status
                    }
                }
            }
            allWordpressPost {
                edges {
                    node {
                        id
                        path
                        slug
                        status
                        format
                    }
                }
            }
        }    
    `);


    // Check for any errors
    if ( result.errors ) {
        throw new Error( result.errors );
    }


    // Access query results via object destructuring
    const { allWordpressPage, allWordpressPost, allWordpressCategory, allWordpressTag } = result.data;


    // Pass data into separate helper functions
    //createPages( { data: allWordpressPage, createPage } );
    createPosts( { data: allWordpressPost, createPage } );
    //createCategories( { data: allWordpressCategory, createPage } );
    //createTags( { data: allWordpressTag, createPage } );
}