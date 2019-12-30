import React from 'react';
import Layout from '../layout/base/layout';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Services from '../components/services/services';


const IndexPage = () => {
    return (
        <Layout>
           <Hero />
           <About />
           <Services />
        </Layout>
    );
};


export default IndexPage;