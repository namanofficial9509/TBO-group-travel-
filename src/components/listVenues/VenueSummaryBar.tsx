'use client';

import React from 'react';
import './VenueSummaryBar.css';

const VenueSummaryBar = () => {
    return (
        <div className="venue-summary-bar">
            <div className="summary-left">
                <div className="breadcrumb">
                    <span>Home</span>
                    <span className="separator">›</span>
                    <span>India</span>
                    <span className="separator">›</span>
                    <span className="current">Udaipur</span>
                </div>
                <div className="search-criteria">
                    <div className="criteria-item">
                        <span className="label">Location:</span>
                        <span className="value">Udaipur</span>
                    </div>
                    <div className="criteria-item">
                        <span className="label">Date:</span>
                        <span className="value">12 Oct - 15 Oct, 2024</span>
                    </div>
                    <div className="criteria-item">
                        <span className="label">Guests:</span>
                        <span className="value">250 Guests</span>
                    </div>
                </div>
            </div>
            <button className="edit-search-btn">
                <span className="edit-icon">✏️</span>
                Edit Search
            </button>
        </div>
    );
};

export default VenueSummaryBar;
