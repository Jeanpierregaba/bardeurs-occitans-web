
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar, Users, Award } from 'lucide-react';

const Realisations = () => {
  const projects = [
    {
      title: "Rénovation Complexe Industriel Airbus",
      location: "Toulouse",
      year: "2024",
      type: "Bardage métallique",
      surface: "2 500 m²",
      duration: "3 mois",
      description: "Rénovation complète de la façade avec bardage métallique haute performance et isolation thermique renforcée. Projet complexe nécessitant une coordination précise avec les activités industrielles.",
      challenges: [
        "Travail en site sensible",
        "Maintien de l'activité industrielle",
        "Respect des normes aéronautiques",
        "Isolation thermique renforcée"
      ],
      beforeImage: "bg-gradient-to-br from-red-200 to-red-300",
      afterImage: "bg-gradient-to-br from-green-200 to-green-300",
      featured: true
    },
    {
      title: "Étanchéité Centre Commercial Odysseum",
      location: "Montpellier",
      year: "2024",
      type: "Étanchéité",
      surface: "1 800 m²",
      duration: "2 mois",
      description: "Traitement complet de l'étanchéité toiture terrasse avec système d'évacuation des eaux pluviales et isolation thermique.",
      challenges: [
        "Travail en centre commercial ouvert",
        "Étanchéité complexe multi-niveaux",
        "Système d'évacuation innovant",
        "Respect des délais stricts"
      ],
      beforeImage: "bg-gradient-to-br from-gray-200 to-gray-400",
      afterImage: "bg-gradient-to-br from-blue-200 to-blue-300",
      featured: true
    },
    {
      title: "Bâtiment Tertiaire Colomiers",
      location: "Colomiers",
      year: "2024",
      type: "Étanchéité",
      surface: "950 m²",
      duration: "1,5 mois",
      description: "Réfection complète de l'étanchéité avec membrane haute performance et isolation thermique par l'extérieur.",
      challenges: [
        "Étanchéité sur isolation",
        "Respect de l'environnement",
        "Coordination multi-corps d'état"
      ],
      beforeImage: "bg-gradient-to-br from-orange-200 to-orange-300",
      afterImage: "bg-gradient-to-br from-purple-200 to-purple-300",
      featured: false
    },
    {
      title: "Usine Agroalimentaire Muret",
      location: "Muret",
      year: "2023",
      type: "Bardage + Étanchéité",
      surface: "3 200 m²",
      duration: "4 mois",
      description: "Projet complet alliant bardage métallique moderne et système d'étanchéité haute technologie pour une usine agroalimentaire.",
      challenges: [
        "Normes alimentaires strictes",
        "Isolation thermique performante",
        "Résistance aux nettoyages intensifs"
      ],
      beforeImage: "bg-gradient-to-br from-yellow-200 to-yellow-300",
      afterImage: "bg-gradient-to-br from-indigo-200 to-indigo-300",
      featured: false
    },
    {
      title: "Lycée Technique Blagnac",
      location: "Blagnac",
      year: "2023",
      type: "Bardage métallique",
      surface: "1 400 m²",
      duration: "2,5 mois",
      description: "Rénovation énergétique complète avec bardage métallique et isolation par l'extérieur pour améliorer les performances thermiques.",
      challenges: [
        "Travail en établissement scolaire",
        "Respect du calendrier scolaire",
        "Performance énergétique élevée"
      ],
      beforeImage: "bg-gradient-to-br from-pink-200 to-pink-300",
      afterImage: "bg-gradient-to-br from-teal-200 to-teal-300",
      featured: false
    },
    {
      title: "Entrepôt Logistique Portet",
      location: "Portet-sur-Garonne",
      year: "2023",
      type: "Bardage + Étanchéité",
      surface: "5 000 m²",
      duration: "5 mois",
      description: "Construction neuve avec bardage métallique et étanchéité complète pour un entrepôt logistique moderne.",
      challenges: [
        "Grande surface de travail",
        "Résistance aux charges lourdes",
        "Optimisation énergétique"
      ],
      beforeImage: "bg-gradient-to-br from-cyan-200 to-cyan-300",
      afterImage: "bg-gradient-to-br from-emerald-200 to-emerald-300",
      featured: false
    }
  ];

  const stats = [
    {
      icon: <Award className="text-bo-orange" size={32} />,
      number: "50+",
      label: "Projets réalisés"
    },
    {
      icon: <Users className="text-bo-orange" size={32} />,
      number: "100%",
      label: "Satisfaction client"
    },
    {
      icon: <MapPin className="text-bo-orange" size={32} />,
      number: "15+",
      label: "Villes en Occitanie"
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
              Nos <span className="text-bo-orange">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets récents qui témoignent de notre expertise 
              et de la qualité de nos interventions en bardage et étanchéité à travers l'Occitanie.
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

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-bo-dark text-center mb-16">
            Projets <span className="text-bo-orange">Phares</span>
          </h2>
          
          <div className="space-y-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  {/* Images Before/After */}
                  <div className="relative h-96">
                    <div className="grid grid-cols-2 h-full">
                      <div className={`${project.beforeImage} flex items-center justify-center relative`}>
                        <Badge className="absolute top-4 left-4 bg-red-100 text-red-800">
                          Avant
                        </Badge>
                      </div>
                      <div className={`${project.afterImage} flex items-center justify-center relative`}>
                        <Badge className="absolute top-4 right-4 bg-green-100 text-green-800">
                          Après
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-bo-orange/10 text-bo-orange hover:bg-bo-orange/20">
                        {project.type}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-bo-dark mb-2">{project.title}</h3>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-2 text-bo-orange" />
                      {project.location}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-semibold text-bo-dark">Surface:</span> {project.surface}
                      </div>
                      <div>
                        <span className="font-semibold text-bo-dark">Durée:</span> {project.duration}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-bo-dark mb-3">Défis techniques relevés :</h4>
                      <div className="grid gap-2">
                        {project.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-bo-orange rounded-full"></div>
                            <span className="text-sm text-gray-600">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full">
                      Voir les détails du projet
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-bo-dark text-center mb-16">
            Autres <span className="text-bo-orange">Réalisations</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Before/After Images */}
                <div className="relative h-48">
                  <div className="grid grid-cols-2 h-full">
                    <div className={`${project.beforeImage} relative`}>
                      <Badge className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs">
                        Avant
                      </Badge>
                    </div>
                    <div className={`${project.afterImage} relative`}>
                      <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs">
                        Après
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-bo-orange/10 text-bo-orange hover:bg-bo-orange/20 text-xs">
                      {project.type}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar size={12} className="mr-1" />
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-bo-dark mb-2 group-hover:text-bo-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={14} className="mr-1 text-bo-orange" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    <span className="font-medium">{project.surface}</span> • <span>{project.duration}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <Button variant="outline" className="w-full border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white text-sm">
                    Voir le projet
                    <ArrowRight className="ml-2" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et bénéficiez de notre expertise 
            pour votre projet de bardage ou d'étanchéité.
          </p>
          <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white">
            Demander un devis gratuit
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Realisations;
