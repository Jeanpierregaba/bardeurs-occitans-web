
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Droplets, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="text-bo-orange" size={48} />,
      title: "Bardage",
      description: "Nous proposons une large gamme de solutions de bardage adaptées à chaque bâtiment, en neuf comme en rénovation. Qu'il soit métallique, bois, composite ou en panneaux stratifiés, notre bardage améliore l'isolation, modernise l'apparence et protège durablement vos façades.",
      features: [
        "Tous types de bardage: métallique, bois, composite, stratifié HPL, panneaux aluminium",
        "Isolation thermique performante et réduction des ponts thermiques",
        "Bardage conforme aux normes DTU et exigences de la rénovation énergétique",
        "Accompagnement complet : conception, fourniture et installation par des professionnels qualifiés"
      ],
      image: "/assets/bardage.jpg"
    },
    {
      icon: <Droplets className="text-bo-orange" size={48} />,
      title: "Étanchéité: protégez durablement vos bâtiments",
      description: "Spécialistes de l'étanchéité des toitures-terrasses, nous utilisons des systèmes éprouvés (bitume ou membrane synthétique PVC) pour garantir une protection optimale contre les infiltrations, même en conditions extrêmes.",
      features: [
        "Étanchéité bitumineuse et membranes PVC soudées à chaud",
        "Traitement anti-infiltration pour toitures plates, végétalisées ou accessibles",
        "Garantie décennale et durabilité prouvée",
        "Entretien, diagnostic et maintenance préventive",
        "Interventions sur bâtiments occupés avec gestion des contraintes de chantier"
      ],
      image: "/assets/etancheite-1.jpg"
    }
  ];

  return (
    <section id="activites" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <AnimatedSection animation="fade">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-bo-dark mb-4 lg:mb-6">
              Nos <span className="text-bo-orange">Activités</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Spécialisés en bardage (métallique, bois, composite) et en étanchéité (bitume et membrane PVC), nous intervenons sur des projets neufs ou en rénovation pour améliorer la performance énergétique, l'esthétique et la durabilité de vos bâtiments.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-lift h-full">
                <div className="h-48 sm:h-64 lg:h-72">
                  <img src={service.image} alt="" className="w-full h-full object-cover"/>
                </div>
                
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-bo-dark mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                  
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="text-bo-orange flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/services">
                    <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full text-sm sm:text-base py-2.5">
                      En savoir plus
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="scale">
          <div className="text-center bg-gradient-to-r from-bo-dark to-bo-blue rounded-2xl p-6 sm:p-8 lg:p-12 text-white mx-4 sm:mx-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300">
              Contactez-nous pour une étude personnalisée et un devis gratuit
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-scale w-full sm:w-auto text-sm sm:text-base px-6 py-3">
                Demander un devis gratuit
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
