
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
      image: "/assets/blog-1.jpg",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Étanchéité toiture terrasse : les bonnes pratiques",
      excerpt: "Guide complet pour comprendre les enjeux de l'étanchéité et éviter les infiltrations d'eau.",
      date: "8 mars 2024",
      author: "Équipe Bardeurs Occitans",
      category: "Étanchéité",
      image: "/assets/blog-2.jpg",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Rénovation énergétique : les aides financières en 2024",
      excerpt: "Tour d'horizon des dispositifs d'aide pour vos projets de rénovation énergétique en Occitanie.",
      date: "1 mars 2024",
      author: "Nicolas Ferasse",
      category: "Rénovation",
      image: "/assets/blog-3.jpg",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "DTU et normes : l'importance de la certification",
      excerpt: "Pourquoi choisir des matériaux certifiés DTU pour vos travaux de bardage et d'étanchéité.",
      date: "22 février 2024",
      author: "Équipe Bardeurs Occitans",
      category: "Technique",
      image: "/assets/blog-4.jpg",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Maintenance préventive : prolonger la durée de vie de vos ouvrages",
      excerpt: "Les conseils de nos experts pour entretenir efficacement votre bardage et votre étanchéité.",
      date: "14 février 2024",
      author: "Nicolas Ferasse",
      category: "Maintenance",
      image: "/assets/blog-5.jpg",
      readTime: "5 min"
    },
    {
      id: 6,
      title: "Chantier du mois : rénovation d'un bâtiment industriel",
      excerpt: "Retour sur une réalisation emblématique de notre savoir-faire en bardage métallique.",
      date: "7 février 2024",
      author: "Équipe Bardeurs Occitans",
      category: "Réalisations",
      image: "/assets/blog-6.jpg",
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
      <section className="bg-gradient-to-br from-bo-dark via-bo-blue to-bo-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Blog <span className="text-bo-orange">Expert</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Actualités, conseils techniques et retours d'expérience de nos experts en bardage métallique et étanchéité
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className={`text-xs md:text-sm px-3 md:px-4 py-2 ${selectedCategory === category 
                  ? "bg-bo-orange hover:bg-bo-orange/90 text-white" 
                  : "border-bo-orange text-bo-orange hover:bg-bo-orange hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className='relative'>
                  <div className="bg-bo-orange text-white px-3 py-1 mx-4 my-4 rounded-full text-xs font-medium absolute z-10">
                    {article.category}
                  </div>
                  <img src={article.image} alt="" className='w-full h-48 object-cover' />
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg md:text-xl font-bold text-bo-dark line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base">{article.excerpt}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs md:text-sm text-gray-500 mb-4 space-y-2 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span className="truncate">{article.author}</span>
                      </div>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs self-start">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${article.id}`}>
                    <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white w-full text-sm">
                      Lire l'article
                      <ArrowRight className="ml-2" size={14} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 md:py-16 bg-bo-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Restez informé de nos dernières actualités
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Recevez nos conseils d'experts et nos dernières réalisations directement dans votre boîte mail
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-bo-dark text-sm md:text-base"
            />
            <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white px-6 md:px-8 py-3 text-sm md:text-base">
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
