'use client';

import React from 'react';
import './VenueHeader.css';

const VenueHeader = () => {
    return (
        <div className="venue-detail-header">
            <div className="breadcrumb">
                <span>Home</span>
                <span className="separator">›</span>
                <span>Rajasthan Venues</span>
                <span className="separator">›</span>
                <span className="current">Umaid Bhawan Palace</span>
            </div>
            <div className="location-badge">
                <span className="pin-icon">📍</span>
                Circuit House Rd, Jodhpur, Rajasthan
            </div>
        </div>
    );
};

export default VenueHeader;
