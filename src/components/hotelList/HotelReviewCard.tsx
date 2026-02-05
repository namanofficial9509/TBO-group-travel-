'use client';

import React, { useState, useEffect } from 'react';
import './HotelReviewCard.css';

import { useRouter } from 'next/navigation';

const HotelReviewCard = () => {
    const router = useRouter();
    const [days, setDays] = useState(3);
    const [beds, setBeds] = useState(2);
    const [rooms, setRooms] = useState(15);
    const pricePerRoom = 1200;

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(rooms * days * pricePerRoom);
    }, [rooms, days]);

    return (
        <div className="hotel-review-card">
            <div className="room-info-header">
                <span className="room-type">STANDARD KING SUITE</span>
                <span className="min-nights-badge">⏳ Min. 2 nights mandatory</span>
            </div>

            <div className="price-tag-row">
                <span className="currency">₹</span>
                <span className="price-val">{pricePerRoom.toLocaleString()}</span>
                <span className="per-night">/ night</span>
            </div>

            <div className="config-controls-grid">
                <div className="control-item">
                    <div className="control-label">
                        <h4>Number of Days</h4>
                        <p>Length of guest stay</p>
                    </div>
                    <div className="inc-dec-row">
                        <button onClick={() => setDays(Math.max(2, days - 1))} className="step-btn">−</button>
                        <span className="step-val">{days}</span>
                        <button onClick={() => setDays(days + 1)} className="step-btn active">+</button>
                    </div>
                </div>

                <div className="control-item">
                    <div className="control-label">
                        <h4>Beds per Room</h4>
                        <p>Single, Double or Triple</p>
                    </div>
                    <div className="inc-dec-row">
                        <button onClick={() => setBeds(Math.max(1, beds - 1))} className="step-btn">−</button>
                        <span className="step-val">{beds}</span>
                        <button onClick={() => setBeds(Math.min(3, beds + 1))} className="step-btn active">+</button>
                    </div>
                </div>

                <div className="control-item">
                    <div className="control-label">
                        <h4>Room Count</h4>
                        <p>Total rooms to block</p>
                    </div>
                    <div className="inc-dec-row">
                        <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="step-btn">−</button>
                        <span className="step-val">{rooms}</span>
                        <button onClick={() => setRooms(rooms + 1)} className="step-btn active">+</button>
                    </div>
                </div>
            </div>

            <div className="negotiate-row">
                <button className="negotiate-btn">Request Negotiated Rate</button>
            </div>

            <div className="hotel-final-cta-bar">
                <div className="total-display">
                    <span className="est-label">ESTIMATED TOTAL</span>
                    <span className="total-val-large">₹{total.toLocaleString()}</span>
                </div>
                <button
                    className="final-next-btn"
                    onClick={() => router.push('/Pre-bookingwedding/hotelDetail')}
                >
                    NEXT <span>➔</span>
                </button>
            </div>
        </div>
    );
};

export default HotelReviewCard;
