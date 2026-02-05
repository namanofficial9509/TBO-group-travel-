'use client';

import React from 'react';
import './HotelPolicies.css';

const HotelPolicies = () => {
    return (
        <section className="hotel-detail-section policies-section">
            <h2 className="policy-main-title">Hotel Policies</h2>

            <div className="policies-grid">
                <div className="policy-card">
                    <span className="p-icon">🕒</span>
                    <div className="p-content">
                        <h4>Check-in / Check-out</h4>
                        <p>Check-in: 2:00 PM</p>
                        <p>Check-out: 11:00 AM</p>
                    </div>
                </div>

                <div className="policy-card">
                    <span className="p-icon">👥</span>
                    <div className="p-content">
                        <h4>Guest Rules</h4>
                        <p>Valid ID required for all guests.</p>
                        <p>Wedding conduct guidelines apply.</p>
                    </div>
                </div>

                <div className="policy-card">
                    <span className="p-icon">🚭</span>
                    <div className="p-content">
                        <h4>Smoking Policy</h4>
                        <p>Non-smoking rooms. Smoking only in designated outdoor zones.</p>
                    </div>
                </div>

                <div className="policy-card">
                    <span className="p-icon">ℹ️</span>
                    <div className="p-content">
                        <h4>Cancellation</h4>
                        <p>100% refund up to 30 days before the wedding event.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelPolicies;
