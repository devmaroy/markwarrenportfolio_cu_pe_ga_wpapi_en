import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faClock  } from '@fortawesome/free-regular-svg-icons';
import '../../styles/main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';


// Create font awesome icon library
library.add( fab, faAngleDoubleLeft );


const Layout = ( { children } ) => {
    return (
        <div className="site-content">
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
};


export default Layout;