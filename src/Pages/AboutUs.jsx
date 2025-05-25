// src/Pages/AboutUs.jsx
import { useState } from "react";
import './AboutUs.css'; // Create this CSS file for additional styles

const AboutUs = () => {
  // Image data for Our Services section
  const services = [
    {
      img: "https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg",
      title: "Smart Farming Solutions",
      desc: "IoT-based monitoring systems for soil, weather, and crop health"
    },
    {
      img: "https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg",
      title: "Marketplace Platform",
      desc: "Direct connection between farmers and buyers nationwide"
    },
    {
      img: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg",
      title: "Precision Agriculture",
      desc: "Data analytics for optimized planting and irrigation"
    },
    {
      img: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg",
      title: "Supply Chain Management",
      desc: "From farm to table tracking and logistics solutions"
    },
    {
      img: "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg",
      title: "Educational Resources",
      desc: "Latest research and modern farming techniques"
    },
    {
      img: "https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg",
      title: "Sustainable Practices",
      desc: "Eco-friendly farming methods and technologies"
    }
  ];

  // Team members for Connections section
  const team = [
    {
      img: "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg",
      name: "Farmers Network",
      role: "2000+ registered farmers"
    },
    {
      img: "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg",
      name: "Agricultural Experts",
      role: "50+ specialists"
    }
  ];

  // Our Work section data
  const ourWork = [
    {
      img: "https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg",
      title: "Digital Transformation",
      desc: "Implemented mobile apps for 500+ small-scale farmers to access market prices in real-time"
    },
    {
      img: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg",
      title: "Training Programs",
      desc: "Conducted 100+ workshops on modern farming techniques across 15 counties"
    },
    {
      img: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg",
      title: "Irrigation Projects",
      desc: "Installed smart irrigation systems saving 40% water usage for 200 farms"
    },
    {
      img: "https://images.pexels.com/photos/121629/pexels-photo-121629.jpeg",
      title: "Market Linkages",
      desc: "Connected 3000+ farmers directly to supermarkets and export markets"
    },
    {
      img: "https://images.pexels.com/photos/2254443/pexels-photo-2254443.jpeg",
      title: "Youth Engagement",
      desc: "Trained 1500 young agripreneurs in agribusiness management"
    },
    {
      img: "https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg",
      title: "Research Partnerships",
      desc: "Collaborated with 10 agricultural research institutions for innovation"
    }
  ];

  // Client Reviews data
  const reviews = [
    {
      name: "Colince Juma",
      role: "Small-scale Farmer, Kisumu",
      review: "AgroConnect's mobile app has transformed my farming business. I now get fair prices for my produce and can plan my planting based on market demand.",
      rating: 5
    },
    {
      name: "Isabella Kaka",
      role: "Agricultural Officer, Nakuru",
      review: "The training programs by AgroConnect have been invaluable. Our farmers have increased yields by 60% using the techniques learned.",
      rating: 4
    },
    {
      name: "Amos Wafula",
      role: "Cooperative Manager, Eldoret",
      review: "Thanks to AgroConnect's market linkages, our cooperative members have doubled their incomes in just one year.",
      rating: 5
    },
    {
      name: "Victor Kuria",
      role: "Agripreneur, Nairobi",
      review: "The youth program gave me the skills and connections to start my own successful horticulture export business.",
      rating: 5
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How can I join AgroConnect as a farmer?",
      answer: "Simply download our mobile app from your app store and register with your details. Our team will verify your information and onboard you to the platform."
    },
    {
      question: "Are your services free for small-scale farmers?",
      answer: "Yes, our basic services are completely free for small-scale farmers. We only charge for premium services like advanced analytics and specialized training programs."
    },
    {
      question: "How do you ensure the quality of produce on your marketplace?",
      answer: "We have a rigorous verification process for all farmers and products. Our quality assurance team conducts random checks and we maintain a rating system for transparency."
    },
    {
      question: "Can I get financing through AgroConnect?",
      answer: "Yes, we partner with financial institutions to provide affordable credit to our registered farmers. You can apply through our platform after meeting certain criteria."
    },
    {
      question: "How does the smart farming technology work?",
      answer: "Our IoT devices monitor soil conditions, weather patterns, and crop health. The data is analyzed by our systems and actionable insights are sent to farmers via SMS or the mobile app."
    }
  ];

  const [hoveredService, setHoveredService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About AgroConnect</h1>
          <p className="hero-subtitle">
            Revolutionizing agriculture through technology and innovation
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section our-story">
        <div className="section-container">
          <div className="text-content">
            <h2 className="section-title">Our Story</h2>
            <div className="divider"></div>
            <p className="story-text">
              Founded in 2023, AgroConnect began as a small initiative to bridge the technology gap in 
              agriculture. What started as a passion project has now grown into a leading agricultural 
              technology platform serving thousands of farmers nationwide.
            </p>
            <p className="story-text">
              Our journey has been fueled by the belief that technology can transform traditional farming 
              into a sustainable, profitable venture while nourishing communities and protecting our planet.
            </p>
          </div>
          <div className="image-container">
            <img 
              src="https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg" 
              alt="Farmers discussing technology" 
              className="story-image"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section our-services">
        <div className="section-container">
          <h2 className="section-title">Our Services</h2>
          <div className="divider"></div>
          <p className="section-description">
            We offer comprehensive solutions for the entire farming lifecycle
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card ${hoveredService === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="card-image-container">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="service-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="section our-work">
        <div className="section-container">
          <h2 className="section-title">Our Work</h2>
          <div className="divider"></div>
          <p className="section-description">
            See the impact we're making in the agricultural sector
          </p>
          
          <div className="work-grid">
            {ourWork.map((work, index) => (
              <div key={index} className="work-card">
                <div className="work-image-container">
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="work-image"
                  />
                </div>
                <div className="work-content">
                  <h3>{work.title}</h3>
                  <p>{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meaningful Connections Section */}
      <section className="section connections">
        <div className="section-container">
          <h2 className="section-title">Meaningful Connections</h2>
          <div className="divider"></div>
          <p className="section-description">
            Building bridges between farmers, experts, and markets
          </p>
          
          <div className="connections-grid">
            {team.map((member, index) => (
              <div key={index} className="connection-card">
                <div className="connection-image-container">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="connection-image"
                  />
                </div>
                <div className="connection-details">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="section client-reviews">
        <div className="section-container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="divider"></div>
          <p className="section-description">
            Hear from farmers and partners who have worked with us
          </p>
          
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-content">
                  <p className="review-text">"{review.review}"</p>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
                <div className="review-author">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider"></div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-statement">
        <div className="mission-content">
          <h2>Our Vision</h2>
          <p>
            To create a world where technology empowers every farmer, nourishes every community, 
            and protects our planet for future generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;