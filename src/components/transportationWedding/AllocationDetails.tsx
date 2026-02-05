'use client';

import React, { useState } from 'react';
import './AllocationDetails.css';

interface AllocationDetailsProps {
    selectedIds: string[];
    counts: Record<string, number>;
    onUpdateCount: (id: string, delta: number) => void;
}

const AllocationDetails = ({ selectedIds, counts, onUpdateCount }: AllocationDetailsProps) => {
    const vehicleNames: Record<string, string> = {
        shuttle: 'Shuttle Bus',
        tempo: 'Tempo Traveller',
        suv: 'Luxury SUV'
    };

    const capacities: Record<string, number> = {
        shuttle: 40,
        tempo: 20,
        suv: 6
    };

    if (selectedIds.length === 0) {
        return (
            <section className="allocation-section">
                <div className="section-title-row">
                    <span className="icon-badge">🔢</span>
                    <h2>Allocation Details</h2>
                </div>
                <div className="allocation-card empty">
                    <p>Select a vehicle to configure allocation</p>
                </div>
            </section>
        );
    }

    return (
        <section className="allocation-section">
            <div className="section-title-row">
                <span className="icon-badge">🔢</span>
                <h2>Allocation Details</h2>
            </div>

            {selectedIds.map(id => (
                <div key={id} className="allocation-card" style={{ marginBottom: '15px' }}>
                    <p className="alloc-label">Number of Vehicles ({vehicleNames[id]})</p>
                    <div className="counter-row">
                        <button onClick={() => onUpdateCount(id, -1)} className="count-btn">−</button>
                        <span className="count-val">{counts[id] || 1}</span>
                        <button onClick={() => onUpdateCount(id, 1)} className="count-btn active">+</button>
                    </div>
                    <div className="capacity-note">
                        Capacity Contribution: <span className="green">{(counts[id] || 1) * capacities[id]} Guests</span>
                    </div>
                </div>
            ))}

            <div className="total-capacity-summary">
                <p>Total Guest Capacity: <strong>{selectedIds.reduce((acc, id) => acc + ((counts[id] || 1) * capacities[id]), 0)}</strong></p>
            </div>
        </section>
    );
};

export default AllocationDetails;
