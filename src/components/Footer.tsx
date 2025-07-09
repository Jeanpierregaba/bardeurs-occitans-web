
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Bardage", href: "#" },
        { name: "Étanchéité", href: "#" },
        { name: "Rénovation énergétique", href: "#" },
        { name: "Maintenance", href: "#" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#apropos" },
        { name: "Nos réalisations", href: "#realisations" },
        { name: "Groupe Gallart", href: "#" },
        { name: "Certifications", href: "#" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "#" },
        { name: "Politique de confidentialité", href: "#" },
        { name: "CGV", href: "#" },
        { name: "Assurance décennale", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-bo-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/logo-secondary.png" 
                alt="Bardeurs Occitans" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-5 leading-relaxed text-sm">
              Bardeurs Occitans est une entreprise spécialisée en bardage tous matériaux et en étanchéité (bitume & PVC) en Occitanie.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-bo-orange">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-bo-orange transition-colors duration-300 text-sm flex items-center"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink size={12} className="ml-1" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center items-center text-center sm:text-left">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Phone size={14} className="text-bo-orange flex-shrink-0" />
              <span className="text-sm">05 61 95 62 11</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Mail size={14} className="text-bo-orange flex-shrink-0" />
              <span className="text-sm break-all sm:break-normal">contact@bardeurs-occitans.fr</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <MapPin size={14} className="text-bo-orange flex-shrink-0" />
              <span className="text-sm">Toulouse (31200), Occitanie</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} BOCA AGENCY. Tous droits réservés.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center">
              <span>SIRET : XXX XXX XXX XXXXX</span>
              <span className="hidden sm:inline">|</span>
              <span>Assurance décennale</span>
              <span className="hidden sm:inline">|</span>
              <span>Membre du Groupe BGCSO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
