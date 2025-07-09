
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
      <div className="bg-bo-dark text-white py-2 px-4 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <div className="flex items-center space-x-2 hover-glow">
              <Phone size={16} className="animate-float" />
              <span>05 61 95 62 11</span>
            </div>
            <div className="flex items-center space-x-2 hover-glow">
              <Mail size={16} className="animate-float" style={{ animationDelay: '1s' }} />
              <span>contact@bardeurs-occitans.fr</span>
            </div>
          </div>
          <div className="hidden md:block animate-slide-in-right">
            <span>Zone d'intervention : Occitanie</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl backdrop-blur-sm bg-white/95' : ''}`}>
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="hover-scale group">
                <img 
                  src="/lovable-uploads/logo-bardeurs-occitans.png" 
                  alt="Bardeurs Occitans" 
                  className="h-12 w-auto group-hover:brightness-110 transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-all duration-300 font-medium relative group animate-slide-in-down ${
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
                <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white animate-pulse-glow hover-lift">
                  Demander un devis
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden hover-scale"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <X 
                  size={24} 
                  className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} 
                />
                <Menu 
                  size={24} 
                  className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-all duration-300 font-medium hover-glow animate-slide-in-up ${
                      location.pathname === item.href 
                        ? 'text-bo-orange' 
                        : 'text-bo-dark hover:text-bo-orange'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full mt-4 hover-glow animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
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
