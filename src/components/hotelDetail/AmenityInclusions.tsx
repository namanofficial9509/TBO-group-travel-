'use client';

import React from 'react';
import './AmenityInclusions.css';

interface Amenity {
    id: string;
    name: string;
    price: number | 'Free';
}

interface AmenityInclusionsProps {
    selected: string[];
    onToggle: (id: string) => void;
}

const AmenityInclusions = ({ selected, onToggle }: AmenityInclusionsProps) => {
    const amenities: Amenity[] = [
        { id: 'pool', name: 'Private Pool', price: 15000 },
        { id: 'wifi', name: 'High-Speed Wi-Fi', price: 'Free' },
        { id: 'gym', name: 'Premium Gym', price: 2000 },
        { id: 'spa', name: 'Spa Credits', price: 5000 }
    ];

    return (
        <section className="hotel-detail-section">
            <div className="section-title-row">
                <span className="section-icon">🏊</span>
                <h2>Amenities</h2>
            </div>

            <div className="amenities-grid">
                {amenities.map(item => (
                    <div
                        key={item.id}
                        className={`amenity-card ${selected.includes(item.id) || item.price === 'Free' ? 'active' : ''}`}
                        onClick={() => item.price !== 'Free' && onToggle(item.id)}
                    >
                        <div className="amenity-check">
                            <div className={`custom-checkbox ${selected.includes(item.id) || item.price === 'Free' ? 'checked' : ''}`}>
                                {(selected.includes(item.id) || item.price === 'Free') && '✓'}
                            </div>
                        </div>
                        <div className="amenity-content">
                            <h3 className="amenity-name">{item.name}</h3>
                            <span className={`amenity-price ${item.price === 'Free' ? 'free-text' : ''}`}>
                                {typeof item.price === 'number' ? `₹${item.price.toLocaleString()}` : item.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AmenityInclusions;
