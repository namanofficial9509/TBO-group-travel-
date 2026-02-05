'use client';

import React, { useState } from 'react';
import PreviewSummaryCard from '@/components/previewPage/PreviewSummaryCard';
import InvestmentSummary from '@/components/previewPage/InvestmentSummary';
import NegotiationBanner from '@/components/previewPage/NegotiationBanner';
import PreviewGallery from '@/components/previewPage/PreviewGallery';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import './previewPage.css';

const PreviewPage = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const venueItems = [
        { label: 'Event Dates', value: 'Dec 12 - Dec 15' },
        { label: 'Guest Count', value: '500 Guests' },
        { label: 'Space Type', value: 'Courtyard & Ballroom' }
    ];

    const foodItems = [
        { label: 'Meals', value: '8 Major Service Events' },
        { label: 'Bar Service', value: 'Premium Open Bar' },
        { label: 'Staffing', value: '1:10 Server Ratio' }
    ];

    const transportItems = [
        { label: 'Fleet Size', value: '12 Sedans, 4 Coaches' },
        { label: 'Service', value: '24/7 On-call Dispatch' },
        { label: 'Air Transit', value: 'Charter Coordination' }
    ];

    const hotelItems = [
        { label: 'Room Count', value: '45 Luxury Rooms' },
        { label: 'Check-in', value: 'Early 10:00 AM' },
        { label: 'Inclusions', value: 'All-inclusive Mini Bar' }
    ];

    return (
        <div className="preview-page-master">
            {isConfirmed && (
                <div className="success-overlay">
                    <div className="success-modal">
                        <span className="success-check">🎉</span>
                        <h2>Booking ID: #WED-8829</h2>
                        <p>Your dream wedding booking has been submitted successfully. Our concierge will contact you shortly.</p>
                        <button className="done-btn" onClick={() => (window.location.href = '/')}>Back to Home</button>
                    </div>
                </div>
            )}

            <header className="preview-header">
                <div className="step-indicator">✓ STEP 4 OF 4: CONFIRMATION</div>
                <h1>Final Booking Preview</h1>
                <p className="subtitle">Indulge in the details of your dream destination wedding.</p>
            </header>

            <div className="preview-layout-grid">
                <main className="preview-main-content">
                    <div className="summary-cards-grid">
                        <PreviewSummaryCard
                            icon="🏰"
                            title="Venue Summary"
                            subtitle="The Grand Palace, Udaipur"
                            items={venueItems}
                            iconBg="#fff1f5"
                        />
                        <PreviewSummaryCard
                            icon="🍴"
                            title="Food & Catering"
                            subtitle="Platinum Multi-cuisine Platter"
                            items={foodItems}
                            iconBg="#fff7ed"
                        />
                        <PreviewSummaryCard
                            icon="🚗"
                            title="Transport Logistics"
                            subtitle="Luxury Sedan & Coaches"
                            items={transportItems}
                            iconBg="#eff6ff"
                        />
                        <PreviewSummaryCard
                            icon="🏨"
                            title="Hotel Stay"
                            subtitle="Premium Suites & Deluxe Rooms"
                            items={hotelItems}
                            iconBg="#f5f3ff"
                        />
                    </div>

                    <NegotiationBanner />

                    <PreviewGallery />
                </main>

                <aside className="preview-sidebar">
                    <InvestmentSummary onOpenModal={() => setIsConfirmed(true)} />
                </aside>
            </div>

            <WeddingFooter />
        </div>
    );
};

export default PreviewPage;
