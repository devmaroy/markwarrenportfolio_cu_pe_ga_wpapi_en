import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleLeft, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/main.scss';
import Meta from '../../components/common/meta';
import Header from '../header/header';
import Footer from '../footer/footer';


// Create Font Awesome Icon Library
library.add( fab, faAngleDoubleLeft, faCaretUp, faCheckCircle, faTimesCircle );

// Initialize AOS Library
typeof document !== 'undefined' && AOS.init( { duration: 2000 } );


const Layout = ( { children } ) => {
    return (
        <div className="site-content">
            <Meta />
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
};


Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Layout;