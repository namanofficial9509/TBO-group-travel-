'use client';

import React from 'react';
import './VehicleSelection.css';

interface VehicleSelectionProps {
    selectedIds: string[];
    onToggle: (id: string) => void;
}

const VehicleSelection = ({ selectedIds, onToggle }: VehicleSelectionProps) => {
    const vehicles = [
        {
            id: 'shuttle',
            name: 'Shuttle Bus',
            desc: 'High capacity (40+ seats)',
            note: 'Ideal for large groups traveling from hotels to the ceremony venue.',
            price: '₹38,500 / day',
            image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
            type: 'BUS'
        },
        {
            id: 'tempo',
            name: 'Tempo Traveller',
            desc: 'Mid-range (12-20 seats)',
            note: 'Perfect for bridal party transit and close family members.',
            price: '₹23,000 / day',
            image: 'https://images.unsplash.com/photo-1559136555-9303615829ac?auto=format&fit=crop&w=800&q=80',
            popular: true
        },
        {
            id: 'suv',
            name: 'Luxury SUV',
            desc: 'VIP Comfort (4-6 seats)',
            note: 'Premium travel for the couple and distinguished VIP guests.',
            price: '₹12,500 / day',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
            type: 'SUV'
        }
    ];

    return (
        <section className="vehicle-selection-section">
            <div className="section-header">
                <h2>Vehicle Selection</h2>
                <span className="step-badge">Step 1 of 3</span>
            </div>

            <div className="vehicle-grid">
                {vehicles.map(v => {
                    const isSelected = selectedIds.includes(v.id);
                    return (
                        <div
                            key={v.id}
                            className={`vehicle-card ${isSelected ? 'selected' : ''}`}
                            onClick={() => onToggle(v.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="vehicle-img-container">
                                <img src={v.image} alt={v.name} />
                                {isSelected && <div className="selected-overlay">✓</div>}
                            </div>
                            <div className="vehicle-info">
                                <div className="title-row">
                                    <h3 className="v-name">{v.name}</h3>
                                    {v.popular && <span className="popular-pill">POPULAR</span>}
                                </div>
                                <p className="v-desc">{v.desc}</p>
                                <p className="v-note">{v.note}</p>

                                <div className="price-cta-row">
                                    <span className="v-price">{v.price}</span>
                                    <button
                                        className={`v-btn ${isSelected ? 'added' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onToggle(v.id);
                                        }}
                                    >
                                        {isSelected ? 'Added' : 'Select'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default VehicleSelection;
