
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les avantages du bardage métallique pour la rénovation énergétique",
      excerpt: "Découvrez pourquoi le bardage métallique est devenu incontournable pour améliorer l'isolation thermique de vos bâtiments.",
      date: "15 mars 2024",
      author: "Nicolas Ferasse",
      category: "Bardage",
      image: "bg-gradient-to-br from-gray-300 to-gray-400",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Étanchéité toiture terrasse : les bonnes pratiques",
      excerpt: "Guide complet pour comprendre les enjeux de l'étanchéité et éviter les infiltrations d'eau.",
      date: "8 mars 2024",
      author: "Équipe Bardeurs Occitans",
      category: "Étanchéité",
      image: "bg-gradient-to-br from-blue-200 to-blue-300",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Rénovation énergétique : les aides financières en 2024",
      excerpt: "Tour d'horizon des dispositifs d'aide pour vos projets de rénovation énergétique en Occitanie.",
      date: "1 mars 2024",
      author: "Nicolas Ferasse",
      category: "Rénovation",
      image: "bg-gradient-to-br from-green-200 to-green-300",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "DTU et normes : l'importance de la certification",
      excerpt: "Pourquoi choisir des matériaux certifiés DTU pour vos travaux de bardage et d'étanchéité.",
      date: "22 février 2024",
      author: "Équipe Bardeurs Occitans",
      category: "Technique",
      image: "bg-gradient-to-br from-orange-200 to-orange-300",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Maintenance préventive : prolonger la durée de vie de vos ouvrages",
      excerpt: "Les conseils de nos experts pour entretenir efficacement votre bardage et votre étanchéité.",
      date: "14 février 2024",
      author: "Nicolas Ferasse",
      category: "Maintenance",
      image: "bg-gradient-to-br from-purple-200 to-purple-300",
      readTime: "5 min"
    },
    {
      id: 6,
      title: "Chantier du mois : rénovation d'un bâtiment industriel",
      excerpt: "Retour sur une réalisation emblématique de notre savoir-faire en bardage métallique.",
      date: "7 février 2024",
      author: "Équipe Bardeurs Occitans",
      category: "Réalisations",
      image: "bg-gradient-to-br from-red-200 to-red-300",
      readTime: "8 min"
    }
  ];

  const categories = ["Tous", "Bardage", "Étanchéité", "Rénovation", "Technique", "Maintenance", "Réalisations"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredArticles = selectedCategory === "Tous" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="font-montserrat">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-bo-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Blog <span className="text-bo-orange">Expert</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Actualités, conseils techniques et retours d'expérience de nos experts en bardage métallique et étanchéité
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-bo-orange hover:bg-bo-orange/90 text-white" 
                  : "border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${article.image} flex items-center justify-center`}>
                  <div className="bg-bo-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-bo-dark line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${article.id}`}>
                    <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full">
                      Lire l'article
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-bo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Restez informé de nos dernières actualités
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Recevez nos conseils d'experts et nos dernières réalisations directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-bo-dark"
            />
            <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white px-6">
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
