'use client';

import React from 'react';
import VenueHeader from '@/components/viewDetails/VenueHeader';
import VenueOverview from '@/components/viewDetails/VenueOverview';
import BookingForm from '@/components/viewDetails/BookingForm';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import './viewDetails.css';

const ViewDetailsPage = () => {
    return (
        <div className="view-details-page">
            <VenueHeader />

            <main className="view-details-container">
                <div className="view-details-layout">
                    <section className="view-details-left">
                        <VenueOverview />
                    </section>

                    <aside className="view-details-right">
                        <BookingForm />
                    </aside>
                </div>
            </main>

            <WeddingFooter />
        </div>
    );
};

export default ViewDetailsPage;
