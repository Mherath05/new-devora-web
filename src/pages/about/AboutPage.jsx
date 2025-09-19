import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Users, Award, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../index.css';
import '../../mobile-only.css';
import { useDarkMode } from '../../DarkModeContext';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const teamMembers = [
    {
      name: "Madhushanka Herath",
      role: "Software Engineer",
      description: "Passionate full-stack developer with expertise in modern web technologies and system architecture.",
      image: "/team/madhushanka.jpg"
    },
    {
      name: "Ruwina Ranaginghe",
      role: "Software Engineer", 
      description: "Experienced software engineer specializing in backend development and database optimization.",
      image: "/team/ruwina.jpg"
    },
    {
      name: "Yohan Perera",
      role: "Software Engineer",
      description: "Frontend specialist with a keen eye for user experience and modern JavaScript frameworks.",
      image: "/team/yohan.jpg"
    },
    {
      name: "Arishanvass",
      role: "Software Engineer",
      description: "Versatile developer with strong problem-solving skills and expertise in multiple programming languages.",
      image: "/team/arisan.jpg"
    },
    {
      name: "Chathuranga Saman",
      role: "Quality Assurance",
      description: "Quality assurance specialist ensuring robust and reliable software through comprehensive testing.",
      image: "/team/chathuranga.jpg"
    },
        {
      name: "Pasanna Isurinda",
      role: "Graphic Designer",
      description: "Creative designer focused on creating intuitive and visually appealing user interfaces.",
      image: "/team/isurinda.jpg"
    },
    {
      name: "Tharindu Anusanga",
      role: "UI/UX Designer",
      description: "UI/UX designer passionate about intuitive interfaces. Expert in user-centered design. Focused on creative digital solutions.",
      image: "/team/tharindu.jpg"
    },
    {
      name: "Malindu Niranjaya",
      role: "Digital Marketing Executive",
      description: "Handles a company’s social media accounts to engage audiences and build brand presence online.",
      image: "/team/malindu.jpg"
    },
    {
      name: "Sajitha Anupama",
      role: "Marketing Manager",
      description: "Plans and oversees marketing campaigns to promote products or services and drive sales.",
      image: "/team/sajitha.jpg"
    },
    {
      name: "Hiruni Ramanayaka",
      role: "Project Manager",
      description: "Manages and coordinates technology projects to ensure they are completed on time and within budget.",
      image: "/team/hiruni.PNG"
    }
  ];

  const companyValues = [
    {
      icon: <Target className="value-icon" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions"
    },
    {
      icon: <Users className="value-icon" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication"
    },
    {
      icon: <Award className="value-icon" />,
      title: "Excellence",
      description: "We strive for perfection in every project we undertake"
    },
    {
      icon: <Heart className="value-icon" />,
      title: "Passion",
      description: "We love what we do and it shows in our work"
    }
  ];

  return (
    <div className={`homepage ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Navigation Bar */}
      <nav className="navbar">
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

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn mobile-only" onClick={toggleMenu}>
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${item.name === 'About Us' ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="theme-toggle">
                {isDarkMode ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
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
                    className={`mobile-nav-link ${item.name === 'About Us' ? 'active' : ''}`}
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

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              Meet The <span className="gradient-text">Team</span> Behind DEVORA
            </h1>
            <p className="about-hero-description">
              We are a passionate team of developers, designers, and digital experts 
              committed to transforming your ideas into exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="company-values">
        <div className="values-container">
          <div className="values-header">
            <h2 className="values-title">Our Values</h2>
            <p className="values-description">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Our Amazing Team</h2>
            <p className="team-description">
              Meet the talented individuals who make DEVORA's success possible
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                    onError={(e) => {
                      e.target.src = '/devora icon.png'; // Fallback image
                    }}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
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

export default AboutPage;
