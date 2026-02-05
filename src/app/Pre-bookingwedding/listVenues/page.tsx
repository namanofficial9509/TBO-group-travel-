'use client';

import React, { useState } from 'react';
import VenueSummaryBar from '@/components/listVenues/VenueSummaryBar';
import VenueFilters from '@/components/listVenues/VenueFilters';
import VenueCard from '@/components/listVenues/VenueCard';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import './listVenues.css';

const ListVenuesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const venues = [
        {
            id: 1,
            name: "The City Palace Residency",
            location: "Pichola, Udaipur",
            rating: 4.9,
            pricePerPlate: 4500,
            image: "https://images.unsplash.com/photo-1544161515-4af6b1d8d179?auto=format&fit=crop&w=800&q=80",
            guestCapacity: "200 - 800 Guests",
            type: "Heritage Palace",
            badge: "Premium Heritage",
            amenities: ["Veg/Non-Veg", "Outdoor", "Lake View"]
        },
        {
            id: 2,
            name: "Umaid Bhawan Palace",
            location: "Circuit House Rd, Jodhpur",
            rating: 5.0,
            pricePerPlate: 7800,
            image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80",
            guestCapacity: "100 - 450 Guests",
            type: "Heritage Palace",
            badge: "Premium Heritage",
            amenities: ["Alcohol Permitted", "Poolside", "Luxury Spa"]
        },
        {
            id: 3,
            name: "Jagmandir Island Palace",
            location: "Island, Udaipur",
            rating: 4.8,
            pricePerPlate: 5200,
            image: "https://images.unsplash.com/photo-1445013143217-d1a104037803?auto=format&fit=crop&w=800&q=80",
            guestCapacity: "50 - 300 Guests",
            type: "Heritage Palace",
            badge: "Best for Big Weddings",
            amenities: ["Outdoor/Pool", "Island View", "Boat Entry"]
        },
        {
            id: 4,
            name: "Radisson Blu Resort & Spa",
            location: "Fateh Sagar, Udaipur",
            rating: 4.7,
            pricePerPlate: 3200,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            guestCapacity: "300 - 1500 Guests",
            type: "Luxury Resort",
            badge: "Limited Availability",
            amenities: ["240 Rooms", "Grand Ballroom", "In-house DJ"]
        }
    ];

    return (
        <div className="list-venues-page">
            <VenueSummaryBar />

            <main className="venues-container">
                <div className="venues-header">
                    <div className="venues-title-section">
                        <h1>45 Exclusive Venues in Udaipur</h1>
                        <p>Handpicked luxury destinations for your royal celebration</p>
                    </div>
                    <div className="sort-dropdown">
                        <span>Sort by:</span>
                        <select>
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>

                <div className="venues-layout">
                    <VenueFilters />
                    <div className="venues-grid-section">
                        <div className="venues-grid">
                            {venues.map(venue => (
                                <VenueCard key={venue.id} venue={venue} />
                            ))}
                        </div>

                        <div className="pagination">
                            <button className="page-nav">‹</button>
                            <button className={`page-num ${currentPage === 1 ? 'active' : ''}`}>1</button>
                            <button className={`page-num ${currentPage === 2 ? 'active' : ''}`}>2</button>
                            <button className="page-num">3</button>
                            <span className="dots">...</span>
                            <button className="page-num">12</button>
                            <button className="page-nav">›</button>
                        </div>
                    </div>
                </div>
            </main>

            <WeddingFooter />
        </div>
    );
};

export default ListVenuesPage;
