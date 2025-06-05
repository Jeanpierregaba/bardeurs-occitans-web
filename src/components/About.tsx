
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, Award, Building } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2019",
      title: "Fondation",
      description: "Création par Ferasse Nicolas avec 2 salariés",
      icon: <Building className="text-bo-orange" size={24} />
    },
    {
      year: "2020",
      title: "Expansion",
      description: "CA porté de 2,8M€ à 3,5M€",
      icon: <TrendingUp className="text-bo-orange" size={24} />
    },
    {
      year: "2021-2022",
      title: "Consolidation", 
      description: "Stabilisation avec un CA de 2M€",
      icon: <Award className="text-bo-orange" size={24} />
    },
    {
      year: "2024",
      title: "Croissance",
      description: "15 salariés qualifiés, CA de 2,6M€",
      icon: <Users className="text-bo-orange" size={24} />
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
    "Respect des délais et qualité d'exécution",
    "Projets techniques complexes",
    "Accompagnement de la conception à la livraison",
    "Solidité financière assurée",
    "Engagement environnemental",
    "Service client personnalisé",
    "Suivi post-travaux et entretien",
    "Matériaux certifiés DTU"
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-bo-dark mb-6">
            À <span className="text-bo-orange">Propos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Depuis 2019, Bardeurs Occitans s'impose comme un acteur de référence dans le secteur 
            du bardage et de l'étanchéité en Occitanie, avec une croissance constante et une expertise reconnue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Company History */}
          <div>
            <h3 className="text-3xl font-bold text-bo-dark mb-8">Notre Histoire</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bo-orange/10 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge className="bg-bo-orange text-white">{item.year}</Badge>
                      <h4 className="text-xl font-semibold text-bo-dark">{item.title}</h4>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Groupe Gallart */}
          <div>
            <h3 className="text-3xl font-bold text-bo-dark mb-8">Groupe Gallart Bati Comminges</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Bardeurs Occitans fait partie d'un groupe solide de 4 entités complémentaires, 
              offrant une expertise complète dans le domaine du BTP.
            </p>
            
            <div className="space-y-4">
              {groupeEntities.map((entity, index) => (
                <Card key={index} className={`${entity.current ? 'border-bo-orange border-2 bg-bo-orange/5' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-semibold ${entity.current ? 'text-bo-orange' : 'text-bo-dark'}`}>
                          {entity.name}
                        </h4>
                        <p className="text-sm text-gray-600">{entity.specialty}</p>
                      </div>
                      {entity.current && (
                        <Badge className="bg-bo-orange text-white">Notre entreprise</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="bg-bo-dark rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nos <span className="text-bo-orange">Avantages Concurrentiels</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-bo-orange rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-200">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
