
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Droplets, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="text-bo-orange" size={48} />,
      title: "Bardage Métallique",
      description: "Solutions de bardage métallique haute performance pour l'isolation et l'esthétique de vos bâtiments.",
      features: [
        "Isolation thermique optimale",
        "Matériaux certifiés DTU",
        "Design moderne et durable",
        "Installation professionnelle"
      ],
      image: "bg-gradient-to-br from-gray-300 to-gray-400"
    },
    {
      icon: <Droplets className="text-bo-orange" size={48} />,
      title: "Étanchéité",
      description: "Expertise complète en étanchéité pour protéger durablement vos structures contre les infiltrations.",
      features: [
        "Étanchéité toiture terrasse",
        "Traitement anti-infiltration",
        "Garanties longue durée",
        "Suivi et maintenance"
      ],
      image: "bg-gradient-to-br from-blue-200 to-blue-300"
    }
  ];

  return (
    <section id="activites" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-bo-dark mb-6">
            Nos <span className="text-bo-orange">Activités</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Spécialisés dans le bardage métallique et l'étanchéité, nous apportons 
            des solutions durables et performantes à vos projets de rénovation énergétique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-48 ${service.image} flex items-center justify-center`}>
                {service.icon}
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-bo-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-bo-orange flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/services">
                  <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full">
                    En savoir plus
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-bo-dark rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Un projet en tête ?
          </h3>
          <p className="text-xl mb-8 text-gray-300">
            Contactez-nous pour une étude personnalisée et un devis gratuit
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white">
              Demander un devis gratuit
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
