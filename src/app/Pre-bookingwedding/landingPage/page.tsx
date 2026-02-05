import React from 'react';
import WeddingSearchHero from '@/components/landingPage/WeddingSearchHero';
import HeritageDestinations from '@/components/landingPage/HeritageDestinations';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import './styles.css';

export default function LandingPage() {
    return (
        <main className="landing-page">
            <WeddingSearchHero />
            <HeritageDestinations />
            <WeddingFooter />
        </main>
    );
}
