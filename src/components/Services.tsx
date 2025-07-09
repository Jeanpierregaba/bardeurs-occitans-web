
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import bardageImage from '../../public/assets/bardage.jpg';
import etancheiteImage from '../../public/assets/etancheite-1.jpg';

const Services = () => {
  const services = [
    {
      title: "Bardage Métallique",
      description: "Solutions complètes de bardage pour améliorer l'isolation thermique et l'esthétique de vos bâtiments.",
      image: bardageImage,
      features: [
        "Bardage double peau",
        "Isolation thermique renforcée", 
        "Large choix de finitions",
        "Conformité DTU"
      ],
      color: "from-bo-orange to-bo-brown"
    },
    {
      title: "Étanchéité",
      description: "Expertise en étanchéité bitumineuse et membrane PVC pour tous types de toitures terrasses.",
      image: etancheiteImage,
      features: [
        "Étanchéité bitumineuse",
        "Membrane PVC",
        "Toitures terrasses",
        "Garantie décennale"
      ],
      color: "from-bo-blue to-bo-dark"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bo-dark mb-4 md:mb-6">
              Nos <span className="text-bo-orange">Expertises</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Spécialisés dans le bardage métallique et l'étanchéité, nous proposons des solutions 
              techniques innovantes adaptées à vos besoins spécifiques.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 200}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${service.color} p-2 md:p-3 rounded-lg shadow-lg`}>
                      <Shield className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl md:text-2xl font-bold text-bo-dark group-hover:text-bo-orange transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 md:space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-bo-orange flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/services">
                    <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full group/btn">
                      En savoir plus
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="scale">
          <div className="bg-bo-dark rounded-xl md:rounded-2xl p-6 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Un projet en tête ?
            </h3>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300 max-w-2xl mx-auto">
              Nos experts vous accompagnent de la conception à la réalisation 
              de vos projets de bardage et d'étanchéité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full sm:w-auto">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/realisations">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bo-dark w-full sm:w-auto">
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
