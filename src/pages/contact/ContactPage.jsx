import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../index.css';
import { useDarkMode } from '../../DarkModeContext';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  // Scroll to top on mount, and scroll to form only if hash is present
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const el = document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    area: 'sd',
    project: ''
  });

  // Add states for EmailJS
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = [
    {
      icon: <Phone className="contact-info-icon" />,
      title: "Call Us",
      details: "+94 76 030 7168",
      subDetails: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <Mail className="contact-info-icon" />,
      title: "Email Us",
      details: "devoragroup8@gmail.com",
      subDetails: "We'll respond within 24hrs"
    },
    {
      icon: <Clock className="contact-info-icon" />,
      title: "Working Hours",
      details: "Monday - Friday",
      subDetails: "9:00 AM - 6:00 PM EST"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = 'service_7m0k3gp';
    const templateId = 'template_ge4hvrc';
    const publicKey = 'eLI7l-3ehUz_MsAXx';

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      service_area: formData.area,
      project_brief: formData.project,
      to_name: 'DEVORA Team',
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          area: 'sd',
          project: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className={`homepage ${isDarkMode ? 'dark' : 'light'}`}>
      
      {/* Navigation Bar */}
  <nav className="navbar devora-navbar">
        <div className="nav-container">
          <div className="nav-content">
            
            {/* Logo */}
            <div className="logo-section">
              <div className="logo-icon">
                <img src="/devora icon.png" alt="devora" className='logo-icon' />
              </div>
              <div className="logo-text">
                <h1 className="company-name">DEVORA</h1>
                <p className="company-slogan">We Code The Future You Imagine</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${item.name === 'Contact' ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="theme-toggle">
                {isDarkMode ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-nav">
              <button onClick={toggleDarkMode} className="theme-toggle mobile-theme-toggle">
                {isDarkMode ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
              </button>
              <button onClick={toggleMenu} className="menu-toggle">
                {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`mobile-nav-link ${item.name === 'Contact' ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-hero-description">
              Ready to bring your next project to reality? Tell us about it,
              and our experts will reach out with solutions in just a few hours.
              Let's build something great together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='contact-section'>
        <div className='contact-container'>
          <div className='contact-card'>
            
            {/* Contact Information */}
            <div className='contact-info-side'>
              <h2 className='contact-title'>Contact Information</h2>
              <p className='contact-desc'>
                We're here to help you bring your vision to life. Reach out to us through any of the following channels.
              </p>
              
              <div className='contact-info-list'>
                {contactInfo.map((info, index) => (
                  <div key={index} className='contact-info-item'>
                    <div className='contact-info-icon-wrapper'>
                      {info.icon}
                    </div>
                    <div className='contact-info-details'>
                      <h4 className='contact-info-title'>{info.title}</h4>
                      <p className='contact-info-main'>{info.details}</p>
                      <p className='contact-info-sub'>{info.subDetails}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className='contact-form-side' id='contact-form'>
              <h2 className='contact-form-title'>Send us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div style={{ 
                  color: '#10B981', 
                  backgroundColor: '#D1FAE5', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  marginBottom: '20px',
                  fontSize: '14px',
                  border: '1px solid #A7F3D0'
                }}>
                  ✅ Message sent successfully! We'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{ 
                  color: '#EF4444', 
                  backgroundColor: '#FEE2E2', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  marginBottom: '20px',
                  fontSize: '14px',
                  border: '1px solid #FECACA'
                }}>
                  ❌ Failed to send message. Please try again or contact us directly at devoragroup8@gmail.com
                </div>
              )}

              <form onSubmit={handleSubmit} className='contact-form'>
                <div className='form-group'>
                  <label className='form-label' htmlFor='name'>Name *</label>
                  <input 
                    type='text' 
                    id='name'
                    name='name' 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Enter your full name' 
                    className='form-input' 
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className='form-group'>
                  <label className='form-label' htmlFor='email'>Email Address *</label>
                  <input 
                    type='email' 
                    id='email'
                    name='email' 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Enter your email address' 
                    className='form-input' 
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className='form-group'>
                  <label className='form-label' htmlFor='company'>Company / Business Name</label>
                  <input 
                    type='text' 
                    id='company'
                    name='company' 
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder='Your company or business name' 
                    className='form-input'
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className='form-group'>
                  <label className='form-label' htmlFor='area'>Service Area *</label>
                  <select 
                    id='area'
                    name='area' 
                    value={formData.area}
                    onChange={handleInputChange}
                    className='form-select'
                    required
                    disabled={isSubmitting}
                  >
                    <option value="sd">Software Development</option>
                    <option value="ad">App Development</option>
                    <option value="wd">Web Development</option>
                    <option value="ui">UI/UX Design</option>
                    <option value="gd">Graphic Design</option>
                    <option value="ai">AI Automation</option>
                    <option value="cb">Chat Bot Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className='form-group'>
                  <label className='form-label' htmlFor='project'>Project Brief *</label>
                  <textarea 
                    id='project'
                    name='project' 
                    value={formData.project}
                    onChange={handleInputChange}
                    rows="6" 
                    placeholder='Tell us about your project requirements, goals, and timeline...' 
                    className='form-textarea'
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <button 
                  type='submit' 
                  className='btn-primary contact-submit-btn'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-icon">
               <img src="/devora icon.png" alt="devora" className='logo-icon' />
              </div>
              <div className="footer-logo-text">
                <h3 className="footer-company-name">DEVORA</h3>
                <p className="footer-slogan">We Code The Future You Imagine</p>
              </div>
            </div>
            
            <div className="footer-copyright">
              © 2025 DEVORA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;