import React from 'react';
import Layout from '../layout/base/layout';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Services from '../components/services/services';
import Portfolio from '../components/portfolio/portfolio';
import CTA from '../components/common/cta';
import Testimonials from '../components/testimonials/testimonials';
import Contact from '../components/contact/contact';
import RecentArticles from '../components/recentArticles/recentArticles';
import InstagramFeed from '../components/instagramFeed/instagramFeed';


const IndexPage = () => {
    return (
        <Layout>
           <Hero />
           <About />
           <Services />
           <Portfolio />
           <CTA />
           <Testimonials />
           <Contact />
           <RecentArticles />
           <InstagramFeed />
        </Layout>
    );
};


export default IndexPage;