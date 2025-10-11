import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../index.css';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../DarkModeContext';

const ShopPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [showDescription, setShowDescription] = useState({});

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleDescription = (projectId) => {
        setShowDescription(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    const handleBuyNow = (projectName) => {
        const phoneNumber = "94760307168"; // WhatsApp number without + and spaces
        const message = encodeURIComponent(`Hello, I need more details of your project: ${projectName}!`);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Shop', href: '/shop' },
        { name: 'Contact', href: '/contact' }
    ];

    const projects = [
        {
            id: 1,
            name: "Income Expenses Management System",
            category: "software",
            description: "A web-based Income & Expenses Management System built with Laravel and MySQL to track, manage, and analyze financial records efficiently. It provides users with an easy interface to monitor cash flow and maintain financial control.",
            price: "Rs. 25,000",
            images: [
                "/projects/income expenses/1.png",
                "/projects/income expenses/4.png",
                "/projects/income expenses/12.png"
            ],
            features: ["Financial Tracking", "Budget Management", "Analytics Dashboard", "Expense Reports"]
        },
        {
            id: 2,
            name: "E - Commerce Web site",
            category: "web",
            description: "A responsive E-Commerce frontend built with TypeScript, offering a modern and user-friendly shopping experience. Backend services can be customized and integrated based on customer requirements.",
            price: "Rs. 15,000",
            images: [
                "/projects/e-commerce/01.png",
                "/projects/e-commerce/02.png",
                "/projects/e-commerce/03.png"
            ],
            features: ["Online Shopping", "Responsive Design", "TypeScript Frontend", "Customizable Backend"]
        },
        {
            id: 3,
            name: "E - Learning Website",
            category: "web",
            description: "An interactive E-Learning platform built with Spring Boot and React, designed to deliver courses, manage users, and enhance online learning experiences.",
            price: "Rs. 20,000",
            images: [
                "/projects/e-learning/01.jpg",
                "/projects/e-learning/02.jpg",
                "/projects/e-learning/03.jpg"
            ],
            features: ["Online Learning", "Course Management", "React Frontend", "Spring Boot Backend"]
        },
        {
            id: 4,
            name: "Gaming Website",
            category: "web",
            description: "A Gaming Website built with HTML, CSS, and JavaScript, providing a simple platform to explore and download PC and Android games.",
            price: "Rs. 15,000",
            images: [
                "/projects/gaming web/01.PNG",
                "/projects/gaming web/02.PNG",
                "/projects/gaming web/03.PNG"
            ],
            features: ["Game Downloads", "PC & Android", "Easy Access"]
        },
        // {
        //     id: 5,
        //     name: "Inventory Management System",
        //     category: "software",
        //     description: "Advanced inventory tracking system with barcode scanning and automated reordering.",
        //     price: "Rs. 60,000",
        //     images: [
        //         "/projects/inventory-1.jpg",
        //         "/projects/inventory-2.jpg",
        //         "/projects/inventory-3.jpg"
        //     ],
        //     features: ["Barcode Scanning", "Automated Reordering", "Real-time Tracking", "Multi-location Support"]
        // },
        // {
        //     id: 6,
        //     name: "Corporate Website",
        //     category: "web",
        //     description: "Professional corporate website with CMS, blog functionality, and multi-language support.",
        //     price: "Rs. 40,000",
        //     images: [
        //         "/projects/corporate-1.jpg",
        //         "/projects/corporate-2.jpg",
        //         "/projects/corporate-3.jpg"
        //     ],
        //     features: ["CMS Integration", "Blog Functionality", "Multi-language", "Contact Management"]
        // }
    ];

    const nextImage = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % project.images.length
        }));
    };

    const prevImage = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + project.images.length) % project.images.length
        }));
    };

    const getCurrentImage = (projectId) => {
        return currentImageIndex[projectId] || 0;
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
                                    className={`nav-link ${item.name === 'Shop' ? 'active' : ''}`}
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
                                        className={`mobile-nav-link ${item.name === 'Shop' ? 'active' : ''}`}
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

            {/* Shop Hero Section */}
            <section className="shop-hero">
                <div className="shop-hero-container">
                    <div className="shop-hero-content">
                        <h1 className="shop-hero-title">
                            Our <span className="gradient-text">Projects</span> Shop
                        </h1>
                        <p className="shop-hero-description">
                            Ready-to-use software solutions and web projects designed to accelerate your business growth.
                            Each project is fully customizable and comes with complete source code.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="shop-projects">
                <div className="shop-projects-container">
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                {/* Image Slideshow */}
                                <div className="project-image-container">
                                    <div className="project-image-wrapper">
                                        <img 
                                            src={project.images[getCurrentImage(project.id)]} 
                                            alt={`${project.name} screenshot ${getCurrentImage(project.id) + 1}`}
                                            className="project-image"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x250/1e293b/64748b?text=Project+Preview';
                                            }}
                                        />
                                        
                                        {/* Navigation Arrows */}
                                        <button 
                                            className="image-nav prev" 
                                            onClick={() => prevImage(project.id)}
                                        >
                                            <ChevronLeft className="nav-icon" />
                                        </button>
                                        <button 
                                            className="image-nav next" 
                                            onClick={() => nextImage(project.id)}
                                        >
                                            <ChevronRight className="nav-icon" />
                                        </button>

                                        {/* Image Indicators */}
                                        <div className="image-indicators">
                                            {project.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`indicator ${index === getCurrentImage(project.id) ? 'active' : ''}`}
                                                    onClick={() => setCurrentImageIndex(prev => ({
                                                        ...prev,
                                                        [project.id]: index
                                                    }))}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="category-badge">
                                        {project.category === 'web' ? 'Web Project' : 'Software'}
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="project-details">
                                    <h3 className="project-name">{project.name}</h3>
                                    
                                    {/* Description with toggle */}
                                    <div className="description-section">
                                        {showDescription[project.id] && (
                                            <p className="project-description">{project.description}</p>
                                        )}
                                        <button 
                                            className="see-more-btn"
                                            onClick={() => toggleDescription(project.id)}
                                        >
                                            {showDescription[project.id] ? 'See Less' : 'See More'}
                                        </button>
                                    </div>
                                    
                                    {/* Features */}
                                    <div className="project-features">
                                        {project.features.map((feature, index) => (
                                            <span key={index} className="feature-tag">{feature}</span>
                                        ))}
                                    </div>

                                    {/* Price and Buy Button */}
                                    <div className="project-footer">
                                        <div className="project-price">{project.price}</div>
                                        <button 
                                            className="buy-button"
                                            onClick={() => handleBuyNow(project.name)}
                                        >
                                            <ShoppingCart className="buy-icon" />
                                            <span>Buy Now</span>
                                        </button>
                                    </div>
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

export default ShopPage;