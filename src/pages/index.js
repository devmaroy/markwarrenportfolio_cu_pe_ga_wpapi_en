import React from 'react';
import Layout from '../layout/base/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import CareerCTA from '../components/careerCTA';
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';
import RecentArticles from '../components/recentArticles';
import InstagramFeed from '../components/instagramFeed';
import NewsletterCTA from '../components/NewsletterCTA';


const IndexPage = () => {
    return (
        <Layout>
           <Hero />
           <About />
           <Services />
           <Portfolio />
           <CareerCTA />
           <Testimonials />
           <Contact />
           <RecentArticles />
           <InstagramFeed />
           <NewsletterCTA />
        </Layout>
    );
};


export default IndexPage;