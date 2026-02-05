'use client';

import React from 'react';
import './TravelUseCases.css';

const TravelUseCases = () => {
    return (
        <section className="travel-use-cases">
            <div className="section-title-row">
                <span className="icon-badge">✅</span>
                <h2>Travel Use Cases</h2>
            </div>

            <div className="use-case-list">
                <label className="use-case-item active">
                    <div className="check-circle">✓</div>
                    <div className="use-case-text">
                        <h4>Airport Pickup & Drop</h4>
                        <p>Guest transit from airport/railway to hotels</p>
                    </div>
                </label>

                <label className="use-case-item active">
                    <div className="check-circle">✓</div>
                    <div className="use-case-text">
                        <h4>Daily Event Travel (8 hrs)</h4>
                        <p>Hotel ↔ Wedding Venue shuttles</p>
                    </div>
                </label>

                <label className="use-case-item">
                    <div className="check-circle empty"></div>
                    <div className="use-case-text">
                        <h4>Custom Travel (Local Sightseeing)</h4>
                        <p>Personalized itineraries for guests</p>
                    </div>
                </label>
            </div>
        </section>
    );
};

export default TravelUseCases;
