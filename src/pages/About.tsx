
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, TrendingUp, Award, Building, Shield, ArrowRight, Target, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2019",
      title: "Fondation",
      description: "Création par Ferasse Nicolas avec 2 salariés spécialisés",
      details: "Démarrage de l'activité avec une vision claire : devenir la référence en bardage et étanchéité en Occitanie.",
      icon: <Building className="text-bo-orange" size={24} />
    },
    {
      year: "2020",
      title: "Expansion Rapide",
      description: "CA porté de 2,8M€ à 3,5M€",
      details: "Croissance exceptionnelle grâce à la qualité de nos interventions et la satisfaction client.",
      icon: <TrendingUp className="text-bo-orange" size={24} />
    },
    {
      year: "2021-2022",
      title: "Consolidation", 
      description: "Stabilisation avec un CA de 2M€",
      details: "Période de consolidation pour renforcer nos équipes et nos processus qualité.",
      icon: <Award className="text-bo-orange" size={24} />
    },
    {
      year: "2024",
      title: "Nouvelle Croissance",
      description: "15 salariés qualifiés, CA de 2,6M€",
      details: "Retour à la croissance avec une équipe renforcée et des projets d'envergure.",
      icon: <Users className="text-bo-orange" size={24} />
    }
  ];

  const groupeEntities = [
    {
      name: "Bardeurs Occitans",
      specialty: "Bardage métallique et étanchéité",
      description: "Notre cœur de métier, spécialisé dans les solutions de bardage et d'étanchéité pour tous types de bâtiments.",
      current: true
    },
    {
      name: "Arthéa",
      specialty: "Isolation et protection incendie passive",
      description: "Expertise en isolation thermique et acoustique, protection incendie pour la sécurité des bâtiments.",
      current: false
    },
    {
      name: "Cobalto", 
      specialty: "Construction tous corps d'état",
      description: "Construction complète de bâtiments industriels et tertiaires, de la conception à la livraison.",
      current: false
    },
    {
      name: "Gallart",
      specialty: "Gros œuvre et maisons individuelles",
      description: "Spécialiste du gros œuvre et de la construction de maisons individuelles sur mesure.",
      current: false
    }
  ];

  const values = [
    {
      icon: <Shield className="text-bo-orange" size={32} />,
      title: "Qualité & Fiabilité",
      description: "Nous utilisons uniquement des matériaux certifiés DTU et respectons les normes les plus strictes."
    },
    {
      icon: <Users className="text-bo-orange" size={32} />,
      title: "Expertise Humaine",
      description: "Une équipe de 15 professionnels qualifiés, formés aux dernières techniques du secteur."
    },
    {
      icon: <Heart className="text-bo-orange" size={32} />,
      title: "Engagement Client",
      description: "Accompagnement personnalisé de la conception à la livraison, avec suivi post-travaux."
    },
    {
      icon: <Target className="text-bo-orange" size={32} />,
      title: "Innovation",
      description: "Intégration des dernières technologies pour des solutions durables et performantes."
    }
  ];

  const advantages = [
    "Respect des délais et qualité d'exécution irréprochable",
    "Capacité à réaliser des projets techniques complexes",
    "Accompagnement client de la conception à la livraison",
    "Solidité financière assurée par 5 années d'expérience",
    "Engagement environnemental et solutions éco-responsables",
    "Service client personnalisé et approche à taille humaine",
    "Suivi post-travaux avec proposition de contrat d'entretien",
    "Utilisation de matériaux certifiés DTU et avis techniques"
  ];

  return (
    <div className="font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              À <span className="text-bo-orange">Propos</span> de Nous
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Depuis 2019, Bardeurs Occitans s'impose comme un acteur de référence dans le secteur 
              du bardage et de l'étanchéité en Occitanie, avec une croissance constante et une expertise reconnue.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-bo-dark mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Fondée en 2019 par Ferasse Nicolas, Bardeurs Occitans est née d'une vision claire : 
                apporter des solutions de bardage et d'étanchéité de haute qualité en Occitanie.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dès ses débuts, notre société a connu une croissance remarquable grâce à notre 
                engagement envers l'excellence et la satisfaction de nos clients. Aujourd'hui, 
                nous sommes fiers de compter 15 salariés qualifiés et d'avoir réalisé un chiffre 
                d'affaires de 2,6M€ en 2024.
              </p>
              <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white" size="lg">
                Découvrir nos réalisations
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            
            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <div className="bg-gradient-to-br from-bo-orange/20 to-bo-blue/20 h-96 flex items-center justify-center">
                  <div className="text-center text-bo-dark">
                    <Building size={64} className="mx-auto mb-4 text-bo-orange" />
                    <p className="text-lg font-semibold">Notre équipe en action</p>
                    <p className="text-sm">15 professionnels à votre service</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-bo-dark text-center mb-12">
              Notre <span className="text-bo-orange">Évolution</span>
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-bo-orange/10 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge className="bg-bo-orange text-white text-lg px-4 py-1">{item.year}</Badge>
                          <h4 className="text-2xl font-semibold text-bo-dark">{item.title}</h4>
                        </div>
                        <p className="text-lg font-medium text-gray-700 mb-2">{item.description}</p>
                        <p className="text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-bo-dark text-center mb-16">
            Nos <span className="text-bo-orange">Valeurs</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-bo-orange/10 rounded-full mb-6 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-bo-dark mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Groupe Gallart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bo-dark mb-6">
              Groupe <span className="text-bo-orange">Gallart Bati Comminges</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bardeurs Occitans fait partie d'un groupe solide de 4 entités complémentaires, 
              offrant une expertise complète dans le domaine du BTP et garantissant notre solidité financière.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {groupeEntities.map((entity, index) => (
              <Card key={index} className={`${entity.current ? 'border-bo-orange border-2 bg-bo-orange/5' : ''} hover:shadow-lg transition-all`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${entity.current ? 'text-bo-orange' : 'text-bo-dark'}`}>
                        {entity.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-700 mb-3">{entity.specialty}</p>
                      <p className="text-gray-600 leading-relaxed">{entity.description}</p>
                    </div>
                    {entity.current && (
                      <Badge className="bg-bo-orange text-white ml-4">Notre entreprise</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-bo-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nos <span className="text-bo-orange">Avantages Concurrentiels</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white/5 rounded-lg p-4">
                <CheckCircle className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-200 leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bo-orange to-bo-orange/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Faites confiance à notre expertise de 5 années et à notre équipe de 15 professionnels 
            pour mener à bien votre projet de bardage ou d'étanchéité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-bo-dark hover:bg-gray-100">
              Demander un devis gratuit
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-bo-dark hover:bg-white hover:text-bo-orange">
              Découvrir nos services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
