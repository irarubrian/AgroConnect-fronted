import { useState } from 'react';
import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChalkboardTeacher, FaCertificate, FaPlay } from 'react-icons/fa';

export default function AgribusinessWorkshop() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [registeredWorkshops, setRegisteredWorkshops] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  // Workshop data
  const workshops = {
    upcoming: [
      {
        id: 1,
        title: "Sustainable Farming Practices",
        date: "June 15, 2026",
        time: "10:00 AM - 2:00 PM",
        location: "Online (Zoom)",
        description: "Learn modern techniques for eco-friendly farming that increase yield while protecting the environment. This workshop covers soil health, water conservation, and integrated pest management.",
        instructor: "Dr. Sarah Greenfield",
        instructorBio: "Agricultural scientist with 15 years experience in sustainable farming systems",
        capacity: 50,
        registered: 32,
        price: "$49"
      },
      {
        id: 2,
        title: "Precision Agriculture Technologies",
        date: "June 22, 2026",
        time: "9:00 AM - 1:00 PM",
        location: "AgroConnect HQ, Springfield",
        description: "Explore IoT, drones, and data analytics for optimized farm management. Hands-on demonstrations with actual equipment.",
        instructor: "Mark Johnson",
        instructorBio: "Precision agriculture specialist and founder of FarmTech Solutions",
        capacity: 30,
        registered: 18,
        price: "$79"
      }
    ],
    past: [
      {
        id: 3,
        title: "Organic Certification Process",
        date: "May 5, 2025",
        time: "11:00 AM - 3:00 PM",
        location: "Online (Zoom)",
        description: "Step-by-step guide to obtaining and maintaining organic certification.",
        instructor: "Lisa Rodriguez",
        instructorBio: "Organic certification consultant with USDA accreditation",
        recordingAvailable: true,
        recordingUrl: "https://www.youtube.com/embed/KnqozbJN8xw",
        duration: "1 hour 42 minutes"
      }
    ]
  };

  const handleRegister = (workshopId) => {
    if (!registeredWorkshops.includes(workshopId)) {
      setRegisteredWorkshops([...registeredWorkshops, workshopId]);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleWatchRecording = (url) => {
    setCurrentVideoUrl(url);
    setShowVideoModal(true);
  };

  const closeModal = () => {
    setShowVideoModal(false);
    setCurrentVideoUrl('');
  };

  // Styles (same as before)
  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '32px 16px 64px',
    fontFamily: "'Inter', sans-serif",
    color: '#111827',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '48px'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#064e3b',
    marginBottom: '16px'
  };

  const subheadingStyle = {
    fontSize: '1.25rem',
    color: '#4b5563',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const tabContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '32px',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '8px'
  };

  const tabStyle = {
    padding: '12px 24px',
    cursor: 'pointer',
    fontWeight: '600',
    color: '#6b7280',
    borderBottom: '3px solid transparent',
    transition: 'all 0.3s ease'
  };

  const activeTabStyle = {
    ...tabStyle,
    color: '#064e3b',
    borderBottom: '3px solid #064e3b'
  };

  const workshopGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '24px',
    marginBottom: '48px'
  };

  const workshopCardStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const workshopHeaderStyle = {
    backgroundColor: '#f0fdf4',
    padding: '20px',
    borderBottom: '1px solid #d1fae5'
  };

  const workshopTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#064e3b',
    marginBottom: '8px'
  };

  const workshopMetaStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#6b7280',
    fontSize: '0.9rem',
    marginBottom: '4px'
  };

  const workshopBodyStyle = {
    padding: '20px'
  };

  const workshopDescStyle = {
    color: '#4b5563',
    marginBottom: '16px',
    lineHeight: '1.6'
  };

  const instructorContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px'
  };

  const instructorIconStyle = {
    color: '#047857',
    fontSize: '1.2rem'
  };

  const instructorTextStyle = {
    fontSize: '0.95rem',
    color: '#374151'
  };

  const workshopFooterStyle = {
    padding: '16px 20px',
    backgroundColor: '#f9fafb',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const capacityStyle = {
    fontSize: '0.85rem',
    color: '#6b7280'
  };

  const buttonStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#059669',
    transform: 'translateY(-2px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const buttonDisabledStyle = {
    backgroundColor: '#d1d5db',
    cursor: 'not-allowed'
  };

  const watchButtonStyle = {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const watchButtonHoverStyle = {
    backgroundColor: '#2563eb',
    transform: 'translateY(-2px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const benefitsSectionStyle = {
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    padding: '32px',
    marginTop: '48px'
  };

  const benefitsTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#064e3b',
    marginBottom: '24px',
    textAlign: 'center'
  };

  const benefitsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '24px'
  };

  const benefitCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    textAlign: 'center'
  };

  const benefitIconStyle = {
    fontSize: '2rem',
    color: '#10b981',
    marginBottom: '16px'
  };

  const benefitTitleStyle = {
    fontWeight: '600',
    marginBottom: '8px',
    color: '#111827'
  };

  const successMessageStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#10b981',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    transform: showSuccess ? 'translateX(0)' : 'translateX(120%)'
  };

  const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '800px',
    width: '100%',
    position: 'relative'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#6b7280'
  };

  const videoContainerStyle = {
    position: 'relative',
    paddingBottom: '56.25%',
    height: '0',
    overflow: 'hidden',
    borderRadius: '8px'
  };

  const iframeStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: 'none'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={headingStyle}>AgroConnect Professional Development</h1>
        <p style={subheadingStyle}>
          Advance your agricultural knowledge with our expert-led workshops covering the latest 
          technologies, sustainable practices, and business strategies.
        </p>
      </div>

      <div style={tabContainerStyle}>
        <div 
          style={activeTab === 'upcoming' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Workshops
        </div>
        <div 
          style={activeTab === 'past' ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab('past')}
        >
          Past Workshops
        </div>
      </div>

      <div style={successMessageStyle}>
        <FaCheckCircle />
        <span>Registration confirmed! Check your email for details.</span>
      </div>

      {showVideoModal && (
        <div style={modalStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={closeModal}>×</button>
            <div style={videoContainerStyle}>
              <iframe
                style={iframeStyle}
                src={currentVideoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Workshop Recording"
              />
            </div>
          </div>
        </div>
      )}

      <div style={workshopGridStyle}>
        {workshops[activeTab].map((workshop) => (
          <div 
            key={workshop.id} 
            style={{
              ...workshopCardStyle,
              transform: hoveredButton === workshop.id ? 'translateY(-4px)' : 'none',
              boxShadow: hoveredButton === workshop.id ? '0 10px 15px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={() => setHoveredButton(workshop.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div style={workshopHeaderStyle}>
              <h3 style={workshopTitleStyle}>{workshop.title}</h3>
              <div style={workshopMetaStyle}>
                <FaCalendarAlt />
                <span>{workshop.date}</span>
              </div>
              <div style={workshopMetaStyle}>
                <FaClock />
                <span>{workshop.time}</span>
              </div>
              <div style={workshopMetaStyle}>
                <FaMapMarkerAlt />
                <span>{workshop.location}</span>
              </div>
            </div>
            
            <div style={workshopBodyStyle}>
              <p style={workshopDescStyle}>{workshop.description}</p>
              
              <div style={instructorContainerStyle}>
                <FaChalkboardTeacher style={instructorIconStyle} />
                <div>
                  <div style={{ fontWeight: '600' }}>{workshop.instructor}</div>
                  <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{workshop.instructorBio}</div>
                </div>
              </div>
            </div>
            
            <div style={workshopFooterStyle}>
              {activeTab === 'upcoming' ? (
                <>
                  <div style={capacityStyle}>
                    {workshop.registered}/{workshop.capacity} spots filled • {workshop.price}
                  </div>
                  <button
                    style={
                      registeredWorkshops.includes(workshop.id)
                        ? { ...buttonStyle, ...buttonDisabledStyle }
                        : hoveredButton === workshop.id
                        ? { ...buttonStyle, ...buttonHoverStyle }
                        : buttonStyle
                    }
                    onClick={() => handleRegister(workshop.id)}
                    disabled={registeredWorkshops.includes(workshop.id)}
                  >
                    {registeredWorkshops.includes(workshop.id) ? (
                      <>
                        <FaCheckCircle /> Registered
                      </>
                    ) : (
                      'Register Now'
                    )}
                  </button>
                </>
              ) : (
                <button
                  style={
                    hoveredButton === workshop.id && workshop.recordingAvailable
                      ? { ...watchButtonStyle, ...watchButtonHoverStyle }
                      : watchButtonStyle
                  }
                  onClick={() => workshop.recordingAvailable && handleWatchRecording(workshop.recordingUrl)}
                  disabled={!workshop.recordingAvailable}
                >
                  <FaPlay /> {workshop.recordingAvailable ? 'Watch Recording' : 'Recording Coming Soon'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={benefitsSectionStyle}>
        <h2 style={benefitsTitleStyle}>Workshop Benefits</h2>
        <div style={benefitsGridStyle}>
          <div style={benefitCardStyle}>
            <FaCertificate style={benefitIconStyle} />
            <h3 style={benefitTitleStyle}>Certification</h3>
            <p>Receive completion certificates to showcase your professional development</p>
          </div>
          <div style={benefitCardStyle}>
            <FaChalkboardTeacher style={benefitIconStyle} />
            <h3 style={benefitTitleStyle}>Expert Instructors</h3>
            <p>Learn from leading agricultural professionals and researchers</p>
          </div>
          <div style={benefitCardStyle}>
            <FaMapMarkerAlt style={benefitIconStyle} />
            <h3 style={benefitTitleStyle}>Networking</h3>
            <p>Connect with fellow farmers and industry professionals</p>
          </div>
          <div style={benefitCardStyle}>
            <FaCheckCircle style={benefitIconStyle} />
            <h3 style={benefitTitleStyle}>Practical Skills</h3>
            <p>Gain immediately applicable knowledge and techniques</p>
          </div>
        </div>
      </div>
    </div>
  );
}