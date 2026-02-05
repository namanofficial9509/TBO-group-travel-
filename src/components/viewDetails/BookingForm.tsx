'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './BookingForm.css';

const BookingForm = () => {
    const router = useRouter();
    const [inclusions, setInclusions] = useState({
        catering: true,
        transport: false,
        rooms: false
    });

    return (
        <aside className="booking-sidebar">
            <div className="booking-card">
                <h2 className="booking-title">Plan Your Celebration</h2>

                <section className="booking-section">
                    <h4 className="section-label">HOST DETAILS</h4>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter name" />
                    </div>
                    <div className="form-row">
                        <div className="input-group half">
                            <label>Phone Number</label>
                            <input type="text" defaultValue="+91 " />
                        </div>
                        <div className="input-group half">
                            <label>Aadhaar Number</label>
                            <input type="text" placeholder="XXXX-XXXX-XXXX" />
                        </div>
                    </div>
                </section>

                <section className="booking-section">
                    <div className="section-header-row">
                        <h4 className="section-label">BOOKING PERIOD</h4>
                        <span className="duration-pill">Auto-calculated: 3 days</span>
                    </div>
                    <div className="date-selection-row">
                        <div className="date-input">
                            <span className="icon">📅</span>
                            <input type="text" defaultValue="Dec 12, 2024" />
                        </div>
                        <span className="to-tex">to</span>
                        <div className="date-input">
                            <span className="icon">📅</span>
                            <input type="text" defaultValue="Dec 15, 2024" />
                        </div>
                    </div>
                </section>

                <section className="booking-section">
                    <h4 className="section-label">INCLUSIONS</h4>
                    <div className="inclusions-list">
                        <label className={`inclusion-item ${inclusions.catering ? 'active' : ''}`}>
                            <div className="inclusion-icon">🍴</div>
                            <div className="inclusion-info">
                                <span className="name">Catering & Food</span>
                                <span className="desc">Gourmet multi-cuisine</span>
                            </div>
                            <input
                                type="checkbox"
                                checked={inclusions.catering}
                                onChange={() => setInclusions(prev => ({ ...prev, catering: !prev.catering }))}
                            />
                            <div className="radio-dot"></div>
                        </label>

                        <label className={`inclusion-item ${inclusions.transport ? 'active' : ''}`}>
                            <div className="inclusion-icon">🚐</div>
                            <div className="inclusion-info">
                                <span className="name">Transportation</span>
                                <span className="desc">Airport pickup & Local</span>
                            </div>
                            <input
                                type="checkbox"
                                checked={inclusions.transport}
                                onChange={() => setInclusions(prev => ({ ...prev, transport: !prev.transport }))}
                            />
                            <div className="radio-dot"></div>
                        </label>

                        <label className={`inclusion-item ${inclusions.rooms ? 'active' : ''}`}>
                            <div className="inclusion-icon">🏨</div>
                            <div className="inclusion-info">
                                <span className="name">Hotel Rooms (40)</span>
                                <span className="desc">Luxury suites for guests</span>
                            </div>
                            <input
                                type="checkbox"
                                checked={inclusions.rooms}
                                onChange={() => setInclusions(prev => ({ ...prev, rooms: !prev.rooms }))}
                            />
                            <div className="radio-dot"></div>
                        </label>
                    </div>
                </section>

                <div className="pricing-negotiation">
                    <div className="negotiate-row">
                        <span>Negotiate Rate (optional)</span>
                        <div className="negotiate-input">
                            <span className="currency">₹</span>
                            <input type="text" placeholder="Offer price" />
                        </div>
                    </div>

                    <div className="price-breakdown">
                        <div className="price-row">
                            <span>Subtotal (3 days)</span>
                            <span>₹360,000</span>
                        </div>
                        <div className="price-row">
                            <span>Add-ons</span>
                            <span>₹85,000</span>
                        </div>
                        <div className="total-row">
                            <span className="total-label">Total Price</span>
                            <span className="total-value">₹445,000</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => router.push('/Pre-bookingwedding/detailsWithInclusion')}
                    className="book-now-btn"
                >
                    Next Step ➔
                </button>
                <p className="booking-footer-note">You won't be charged yet. We'll send a final quote within 24 hours.</p>
            </div>
        </aside>
    );
};

export default BookingForm;
