'use client';

import React from 'react';
import './HeritageDestinations.css';

interface Destination {
    id: number;
    name: string;
    tagline: string;
    image: string;
}

const HeritageDestinations = () => {
    const destinations: Destination[] = [
        {
            id: 1,
            name: 'Udaipur',
            tagline: 'The City of Lakes & Palaces',
            image: '/destinations/udaipur.jpg'
        },
        {
            id: 2,
            name: 'Jaipur',
            tagline: 'Grandeur in the Pink City',
            image: '/destinations/jaipur.jpg'
        },
        {
            id: 3,
            name: 'Goa',
            tagline: 'Coastal Luxury Weddings',
            image: '/destinations/goa.jpg'
        }
    ];

    return (
        <section className="heritage-destinations">
            <div className="heritage-container">
                <div className="heritage-header">
                    <h2 className="heritage-title">Curated Heritage Destinations</h2>
                    <p className="heritage-subtitle">
                        From the golden deserts of Rajasthan to the serene backwaters of Kerala,
                        explore our handpicked palatial collections.
                    </p>
                    <a href="#" className="view-all-link">
                        View All Locations <span className="arrow">→</span>
                    </a>
                </div>

                <div className="destinations-grid">
                    {destinations.map((destination) => (
                        <div key={destination.id} className="destination-card">
                            <div className="destination-image-wrapper">
                                <div className="destination-image" style={{
                                    backgroundImage: `url(${destination.image})`,
                                    backgroundColor: '#d4a574'
                                }}></div>
                                <div className="destination-overlay"></div>
                            </div>
                            <div className="destination-info">
                                <h3 className="destination-name">{destination.name}</h3>
                                <p className="destination-tagline">{destination.tagline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeritageDestinations;
