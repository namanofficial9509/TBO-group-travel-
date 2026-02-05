'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './WeddingSearchHero.css';

const WeddingSearchHero = () => {
    const router = useRouter();
    const [selectedCity, setSelectedCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guestCount, setGuestCount] = useState(250);

    const cities = [
        'Select Wedding City',
        'Udaipur',
        'Jaipur',
        'Goa',
        'Jodhpur',
        'Mumbai',
        'Delhi',
        'Kerala',
        'Agra',
        'Rajasthan'
    ];

    const handleSearch = () => {
        console.log({
            city: selectedCity,
            startDate,
            endDate,
            guestCount
        });
        // Redirect to venues list page
        router.push('/Pre-bookingwedding/listVenues');
    };

    return (
        <div className="wedding-hero">
            <div className="wedding-hero-overlay"></div>

            <div className="wedding-hero-content">
                <h1 className="wedding-hero-title">
                    Your <span className="highlight">Palatial</span> Beginning
                </h1>
                <p className="wedding-hero-subtitle">
                    Discover the most exclusive heritage venues for an unforgettable destination celebration.
                </p>

                <div className="wedding-search-card">
                    <div className="search-card-header">
                        <span className="star-icon">✨</span>
                        <h2>Plan Your Destination Wedding</h2>
                    </div>

                    <div className="search-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>LOCATION</label>
                                <select
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}
                                    className="form-select"
                                >
                                    {cities.map((city, index) => (
                                        <option key={index} value={city === 'Select Wedding City' ? '' : city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>START DATE</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label>END DATE</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="form-input"
                                />
                            </div>

                            <button onClick={handleSearch} className="search-btn">
                                <span className="search-icon">🔍</span>
                                Search Venues
                            </button>
                        </div>

                        <div className="guest-count-section">
                            <div className="guest-count-header">
                                <span className="crown-icon">👑</span>
                                <label>Expected Guest Count</label>
                                <span className="guest-count-value">{guestCount} Guests</span>
                            </div>
                            <div className="slider-container">
                                <span className="slider-label">100 GUESTS</span>
                                <input
                                    type="range"
                                    min="100"
                                    max="600"
                                    value={guestCount}
                                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                                    className="guest-slider"
                                />
                                <span className="slider-label">600 GUESTS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingSearchHero;
