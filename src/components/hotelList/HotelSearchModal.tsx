'use client';

import React, { useState } from 'react';
import './HotelSearchModal.css';

interface Hotel {
    id: string;
    name: string;
    location: string;
    rating: string;
    price: string;
    image: string;
}

interface HotelSearchModalProps {
    onClose: () => void;
    onSelect: (hotel: Hotel) => void;
}

const HotelSearchModal = ({ onClose, onSelect }: HotelSearchModalProps) => {
    const [search, setSearch] = useState('');

    const dummyHotels: Hotel[] = [
        {
            id: '1',
            name: 'Naman Chopra Hotel',
            location: 'Manali, Himachal Pradesh',
            rating: '4.8',
            price: '₹1,200',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: '2',
            name: 'The Royal Palace Resort',
            location: 'Old Manali, Manali',
            rating: '4.9',
            price: '₹2,500',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: '3',
            name: 'Himalayan Heights Villa',
            location: 'Vashisht, Manali',
            rating: '4.7',
            price: '₹1,800',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: '4',
            name: 'Snow Valley Retreat',
            location: 'Solang Valley, Manali',
            rating: '4.5',
            price: '₹1,500',
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
    ];

    const filteredHotels = dummyHotels.filter(h =>
        h.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="modal-overlay">
            <div className="search-modal">
                <div className="modal-header">
                    <h2>Change Your Hotel</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search for hotels in Manali..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="modal-search-input"
                    />
                </div>

                <div className="hotel-results-list">
                    {filteredHotels.length > 0 ? (
                        filteredHotels.map(hotel => (
                            <div key={hotel.id} className="hotel-result-item" onClick={() => onSelect(hotel)}>
                                <img src={hotel.image} alt={hotel.name} className="result-img" />
                                <div className="result-info">
                                    <h3>{hotel.name}</h3>
                                    <p>{hotel.location}</p>
                                    <div className="result-meta">
                                        <span className="res-rating">⭐ {hotel.rating}</span>
                                        <span className="res-price">{hotel.price} / night</span>
                                    </div>
                                </div>
                                <button className="select-hotel-btn">Select</button>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No hotels found matching "{search}"</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HotelSearchModal;
