
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

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
              <span className="inline-block bg-bo-orange/20 text-bo-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
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
              <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white">
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bo-dark">
                Découvrir nos réalisations
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-bo-orange/20 rounded-full mb-3 mx-auto">
                  <Users className="text-bo-orange" size={24} />
                </div>
                <div className="text-2xl font-bold text-bo-orange">15+</div>
                <div className="text-sm text-gray-300">Salariés qualifiés</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-bo-orange/20 rounded-full mb-3 mx-auto">
                  <Award className="text-bo-orange" size={24} />
                </div>
                <div className="text-2xl font-bold text-bo-orange">2,6M€</div>
                <div className="text-sm text-gray-300">Chiffre d'affaires 2024</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-bo-orange/20 rounded-full mb-3 mx-auto">
                  <Shield className="text-bo-orange" size={24} />
                </div>
                <div className="text-2xl font-bold text-bo-orange">5+</div>
                <div className="text-sm text-gray-300">Années d'expertise</div>
              </div>
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
