'use client';

import React, { useState } from 'react';
import './VenueFilters.css';

const VenueFilters = () => {
    const [priceRange, setPriceRange] = useState(5000);

    return (
        <aside className="venue-filters">
            <div className="filter-header">
                <h3>Filters</h3>
                <button className="reset-btn">RESET</button>
            </div>
            <p className="filter-subtitle">Refine your search for the perfect venue</p>

            <div className="filter-section">
                <h4>₹ Price Range (per plate)</h4>
                <div className="price-slider-container">
                    <input
                        type="range"
                        min="2000"
                        max="10000"
                        value={priceRange}
                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                        className="price-slider"
                    />
                    <div className="price-labels">
                        <span>₹2,000</span>
                        <span>₹{priceRange.toLocaleString()}</span>
                        <span>₹10,000+</span>
                    </div>
                </div>
            </div>

            <div className="filter-section">
                <h4>🏰 Venue Type</h4>
                <div className="checkbox-group">
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                        Heritage Palace
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Luxury Resort
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Lakefront Villa
                    </label>
                </div>
            </div>

            <div className="filter-section">
                <h4>👥 Guest Capacity</h4>
                <div className="capacity-grid">
                    <button className="capacity-btn">0-100</button>
                    <button className="capacity-btn active">100-500</button>
                    <button className="capacity-btn">500-1000</button>
                    <button className="capacity-btn">1000+</button>
                </div>
            </div>

            <div className="filter-section">
                <h4>🌊 Amenities</h4>
                <div className="checkbox-group">
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Bridal Suite
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                        In-house Catering
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        Swimming Pool
                    </label>
                </div>
            </div>

            <button className="apply-filters-btn">Apply Filters</button>
        </aside>
    );
};

export default VenueFilters;
