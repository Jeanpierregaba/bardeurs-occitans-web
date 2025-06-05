
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Droplets, ArrowRight, CheckCircle, Shield, Award, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="text-bo-orange" size={64} />,
      title: "Bardage Métallique",
      description: "Solutions de bardage métallique haute performance pour l'isolation et l'esthétique de vos bâtiments industriels et tertiaires.",
      detailedDescription: "Notre expertise en bardage métallique vous garantit des solutions durables et performantes. Nous utilisons uniquement des matériaux certifiés DTU et respectons les normes les plus strictes pour assurer l'isolation thermique optimale de vos bâtiments.",
      features: [
        "Isolation thermique optimale",
        "Matériaux certifiés DTU",
        "Design moderne et durable",
        "Installation professionnelle",
        "Résistance aux intempéries",
        "Entretien minimal requis",
        "Amélioration énergétique",
        "Esthétique personnalisable"
      ],
      image: "bg-gradient-to-br from-gray-300 to-gray-400",
      benefits: [
        "Réduction de 30% des pertes énergétiques",
        "Durée de vie supérieure à 25 ans",
        "Installation rapide et propre",
        "Maintenance réduite"
      ]
    },
    {
      icon: <Droplets className="text-bo-orange" size={64} />,
      title: "Étanchéité",
      description: "Expertise complète en étanchéité pour protéger durablement vos structures contre les infiltrations et l'humidité.",
      detailedDescription: "Spécialistes de l'étanchéité depuis plus de 5 ans, nous maîtrisons toutes les techniques modernes pour garantir une protection totale de vos bâtiments contre les infiltrations d'eau.",
      features: [
        "Étanchéité toiture terrasse",
        "Traitement anti-infiltration",
        "Garanties longue durée",
        "Suivi et maintenance",
        "Système d'évacuation des eaux",
        "Isolation complémentaire",
        "Diagnostic précis",
        "Solutions sur mesure"
      ],
      image: "bg-gradient-to-br from-blue-200 to-blue-300",
      benefits: [
        "Protection totale contre l'humidité",
        "Garantie décennale incluse",
        "Diagnostic gratuit",
        "Intervention d'urgence 24h/24"
      ]
    }
  ];

  const stats = [
    {
      icon: <Users className="text-bo-orange" size={32} />,
      number: "15+",
      label: "Salariés qualifiés"
    },
    {
      icon: <Award className="text-bo-orange" size={32} />,
      number: "2,6M€",
      label: "Chiffre d'affaires 2024"
    },
    {
      icon: <Shield className="text-bo-orange" size={32} />,
      number: "5+",
      label: "Années d'expertise"
    }
  ];

  return (
    <div className="font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Nos <span className="text-bo-orange">Activités</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos expertises en bardage métallique et étanchéité. 
              Des solutions complètes et durables pour vos projets de rénovation énergétique.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-bo-orange/20 rounded-full mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-bo-orange mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-bo-dark mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.detailedDescription}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-bo-orange flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-bo-orange/10 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-bo-dark mb-4">Avantages clés</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white" size="lg">
                    Demander un devis
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="overflow-hidden shadow-xl">
                    <div className={`h-96 ${service.image} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une étude personnalisée et un devis gratuit. 
            Notre équipe d'experts est à votre disposition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white">
              Demander un devis gratuit
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bo-dark">
              Voir nos réalisations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
