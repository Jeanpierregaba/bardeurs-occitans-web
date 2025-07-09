
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-bo-orange" size={20} />,
      title: "Téléphone",
      content: "05 61 95 62 11",
      description: "Lun-Ven 8h-18h"
    },
    {
      icon: <Mail className="text-bo-orange" size={20} />,
      title: "Email", 
      content: "contact@bardeurs-occitans.fr",
      description: "Réponse sous 24h"
    },
    {
      icon: <MapPin className="text-bo-orange" size={20} />,
      title: "Zone d'intervention",
      content: "Occitanie",
      description: "Toulouse et région"
    },
    {
      icon: <Clock className="text-bo-orange" size={20} />,
      title: "Horaires",
      content: "8h - 18h",
      description: "Du lundi au vendredi"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bo-dark mb-4 md:mb-6">
              Contactez <span className="text-bo-orange">Nos Experts</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Votre projet mérite une attention particulière. Contactez-nous pour 
              une étude personnalisée et un devis gratuit.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slide-right">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-bold text-bo-dark">
                  Demander un devis gratuit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <Input 
                        placeholder="Votre prénom" 
                        className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <Input 
                        placeholder="Votre nom" 
                        className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="votre@email.com" 
                        className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="06 XX XX XX XX" 
                        className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bo-orange focus:border-bo-orange">
                      <option>Sélectionnez votre projet</option>
                      <option>Bardage métallique</option>
                      <option>Étanchéité</option>
                      <option>Rénovation énergétique</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Décrivez votre projet..." 
                      rows={4}
                      className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full text-base md:text-lg py-3"
                  >
                    Envoyer ma demande
                    <Send className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <AnimatedSection animation="slide-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-bo-orange/10 rounded-lg flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-bo-dark text-sm md:text-base">{info.title}</h3>
                          <p className="text-base md:text-lg font-medium text-gray-900 mt-1">{info.content}</p>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA Card */}
            <AnimatedSection animation="scale" delay={200}>
              <Card className="bg-bo-dark text-white">
                <CardContent className="p-6 md:p-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    Urgence ou devis express ?
                  </h3>
                  <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                    Appelez-nous directement pour une réponse immédiate
                  </p>
                  <a href="tel:0561956211">
                    <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full sm:w-auto">
                      <Phone className="mr-2" size={18} />
                      05 61 95 62 11
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
