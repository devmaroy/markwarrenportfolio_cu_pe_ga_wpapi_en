const createPosts = require( './utils/nodes/createPosts' );
const createCategories = require( './utils/nodes/createCategories' );
const createTags = require( './utils/nodes/createTags' );


exports.createPages = async ( { graphql, actions } ) => {
    const { createPage } = actions;


    // Create graphql query
    const result = await graphql(`
        {
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
            allWordpressCategory {
                edges {
                    node {
                        id
                        name
                        slug
                        count
                    }
                }
            }
            allWordpressTag {
                edges {
                    node {
                        id
                        name
                        slug
                        count
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
    const { allWordpressPost, allWordpressCategory, allWordpressTag } = result.data;


    // Pass data into separate helper functions
    createPosts( { data: allWordpressPost, createPage } );
    createCategories( { data: allWordpressCategory, createPage } );
    createTags( { data: allWordpressTag, createPage } );
}