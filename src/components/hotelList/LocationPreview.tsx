'use client';

import React from 'react';
import './LocationPreview.css';

const LocationPreview = () => {
    return (
        <div className="location-context-card">
            <div className="location-header">
                <h3>Location Preview</h3>
                <span className="city-tag">Manali District</span>
            </div>

            <div className="map-placeholder">
                <div className="map-img-mock">
                    <img src="/destinations/udaipur.jpg" alt="Map View" />
                    <div className="venue-pin">❤️ Wedding Hall</div>
                    <div className="hotel-pin">🏨 Naman Chopra Hotel</div>
                    <div className="route-line"></div>
                </div>
            </div>

            <div className="distance-info-box">
                <div className="distance-icon">🚗</div>
                <div className="distance-data">
                    <p className="d-label">Distance from Wedding Hall</p>
                    <p className="d-val">2.5 km</p>
                    <p className="d-travel">~8 mins travel time in current traffic</p>
                </div>
            </div>

            <div className="hotel-tip-badge">
                <span className="tip-icon">ℹ️</span>
                <div className="tip-text">
                    <h4>Guest Convenience Tip</h4>
                    <p>This hotel offers complimentary shuttle service to and from the wedding venue every 30 minutes for all booked guests.</p>
                </div>
            </div>
        </div>
    );
};

export default LocationPreview;
