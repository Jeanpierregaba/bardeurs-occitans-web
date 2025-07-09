
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import heroImage from '../../public/assets/hero-image.jpg'
import logoRge from '../../public/assets/logo-rge-qualibat.png'

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark px-4 md:px-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 border border-bo-orange rounded-full"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-32 md:w-48 h-32 md:h-48 border border-bo-orange rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 md:w-24 h-16 md:h-24 border border-bo-orange rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-white text-center lg:text-left">
            <AnimatedSection animation="fade">
              <div className="mb-6">
                <span className="inline-block bg-bo-orange/20 text-bo-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
                  Experts en Bardage & Étanchéité
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
                  Votre Partenaire 
                  <span className="text-bo-orange"> BTP</span> en 
                  <span className="text-bo-orange"> Occitanie</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                  Spécialisés dans le bardage et l'étanchéité, nous apportons 
                  des solutions durables et performantes à vos projets de rénovation énergétique 
                  depuis 2019.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-lift w-full sm:w-auto text-sm md:text-base">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
                <Link to="/realisations" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bo-dark w-full sm:w-auto text-sm md:text-base">
                    Découvrir nos réalisations
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Image/Visual */}
          <AnimatedSection animation="slide-left" delay={300}>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-bo-orange/20 to-bo-blue/20 rounded-xl md:rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-white/10">
                <img src={heroImage} alt="Bardeurs Occitans" className='rounded-xl md:rounded-2xl w-full' />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 bg-white rounded-lg p-2 shadow-xl">
                <div className="text-center">
                  <img src={logoRge} alt="RGE Qualibat" width={50} height={50} className="md:w-[75px] md:h-[75px]"/>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block">
        <ArrowRight className="text-white rotate-90 hover:text-bo-orange transition-colors w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
