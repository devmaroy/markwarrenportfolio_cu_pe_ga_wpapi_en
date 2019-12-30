import React from 'react';
import Layout from '../layout/base/layout';
import Hero from '../components/hero/hero';
import About from '../components/about/about';


const IndexPage = () => {
    return (
        <Layout>
           <Hero />
           <About />
        </Layout>
    );
};


export default IndexPage;