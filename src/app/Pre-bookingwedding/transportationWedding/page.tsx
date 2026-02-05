'use client';

import React from 'react';
import VehicleSelection from '@/components/transportationWedding/VehicleSelection';
import TravelUseCases from '@/components/transportationWedding/TravelUseCases';
import AllocationDetails from '@/components/transportationWedding/AllocationDetails';
import TransportPricing from '@/components/transportationWedding/TransportPricing';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import './transportationWedding.css';

const TransportationWeddingPage = () => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>(['tempo']);
    const [counts, setCounts] = React.useState<Record<string, number>>({
        shuttle: 1,
        tempo: 2,
        suv: 1
    });

    const toggleVehicle = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
        );
    };

    const updateCount = (id: string, delta: number) => {
        setCounts(prev => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 0) + delta)
        }));
    };

    return (
        <div className="transport-page">
            <header className="transport-master-header">
                <div className="header-inner">
                    <h1 className="main-title">Transportation Inclusions for Wedding Events</h1>
                    <p className="main-subtitle">Manage seamless guest logistics with our premium fleet options for your luxury celebration.</p>
                </div>
            </header>

            <div className="transport-content-wrapper">
                <div className="assurance-banner">
                    <div className="banner-left">
                        <span className="check-badge">✓</span>
                        <div className="banner-text">
                            <h4>Guest Travel Assurance</h4>
                            <p>Ensuring your guests travel in comfort and style across all wedding venues with our verified transport partners and professional chauffeurs.</p>
                        </div>
                    </div>
                    <button className="safety-link">View Safety Standards ➔</button>
                </div>

                <div className="transport-grid">
                    <div className="transport-left-col">
                        <VehicleSelection selectedIds={selectedIds} onToggle={toggleVehicle} />

                        <div className="logistic-details-row">
                            <AllocationDetails
                                selectedIds={selectedIds}
                                counts={counts}
                                onUpdateCount={updateCount}
                            />
                            <TravelUseCases />
                        </div>
                    </div>

                    <div className="transport-right-col">
                        <TransportPricing selectedIds={selectedIds} counts={counts} />
                    </div>
                </div>
            </div>

            <WeddingFooter />
        </div>
    );
};

export default TransportationWeddingPage;
