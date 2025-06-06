
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users, } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-bo-orange rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-bo-orange rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-bo-orange rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
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
                Spécialisés dans le bardage métallique et l'étanchéité, nous apportons 
                des solutions durables et performantes à vos projets de rénovation énergétique 
                depuis 2019.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-bo-dark hover:bg-white hover:text-bo-dark">
                Découvrir nos réalisations
              </Button>
            </div>

          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-bo-orange/20 to-bo-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Shield size={64} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">Image de présentation</p>
                  <p className="text-sm">Chantier ou équipe Bardeurs Occitans</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Certifié DTU</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-bo-orange rounded-lg p-4 shadow-xl text-white">
              <div className="text-center">
                <div className="text-lg font-bold">100%</div>
                <div className="text-xs">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowRight className="text-white rotate-90" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
