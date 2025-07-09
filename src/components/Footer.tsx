
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Bardage", href: "/services" },
        { name: "Étanchéité", href: "/services" },
        { name: "Rénovation énergétique", href: "/services" },
        { name: "Maintenance", href: "/services" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Nos réalisations", href: "/realisations" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" }
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
      <div className="container mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 md:mb-6">
              <img 
                src="/lovable-uploads/logo-secondary.png" 
                alt="Bardeurs Occitans" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Bardeurs Occitans est une entreprise spécialisée en bardage tous matériaux et en étanchéité (bitume & PVC) en Occitanie.
            </p>

            {/* Contact Info Mobile */}
            <div className="space-y-3 md:hidden">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-bo-orange flex-shrink-0" />
                <span className="text-sm">05 61 95 62 11</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-bo-orange flex-shrink-0" />
                <span className="text-sm break-all">contact@bardeurs-occitans.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-bo-orange flex-shrink-0" />
                <span className="text-sm">Toulouse (31200), Occitanie</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-bo-orange">{section.title}</h3>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-bo-orange transition-colors duration-300 text-sm md:text-base flex items-center"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink size={12} className="ml-1 flex-shrink-0" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Desktop */}
        <div className="hidden md:flex flex-row gap-6 lg:gap-10 justify-center mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <Phone size={16} className="text-bo-orange" />
            <span className="text-sm">05 61 95 62 11</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-bo-orange" />
            <span className="text-sm">contact@bardeurs-occitans.fr</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin size={16} className="text-bo-orange" />
            <span className="text-sm">Toulouse (31200), Occitanie</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-10 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 space-y-4 md:space-y-0">
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
