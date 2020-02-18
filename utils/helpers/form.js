// Encode URI
export const encode = ( data ) => {
    return Object.keys( data )
        .map( key => encodeURIComponent( key ) + "=" + encodeURIComponent( data[ key ] ) )
        .join( "&" );
};


// Submit Form
export const submitForm = ( name, data ) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode( { 'form-name': name, ...data } )
    }

    return fetch( '/', options )
        .then(( res ) => {
            if ( ! res.ok ) {
                throw new Error( 'Something went wrong' );
            }

            return res;
        }).catch(( error ) => {
            throw new Error( error );
        });
};

