
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const Realisations = () => {
  const projects = [
    {
      title: "Rénovation Complexe Industriel",
      location: "Toulouse",
      year: "2024",
      type: "Bardage métallique",
      description: "Rénovation complète de la façade avec bardage métallique haute performance et isolation thermique renforcée.",
      beforeImage: "bg-gradient-to-br from-red-200 to-red-300",
      afterImage: "bg-gradient-to-br from-green-200 to-green-300"
    },
    {
      title: "Étanchéité Bâtiment Tertiaire",
      location: "Colomiers",
      year: "2024",
      type: "Étanchéité",
      description: "Traitement complet de l'étanchéité toiture terrasse avec système d'évacuation des eaux pluviales.",
      beforeImage: "bg-gradient-to-br from-gray-200 to-gray-400",
      afterImage: "bg-gradient-to-br from-blue-200 to-blue-300"
    },
    {
      title: "Centre Commercial",
      location: "Blagnac",
      year: "2023",
      type: "Bardage + Étanchéité",
      description: "Projet complet alliant bardage métallique moderne et système d'étanchéité haute technologie.",
      beforeImage: "bg-gradient-to-br from-orange-200 to-orange-300",
      afterImage: "bg-gradient-to-br from-purple-200 to-purple-300"
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-bo-dark mb-6">
              Nos <span className="text-bo-orange bg-gradient-to-r from-bo-orange to-orange-400 bg-clip-text text-transparent">Réalisations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets récents qui témoignent de notre expertise 
              et de la qualité de nos interventions en bardage et étanchéité.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-animation">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover-lift group">
              {/* Before/After Images */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className={`${project.beforeImage} flex items-center justify-center relative group-hover:scale-105 transition-transform duration-700`}>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-red-100 text-red-800 animate-slide-in-left">
                        Avant
                      </Badge>
                    </div>
                  </div>
                  <div className={`${project.afterImage} flex items-center justify-center relative group-hover:scale-105 transition-transform duration-700`}>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 animate-slide-in-right">
                        Après
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-bo-orange/10 text-bo-orange hover:bg-bo-orange/20 hover-scale">
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-bo-dark mb-2 group-hover:text-bo-orange transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2 text-bo-orange animate-float" />
                  {project.location}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <Link to="/realisations">
                  <Button variant="outline" className="w-full border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white hover-glow group">
                    Voir le projet
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection animation="scale">
          <div className="text-center">
            <Link to="/realisations">
              <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white animate-pulse-glow hover-scale group">
                Voir toutes nos réalisations
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Realisations;
