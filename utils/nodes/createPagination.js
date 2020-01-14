const slash = require( 'slash' );


module.exports = ( { perPage, numPages, prefix, slug, toContext, createPage, component } ) => {
    Array.from( { length: numPages } ).map( ( __, i ) => {
        const slugPath = i === 0 ? `/${ prefix }/${ slug }` : `/${ prefix }/${ slug }/${ i + 1 }`;
        const noSlugPath = i === 0 ? `/${ prefix }` : `/${ prefix }/${ i + 1 }`;

        createPage({
            path: slug ? slugPath : noSlugPath,
            component: slash( component ),    
            context: {
                ...toContext,
                limit: perPage,
                skip: i * perPage,
                currentPage: i + 1,
                numPages,
            }
        });
    });
};