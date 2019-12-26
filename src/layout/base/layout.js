import React, { Fragment } from 'react';
import '../../styles/main.scss';
import Header from '../header/header';

const Layout = ( { children } ) => {
    return (
        <Fragment>
            <Header />
            { children }
        </Fragment>
    );
};


export default Layout;