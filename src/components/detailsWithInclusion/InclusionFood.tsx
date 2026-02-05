'use client';

import React from 'react';
import './InclusionFood.css';

const InclusionFood = () => {
    return (
        <section className="inclusion-section">
            <div className="section-title-row">
                <span className="section-icon">🍴</span>
                <h2>Food Inclusion Section</h2>
            </div>

            <div className="event-food-card">
                <div className="card-header">
                    <div className="event-meta">
                        <h3 className="event-name">Mehndi Ceremony</h3>
                        <p className="event-subtitle">Traditional afternoon catering with live counters</p>
                    </div>
                    <div className="type-toggle">
                        <button className="toggle-btn active">Veg</button>
                        <button className="toggle-btn">Non-Veg</button>
                    </div>
                </div>

                <div className="food-config-grid">
                    <div className="config-item">
                        <label>GUEST COUNT</label>
                        <input type="text" defaultValue="150" />
                    </div>
                    <div className="config-item">
                        <label>MENU TIER</label>
                        <select className="config-select">
                            <option>Premium Traditional</option>
                            <option>Gold Selection</option>
                            <option>Royal Feast</option>
                        </select>
                    </div>
                </div>

                <div className="dish-summary">
                    <button className="dish-btn">Starters: 5 Items ✏️</button>
                    <button className="dish-btn">Mains: 8 Items ✏️</button>
                </div>

            </div>

            <div className="event-food-card">
                <div className="card-header">
                    <div className="event-meta">
                        <h3 className="event-name">Sangeet Cocktail Dinner</h3>
                        <p className="event-subtitle">Gala dinner with international cuisine options</p>
                    </div>
                    <div className="type-toggle">
                        <button className="toggle-btn">Veg</button>
                        <button className="toggle-btn active">Mixed</button>
                    </div>
                </div>

                <div className="food-config-grid">
                    <div className="config-item">
                        <label>GUEST COUNT</label>
                        <input type="text" defaultValue="300" />
                    </div>
                    <div className="config-item">
                        <label>BEVERAGE PACKAGE</label>
                        <select className="config-select">
                            <option>Premium Spirits & Mockta</option>
                            <option>Classic Wine & Dine</option>
                            <option>Non-Alcoholic Elite</option>
                        </select>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InclusionFood;
