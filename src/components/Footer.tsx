
import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Bardage métallique", href: "#" },
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
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/logo-secondary.png" 
                alt="Bardeurs Occitans" 
                className="h-20 w-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Spécialistes du bardage métallique et de l'étanchéité en Occitanie. 
              Solutions durables et performantes pour vos projets de rénovation énergétique.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-bo-orange" />
                <span className="text-sm">05 XX XX XX XX</span>
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

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-bo-orange">{section.title}</h3>
              <ul className="space-y-3">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Bardeurs Occitans. Tous droits réservés.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <span>SIRET : XXX XXX XXX XXXXX</span>
              <span>|</span>
              <span>Assurance décennale</span>
              <span>|</span>
              <span>Membre du Groupe Gallart Bati Comminges</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
