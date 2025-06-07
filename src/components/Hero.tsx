
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users, } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark overflow-hidden animate-gradient">
      {/* Indicateur de progression de lecture */}
      <div className="reading-progress"></div>

      {/* Background Pattern avec animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-bo-orange rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-bo-orange rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-bo-orange rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <AnimatedSection animation="slide-left">
              <div className="mb-6">
                <span className="inline-block bg-bo-orange/20 text-bo-white px-4 py-2 rounded-full text-sm font-medium mb-4 hover-glow">
                  Experts en Bardage & Étanchéité
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Votre Partenaire 
                  <span className="text-bo-orange bg-gradient-to-r from-bo-orange to-orange-400 bg-clip-text text-transparent"> BTP</span> en 
                  <span className="text-bo-orange bg-gradient-to-r from-bo-orange to-orange-400 bg-clip-text text-transparent"> Occitanie</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Spécialisés dans le bardage métallique et l'étanchéité, nous apportons 
                  des solutions durables et performantes à vos projets de rénovation énergétique 
                  depuis 2019.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/contact">
                  <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-lift animate-pulse-glow">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-bo-dark hover:bg-white hover:text-bo-dark hover-scale hover-glow">
                  Découvrir nos réalisations
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Image/Visual */}
          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-bo-orange/20 to-bo-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover-lift">
                <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl h-96 flex items-center justify-center hover-glow">
                  <div className="text-center text-gray-600">
                    <Shield size={64} className="mx-auto mb-4 animate-float" />
                    <p className="text-lg font-semibold">Image de présentation</p>
                    <p className="text-sm">Chantier ou équipe Bardeurs Occitans</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards avec animations */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl hover-scale animate-slide-in-down" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Certifié DTU</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-bo-orange rounded-lg p-4 shadow-xl text-white hover-rotate animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-center">
                  <div className="text-lg font-bold">100%</div>
                  <div className="text-xs">Satisfaction client</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator animé */}
      <AnimatedSection animation="fade" delay={1000}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce hover-scale cursor-pointer">
            <ArrowRight className="text-white rotate-90 hover:text-bo-orange transition-colors" size={24} />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
