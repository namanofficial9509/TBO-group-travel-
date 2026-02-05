'use client';

import React, { useState } from 'react';
import HotelReviewCard from '@/components/hotelList/HotelReviewCard';
import LocationPreview from '@/components/hotelList/LocationPreview';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import HotelSearchModal from '@/components/hotelList/HotelSearchModal';
import './hotelList.css';

const HotelListPage = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState({
        id: '1',
        name: 'Naman Chopra Hotel',
        location: 'Manali, Himachal Pradesh',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    });

    const handleHotelSelect = (hotel: any) => {
        setSelectedHotel(hotel);
        setIsSearchOpen(false);
    };

    return (
        <div className="hotel-page-container">
            {isSearchOpen && (
                <HotelSearchModal
                    onClose={() => setIsSearchOpen(false)}
                    onSelect={handleHotelSelect}
                />
            )}

            <header className="hotel-header">
                <div className="header-top">
                    <div className="hotel-meta">
                        <h1>{selectedHotel.name}</h1>
                        <p className="location-pin">📍 {selectedHotel.location}</p>
                    </div>
                    <button className="change-hotel-btn" onClick={() => setIsSearchOpen(true)}>
                        Change Hotel
                    </button>
                </div>

                <div className="hotel-gallery-grid">
                    <div className="gallery-main">
                        <img src={selectedHotel.image} alt="Main Room" />
                    </div>
                    <div className="gallery-side">
                        <div className="side-img">
                            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Modern Bathroom" />
                        </div>
                        <div className="side-img more-photos">
                            <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Hotel Lounge" />
                            <div className="overlay-count">+12 Photos</div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="hotel-content-layout">
                <div className="hotel-left-col">
                    <HotelReviewCard />
                </div>

                <div className="hotel-right-col">
                    <LocationPreview />
                </div>
            </main>

            <WeddingFooter />
        </div>
    );
};

export default HotelListPage;
