'use client';

import React, { useState } from 'react';
import './InclusionDecor.css';

const InclusionDecor = () => {
    const [selectedTheme, setSelectedTheme] = useState('Royal Heritage');

    const themes = [
        {
            name: 'Royal Heritage',
            tagline: 'Traditional elegance',
            image: 'https://images.unsplash.com/photo-1544161515-4af6b1d8d179?auto=format&fit=crop&w=800&q=80',
            popular: true
        },
        {
            name: 'Ethereal Floral',
            tagline: 'Modern garden vibe',
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'Minimalist Chic',
            tagline: 'Clean & Sophisticated',
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section className="inclusion-section decor-section">
            <div className="section-title-row">
                <span className="section-icon">✨</span>
                <h2>Stage & Decor Section</h2>
            </div>

            <p className="select-theme-label">SELECT PRIMARY THEME</p>
            <div className="themes-grid">
                {themes.map(theme => (
                    <div
                        key={theme.name}
                        className={`theme-card ${selectedTheme === theme.name ? 'selected' : ''}`}
                        onClick={() => setSelectedTheme(theme.name)}
                    >
                        <div className="theme-img-wrapper">
                            <img src={theme.image} alt={theme.name} />
                            {theme.popular && <span className="popular-badge">MOST POPULAR</span>}
                            {selectedTheme === theme.name && <div className="selected-tick">✓</div>}
                        </div>
                        <div className="theme-info">
                            <h3 className="theme-name">{theme.name}</h3>
                            <p className="theme-tag">{theme.tagline}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="event-decor-list">
                <div className="decor-item">
                    <div className="item-main">
                        <span className="item-icon">🛋️</span>
                        <div className="item-text">
                            <h4 className="item-name">Mandap Setup</h4>
                            <p className="item-desc">Waterfront traditional mandap with floral canopy</p>
                        </div>
                    </div>
                    <button className="customize-link">Customize</button>
                </div>

                <div className="decor-item">
                    <div className="item-main">
                        <span className="item-icon">📺</span>
                        <div className="item-text">
                            <h4 className="item-name">Reception Stage</h4>
                            <p className="item-desc">LED backdrop with crystal chandeliers</p>
                        </div>
                    </div>
                    <button className="customize-link">Customize</button>
                </div>
            </div>
        </section>
    );
};

export default InclusionDecor;
