
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-bo-orange" size={24} />,
      title: "Téléphone",
      content: "05 61 95 62 11",
      subtitle: "Lun - Ven : 8h - 18h"
    },
    {
      icon: <Mail className="text-bo-orange" size={24} />,
      title: "Email",
      content: "contact@bardeurs-occitans.fr",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: <MapPin className="text-bo-orange" size={24} />,
      title: "Adresse",
      content: "Toulouse (31200)",
      subtitle: "Zone d'intervention : Occitanie"
    },
    {
      icon: <Clock className="text-bo-orange" size={24} />,
      title: "Horaires",
      content: "Lun - Ven : 8h - 18h",
      subtitle: "Urgences : 24h/24"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-bo-dark mb-6">
            <span className="text-bo-orange">Contactez</span> Nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un projet en tête ? Une question sur nos services ? 
            Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-bo-orange/10 rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bo-dark mb-1">{info.title}</h3>
                      <p className="text-bo-dark font-medium">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex items-center">
            <Card className="w-full shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-bo-dark mb-4">
                  Demandez votre devis gratuit
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Remplissez notre formulaire détaillé et recevez une proposition 
                  personnalisée sous 48h maximum.
                </p>
                
                <div className="space-y-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full">
                      Formulaire de devis
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>ou appelez-nous directement</p>
                    <a href="tel:0561956211" className="text-bo-orange font-semibold hover:underline">
                      05 61 95 62 11
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-br from-bo-blue to-bo-dark flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={48} className="mx-auto mb-4 text-bo-orange" />
                  <p className="font-semibold">Zone d'intervention : Occitanie</p>
                  <p className="text-sm">Basés à Toulouse, nous intervenons dans toute la région</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
