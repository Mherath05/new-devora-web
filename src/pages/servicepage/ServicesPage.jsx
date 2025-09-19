
import React, { useState } from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import {
    Menu, X, Sun, Moon, ArrowRight, CheckCircle, Code, Smartphone,
    Palette, Settings, Wrench, Users, Server, Database, Globe,
    Monitor, Cpu, Shield, Zap, Clock, Award
} from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const ServicesPage = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' }
    ];


    const mainServices = [
        {
            id: 'custom-software',
            icon: <Code className="service-main-icon" />,
            title: "Custom Software Development",
            shortDesc: "Tailored software solutions that perfectly fit your business requirements",
            longDesc: "We develop custom software applications from scratch, designed specifically for your business needs. Our team uses modern programming languages and frameworks to create scalable, secure, and efficient solutions.",
            features: [
                "Requirements Analysis & Planning",
                "Full-Stack Development",
                "Database Design & Integration",
                "API Development & Integration",
                "Quality Assurance & Testing",
                "Deployment & Go-Live Support"
            ],
            technologies: ["React", "Node.js", "Python", "Java", "PHP", "Laravel", "MongoDB", "MySQL"],
            timeline: "8-24 weeks",
            price: "Starting from Rs. 15,000"
        },
        {
            id: 'web-mobile',
            icon: <Smartphone className="service-main-icon" />,
            title: "Web & Mobile App Development",
            shortDesc: "Responsive web applications and native mobile apps for all platforms",
            longDesc: "Create stunning web applications and mobile apps that work seamlessly across all devices. We build responsive websites, progressive web apps, and native mobile applications for iOS and Android.",
            features: [
                "Responsive Web Design",
                "Progressive Web Apps (PWA)",
                "Native iOS Development",
                "Native Android Development",
                "Cross-Platform Solutions",
                "App Store Optimization"
            ],
            technologies: ["React", "Flutter", "React Native", "Firebase"],
            timeline: "6-16 weeks",
            price: "Starting from Rs. 8,000"
        },
        {
            id: 'ui-ux',
            icon: <Palette className="service-main-icon" />,
            title: "UI/UX Design",
            shortDesc: "User-centered design that creates exceptional digital experiences",
            longDesc: "Our design team creates intuitive and visually appealing user interfaces that enhance user experience and drive engagement. We focus on usability, accessibility, and modern design principles.",
            features: [
                "User Research & Analysis",
                "Wireframing & Prototyping",
                "Visual Design & Branding",
                "Usability Testing",
                "Design System Creation",
                "Accessibility Compliance"
            ],
            technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
            timeline: "4-12 weeks",
            price: "Starting from Rs. 5,000"
        },
        {
            id: 'it-consulting',
            icon: <Settings className="service-main-icon" />,
            title: "IT Consulting",
            shortDesc: "Strategic technology guidance to optimize your business operations",
            longDesc: "Get expert advice on technology strategy, architecture design, and digital transformation. We help businesses make informed decisions about their technology investments and implementations.",
            features: [
                "Technology Strategy Planning",
                "System Architecture Design",
                "Digital Transformation Roadmap",
                "Security Assessment",
                "Performance Optimization",
                "Technology Stack Recommendations"
            ],
            technologies: ["Cloud Platforms", "Microservices", "DevOps", "Security Tools", "Analytics"],
            timeline: "2-8 weeks",
            price: "Starting from Rs. 3,000"
        },
        {
            id: 'maintenance',
            icon: <Wrench className="service-main-icon" />,
            title: "Maintenance & Support",
            shortDesc: "Ongoing support to keep your applications running smoothly",
            longDesc: "Comprehensive maintenance and support services to ensure your applications remain secure, up-to-date, and performing optimally. We provide both reactive and proactive support options.",
            features: [
                "24/7 System Monitoring",
                "Regular Updates & Patches",
                "Performance Optimization",
                "Security Maintenance",
                "Bug Fixes & Troubleshooting",
                "Technical Support & Training"
            ],
            technologies: ["Monitoring Tools", "CI/CD Pipelines", "Cloud Infrastructure", "Security Tools"],
            timeline: "Ongoing",
            price: "Starting from Rs. 2,000/month"
        }
    ];

    const additionalServices = [
        {
            icon: <Server className="additional-service-icon" />,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services"
        },
        {
            icon: <Database className="additional-service-icon" />,
            title: "Database Management",
            description: "Optimize and manage your data storage solutions"
        },
        {
            icon: <Globe className="additional-service-icon" />,
            title: "DevOps & CI/CD",
            description: "Streamline your development and deployment processes"
        },
        {
            icon: <Shield className="additional-service-icon" />,
            title: "Cybersecurity",
            description: "Protect your digital assets with robust security measures"
        },
        {
            icon: <Zap className="additional-service-icon" />,
            title: "Performance Optimization",
            description: "Enhance speed and efficiency of your applications"
        },
        {
            icon: <Users className="additional-service-icon" />,
            title: "Team Augmentation",
            description: "Extend your team with our skilled developers"
        }
    ];

    const whyChooseUs = [
        {
            icon: <Award className="why-icon" />,
            title: "Proven Experience",
            description: "1+ years of delivering successful projects across various industries"
        },
        {
            icon: <Zap className="why-icon" />,
            title: "Agile Methodology",
            description: "Fast, iterative development with regular client feedback and updates"
        },
        {
            icon: <Clock className="why-icon" />,
            title: "Timely Delivery",
            description: "We stick to deadlines and deliver projects on time, every time"
        },
        {
            icon: <Users className="why-icon" />,
            title: "Dedicated Support",
            description: "24/8 support and maintenance to keep your systems running smoothly"
        }
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
                                    className={`nav-link ${item.name === 'Services' ? 'active' : ''}`}
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
                                        className={`mobile-nav-link ${item.name === 'Services' ? 'active' : ''}`}
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

            {/* Services Hero Section */}
            <section className="services-hero-section">
                <div className="services-hero-container">
                    <div className="services-hero-content">
                        <h1 className="services-hero-title">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="services-hero-description">
                            Comprehensive technology solutions to drive your business forward.
                            From custom software development to ongoing support, we've got you covered.
                        </p>
                    </div>
                    <div className="services-hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-number">15+</div>
                            <div className="hero-stat-label">Projects Delivered</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">15+</div>
                            <div className="hero-stat-label">Happy Clients</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">1+</div>
                            <div className="hero-stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="main-services-section">
                <div className="main-services-container">
                    <div className="main-services-header">
                        <h2 className="main-services-title">Our Core Services</h2>
                        <p className="main-services-description">
                            Specialized solutions tailored to meet your unique business needs
                        </p>
                    </div>

                    <div className="main-services-grid">
                        {mainServices.map((service) => (
                            <div
                                key={service.id}
                                className={`main-service-card ${selectedService === service.id ? 'expanded' : ''}`}
                                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                            >
                                <div className="main-service-header">
                                    <div className="main-service-icon-wrapper">
                                        {service.icon}
                                    </div>
                                    <div className="main-service-info">
                                        <h3 className="main-service-title">{service.title}</h3>
                                        <p className="main-service-short-desc">{service.shortDesc}</p>
                                    </div>
                                    <div className="main-service-pricing">
                                        <span className="service-price">{service.price}</span>
                                        <span className="service-timeline">{service.timeline}</span>
                                    </div>
                                </div>

                                {selectedService === service.id && (
                                    <div className="main-service-details">
                                        <div className="service-detail-grid">
                                            <div className="service-description-section">
                                                <h4>About This Service</h4>
                                                <p>{service.longDesc}</p>
                                            </div>

                                            <div className="service-features-section">
                                                <h4>What's Included</h4>
                                                <div className="service-features-list">
                                                    {service.features.map((feature, idx) => (
                                                        <div key={idx} className="service-feature-item">
                                                            <CheckCircle className="service-check-icon" />
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="service-tech-section">
                                                <h4>Technologies We Use</h4>
                                                <div className="service-tech-tags">
                                                    {service.technologies.map((tech, idx) => (
                                                        <span key={idx} className="service-tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="service-cta-section">
                                            <button className="btn-cta1" onClick={(e) => {
                                                e.stopPropagation();
                                                onNavigate('contact');
                                            }}>
                                                <span>Get Started</span>
                                                <ArrowRight className="btn-icon" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services Section */}
            <section className="additional-services-section">
                <div className="additional-services-container">
                    <div className="additional-services-header">
                        <h2 className="additional-services-title">Additional Services</h2>
                        <p className="additional-services-description">
                            Complementary services to enhance your technology infrastructure
                        </p>
                    </div>

                    <div className="additional-services-grid">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="additional-service-card">
                                <div className="additional-service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3 className="additional-service-title">{service.title}</h3>
                                <p className="additional-service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="why-choose-container">
                    <div className="why-choose-header">
                        <h2 className="why-choose-title">Why Choose DEVORA?</h2>
                        <p className="why-choose-description">
                            We're committed to delivering exceptional results that exceed your expectations
                        </p>
                    </div>

                    <div className="why-choose-grid">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="why-choose-card">
                                <div className="why-choose-icon-wrapper">
                                    {item.icon}
                                </div>
                                <h3 className="why-choose-card-title">{item.title}</h3>
                                <p className="why-choose-card-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <div className="logo-icon">
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

export default ServicesPage;