
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Détection du scroll pour animer le header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Activités', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Blog', href: '/blog' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-bo-dark text-white py-1 px-2 sm:py-2 sm:px-4 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4 animate-slide-in-left">
            <div className="hidden sm:flex items-center space-x-2 hover-glow">
              <Phone size={14} className="animate-float" />
              <span>05 61 95 62 11</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 hover-glow">
              <Mail size={14} className="animate-float" style={{ animationDelay: '1s' }} />
              <span className="truncate">contact@bardeurs-occitans.fr</span>
            </div>
          </div>
          <div className="hidden md:block animate-slide-in-right">
            <span>Zone d'intervention : Occitanie</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl backdrop-blur-sm bg-white/95' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="hover-scale group">
                <img 
                  src="/lovable-uploads/logo-bardeurs-occitans.png" 
                  alt="Bardeurs Occitans" 
                  className="h-8 sm:h-10 lg:h-12 w-auto group-hover:brightness-110 transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-all duration-300 font-medium relative group animate-slide-in-down text-sm xl:text-base ${
                    location.pathname === item.href 
                      ? 'text-bo-orange' 
                      : 'text-bo-dark hover:text-bo-orange'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bo-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block animate-slide-in-right">
              <Link to="/contact">
                <Button size="sm" className="bg-bo-orange hover:bg-bo-orange/90 text-white animate-pulse-glow hover-lift text-xs xl:text-sm px-3 xl:px-4">
                  Demander un devis
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden hover-scale p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <X 
                  size={20} 
                  className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} 
                />
                <Menu 
                  size={20} 
                  className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
            <div className="border-t pt-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-all duration-300 font-medium hover-glow animate-slide-in-up py-2 px-2 rounded text-sm ${
                      location.pathname === item.href 
                        ? 'text-bo-orange bg-bo-orange/10' 
                        : 'text-bo-dark hover:text-bo-orange hover:bg-gray-50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full mt-2 hover-glow animate-slide-in-up text-sm py-2.5" style={{ animationDelay: '0.6s' }}>
                    Demander un devis
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
