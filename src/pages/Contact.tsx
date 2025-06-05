
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    projectType: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  const contactInfo = [
    {
      icon: <Phone className="text-bo-orange" size={24} />,
      title: "Téléphone",
      content: "05 XX XX XX XX",
      subtitle: "Lun - Ven : 8h - 18h",
      description: "Appelez-nous pour un premier échange sur votre projet"
    },
    {
      icon: <Mail className="text-bo-orange" size={24} />,
      title: "Email",
      content: "contact@bardeurs-occitans.fr",
      subtitle: "Réponse sous 24h",
      description: "Envoyez-nous vos plans et spécifications"
    },
    {
      icon: <MapPin className="text-bo-orange" size={24} />,
      title: "Adresse",
      content: "Toulouse (31200)",
      subtitle: "Zone d'intervention : Occitanie",
      description: "Déplacements possibles dans toute la région"
    },
    {
      icon: <Clock className="text-bo-orange" size={24} />,
      title: "Horaires",
      content: "Lun - Ven : 8h - 18h",
      subtitle: "Urgences : 24h/24",
      description: "Service d'urgence pour interventions critiques"
    }
  ];

  const services = [
    "Bardage métallique",
    "Étanchéité toiture terrasse",
    "Isolation thermique par l'extérieur",
    "Rénovation énergétique",
    "Maintenance et entretien",
    "Expertise et diagnostic",
    "Autre"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Premier Contact",
      description: "Échange téléphonique ou par email pour comprendre votre projet"
    },
    {
      step: "2", 
      title: "Visite Technique",
      description: "Déplacement sur site pour évaluation et prise de mesures"
    },
    {
      step: "3",
      title: "Devis Détaillé",
      description: "Proposition commerciale complète sous 48h"
    },
    {
      step: "4",
      title: "Réalisation",
      description: "Exécution des travaux par nos équipes qualifiées"
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
              <span className="text-bo-orange">Contactez</span> Nous
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Un projet en tête ? Une question sur nos services ? 
              Notre équipe d'experts est à votre disposition pour vous accompagner dans votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-bo-orange/10 rounded-full mb-6 mx-auto group-hover:bg-bo-orange/20 transition-colors">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-bo-dark mb-2">{info.title}</h3>
                  <p className="text-bo-orange font-medium text-lg mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600 mb-3">{info.subtitle}</p>
                  <p className="text-xs text-gray-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <MessageSquare className="text-bo-orange" size={32} />
                    <h2 className="text-3xl font-bold text-bo-dark">
                      Demande de devis gratuit
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre nom"
                          className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="votre@email.com"
                          className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="06 XX XX XX XX"
                          className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nom de votre entreprise"
                          className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type de projet *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-bo-orange focus:ring-bo-orange"
                        >
                          <option value="">Sélectionnez un service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget prévisionnel
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-bo-orange focus:ring-bo-orange"
                        >
                          <option value="">Sélectionnez une fourchette</option>
                          <option value="< 50k€">Moins de 50 000€</option>
                          <option value="50k€ - 100k€">50 000€ - 100 000€</option>
                          <option value="100k€ - 200k€">100 000€ - 200 000€</option>
                          <option value="> 200k€">Plus de 200 000€</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Délai souhaité
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-bo-orange focus:ring-bo-orange"
                        >
                          <option value="">Sélectionnez un délai</option>
                          <option value="Urgent (< 1 mois)">Urgent (moins d'1 mois)</option>
                          <option value="Court terme (1-3 mois)">Court terme (1-3 mois)</option>
                          <option value="Moyen terme (3-6 mois)">Moyen terme (3-6 mois)</option>
                          <option value="Long terme (> 6 mois)">Long terme (plus de 6 mois)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Objet de votre demande"
                          className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description de votre projet *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Décrivez votre projet en détail : localisation, surface, contraintes particulières..."
                        className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                      />
                    </div>

                    <div className="bg-bo-orange/10 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="text-bo-orange flex-shrink-0 mt-1" size={20} />
                        <div className="text-sm text-gray-700">
                          <p className="font-medium mb-1">Vos données sont protégées</p>
                          <p>Nous respectons votre confidentialité et ne transmettrons jamais vos informations à des tiers.</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-bo-orange hover:bg-bo-orange/90 text-white"
                    >
                      <Send className="mr-2" size={20} />
                      Envoyer ma demande de devis
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Process Steps */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-bo-dark mb-6">
                    Notre processus
                  </h3>
                  <div className="space-y-4">
                    {processSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-bo-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-bo-dark text-sm">{step.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-bo-dark mb-6">
                    Nos garanties
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span className="text-sm text-gray-700">Certifié DTU</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span className="text-sm text-gray-700">Assurance décennale</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span className="text-sm text-gray-700">Garantie travaux</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-green-100 text-green-800">✓</Badge>
                      <span className="text-sm text-gray-700">Suivi post-travaux</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-bo-blue to-bo-dark flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin size={48} className="mx-auto mb-4 text-bo-orange" />
                      <p className="font-semibold">Zone d'intervention</p>
                      <p className="text-sm">Occitanie</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Besoin d'une intervention d'urgence ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Pour les situations urgentes nécessitant une intervention immédiate, 
            notre équipe d'astreinte est disponible 24h/24.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2" size={20} />
              Urgence : 06 XX XX XX XX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bo-dark">
              <Calendar className="mr-2" size={20} />
              Planifier une visite
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
