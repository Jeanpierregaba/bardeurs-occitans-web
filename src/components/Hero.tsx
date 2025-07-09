
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

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <AnimatedSection animation="fade">
              <div className="mb-6">
                <span className="inline-block bg-bo-orange/20 text-bo-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Experts en Bardage & Étanchéité
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Votre Partenaire 
                  <span className="text-bo-orange"> BTP</span> en 
                  <span className="text-bo-orange"> Occitanie</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Spécialisés dans le bardage et l'étanchéité, nous apportons 
                  des solutions durables et performantes à vos projets de rénovation énergétique 
                  depuis 2019.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/contact">
                  <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-lift">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-bo-dark hover:bg-bo-dark">
                  Découvrir nos réalisations
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Image/Visual */}
          <AnimatedSection animation="slide-left" delay={300}>
            <div className="relative">
              <div className="bg-gradient-to-br from-bo-orange/20 to-bo-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <img src={heroImage} alt="" className='rounded-2xl' />
              </div>

              {/* Floating Cards */}

              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-2 shadow-xl">
                <div className="text-center">
                  <img src={logoRge} alt="" width={75} height={75}/>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <ArrowRight className="text-white rotate-90 hover:text-bo-orange transition-colors" size={22} />
      </div>
    </section>
  );
};

export default Hero;
