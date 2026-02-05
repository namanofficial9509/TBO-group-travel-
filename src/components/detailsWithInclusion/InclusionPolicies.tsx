'use client';

import React from 'react';
import './InclusionPolicies.css';

const InclusionPolicies = () => {
    return (
        <section className="policies-container">
            <div className="section-title-row">
                <span className="section-icon">📜</span>
                <h2>Legal & Policy Details</h2>
            </div>

            <div className="policies-grid">
                <div className="policy-item">
                    <span className="dot"></span>
                    <p>Loud music is restricted after 11:00 PM as per local authorities.</p>
                </div>
                <div className="policy-item">
                    <span className="dot"></span>
                    <p>50% advance payment required to lock the dates and current pricing.</p>
                </div>
                <div className="policy-item">
                    <span className="dot"></span>
                    <p>Outside catering and alcohol are not permitted within the venue premises.</p>
                </div>
                <div className="policy-item">
                    <span className="dot"></span>
                    <p>Cancellation policy: 100% refund if cancelled 90 days before event.</p>
                </div>
            </div>
        </section>
    );
};

export default InclusionPolicies;
