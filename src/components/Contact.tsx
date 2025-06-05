
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <div className="container mx-auto px-4">
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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
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

            {/* Google Maps Placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-bo-blue to-bo-dark flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-4 text-bo-orange" />
                    <p className="font-semibold">Localisation</p>
                    <p className="text-sm">Toulouse, Occitanie</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-bo-dark mb-6">
                  Demande de devis gratuit
                </h3>
                
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
                        Sujet
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Bardage, Étanchéité, Autre..."
                        className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet..."
                      className="border-gray-300 focus:border-bo-orange focus:ring-bo-orange"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-bo-orange hover:bg-bo-orange/90 text-white"
                  >
                    <Send className="mr-2" size={20} />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
