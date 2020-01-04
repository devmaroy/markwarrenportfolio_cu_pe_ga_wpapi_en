import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faClock  } from '@fortawesome/free-regular-svg-icons';
import '../../styles/main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';


// Create font awesome icon library
library.add( fab, faClock, faGlobe );


const Layout = ( { children } ) => {
    return (
        <Fragment>
            <Header />
            { children }
            <Footer />
        </Fragment>
    );
};


export default Layout;