// Check if provided email is valid email
export const isEmpty = ( value ) => {
    return ! value.length > 0;
};

// Check if provided email is valid email
export const isValidEmail = ( email ) => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return re.test( email );
};