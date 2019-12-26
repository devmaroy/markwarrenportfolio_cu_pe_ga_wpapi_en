import React, { Fragment } from 'react';
import '../../styles/main.scss';

const Layout = ( { children } ) => {
    return (
        <Fragment>
            { children }
        </Fragment>
    );
};


export default Layout;