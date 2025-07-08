
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const BlogPreview = () => {
  const articles = [
    {
      id: 1,
      title: "Les avantages du bardage métallique pour la rénovation énergétique",
      excerpt: "Découvrez pourquoi le bardage métallique est devenu incontournable pour améliorer l'isolation thermique de vos bâtiments.",
      date: "15 mars 2024",
      author: "Nicolas Ferasse",
      category: "Bardage",
      image: blog1,
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Étanchéité toiture terrasse : les bonnes pratiques",
      excerpt: "Guide complet pour comprendre les enjeux de l'étanchéité et éviter les infiltrations d'eau.",
      date: "8 mars 2024",
      author: "Équipe Bardeurs Occitans",
      category: "Étanchéité",
      image: blog2,
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Rénovation énergétique : les aides financières en 2024",
      excerpt: "Tour d'horizon des dispositifs d'aide pour vos projets de rénovation énergétique en Occitanie.",
      date: "1 mars 2024",
      author: "Nicolas Ferasse",
      category: "Rénovation",
      image: blog3,
      readTime: "6 min"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-bo-dark mb-6">
            Notre <span className="text-bo-orange">Blog</span> Expert
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos derniers articles, conseils techniques et actualités dans le domaine du bardage et de l'étanchéité
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={article.image} alt="" className='w-full h-48 object-cover' />
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-bo-dark">
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

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="bg-bo-orange hover:bg-bo-orange/90 text-white px-8 py-6 text-lg">
              Voir tous nos articles
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
