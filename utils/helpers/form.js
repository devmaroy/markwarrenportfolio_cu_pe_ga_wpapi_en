// Encode URI
export const encode = ( data ) => {
    return Object.keys( data )
        .map( key => encodeURIComponent( key ) + "=" + encodeURIComponent( data[ key ] ) )
        .join( "&" );
};


// Submit Form
export const submitForm = ( name, data ) => {
    console.log(data);
    
    const fields = {
        first_name: data.first_name,
        last_name: data.last_name,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode( { 'form-name': name, ...fields } )
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

