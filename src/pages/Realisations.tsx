
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
      title: "Gymnase de Léguevin",
      location: "Toulouse",
      year: "2025",
      type: "Bardage",
      duration: "3 mois",
      description: "Bardage métallique double peau avec intégration de panneaux en polycarbonate coloré pour valoriser l’esthétique du nouveau gymnase municipal. Isolation thermique renforcée et rendu architectural moderne.",
      beforeImage: "/assets/gymnase-legevin-1x.jpg",
      afterImage: "/assets/gymnase-legevin-2x.jpg",
      featured: true
    },
    {
      title: "Site industriel Trescal",
      location: "Toulouse",
      year: "2025",
      type: "Rénovation Énergétique",
      duration: "4 mois",
      description: "Rénovation complète des façades avec un bardage double peau métallique visant à améliorer les performances énergétiques et moderniser l’image du bâtiment tout en assurant une exécution en site occupé",
      beforeImage: "/assets/trescal-1x.jpg",
      afterImage: "/assets/trescal-2x.jpg",
      featured: true
    },
    {
      title: "Centre de secours SDIS 34",
      location: "Gignac",
      year: "2025",
      type: "Bâtiment public – SDIS",
      duration: "4 mois",
      description: "Pose d’un bardage métallique double peau sur charpente métallique dans le cadre de la construction d’un nouveau centre d’intervention. Un projet technique alliant performance thermique et robustesse des matériaux. ",
      beforeImage: "/assets/sdis-1x.jpg",
      afterImage: "/assets/sdis-2x.png",
      featured: true
    },
    {
      title: "Mission Locale – Muret",
      location: "Muret",
      year: "2024",
      type: "Étanchéité",
      duration: "3 mois",
      description: "Réfection complète de l’étanchéité bitumineuse avec mise en place d’un isolant thermique et pose de gravillons pour la protection de la membrane.",
      beforeImage: "/assets/Muret-1x.jpg",
      afterImage: "/assets/Muret-2x.jpg",
      featured: false
    },
    {
      title: "Lycée Rive Gauche – Toulouse",
      location: "Toulouse",
      year: "2025",
      type: "Étanchéité – Couvertines",
      duration: "1 mois",
      description: "Recherche de fuite sur toiture terrasse suivie du remplacement des couvertines en tête d’acrotères et modernisation de l’ensemble de l’ouvrage.",
      beforeImage: "/assets/Rive-1x.jpg",
      afterImage: "/assets/Rive-2x.jpg",
      featured: false
    },
    {
      title: "SDIS 31 – Centre de secours Grenade",
      location: "Grenade-sur-Garonne",
      year: "2025",
      type: "Bardage Bois + Métallique",
      duration: "6 mois",
      description: "Pose d’un complexe mixte en bardage bois et métallique sur bâtiment neuf destiné au SDIS 31. Rendu esthétique et technique pour une enveloppe performante.",
      beforeImage: "/assets/grenade-1x.jpg",
      afterImage: "/assets/grenade-2x.jpg",
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
        <div className="container mx-auto px-10">
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
        <div className="container mx-auto px-10">
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
        <div className="container mx-auto px-10">
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
                      <img src={project.beforeImage} alt="" className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'/>
                        <Badge className="absolute top-4 left-4 bg-red-100 text-red-800">
                          Avant
                        </Badge>
                        
                      <img src={project.afterImage} alt="" className='w-full h-full object-cover'/>
                        <Badge className="absolute top-4 right-4 bg-green-100 text-green-800">
                          Après
                        </Badge>
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
                        <span className="font-semibold text-bo-dark">Durée:</span> {project.duration}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
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
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-bold text-bo-dark text-center mb-16">
            Autres <span className="text-bo-orange">Réalisations</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Before/After Images */}
                <div className="relative h-48">
                  <div className="grid grid-cols-2 h-full">
                    <img src={project.beforeImage} alt="" className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700'/>
                      <Badge className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs">
                        Avant
                      </Badge>
                    <img src={project.afterImage} alt="" className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700'/>
                      <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs">
                        Après
                      </Badge>
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
                    <span>{project.duration}</span>
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
        <div className="container mx-auto px-10 text-center">
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
