'use client';

import React from 'react';
import './ServiceInclusions.css';

interface ServiceOption {
    id: string;
    name: string;
    desc: string;
    price: number | 'Included';
}

interface ServiceInclusionsProps {
    selected: string[];
    onToggle: (id: string) => void;
}

const ServiceInclusions = ({ selected, onToggle }: ServiceInclusionsProps) => {
    const services: ServiceOption[] = [
        { id: 'housekeeping', name: 'Daily Housekeeping', desc: 'Twice daily cleaning and sanitization', price: 'Included' },
        { id: 'laundry', name: 'Express Laundry', desc: 'Same-day laundry and ironing services', price: 1500 },
        { id: 'extra-bed', name: 'Extra Bedding', desc: 'Premium rollaway bed for extra guests', price: 3000 }
    ];

    return (
        <section className="hotel-detail-section">
            <div className="section-title-row">
                <span className="section-icon">🛎️</span>
                <h2>Stay & Room Services</h2>
            </div>

            <div className="service-options-list">
                {services.map(svc => {
                    const isSelected = selected.includes(svc.id) || svc.price === 'Included';
                    return (
                        <div
                            key={svc.id}
                            className={`service-item-row ${isSelected ? 'active' : ''}`}
                            onClick={() => svc.price !== 'Included' && onToggle(svc.id)}
                            style={{ cursor: svc.price === 'Included' ? 'default' : 'pointer' }}
                        >
                            <div className="checkbox-col">
                                <div className={`custom-checkbox ${isSelected ? 'checked' : ''}`}>
                                    {isSelected && '✓'}
                                </div>
                            </div>
                            <div className="service-info-col">
                                <h3 className="service-name">{svc.name}</h3>
                                <p className="service-desc">{svc.desc}</p>
                            </div>
                            <div className="service-price-col">
                                <span className={`s-price ${svc.price === 'Included' ? 'included-text' : ''}`}>
                                    {typeof svc.price === 'number' ? `₹${svc.price.toLocaleString()}` : svc.price}
                                </span>
                                {typeof svc.price === 'number' && <span className="s-unit"> / room</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServiceInclusions;
