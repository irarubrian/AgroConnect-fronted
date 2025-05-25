import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSearch, 
  FaBookOpen, 
  FaSeedling, 
  FaChartLine, 
  FaSyncAlt, 
  FaTractor, 
  FaChartBar,
  FaExternalLinkAlt,
  FaArrowRight,
  FaLeaf,
  FaWater,
  FaSun,
  FaChartPie
} from 'react-icons/fa';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import './Articles.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTechnique, setActiveTechnique] = useState(0);

  // Market trends data
  const marketTrendsData = [
    { name: 'Jan', maize: 4000, wheat: 2400, beans: 1800 },
    { name: 'Feb', maize: 3000, wheat: 2900, beans: 2100 },
    { name: 'Mar', maize: 5000, wheat: 3800, beans: 2500 },
    { name: 'Apr', maize: 2780, wheat: 3900, beans: 3100 },
    { name: 'May', maize: 5890, wheat: 4800, beans: 4100 },
    { name: 'Jun', maize: 4390, wheat: 4300, beans: 3800 },
  ];

  const cropDistributionData = [
    { name: 'Maize', value: 35 },
    { name: 'Wheat', value: 25 },
    { name: 'Beans', value: 20 },
    { name: 'Rice', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const soilQualityData = [
    {
      subject: 'Nitrogen',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Phosphorus',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Potassium',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'pH Level',
      A: 6.8,
      B: 6.2,
      fullMark: 8,
    },
    {
      subject: 'Organic Matter',
      A: 3.2,
      B: 2.8,
      fullMark: 5,
    },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  // Farming techniques data
  const farmingTechniques = [
    {
      title: "Precision Agriculture",
      description: "Uses GPS and IoT sensors to optimize field-level management regarding crop farming.",
      methods: [
        "Soil sampling and mapping",
        "Variable rate technology",
        "Automated guidance systems"
      ],
      image: "https://www.shutterstock.com/image-photo/blue-tractor-plows-field-high-speed-90748223"
    },
    {
      title: "Aquaponic Systems",
      description: "Combines conventional aquaculture with hydroponics in a symbiotic environment.",
      methods: [
        "Fish waste provides nutrients for plants",
        "Water conservation up to 90%",
        "Year-round production"
      ],
      image: "https://www.shutterstock.com/image-photo/farming-using-aquaponic-system-method-2621841073"
    },
    {
      title: "Hydroponic Farming",
      description: "Growing plants without soil, using mineral nutrient solutions in an aqueous solvent.",
      methods: [
        "Faster growth rates",
        "Higher yields in small spaces",
        "Reduced water usage"
      ],
      image: "https://www.shutterstock.com/image-photo/hydrophonic-installation-greenhouse-hydroponics-uses-significantly-2463636527"
    },
    {
      title: "Modern Greenhouse",
      description: "Controlled environment agriculture for optimal plant growth conditions.",
      methods: [
        "Climate control systems",
        "Automated irrigation",
        "Pest management integration"
      ],
      image: "https://www.shutterstock.com/image-photo/close-young-edamame-plants-growing-modern-2552355025"
    }
  ];

  // Crop management images
  const cropManagementImages = [
    "https://img.freepik.com/free-photo/countryside-workers-out-field_23-2148761770.jpg",
    "https://img.freepik.com/free-photo/biologist-forest_53876-20689.jpg",
    "https://img.freepik.com/premium-photo/african-farmer-is-standing-his-growing-wheat-field-he-is-satisfied-with-progress-plants_255667-74140.jpg",
    "https://img.freepik.com/free-photo/african-people-harvesting-vegetables_23-2151441188.jpg",
    "https://img.freepik.com/premium-photo/african-american-male-farmer-agronomist-inspects-soybeans-field-sunset_255667-67005.jpg",
    "https://img.freepik.com/premium-photo/agriculturist-utilize-core-data-network-internet-from-mobile-validate-test-select-new-crop-method-young-farmers-tobacco-farming_265022-54702.jpg",
    "https://img.freepik.com/free-photo/countryside-worker-planting-out-field_23-2148761816.jpg",
    "https://img.freepik.com/premium-psd/wireless-farming-app-mockup_23-2151573818.jpg",
    "https://img.freepik.com/premium-photo/african-american-farmer-agronomist-inspects-corn-crop-concept-agriculture_255667-66978.jpg"
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Simulated API call - replace with actual fetch
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data including your Governor 580SE article
        const mockArticles = [
          {
            id: 1,
            title: "Governor 580SE - Revolutionizing Crop Management",
            content: "The Governor 580SE tractor implements advanced precision agriculture technologies for optimal crop management with real-time monitoring and automated systems.",
            category: "crop_management",
            externalLink: "https://agroduka.ke/governor-580se/",
            isExternal: true,
            image: cropManagementImages[0]
          },
          {
            id: 2,
            title: "2023 Market Trends Analysis",
            content: "Comprehensive analysis of agricultural commodity prices and market movements with predictive analytics for the coming season.",
            category: "market_trends",
            hasChart: true,
            image: cropManagementImages[5]
          },
          {
            id: 3,
            title: "Sustainable Irrigation Methods",
            content: "Innovative water-saving techniques for modern farming operations that reduce consumption by up to 60% while maintaining yield.",
            category: "farming_techniques",
            image: cropManagementImages[3]
          },
          {
            id: 4,
            title: "Soil Health Monitoring Systems",
            content: "Advanced sensor networks that provide real-time soil quality data to optimize fertilization and irrigation schedules.",
            category: "crop_management",
            image: cropManagementImages[1]
          },
          {
            id: 5,
            title: "Crop Yield Prediction Models",
            content: "Machine learning algorithms that analyze weather patterns, soil conditions, and historical data to forecast yields with 90% accuracy.",
            category: "crop_management",
            image: cropManagementImages[8]
          },
          {
            id: 6,
            title: "Organic Pest Control Solutions",
            content: "Biological and natural methods for pest management that reduce chemical use while protecting crop health.",
            category: "farming_techniques",
            image: cropManagementImages[2]
          }
        ];
        
        setArticles(mockArticles);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesFilter = filter === 'all' || article.category === filter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-sector spinner-sector-1"></div>
          <div className="spinner-sector spinner-sector-2"></div>
          <div className="spinner-sector spinner-sector-3"></div>
        </div>
        <p className="loading-text">Harvesting the latest agricultural knowledge...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Knowledge Drought</h2>
          <p className="error-message">We couldn't cultivate the resources you need right now. {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="error-retry-button"
          >
            <FaSyncAlt className="error-retry-icon" /> Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="articles-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2022/05/20/08/52/wheat-7208997_640.jpg')` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Agricultural Intelligence Platform</h1>
          <p className="hero-subtitle">
            Expert insights on crop management, market analytics, and innovative farming techniques
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <FaLeaf className="stat-icon" />
              <span className="stat-value">1,200+</span>
              <span className="stat-label">Crop Varieties</span>
            </div>
            <div className="stat-item">
              <FaWater className="stat-icon" />
              <span className="stat-value">40%</span>
              <span className="stat-label">Water Savings</span>
            </div>
            <div className="stat-item">
              <FaSun className="stat-icon" />
              <span className="stat-value">2.5x</span>
              <span className="stat-label">Yield Increase</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Search and Filter */}
        <div className="search-filter-container">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for articles (e.g., 'irrigation methods')"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-buttons">
            <button
              onClick={() => setFilter('all')}
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            >
              <FaBookOpen className="filter-icon" />
              All Resources
            </button>
            <button
              onClick={() => setFilter('crop_management')}
              className={`filter-button ${filter === 'crop_management' ? 'active' : ''}`}
            >
              <FaTractor className="filter-icon" />
              Crop Management
            </button>
            <button
              onClick={() => setFilter('market_trends')}
              className={`filter-button ${filter === 'market_trends' ? 'active' : ''}`}
            >
              <FaChartBar className="filter-icon" />
              Market Trends
            </button>
            <button
              onClick={() => setFilter('farming_techniques')}
              className={`filter-button ${filter === 'farming_techniques' ? 'active' : ''}`}
            >
              <FaSeedling className="filter-icon" />
              Farming Techniques
            </button>
          </div>
        </div>

        {/* Specialized Content Sections */}
        {filter === 'crop_management' && (
          <div className="special-section">
            <h2 className="section-title">Advanced Crop Management Solutions</h2>
            <p className="section-description">
              Discover cutting-edge technologies and methodologies for optimal crop production
            </p>
            <div className="image-gallery">
              {cropManagementImages.slice(0, 4).map((img, index) => (
                <div key={index} className="gallery-item">
                  <img src={img} alt={`Crop management ${index + 1}`} />
                  <div className="gallery-overlay">
                    <span>View Technique</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filter === 'market_trends' && (
          <div className="special-section">
            <h2 className="section-title">Agricultural Market Intelligence</h2>
            <p className="section-description">
              Real-time data and analytics to inform your production and sales strategies
            </p>
            <div className="chart-grid">
              <div className="chart-container">
                <h3>Commodity Price Trends (KES/50kg bag)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={marketTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="maize" stroke="#FF6B6B" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="wheat" stroke="#4ECDC4" strokeWidth={2} />
                    <Line type="monotone" dataKey="beans" stroke="#45B7D1" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-container">
                <h3>Crop Distribution by Acreage</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={cropDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {cropDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}% of total acreage`, 'Percentage']}
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-container full-width">
                <h3>Soil Quality Comparison</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart outerRadius={120} data={soilQualityData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Farm A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Farm B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip 
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {filter === 'farming_techniques' && (
          <div className="special-section">
            <h2 className="section-title">Innovative Farming Methodologies</h2>
            <p className="section-description">
              Proven techniques to maximize yield while maintaining sustainability
            </p>
            <div className="technique-carousel">
              <div className="technique-nav">
                {farmingTechniques.map((tech, index) => (
                  <button
                    key={index}
                    className={`technique-nav-item ${activeTechnique === index ? 'active' : ''}`}
                    onClick={() => setActiveTechnique(index)}
                  >
                    {tech.title}
                  </button>
                ))}
              </div>
              <div className="technique-display">
                <div className="technique-image">
                  <img src={farmingTechniques[activeTechnique].image} alt={farmingTechniques[activeTechnique].title} />
                </div>
                <div className="technique-content">
                  <h3>{farmingTechniques[activeTechnique].title}</h3>
                  <p>{farmingTechniques[activeTechnique].description}</p>
                  <ul className="technique-methods">
                    {farmingTechniques[activeTechnique].methods.map((method, index) => (
                      <li key={index}>
                        <div className="method-bullet"></div>
                        {method}
                      </li>
                    ))}
                  </ul>
                  <button className="learn-more-button">
                    Learn More <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-image-container">
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="article-image" />
                  ) : (
                    <div className="article-icon-container">
                      {article.category === 'crop_management' && <FaTractor className="article-icon" />}
                      {article.category === 'market_trends' && <FaChartLine className="article-icon" />}
                      {article.category === 'farming_techniques' && <FaSeedling className="article-icon" />}
                    </div>
                  )}
                  <div className="article-category-tag">
                    {article.category.replace('_', ' ')}
                  </div>
                </div>
                <div className="article-content">
                  <h2 className="article-title">{article.title}</h2>
                  
                  {article.category === 'market_trends' && article.hasChart && (
                    <div className="market-chart">
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={marketTrendsData.slice(0, 3)}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip 
                            contentStyle={{
                              background: 'rgba(255, 255, 255, 0.95)',
                              border: 'none',
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}
                          />
                          <Bar dataKey="maize" fill="#FF6B6B" name="Maize" />
                          <Bar dataKey="wheat" fill="#4ECDC4" name="Wheat" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  )}

                  <p className="article-excerpt">
                    {article.content}
                  </p>

                  <div className="article-footer">
                    {article.isExternal ? (
                      <a
                        href={article.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="article-link"
                      >
                        Read Full Article <FaExternalLinkAlt className="external-icon" />
                      </a>
                    ) : (
                      <Link
                        to={`/resources/articles/${article.id}`}
                        className="article-link"
                      >
                        Continue Reading <FaArrowRight className="arrow-icon" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🌾</div>
            <h3 className="empty-state-title">
              {articles.length === 0 
                ? "Our Knowledge Fields Are Currently Fallow" 
                : "No Resources in This Category"}
            </h3>
            <p className="empty-state-message">
              {articles.length === 0
                ? "We're preparing fresh content. Check back soon for insightful agricultural resources."
                : "Try broadening your search or exploring other categories."}
            </p>
            <button 
              onClick={() => setFilter('all')}
              className="empty-state-button"
            >
              Browse All Resources
            </button>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="newsletter-cta">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">Stay Informed with Agroduka</h2>
            <p className="newsletter-subtitle">
              Subscribe for monthly reports on market trends, new technologies, and farming best practices
            </p>
          </div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;