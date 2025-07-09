
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const stats = [
    {
      icon: <Award className="text-bo-orange" size={28} />,
      number: "+50",
      label: "Projets réalisés",
      description: "Chantiers menés à bien"
    },
    {
      icon: <Users className="text-bo-orange" size={28} />,
      number: "100%",
      label: "Satisfaction client",
      description: "Clients satisfaits"
    },
    {
      icon: <MapPin className="text-bo-orange" size={28} />,
      number: "15+",
      label: "Villes en Occitanie",
      description: "Zone d'intervention"
    }
  ];

  return (
    <section id="apropos" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection animation="slide-right">
              <div className="mb-6 md:mb-8">
                <span className="inline-block bg-bo-orange/10 text-bo-orange px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
                  À propos de nous
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bo-dark mb-4 md:mb-6">
                  Bardeurs <span className="text-bo-orange">Occitans</span>
                </h2>
                <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-base md:text-lg">
                    <strong className="text-bo-dark">Bardeurs Occitans</strong> est une entreprise spécialisée 
                    en bardage tous matériaux et en étanchéité depuis 2019. Nous intervenons 
                    principalement en Occitanie pour des projets de rénovation énergétique 
                    et de construction neuve.
                  </p>
                  <p className="text-base md:text-lg">
                    Notre expertise technique et notre engagement qualité nous permettent 
                    d'accompagner particuliers, professionnels et collectivités dans leurs 
                    projets les plus exigeants.
                  </p>
                  <p className="text-base md:text-lg">
                    Certifiés <strong className="text-bo-orange">RGE Qualibat</strong>, nous garantissons 
                    des prestations conformes aux normes DTU et éligibles aux aides à la rénovation énergétique.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full sm:w-auto">
                    En savoir plus
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white w-full sm:w-auto">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats & Image */}
          <div>
            <AnimatedSection animation="slide-left" delay={100}>
              {/* Image */}
              <div className="relative mb-6 md:mb-8">
                <div className="bg-gradient-to-br from-bo-orange/20 to-bo-blue/20 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                  <img 
                    src="/assets/team-img.png" 
                    alt="Équipe Bardeurs Occitans" 
                    className="w-full rounded-lg md:rounded-xl"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-bo-orange/10 rounded-full mb-3 md:mb-4 mx-auto">
                        {stat.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-bo-orange mb-1 md:mb-2">{stat.number}</div>
                      <div className="font-semibold text-bo-dark mb-1 text-sm md:text-base">{stat.label}</div>
                      <div className="text-xs md:text-sm text-gray-600">{stat.description}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
