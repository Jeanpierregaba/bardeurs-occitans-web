
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Award, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const timeline = [
    {
      year: "2019",
      title: "Fondation",
      description: "Création par Ferasse Nicolas avec 2 salariés",
      icon: <Building className="text-bo-orange" size={20} />
    },
    {
      year: "2020",
      title: "Expansion",
      description: "CA porté de 2,8M€ à 3,5M€",
      icon: <TrendingUp className="text-bo-orange" size={20} />
    },
    {
      year: "2021-2022",
      title: "Consolidation", 
      description: "Stabilisation avec un CA de 2M€",
      icon: <Award className="text-bo-orange" size={20} />
    },
    {
      year: "2024",
      title: "Croissance",
      description: "15 salariés qualifiés, CA de 2,6M€",
      icon: <Users className="text-bo-orange" size={20} />
    }
  ];

  const groupeEntities = [
    {
      name: "Bardeurs Occitans",
      specialty: "Bardage, étanchéité",
      current: true
    },
    {
      name: "Arthéa",
      specialty: "Isolation, protection incendie passive",
      current: false
    },
    {
      name: "Cobalto", 
      specialty: "Construction tous corps d'état",
      current: false
    },
    {
      name: "Gallart",
      specialty: "Gros œuvre et maisons individuelles",
      current: false
    }
  ];

  const advantages = [
    "Respect des délais sans compromis sur la qualité",
    "Maîtrise des projets techniques complexes",
    "Un accompagnement global, de l'étude à la réception",
    "Solidité financière et organisation fiable",
    "Engagement environnemental",
    "Service client personnalisé",
    "Suivi post-travaux et entretien",
    "Matériaux certifiés DTU"
  ];

  return (
    <section id="apropos" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bo-dark mb-4 lg:mb-6">
              À <span className="text-bo-orange bg-gradient-to-r from-bo-orange to-orange-400 bg-clip-text text-transparent">Propos</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Depuis 2019, Bardeurs Occitans s'impose comme un acteur de référence dans le secteur 
              du bardage et de l'étanchéité en Occitanie, avec une croissance constante et une expertise reconnue.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
          {/* Company History */}
          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-bo-dark mb-6 sm:mb-8">Notre Histoire</h3>
              <div className="space-y-4 sm:space-y-6">
                {timeline.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 hover-lift group">
                    <div className="flex-shrink-0 w-10 h-10 bg-bo-orange/10 rounded-full flex items-center justify-center group-hover:bg-bo-orange/20 transition-colors duration-300">
                      <div className="animate-float group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2">
                        <Badge className="bg-bo-orange text-white hover-scale self-start">{item.year}</Badge>
                        <h4 className="text-lg sm:text-xl font-semibold text-bo-dark group-hover:text-bo-orange transition-colors duration-300">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8">
                <Link to="/about">
                  <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-glow group w-full sm:w-auto text-sm sm:text-base py-2.5">
                    Découvrir notre histoire complète
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Groupe Gallart */}
          <AnimatedSection animation="slide-right">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-bo-dark mb-6 sm:mb-8">Groupe BGCSO</h3>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Bardeurs Occitans fait partie d'un groupe solide de 4 entités complémentaires, 
                offrant une expertise complète dans le domaine du BTP.
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 stagger-animation">
                {groupeEntities.slice(0, 2).map((entity, index) => (
                  <Card key={index} className={`hover-lift ${entity.current ? 'border-bo-orange border-2 bg-bo-orange/5' : ''}`}>
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <h4 className={`font-semibold text-sm sm:text-base ${entity.current ? 'text-bo-orange' : 'text-bo-dark'}`}>
                            {entity.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600">{entity.specialty}</p>
                        </div>
                        {entity.current && (
                          <Badge className="bg-bo-orange text-white animate-pulse-glow text-xs ml-2">Notre entreprise</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Link to="/about">
                <Button variant="outline" className="border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white hover-glow group w-full sm:w-auto text-sm sm:text-base py-2.5">
                  Voir toutes les entités
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Advantages Preview */}
        <AnimatedSection animation="scale">
          <div className="bg-gradient-to-r from-bo-dark to-bo-blue rounded-2xl p-6 sm:p-8 lg:p-12 text-white hover-lift animate-gradient mx-2 sm:mx-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Nos <span className="text-bo-orange">Avantages Concurrentiels</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8 stagger-animation">
              {advantages.slice(0, 4).map((advantage, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3 hover-scale group">
                  <div className="w-2 h-2 bg-bo-orange rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                  <p className="text-gray-200 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">{advantage}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/about">
                <Button variant="outline" className="border-white text-bo-dark hover:bg-white hover:text-bo-dark hover-glow group w-full sm:w-auto text-sm sm:text-base py-2.5">
                  Découvrir tous nos avantages
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
