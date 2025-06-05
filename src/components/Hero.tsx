
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark min-h-screen flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-bo-orange">Bardeurs Occitans</span>
              <br />
              Experts en Bardage & Étanchéité
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Depuis 2019, nous accompagnons vos projets de rénovation énergétique 
              avec expertise et innovation en Occitanie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-bo-orange hover:bg-bo-orange/90 text-white text-lg px-8 py-6"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-bo-dark text-lg px-8 py-6"
              >
                Voir nos réalisations
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-bo-orange" size={32} />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-300">Salariés qualifiés</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-bo-orange" size={32} />
                </div>
                <div className="text-2xl font-bold">2,6M€</div>
                <div className="text-sm text-gray-300">CA 2024</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="text-bo-orange" size={32} />
                </div>
                <div className="text-2xl font-bold">5 ans</div>
                <div className="text-sm text-gray-300">D'expertise</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-bo-orange to-bo-brown rounded-2xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-lg p-6 transform -rotate-3">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <Shield size={64} className="mx-auto mb-4 text-bo-orange" />
                    <p className="font-semibold">Bardage métallique</p>
                    <p className="text-sm">Solutions durables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
