import { Link } from 'react-router-dom';
import { useState } from 'react';

function HoverLink({ to, children, baseStyle, hoverStyle }) {
  const [isHovered, setIsHovered] = useState(false);
  // Use className for button style
  const btnClass = isHovered ? `${baseStyle} ${hoverStyle}` : baseStyle;
  return (
    <Link
      to={to}
      className={btnClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}

export default function Homepage({ user = null }) {
  const features = [
    {
      title: "Direct Market Access",
      description: "Connect directly with buyers across Kenya and get fair prices for your produce",
      image: "https://img.freepik.com/free-photo/person-office-analyzing-checking-finance-graphs_23-2150377127.jpg?uid=R201049057&semt=ais_hybrid&w=740",
      color: "#10B981"
    },
    {
      title: "Expert Advice",
      description: "24/7 access to agricultural experts with specialized knowledge",
      image: "https://marketplace.canva.com/EAFzZ8eph8k/1/0/1600w/canva-green-vintage-agriculture-and-crops-farming-logo-C6aYlnFsPBM.jpg",
      color: "#059669"
    },
    {
      title: "Smart Farming Tools",
      description: "AI-powered analytics to optimize your farming operations",
      image: "https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908084.jpg?uid=R201049057&semt=ais_hybrid&w=740",
      color: "#065F46"
    },
    {
      title: "Weather Insights",
      description: "Hyper-local weather forecasts tailored to your farm",
      image: "https://media.istockphoto.com/id/1130498419/photo/agronomist-using-tablet-computer-collect-data-with-meteorological-instrument-to-measure-the.jpg?s=612x612&w=0&k=20&c=wmNyv53ItKIZCaMpHr04FTn7a5MDcbrvFZs77RRCOZk=",
      color: "#0891B2"
    }
  ];

  const testimonials = [
    {
      quote: "AgroConnect increased my maize yields by 35% and helped me find better markets. My income has doubled in just one season!",
      author: "John Kamau, Nakuru",
      role: "Maize Farmer"
    },
    {
      quote: "The expert advice on crop rotation and soil management transformed my small farm into a thriving business.",
      author: "Mary Wanjiku, Kiambu",
      role: "Vegetable Farmer"
    },
    {
      quote: "As an agricultural officer, I recommend AgroConnect to all farmers for its reliable market connections and educational resources.",
      author: "Dr. James Omondi",
      role: "Agricultural Extension Officer"
    }
  ];

  return (
    <div className="homepage-root">
      {/* Universal background image */}
      <div className="homepage-bg"></div>
      <div className="homepage-container">
        <div className="homepage-overlay">
          {/* Hero Section */}
          <section className="homepage-hero">
            <h1 className="homepage-heading">Connecting Farmers Across Kenya</h1>
            <p className="homepage-paragraph">
              AgroConnect unites farmers from every corner of the country with buyers, experts, 
              and smart farming tools to revolutionize agriculture in Kenya. Our platform serves 
              over 50,000 farmers nationwide, helping them increase yields and profits.
            </p>
            {user?.role === 'admin' && (
              <div className="homepage-link-group">
                <HoverLink
                  to="/admin"
                  baseStyle="homepage-btn-primary"
                  hoverStyle="homepage-btn-primary:hover"
                >
                  Admin Dashboard
                </HoverLink>
                <HoverLink
                  to="/admin/analytics"
                  baseStyle="homepage-btn-secondary"
                  hoverStyle="homepage-btn-secondary:hover"
                >
                  View Analytics
                </HoverLink>
              </div>
            )}
            {user?.role === 'farmer' && (
              <div className="homepage-link-group">
                <HoverLink
                  to="/farmer/crops"
                  baseStyle="homepage-btn-primary"
                  hoverStyle="homepage-btn-primary:hover"
                >
                  My Farm Dashboard
                </HoverLink>
                <HoverLink
                  to="/marketplace"
                  baseStyle="homepage-btn-secondary"
                  hoverStyle="homepage-btn-secondary:hover"
                >
                  Browse Marketplace
                </HoverLink>
              </div>
            )}
            {!user && (
              <div className="homepage-link-group">
                <HoverLink
                  to="/login"
                  baseStyle="homepage-btn-primary"
                  hoverStyle="homepage-btn-primary:hover"
                >
                  Login
                </HoverLink>
                <HoverLink
                  to="/register"
                  baseStyle="homepage-btn-secondary"
                  hoverStyle="homepage-btn-secondary:hover"
                >
                  Join Our Network
                </HoverLink>
              </div>
            )}
          </section>
          {/* Features Section */}
          <section className="homepage-features-section">
            <h2 className="homepage-section-title">
              Why Farmers Choose AgroConnect
              <span className="homepage-section-title-underline"></span>
            </h2>
            <p className="homepage-paragraph" style={{ color: '#4b5563' }}>
              Comprehensive solutions designed by agricultural experts to address the real challenges 
              faced by Kenyan farmers every day
            </p>
            <div className="homepage-features-grid">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="homepage-feature-card"
                  style={{ borderTop: `4px solid ${feature.color}` }}
                >
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="homepage-feature-image"
                      style={{ borderColor: feature.color }}
                    />
                  ) : (
                    <div className="homepage-feature-icon" style={{ fontSize: '3.5rem', marginBottom: '24px', background: `linear-gradient(135deg, ${feature.color}, ${feature.color}99)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="homepage-feature-title">{feature.title}</h3>
                  <p className="homepage-feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Stats Section */}
          <section className="homepage-stats-section">
            <h2 className="homepage-section-title" style={{ color: 'white' }}>
              Our Impact Across Kenya
              <span className="homepage-section-title-underline" style={{ backgroundColor: '#a7f3d0' }}></span>
            </h2>
            <div className="homepage-stats-grid">
              <div className="homepage-stat-item">
                <div className="homepage-stat-number">50,000+</div>
                <div className="homepage-stat-label">Farmers Connected</div>
              </div>
              <div className="homepage-stat-item">
                <div className="homepage-stat-number">120%</div>
                <div className="homepage-stat-label">Average Income Increase</div>
              </div>
              <div className="homepage-stat-item">
                <div className="homepage-stat-number">47</div>
                <div className="homepage-stat-label">Counties Covered</div>
              </div>
              <div className="homepage-stat-item">
                <div className="homepage-stat-number">24/7</div>
                <div className="homepage-stat-label">Expert Support</div>
              </div>
            </div>
          </section>
          {/* Testimonial Section */}
          <section className="homepage-testimonial-section">
            <h2 className="homepage-section-title" style={{ color: '#065f46' }}>
              Success Stories From Our Farmers
              <span className="homepage-section-title-underline" style={{ backgroundColor: '#065f46' }}></span>
            </h2>
            <div className="homepage-testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="homepage-testimonial-card">
                  <p className="homepage-testimonial-quote">
                    {testimonial.quote}
                  </p>
                  <p className="homepage-testimonial-author">{testimonial.author}</p>
                  <p className="homepage-testimonial-role">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="homepage-cta-section">
            <h2 className="homepage-section-title" style={{ color: 'white' }}>
              Ready to Join Kenya's Largest Farming Network?
              <span className="homepage-section-title-underline" style={{ backgroundColor: 'white' }}></span>
            </h2>
            <p className="homepage-paragraph" style={{ maxWidth: '700px' }}>
              Whether you're a smallholder farmer or large agricultural business, AgroConnect has 
              the tools and connections to help you thrive in today's competitive market.
            </p>
            <div className="homepage-link-group">
              {user ? (
                <HoverLink
                  to="/dashboard"
                  baseStyle="homepage-btn-primary"
                  hoverStyle="homepage-btn-primary:hover"
                >
                  Go to Dashboard
                </HoverLink>
              ) : (
                <>
                  <HoverLink
                    to="/register"
                    baseStyle="homepage-btn-primary"
                    hoverStyle="homepage-btn-primary:hover"
                  >
                    Join Now - It's Free
                  </HoverLink>
                  <HoverLink
                    to="/about"
                    baseStyle="homepage-btn-secondary"
                    hoverStyle="homepage-btn-secondary:hover"
                  >
                    Learn More
                  </HoverLink>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}