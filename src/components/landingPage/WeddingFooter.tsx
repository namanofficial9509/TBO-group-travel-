'use client';

import React from 'react';
import './WeddingFooter.css';

const WeddingFooter = () => {
    return (
        <footer className="wedding-footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">✨</span>
                            <h2>RoyalWeddings</h2>
                        </div>
                        <p className="footer-description">
                            Curating the world's most breathtaking destination weddings.
                            From initial venue scouting to the final toast, we define luxury events.
                        </p>
                    </div>

                    <div className="footer-links-section">
                        <div className="footer-column">
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li><a href="#">Find a Venue</a></li>
                                <li><a href="#">Planning Services</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>CONTACT</h3>
                            <ul className="contact-list">
                                <li>
                                    <span className="contact-icon">✉️</span>
                                    <a href="mailto:concierge@royalweddings.com">concierge@royalweddings.com</a>
                                </li>
                                <li>
                                    <span className="contact-icon">📞</span>
                                    <a href="tel:+9118007692593">+91 1800-ROYAL-WD</a>
                                </li>
                                <li>
                                    <span className="contact-icon">📍</span>
                                    <span>Mumbai | Udaipur | London</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 RoyalWeddings Destination Group. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">PRIVACY</a>
                        <a href="#">TERMS</a>
                        <a href="#">COOKIES</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default WeddingFooter;
