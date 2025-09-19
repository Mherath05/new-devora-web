
import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Code, Palette, Users, ArrowRight, CheckCircle } from 'lucide-react';
import '../../index.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../DarkModeContext';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' }
    ];


    const services = [
        {
            icon: <Code className="service-icon" />,
            title: "Software Development",
            description: "Custom software solutions built with cutting-edge technologies to drive your business forward."
        },
        {
            icon: <Palette className="service-icon" />,
            title: "Graphic Design",
            description: "Creative visual solutions that capture your brand's essence and engage your audience effectively."
        },
        {
            icon: <Users className="service-icon" />,
            title: "Team Collaboration",
            description: "Seamless project management and team coordination for optimal results and timely delivery."
        }
    ];

    const features = [
        "Modern Technology Stack",
        "Responsive Design",
        "24/7 Support",
        "Scalable Solutions",
        "Custom Development",
        "Creative Design"
    ];

    const stats = [
        { number: "15+", label: "Projects Completed" },
        { number: "15+", label: "Happy Clients" },
        { number: "1+", label: "Years Experience" },
        { number: "24/7", label: "Support Available" }
    ];

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
                                    className={`nav-link ${item.name === 'Home' ? 'active' : ''}`}
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
                                        className={`mobile-nav-link ${item.name === 'Home' ? 'active' : ''}`}
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

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-container">
                    <div className="hero-grid">

                        {/* Hero Content */}
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1 className="hero-title">
                                    We Code The{' '}
                                    <span className="gradient-text">Future</span>{' '}
                                    You Imagine
                                </h1>
                                <p className="hero-description">
                                    DEVORA is your trusted partner in digital transformation. We specialize in
                                    cutting-edge software development and innovative graphic design solutions
                                    that bring your vision to life.
                                </p>
                            </div>

                            <div className="hero-buttons">
                                <Link to="/contact#contact-form" className="btn-primary">
                                    <span>Get Started</span>
                                    <ArrowRight className="btn-icon" />
                                </Link>
                                <button className="btn-secondary">
                                    Learn More
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="stats-grid">
                                {stats.map((stat, index) => (
                                    <div key={index} className="stat-item">
                                        <div className="stat-number">{stat.number}</div>
                                        <div className="stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="hero-visual">
                            <div className="features-card">
                                <div className="features-grid">
                                    {features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <CheckCircle className="check-icon" />
                                            <span className="feature-text">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Background Elements */}
                            <div className="bg-element-1"></div>
                            <div className="bg-element-2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="services-section">
                <div className="services-container">
                    <div className="services-header">
                        <h2 className="services-title">Our Core Services</h2>
                        <p className="services-description">
                            We combine technical expertise with creative innovation to deliver
                            exceptional results for your business.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2 className="cta-title">
                                Ready to Transform Your Ideas into Reality?
                            </h2>
                            <p className="cta-description">
                                Let's collaborate to create something extraordinary. Get in touch with
                                our team and start your digital transformation journey today.
                            </p>
                            <Link to="/contact#contact-form" className="btn-primary">
                                <span>Start Your Project</span>
                                <ArrowRight className="btn-icon" />
                            </Link>
                        </div>

                        {/* Background decoration */}
                        <div className="cta-bg-1"></div>
                        <div className="cta-bg-2"></div>
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

export default HomePage;