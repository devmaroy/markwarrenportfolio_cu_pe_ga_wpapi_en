import React from 'react';
import Layout from '../layout/base/layout';
import Hero from '../components/pages/hero';
import About from '../components/pages/about';
import Services from '../components/pages/services';
import Portfolio from '../components/pages/portfolio';
import AvailableCTA from '../components/pages/availableCTA';
import Testimonials from '../components/pages/testimonials';
import Contact from '../components/pages/contact';
import RecentArticles from '../components/pages/recentArticles';
import InstagramFeed from '../components/pages/instagramFeed';
import NewsletterCTA from '../components/pages/newsletterCTA';

const IndexPage = () => {
    return (
        <Layout>
           <Hero />
           <About />
           <Services />
           <Portfolio />
           <AvailableCTA />
           <Testimonials />
           <Contact />
           <RecentArticles />
           <InstagramFeed />
           <NewsletterCTA />
        </Layout>
    );
};


export default IndexPage;