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

  return (
    <div className="agribusiness-workshop-container">
      <div className="header">
        <h1 className="heading">AgroConnect Professional Development</h1>
        <p className="subheading">
          Advance your agricultural knowledge with our expert-led workshops covering the latest 
          technologies, sustainable practices, and business strategies.
        </p>
      </div>

      <div className="tab-container">
        <div 
          className={activeTab === 'upcoming' ? 'active-tab' : 'tab'}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Workshops
        </div>
        <div 
          className={activeTab === 'past' ? 'active-tab' : 'tab'}
          onClick={() => setActiveTab('past')}
        >
          Past Workshops
        </div>
      </div>

      <div className={showSuccess ? "success-message show" : "success-message"}>
        <FaCheckCircle />
        <span>Registration confirmed! Check your email for details.</span>
      </div>

      {showVideoModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <div className="video-container">
              <iframe
                className="video-iframe"
                src={currentVideoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Workshop Recording"
              />
            </div>
          </div>
        </div>
      )}

      <div className="workshop-grid">
        {workshops[activeTab].map((workshop) => (
          <div 
            key={workshop.id} 
            className={`workshop-card ${hoveredButton === workshop.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredButton(workshop.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div className="workshop-header">
              <h3 className="workshop-title">{workshop.title}</h3>
              <div className="workshop-meta">
                <FaCalendarAlt />
                <span>{workshop.date}</span>
              </div>
              <div className="workshop-meta">
                <FaClock />
                <span>{workshop.time}</span>
              </div>
              <div className="workshop-meta">
                <FaMapMarkerAlt />
                <span>{workshop.location}</span>
              </div>
            </div>
            
            <div className="workshop-body">
              <p className="workshop-desc">{workshop.description}</p>
              
              <div className="instructor-container">
                <FaChalkboardTeacher className="instructor-icon" />
                <div>
                  <div className="instructor-name">{workshop.instructor}</div>
                  <div className="instructor-bio">{workshop.instructorBio}</div>
                </div>
              </div>
            </div>
            
            <div className="workshop-footer">
              {activeTab === 'upcoming' ? (
                <>
                  <div className="capacity">
                    {workshop.registered}/{workshop.capacity} spots filled • {workshop.price}
                  </div>
                  <button
                    className={
                      registeredWorkshops.includes(workshop.id)
                        ? 'button disabled'
                        : hoveredButton === workshop.id
                        ? 'button hovered'
                        : 'button'
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
                  className={
                    hoveredButton === workshop.id && workshop.recordingAvailable
                      ? 'watch-button hovered'
                      : 'watch-button'
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

      <div className="benefits-section">
        <h2 className="benefits-title">Workshop Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaCertificate className="benefit-icon" />
            <h3 className="benefit-title">Certification</h3>
            <p>Receive completion certificates to showcase your professional development</p>
          </div>
          <div className="benefit-card">
            <FaChalkboardTeacher className="benefit-icon" />
            <h3 className="benefit-title">Expert Instructors</h3>
            <p>Learn from leading agricultural professionals and researchers</p>
          </div>
          <div className="benefit-card">
            <FaMapMarkerAlt className="benefit-icon" />
            <h3 className="benefit-title">Networking</h3>
            <p>Connect with fellow farmers and industry professionals</p>
          </div>
          <div className="benefit-card">
            <FaCheckCircle className="benefit-icon" />
            <h3 className="benefit-title">Practical Skills</h3>
            <p>Gain immediately applicable knowledge and techniques</p>
          </div>
        </div>
      </div>
    </div>
  );
}