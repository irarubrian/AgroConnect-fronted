
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HoverLink({ to, children, baseStyle, hoverStyle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      style={isHovered ? {...baseStyle, ...hoverStyle} : baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hover-link"
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

  // Main container style with universal background
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    padding: '32px 16px 64px',
    fontFamily: "'Poppins', Arial, sans-serif",
    color: '#2d3748',
    maxWidth: '1400px',
    margin: '0 auto',
    zIndex: 2
  };

  // Universal background style
  const universalBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/images/farm-universe.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    zIndex: 1,
    opacity: 0.15
  };

  // Overlay to ensure readability
  const contentOverlay = {
    position: 'relative',
    zIndex: 3
  };

  // Hero section
  const heroStyle = {
    padding: '120px 24px',
    borderRadius: '24px',
    marginBottom: '48px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9))',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(8px)'
  };

  // Typography styles
  const headingStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '24px',
    lineHeight: '1.2',
    background: 'linear-gradient(to right, #f7fee7, #ecfccb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const subheadingStyle = {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#f0fdf4'
  };

  const paragraphStyle = {
    fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
    maxWidth: '800px',
    margin: '0 auto 32px',
    color: '#e5e7eb',
    lineHeight: '1.8'
  };

  // Button styles
  const baseBtnPrimary = {
    backgroundColor: '#f0fdf4',
    color: '#065f46',
    padding: '16px 40px',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    fontSize: '1rem',
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minWidth: '200px'
  };

  const hoverBtnPrimary = {
    backgroundColor: '#dcfce7',
    transform: 'translateY(-3px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  };

  const baseBtnSecondary = {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: '#f0fdf4',
    padding: '16px 40px',
    borderRadius: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    fontSize: '1rem',
    border: '2px solid rgba(240, 253, 244, 0.5)',
    backdropFilter: 'blur(4px)',
    minWidth: '200px'
  };

  const hoverBtnSecondary = {
    backgroundColor: 'rgba(255,255,255,0.25)',
    transform: 'translateY(-3px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  };

  const linkGroupStyle = {
    marginTop: '32px',
    display: 'inline-flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  // Features section
  const featuresSectionStyle = {
    padding: '80px 24px',
    borderRadius: '24px',
    marginBottom: '48px',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    fontWeight: '700',
    color: '#064e3b',
    marginBottom: '24px',
    position: 'relative',
    display: 'inline-block'
  };

  const sectionTitleUnderline = {
    position: 'absolute',
    bottom: '-8px',
    left: '25%',
    width: '50%',
    height: '4px',
    backgroundColor: '#10b981',
    borderRadius: '2px'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    marginTop: '48px'
  };

  const featureCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px 24px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.05)',
    backdropFilter: 'blur(4px)'
  };

  const featureImageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '24px',
    border: `3px solid #fff`,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const featureTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#064e3b',
    marginBottom: '16px'
  };

  const featureDescStyle = {
    color: '#4b5563',
    lineHeight: '1.6',
    fontSize: '1.05rem'
  };

  // Testimonial section
  const testimonialStyle = {
    padding: '80px 24px',
    background: 'linear-gradient(135deg, rgba(236, 253, 245, 0.9), rgba(209, 250, 229, 0.9))',
    borderRadius: '24px',
    marginBottom: '48px',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const testimonialGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '48px'
  };

  const testimonialCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    textAlign: 'left'
  };

  const testimonialQuoteStyle = {
    fontSize: '1.1rem',
    color: '#064e3b',
    lineHeight: '1.8',
    fontStyle: 'italic',
    position: 'relative',
    paddingLeft: '24px',
    borderLeft: '3px solid #10b981'
  };

  const testimonialAuthorStyle = {
    fontWeight: '600',
    color: '#065f46',
    fontSize: '1.1rem',
    marginTop: '24px'
  };

  const testimonialRoleStyle = {
    color: '#4b5563',
    fontSize: '0.9rem',
    marginTop: '4px'
  };

  // Stats section
  const statsSectionStyle = {
    padding: '80px 24px',
    background: 'linear-gradient(135deg, rgba(6, 95, 70, 0.9), rgba(5, 78, 59, 0.9))',
    borderRadius: '24px',
    marginBottom: '48px',
    color: 'white'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px',
    marginTop: '48px'
  };

  const statItemStyle = {
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '8px',
    background: 'linear-gradient(to right, #a7f3d0, #6ee7b7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const statLabelStyle = {
    fontSize: '1.1rem',
    color: '#d1fae5'
  };

  // CTA section
  const ctaSectionStyle = {
    padding: '80px 24px',
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9))',
    borderRadius: '24px',
    marginBottom: '32px',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  };

  return (
    <div style={{position: 'relative'}}>
      {/* Universal background image */}
      <div style={universalBackgroundStyle}></div>
      
      <div style={containerStyle}>
        <div style={contentOverlay}>
          {/* Hero Section */}
          <section style={heroStyle}>
            <h1 style={headingStyle}>Connecting Farmers Across Kenya</h1>
            <p style={paragraphStyle}>
              AgroConnect unites farmers from every corner of the country with buyers, experts, 
              and smart farming tools to revolutionize agriculture in Kenya. Our platform serves 
              over 50,000 farmers nationwide, helping them increase yields and profits.
            </p>
            
            {user?.role === 'admin' && (
              <div style={linkGroupStyle}>
                <HoverLink
                  to="/admin"
                  baseStyle={baseBtnPrimary}
                  hoverStyle={hoverBtnPrimary}
                >
                  Admin Dashboard
                </HoverLink>
                <HoverLink
                  to="/admin/analytics"
                  baseStyle={baseBtnSecondary}
                  hoverStyle={hoverBtnSecondary}
                >
                  View Analytics
                </HoverLink>
              </div>
            )}

            {user?.role === 'farmer' && (
              <div style={linkGroupStyle}>
                <HoverLink
                  to="/farmer/crops"
                  baseStyle={baseBtnPrimary}
                  hoverStyle={hoverBtnPrimary}
                >
                  My Farm Dashboard
                </HoverLink>
                <HoverLink
                  to="/marketplace"
                  baseStyle={baseBtnSecondary}
                  hoverStyle={hoverBtnSecondary}
                >
                  Browse Marketplace
                </HoverLink>
              </div>
            )}

            {!user && (
              <div style={linkGroupStyle}>
                <HoverLink
                  to="/login"
                  baseStyle={baseBtnPrimary}
                  hoverStyle={hoverBtnPrimary}
                >
                  Login
                </HoverLink>
                <HoverLink
                  to="/register"
                  baseStyle={baseBtnSecondary}
                  hoverStyle={hoverBtnSecondary}
                >
                  Join Our Network
                </HoverLink>
              </div>
            )}
          </section>

          {/* Features Section */}
          <section style={featuresSectionStyle}>
            <h2 style={sectionTitleStyle}>
              Why Farmers Choose AgroConnect
              <span style={sectionTitleUnderline}></span>
            </h2>
            <p style={{...paragraphStyle, color: '#4b5563'}}>
              Comprehensive solutions designed by agricultural experts to address the real challenges 
              faced by Kenyan farmers every day
            </p>
            
            <div style={featuresGridStyle}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  style={{
                    ...featureCardStyle,
                    borderTop: `4px solid ${feature.color}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 15px 30px ${feature.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      style={{
                        ...featureImageStyle,
                        borderColor: feature.color
                      }}
                    />
                  ) : (
                    <div style={{
                      fontSize: '3.5rem',
                      marginBottom: '24px',
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}99)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {feature.icon}
                    </div>
                  )}
                  <h3 style={featureTitleStyle}>{feature.title}</h3>
                  <p style={featureDescStyle}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section style={statsSectionStyle}>
            <h2 style={{...sectionTitleStyle, color: 'white'}}>
              Our Impact Across Kenya
              <span style={{...sectionTitleUnderline, backgroundColor: '#a7f3d0'}}></span>
            </h2>
            <div style={statsGridStyle}>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>50,000+</div>
                <div style={statLabelStyle}>Farmers Connected</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>120%</div>
                <div style={statLabelStyle}>Average Income Increase</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>47</div>
                <div style={statLabelStyle}>Counties Covered</div>
              </div>
              <div style={statItemStyle}>
                <div style={statNumberStyle}>24/7</div>
                <div style={statLabelStyle}>Expert Support</div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section style={testimonialStyle}>
            <h2 style={{...sectionTitleStyle, color: '#065f46'}}>
              Success Stories From Our Farmers
              <span style={{...sectionTitleUnderline, backgroundColor: '#065f46'}}></span>
            </h2>
            <div style={testimonialGridStyle}>
              {testimonials.map((testimonial, index) => (
                <div key={index} style={testimonialCardStyle}>
                  <p style={testimonialQuoteStyle}>
                    {testimonial.quote}
                  </p>
                  <p style={testimonialAuthorStyle}>{testimonial.author}</p>
                  <p style={testimonialRoleStyle}>{testimonial.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section style={ctaSectionStyle}>
            <h2 style={{...sectionTitleStyle, color: 'white'}}>
              Ready to Join Kenya's Largest Farming Network?
              <span style={{...sectionTitleUnderline, backgroundColor: 'white'}}></span>
            </h2>
            <p style={{...paragraphStyle, maxWidth: '700px'}}>
              Whether you're a smallholder farmer or large agricultural business, AgroConnect has 
              the tools and connections to help you thrive in today's competitive market.
            </p>
            <div style={linkGroupStyle}>
              {user ? (
                <HoverLink
                  to="/dashboard"
                  baseStyle={{
                    ...baseBtnPrimary,
                    backgroundColor: 'white',
                    color: '#065f46'
                  }}
                  hoverStyle={{
                    ...hoverBtnPrimary,
                    backgroundColor: '#f0fdf4'
                  }}
                >
                  Go to Dashboard
                </HoverLink>
              ) : (
                <>
                  <HoverLink
                    to="/register"
                    baseStyle={{
                      ...baseBtnPrimary,
                      backgroundColor: 'white',
                      color: '#065f46'
                    }}
                    hoverStyle={{
                      ...hoverBtnPrimary,
                      backgroundColor: '#f0fdf4'
                    }}
                  >
                    Join Now - It's Free
                  </HoverLink>
                  <HoverLink
                    to="/about"
                    baseStyle={{
                      ...baseBtnSecondary,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}
                    hoverStyle={{
                      backgroundColor: 'rgba(255,255,255,0.2)'
                    }}
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