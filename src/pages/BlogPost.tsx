
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Données d'exemple pour l'article (en réalité, ceci viendrait d'une API)
  const article = {
    id: 1,
    title: "Les avantages du bardage métallique pour la rénovation énergétique",
    content: `
      <p>Le bardage métallique s'impose aujourd'hui comme une solution de choix pour la rénovation énergétique des bâtiments. Cette technique, maîtrisée par Bardeurs Occitans depuis plus de 5 ans, offre de nombreux avantages tant sur le plan technique qu'esthétique.</p>

      <h2>Une isolation thermique optimale</h2>
      <p>L'un des principaux atouts du bardage métallique réside dans sa capacité à améliorer significativement l'isolation thermique des bâtiments. En créant une enveloppe continue autour de la structure existante, le bardage permet de réduire les ponts thermiques et d'optimiser les performances énergétiques.</p>

      <h2>Durabilité et résistance</h2>
      <p>Les matériaux métalliques utilisés dans nos projets sont sélectionnés pour leur résistance aux intempéries, à la corrosion et aux variations climatiques. Cette durabilité garantit un investissement pérenne pour nos clients.</p>

      <h2>Un design moderne et personnalisable</h2>
      <p>Le bardage métallique offre une grande liberté architecturale. Disponible en plusieurs finitions, couleurs et textures, il permet de moderniser l'aspect des bâtiments tout en respectant l'harmonie architecturale environnante.</p>

      <h2>Respect des normes DTU</h2>
      <p>Tous nos matériaux et techniques de pose respectent scrupuleusement les Documents Techniques Unifiés (DTU) en vigueur. Cette conformité garantit la qualité et la pérennité des ouvrages réalisés.</p>

      <h2>Un retour sur investissement rapide</h2>
      <p>Grâce aux économies d'énergie générées et aux différentes aides financières disponibles, l'investissement dans un bardage métallique se révèle rapidement rentable pour les propriétaires.</p>
    `,
    date: "15 mars 2024",
    author: "Nicolas Ferasse",
    category: "Bardage",
    readTime: "5 min",
    image: "bg-gradient-to-br from-gray-300 to-gray-400"
  };

  return (
    <div className="font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-bo-orange hover:text-bo-orange/80 mb-8">
              <ArrowLeft className="mr-2" size={20} />
              Retour au blog
            </Link>
            
            <div className="bg-bo-orange text-white px-4 py-2 rounded-full inline-block text-sm font-medium mb-6">
              {article.category}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-bo-dark mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={18} />
                  <span>{article.author}</span>
                </div>
                <span className="bg-gray-200 px-3 py-1 rounded text-sm">
                  {article.readTime}
                </span>
              </div>
              
              <Button variant="outline" className="border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white">
                <Share2 className="mr-2" size={16} />
                Partager
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className={`h-96 ${article.image} rounded-2xl mb-12 flex items-center justify-center`}>
              <div className="text-white text-xl font-semibold">Image de l'article</div>
            </div>
            
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '18px',
                lineHeight: '1.8'
              }}
            />
            
            {/* CTA Section */}
            <div className="bg-bo-dark rounded-2xl p-12 text-white text-center mt-16">
              <h3 className="text-3xl font-bold mb-4">
                Un projet de bardage en tête ?
              </h3>
              <p className="text-xl mb-8 text-gray-300">
                Nos experts sont à votre disposition pour étudier votre projet
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-bo-orange hover:bg-bo-orange/90 text-white">
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
