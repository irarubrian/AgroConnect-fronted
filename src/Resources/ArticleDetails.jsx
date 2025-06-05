import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const [articleResponse, articlesResponse] = await Promise.all([
          fetch(`https://agroconnect-backend-13.onrender.com/articles/${id}`),
          fetch('https://agroconnect-backend-13.onrender.com/articles')
        ]);

        if (!articleResponse.ok) {
          throw new Error('Failed to fetch article');
        }
        if (!articlesResponse.ok) {
          throw new Error('Failed to fetch related articles');
        }

        const articleData = await articleResponse.json();
        const articlesData = await articlesResponse.json();

        setArticle(articleData.article);
        
        // Get 3 related articles (same category, excluding current article)
        const related = articlesData.articles
          .filter(a => a.category === articleData.article.category && a.id !== articleData.article.id)
          .slice(0, 3);
        setRelatedArticles(related);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            to="/resources/articles" 
            className="text-green-600 hover:text-green-800 flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Articles
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                {article.category.replace('_', ' ')}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-500 mb-6">
              <span>Posted on {new Date(article.created_at).toLocaleDateString()}</span>
            </div>
            <div className="prose max-w-none text-gray-700">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <div key={related.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{related.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{related.content.substring(0, 100)}...</p>
                    <Link 
                      to={`/resources/articles/${related.id}`}
                      className="text-green-600 hover:text-green-800 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;