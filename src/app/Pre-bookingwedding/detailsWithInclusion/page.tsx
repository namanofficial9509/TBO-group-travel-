'use client';

import React from 'react';
import InclusionFood from '@/components/detailsWithInclusion/InclusionFood';
import InclusionDecor from '@/components/detailsWithInclusion/InclusionDecor';
import InclusionPolicies from '@/components/detailsWithInclusion/InclusionPolicies';
import InclusionSummary from '@/components/detailsWithInclusion/InclusionSummary';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import './detailsWithInclusion.css';

const DetailsWithInclusionPage = () => {
    return (
        <div className="inclusions-page">
            <header className="inclusions-top-header">
                <div className="header-content">
                    <div className="title-area">
                        <h1>Selected Wedding Inclusions</h1>
                        <p>Tailor every detail of your dream celebration to perfection. Changes reflect instantly in your summary.</p>
                    </div>
                    <div className="header-actions">
                        <button className="h-action-btn">📄 Download PDF</button>
                        <button className="h-action-btn primary">✨ Share Layout</button>
                    </div>
                </div>

                <nav className="inclusions-nav">
                    <button className="nav-item active">Food & Catering</button>
                    <button className="nav-item">Stage & Decor</button>
                    <button className="nav-item">Legal & Policy</button>
                    <button className="nav-item">Add-ons</button>
                </nav>
            </header>

            <main className="inclusions-container">
                <div className="inclusions-layout">
                    <div className="inclusions-left">
                        <InclusionFood />
                        <InclusionDecor />
                        <InclusionPolicies />
                    </div>

                    <div className="inclusions-right">
                        <InclusionSummary />
                    </div>
                </div>
            </main>

            <WeddingFooter />
        </div>
    );
};

export default DetailsWithInclusionPage;
