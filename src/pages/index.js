import React from 'react';
import Layout from '../layout/base/layout';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Services from '../components/services/services';
import Portfolio from '../components/portfolio/portfolio';
import CTA from '../components/common/cta';


const IndexPage = () => {
    return (
        <Layout>
           <Hero />
           <About />
           <Services />
           <Portfolio />
           <CTA />
        </Layout>
    );
};


export default IndexPage;