import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

export default function ContactUs() {
  const [hover, setHover] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">We'd Love to Hear From You</h1>
      <div className="contact-us-grid">
        <div>
          <div className="contact-card">
            <h2 className="contact-card-title"><FaMapMarkerAlt className="contact-card-icon" /> Our Location</h2>
            <p className="contact-card-description">
              Visit us at our headquarters or reach out through any of our contact channels. 
              Our team is always ready to assist you with your agricultural needs.
            </p>
            
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-info-icon" />
              <span>123 Farm Street, Agricultural City, AC 12345</span>
            </div>
            <div className="contact-info-item">
              <FaPhone className="contact-info-icon" />
              <span>+1 (234) 567-8900</span>
            </div>
            <div className="contact-info-item">
              <FaEnvelope className="contact-info-icon" />
              <span>info@agroconnect.com</span>
            </div>
          </div>

          <div className="map-container">
            {/* Replace with your actual map embed code */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.9878449245258!3d40.74844097138958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>

        <div className="contact-card">
          <h2 className="contact-card-title"><FaPaperPlane className="contact-card-icon" /> Send us a Message</h2>
          <p className="contact-card-description">
            Have questions about our services? Want to learn how AgroConnect can help your farm thrive?
            Drop us a message and our agricultural experts will get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                <FaUser className="form-icon" /> Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                <FaEnvelope className="form-icon" /> Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">
                <FaPaperPlane className="form-icon" /> Your Message
              </label>
              <textarea 
                id="message" 
                className="form-textarea" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="form-button"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}