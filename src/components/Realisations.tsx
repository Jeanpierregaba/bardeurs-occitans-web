
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
      title: "Gymnase de Léguevin",
      location: "Toulouse",
      year: "2025",
      type: "Bardage",
      description: "Bardage métallique double peau avec intégration de panneaux en polycarbonate coloré pour valoriser l'esthétique du nouveau gymnase municipal. Isolation thermique renforcée et rendu architectural moderne.",
      beforeImage: "/assets/gymnase-legevin-1x.jpg",
      afterImage: "/assets/gymnase-legevin-2x.jpg"
    },
    {
      title: "Site industriel Trescal",
      location: "Toulouse",
      year: "2025",
      type: "Rénovation Énergétique",
      description: "Rénovation complète des façades avec un bardage double peau métallique visant à améliorer les performances énergétiques et moderniser l'image du bâtiment tout en assurant une exécution en site occupé",
      beforeImage: "/assets/trescal-1x.jpg",
      afterImage: "/assets/trescal-2x.jpg"
    },
    {
      title: "Centre de secours SDIS 34",
      location: "Gignac",
      year: "2025",
      type: "Bâtiment public – SDIS",
      description: "Pose d'un bardage métallique double peau sur charpente métallique dans le cadre de la construction d'un nouveau centre d'intervention. Un projet technique alliant performance thermique et robustesse des matériaux. ",
      beforeImage: "/assets/sdis-1x.jpg",
      afterImage: "/assets/sdis-2x.png"
    }
  ];

  return (
    <section id="realisations" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bo-dark mb-4 lg:mb-6">
              Nos <span className="text-bo-orange bg-gradient-to-r from-bo-orange to-orange-400 bg-clip-text text-transparent">Réalisations</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Découvrez nos projets récents qui témoignent de notre expertise 
              et de la qualité de nos interventions en bardage et étanchéité.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 stagger-animation">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover-lift group h-full">
              {/* Before/After Images */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  <img src={project.beforeImage} alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-red-100 text-red-800 animate-slide-in-left text-xs">
                        Avant
                      </Badge>
                    </div>
                  <img src={project.afterImage} alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'/>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800 animate-slide-in-right text-xs">
                        Après
                      </Badge>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-bo-orange/10 text-bo-orange hover:bg-bo-orange/20 hover-scale text-xs">
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar size={12} className="mr-1" />
                    {project.year}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-bo-dark mb-2 group-hover:text-bo-orange transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3 sm:mb-4">
                  <MapPin size={14} className="mr-2 text-bo-orange animate-float flex-shrink-0" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                  {project.description}
                </p>
                
                <Link to="/realisations" className="mt-auto">
                  <Button variant="outline" className="w-full border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white hover-glow group text-sm py-2.5">
                    Voir le projet
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
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
              <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white animate-pulse-glow hover-scale group w-full sm:w-auto text-sm sm:text-base px-6 py-3">
                Voir toutes nos réalisations
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Realisations;
