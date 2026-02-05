'use client';

import React from 'react';
import './NegotiationBanner.css';

const NegotiationBanner = () => {
    return (
        <div className="negotiation-banner">
            <div className="banner-left">
                <span className="b-icon">📝</span>
                <div className="b-text">
                    <h4>Negotiation & Special Requests</h4>
                    <p>Add any specific requirements for decorations, late check-outs, or dietary preferences.</p>
                </div>
            </div>
            <button className="edit-req-btn">Edit Requests</button>
        </div>
    );
};

export default NegotiationBanner;
