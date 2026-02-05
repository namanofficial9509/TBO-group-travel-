'use client';

import React from 'react';
import './VenueOverview.css';

const VenueOverview = () => {
    const reviews = [
        {
            id: 1,
            name: "Ananya Sharma",
            date: "October 2023",
            type: "Royal Wedding",
            avatar: "https://i.pravatar.cc/150?u=ananya",
            rating: 5,
            comment: "The most magical experience. The staff was impeccable and the palace looked like a dream under the desert stars. Every detail was curated with such finesse.",
            images: ["https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1622360856343-86e817457f92?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1622360856983-360751645e42?auto=format&fit=crop&w=800&q=80"]
        },
        {
            id: 2,
            name: "Vikram Seth",
            date: "August 2023",
            type: "Corporate Retreat",
            avatar: "https://i.pravatar.cc/150?u=vikram",
            rating: 4,
            comment: "Perfect venue for a luxury event. The hospitality is unmatched. My only minor suggestion would be faster WiFi in the garden areas."
        }
    ];

    return (
        <div className="venue-overview">
            <div className="venue-hero-image-card">
                <img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1200&q=80" alt="Umaid Bhawan Palace" className="main-venue-image" />
                <div className="venue-image-overlay">
                    <h1 className="venue-title">Umaid Bhawan Palace, Jodhpur</h1>
                </div>
                <div className="hero-badges">
                    <span className="badge price-badge">₹120,000 / Day</span>
                    <span className="badge capacity-badge">👥 250 Guests</span>
                </div>
            </div>

            <div className="venue-info-grid">
                <div className="info-card">
                    <span className="info-icon">🛏️</span>
                    <div className="info-text">
                        <span className="label">ROOMS</span>
                        <span className="value">70 Suites</span>
                    </div>
                </div>
                <div className="info-card">
                    <span className="info-icon">🍴</span>
                    <div className="info-text">
                        <span className="label">CUISINE</span>
                        <span className="value">Multi-cuisine</span>
                    </div>
                </div>
                <div className="info-card">
                    <span className="info-icon">🌳</span>
                    <div className="info-text">
                        <span className="label">GARDENS</span>
                        <span className="value">15 Acres</span>
                    </div>
                </div>
                <div className="info-card">
                    <span className="info-icon">⭐</span>
                    <div className="info-text">
                        <span className="label">STATUS</span>
                        <span className="value">Premium</span>
                    </div>
                </div>
            </div>

            <section className="guest-experiences">
                <div className="section-header">
                    <h2>Guest Experiences</h2>
                    <div className="overall-rating">⭐⭐⭐⭐⭐ 4.9/5</div>
                </div>

                <div className="reviews-list">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <span className="review-meta">{review.date} • {review.type}</span>
                                </div>
                                <div className="review-stars">{"⭐".repeat(review.rating)}</div>
                            </div>
                            <p className="review-comment">{review.comment}</p>
                            {review.images && (
                                <div className="review-images">
                                    {review.images.map((img, i) => (
                                        <img key={i} src={img} alt="Guest photo" className="review-img" />
                                    ))}
                                </div>
                            )}
                            <div className="review-actions">
                                <button className="action-btn">👍 Helpful ({review.id === 1 ? 12 : 8})</button>
                                <button className="action-btn">↩️ Reply</button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="show-all-reviews">Show All 142 Reviews</button>
            </section>
        </div>
    );
};

export default VenueOverview;
