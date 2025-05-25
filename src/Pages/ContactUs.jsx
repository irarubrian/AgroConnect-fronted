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

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    fontFamily: "'Inter', sans-serif",
    color: '#1a202c',
  };

  const heading1Style = {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '40px',
    color: '#064e3b',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '60px',
    alignItems: 'start',
  };

  const contactCardStyle = {
    backgroundColor: '#f0fdf4',
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  };

  const heading2Style = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '24px',
    color: '#065f46',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const paragraphStyle = {
    marginBottom: '20px',
    lineHeight: '1.6',
    color: '#4a5568',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
    color: '#4a5568',
  };

  const iconStyle = {
    color: '#047857',
    fontSize: '1.2rem',
    minWidth: '24px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#2d3748',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
    marginBottom: '20px',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '120px',
  };

  const buttonStyle = {
    backgroundColor: hover ? '#065f46' : '#047857',
    color: '#ffffff',
    padding: '12px 32px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: hover ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
    transform: hover ? 'translateY(-2px)' : 'none',
  };

  const mapContainerStyle = {
    height: '300px',
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    marginTop: '40px',
    border: '1px solid #e2e8f0',
  };

  return (
    <div style={containerStyle}>
      <h1 style={heading1Style}>We'd Love to Hear From You</h1>
      <div style={gridStyle}>
        <div>
          <div style={contactCardStyle}>
            <h2 style={heading2Style}><FaMapMarkerAlt style={iconStyle} /> Our Location</h2>
            <p style={paragraphStyle}>
              Visit us at our headquarters or reach out through any of our contact channels. 
              Our team is always ready to assist you with your agricultural needs.
            </p>
            
            <div style={contactItemStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <span>123 Farm Street, Agricultural City, AC 12345</span>
            </div>
            <div style={contactItemStyle}>
              <FaPhone style={iconStyle} />
              <span>+1 (234) 567-8900</span>
            </div>
            <div style={contactItemStyle}>
              <FaEnvelope style={iconStyle} />
              <span>info@agroconnect.com</span>
            </div>
          </div>

          <div style={mapContainerStyle}>
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

        <div style={contactCardStyle}>
          <h2 style={heading2Style}><FaPaperPlane style={iconStyle} /> Send us a Message</h2>
          <p style={paragraphStyle}>
            Have questions about our services? Want to learn how AgroConnect can help your farm thrive?
            Drop us a message and our agricultural experts will get back to you within 24 hours.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div>
              <label style={labelStyle} htmlFor="name">
                <FaUser style={{ ...iconStyle, fontSize: '1rem' }} /> Your Name
              </label>
              <input 
                type="text" 
                id="name" 
                style={inputStyle} 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="email">
                <FaEnvelope style={{ ...iconStyle, fontSize: '1rem' }} /> Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                style={inputStyle} 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <label style={labelStyle} htmlFor="message">
                <FaPaperPlane style={{ ...iconStyle, fontSize: '1rem' }} /> Your Message
              </label>
              <textarea 
                id="message" 
                style={textareaStyle} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              style={buttonStyle}
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