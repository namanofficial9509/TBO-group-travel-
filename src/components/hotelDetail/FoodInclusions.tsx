'use client';

import React from 'react';
import './FoodInclusions.css';

interface FoodOption {
    id: string;
    name: string;
    desc: string;
    price: number;
}

interface FoodInclusionsProps {
    selected: string[];
    onToggle: (id: string) => void;
}

const FoodInclusions = ({ selected, onToggle }: FoodInclusionsProps) => {
    const options: FoodOption[] = [
        { id: 'breakfast', name: 'Buffet Breakfast', desc: 'Morning spread with continental & local delicacies', price: 1200 },
        { id: 'lunch', name: 'Grand Lunch', desc: 'Traditional 5-course multi-cuisine lunch', price: 2500 },
        { id: 'dinner', name: 'Cocktail Dinner', desc: 'Evening gala dinner with signature drinks', price: 4500 },
        { id: 'tea', name: 'High Tea', desc: 'Sunset refreshments and snacks', price: 800 }
    ];

    return (
        <section className="hotel-detail-section">
            <div className="section-title-row">
                <span className="section-icon">🍴</span>
                <h2>Food & Beverage</h2>
            </div>

            <div className="food-options-list">
                {options.map(opt => (
                    <div
                        key={opt.id}
                        className={`food-item-row ${selected.includes(opt.id) ? 'active' : ''}`}
                        onClick={() => onToggle(opt.id)}
                    >
                        <div className="checkbox-col">
                            <div className={`custom-checkbox ${selected.includes(opt.id) ? 'checked' : ''}`}>
                                {selected.includes(opt.id) && '✓'}
                            </div>
                        </div>
                        <div className="food-info-col">
                            <h3 className="food-name">{opt.name}</h3>
                            <p className="food-desc">{opt.desc}</p>
                        </div>
                        <div className="food-price-col">
                            <span className="f-price">₹{opt.price.toLocaleString()}</span>
                            <span className="f-unit"> / guest</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FoodInclusions;
