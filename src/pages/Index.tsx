
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Realisations from '@/components/Realisations';
import About from '@/components/About';
import Contact from '@/components/Contact';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-montserrat">
      <Header />
      <Hero />
      <Services />
      <Realisations />
      <About />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
