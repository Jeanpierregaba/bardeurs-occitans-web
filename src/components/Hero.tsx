
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import heroImage from '../../public/assets/hero-image.jpg'
import logoRge from '../../public/assets/logo-rge-qualibat.png'

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-bo-orange rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-bo-orange rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-bo-orange rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white text-center lg:text-left">
            <AnimatedSection animation="fade">
              <div className="mb-6">
                <span className="inline-block bg-bo-orange/20 text-bo-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                  Experts en Bardage & Étanchéité
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6">
                  Votre Partenaire 
                  <span className="text-bo-orange"> BTP</span> en 
                  <span className="text-bo-orange"> Occitanie</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
                  Spécialisés dans le bardage et l'étanchéité, nous apportons 
                  des solutions durables et performantes à vos projets de rénovation énergétique 
                  depuis 2019.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 lg:mb-12 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-lift w-full sm:w-auto text-sm sm:text-base px-6 py-3">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bo-dark w-full sm:w-auto text-sm sm:text-base px-6 py-3">
                  Découvrir nos réalisations
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Image/Visual */}
          <AnimatedSection animation="slide-left" delay={300}>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-bo-orange/20 to-bo-blue/20 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                <img src={heroImage} alt="" className='rounded-2xl w-full h-auto' />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-lg p-1.5 sm:p-2 shadow-xl">
                <div className="text-center">
                  <img src={logoRge} alt="" className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"/>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2">
        <ArrowRight className="text-white rotate-90 hover:text-bo-orange transition-colors" size={20} />
      </div>
    </section>
  );
};

export default Hero;
