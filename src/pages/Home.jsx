import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Process from '../components/Process';
import WorkPreview from '../components/WorkPreview';
import LatestInsights from '../components/LatestInsights';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import GoogleReviews from '../components/GoogleReviews';

const Home = () => {
  return (
    <main className="page-transition">
      <Hero />
      <Services />
      <Stats />
      <Process />
      <WorkPreview />
      <LatestInsights />
      <FAQ />
      <CTA />
      <GoogleReviews />
    </main>
  );
};

export default Home;
