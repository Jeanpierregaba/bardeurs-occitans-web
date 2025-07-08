
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wrench, Droplets, ArrowRight, CheckCircle, Shield, Award, Users, Building, Zap, Clock, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import bardageImage from '@/assets/bardage.JPG';
import etancheiteImage from '@/assets/etancheite-1.jpg';

const Services = () => {
  const bardageTypes = [
    "Bardage double peau",
    "Bardage rapporté sur ossature", 
    "Bardage ventilé",
    "Bardage avec intégration de matériaux translucides (polycarbonate)",
    "Finitions : acier, aluminium, composite, HPL, cassettes pliées"
  ];

  const bardageBatiments = [
    "Entrepôts logistiques",
    "Bureaux et bâtiments tertiaires",
    "Salles de sport, gymnases, centres techniques",
    "Façades à rénover dans le cadre de projets CPE ou décret tertiaire"
  ];

  const etancheiteExpertises = [
    "Étanchéité bitumineuse (bicouche avec ou sans protection)",
    "Membrane PVC soudée à chaud pour toitures plates",
    "Systèmes d'étanchéité liquide (SEL) pour zones complexes",
    "Traitement anti-infiltration et remontées capillaires",
    "Évacuation des eaux pluviales et gestion des pentes",
    "Étanchéité de zones techniques, acrotères, chéneaux",
    "Isolation thermique complémentaire si besoin",
    "Contrats de maintenance et interventions d'urgence"
  ];

  const etancheiteProjets = [
    "Toitures plates et terrasses techniques",
    "Bâtiments industriels, tertiaires ou publics",
    "Réhabilitation ou mise aux normes d'étanchéité",
    "Toitures végétalisées ou accessibles",
    "Travaux en site occupé avec gestion des accès"
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
      <AnimatedSection animation="fade">
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
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animation="slide-up">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center hover-scale">
                  <div className="flex items-center justify-center w-16 h-16 bg-bo-orange/20 rounded-full mb-4 mx-auto animate-float">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-bo-orange mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Bardage Section */}
      <AnimatedSection animation="slide-left">
        <section className="py-20">
          <div className="container mx-auto px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="text-4xl font-bold text-bo-dark">Bardage</h2>
                </div>
                
                <span className="text-bo-orange text-lg font-semibold">
                  Une solution technique, durable et esthétique pour vos façades
                </span>
                
                <p className="text-lg text-gray-600 my-5 leading-relaxed">
                  Chez Bardeurs Occitans, nous mettons notre savoir-faire au service de vos projets en bardage 
                  métallique, en construction neuve comme en rénovation. Grâce à des matériaux certifiés et une pose 
                  experte, nous garantissons une isolation thermique performante, une protection optimale contre les 
                  intempéries, et un rendu architectural de qualité.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nos bardages double peau ou rapportés s'adaptent à tous types de bâtiments : industriels, tertiaires, 
                  ERP ou équipements publics.
                </p>

                <div className="bg-gradient-to-r from-bo-orange/10 to-bo-blue/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-bo-dark mb-6 flex items-center">
                    <CheckCircle className="text-bo-orange mr-3" size={24} />
                    Nos engagements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Isolation thermique optimale (jusqu'à -30 % de pertes énergétiques)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Matériaux conformes aux normes DTU et haute durabilité</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Wrench className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Design personnalisable (teintes, finitions, panneaux spécifiques)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Droplets className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Excellente résistance aux intempéries et aux chocs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Installation rapide, propre et sécurisée</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Recycle className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Compatible avec les projets de rénovation énergétique</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="overflow-hidden shadow-2xl hover-lift">
                <img src={bardageImage} alt="" className='w-full object-cover' />
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-bo-dark mb-4 flex items-center">
                    <Zap className="text-bo-orange mr-2" size={24} />
                    Avantages clés
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Performance énergétique améliorée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Jusqu'à 30 % de réduction des déperditions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Durée de vie supérieure à 25 ans</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Pose rapide, avec une logistique maîtrisée</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Types de bardages */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-bo-dark mb-6">Types de bardages proposés</h4>
                  <ul className="space-y-3">
                    {bardageTypes.map((type, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-bo-orange flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700">{type}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-bo-dark mb-6">Pour quels bâtiments ?</h4>
                  <ul className="space-y-3">
                    {bardageBatiments.map((batiment, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Building className="text-bo-orange flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700">{batiment}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                🔶 Vous avez un projet ? Nos experts vous conseillent sur la solution de bardage la plus adaptée à 
                vos objectifs thermiques, esthétiques et réglementaires.
              </p>
              <Link to="/contact">
                <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-glow" size="lg">
                  Demander un devis
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Étanchéité Section */}
      <AnimatedSection animation="slide-right">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <Card className="overflow-hidden shadow-2xl hover-lift lg:order-2">
              <img src={etancheiteImage} alt="" className='w-full object-cover' />
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-bo-dark mb-4 flex items-center">
                    <Shield className="text-bo-orange mr-2" size={24} />
                    Avantages clés
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Protection totale contre les infiltrations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Garantie décennale sur l'ensemble des systèmes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Diagnostic gratuit avant intervention</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                      <span className="text-gray-700">Intervention d'urgence 24h/24 si sinistre</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="lg:order-1">
                <div className="flex items-center mb-6">
                  <h2 className="text-4xl font-bold text-bo-dark">Étanchéité</h2>
                </div>
                
                <span className="text-bo-orange text-lg font-semibold">
                  Protégez durablement vos bâtiments contre les infiltrations
                </span>
                
                
                <p className="text-lg text-gray-600 my-5 leading-relaxed">
                  Depuis plus de 5 ans, Bardeurs Occitans réalise des travaux d'étanchéité pour les 
                  toitures-terrasses, les zones sensibles et les bâtiments industriels ou tertiaires. Nous utilisons des 
                  solutions éprouvées (bitume bicouche, membrane PVC, SEL) pour garantir une étanchéité parfaite, 
                  durable et conforme aux normes en vigueur.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nos interventions s'adaptent aux contraintes de chaque chantier, en neuf comme en rénovation, avec 
                  une gestion rigoureuse des délais et un rendu irréprochable.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-bo-orange/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-bo-dark mb-6 flex items-center">
                    <CheckCircle className="text-bo-orange mr-3" size={24} />
                    Nos expertises
                  </h3>
                  <div className="space-y-3">
                    {etancheiteExpertises.map((expertise, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Droplets className="text-bo-orange flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700">{expertise}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Types de projets étanchéité */}
            <div className="mt-16">
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-bo-dark mb-6 text-center">Pour quels types de projets ?</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {etancheiteProjets.map((projet, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-blue-50 rounded-lg p-4">
                        <Building className="text-bo-orange flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{projet}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-4">
                 <strong>Un doute sur l'état de votre toiture ?</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Nos équipes réalisent un diagnostic précis et sans engagement pour évaluer vos besoins et vous 
                proposer la solution technique la plus adaptée.
              </p>
              <Link to="/contact">
                <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-glow" size="lg">
                  Demander un devis
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="scale">
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
              <Link to="/contact">
                <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white hover-glow group">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/realisations">
                <Button size="lg" variant="outline" className="border-white text-bo-dark hover:bg-white hover:text-bo-dark hover-scale">
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Services;
