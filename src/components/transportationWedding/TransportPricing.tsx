'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './TransportPricing.css';

interface TransportPricingProps {
    selectedIds: string[];
    counts: Record<string, number>;
}

const TransportPricing = ({ selectedIds, counts }: TransportPricingProps) => {
    const router = useRouter();
    const rates: Record<string, number> = {
        shuttle: 38500,
        tempo: 23000,
        suv: 12500
    };

    const vehicleNames: Record<string, string> = {
        shuttle: 'Shuttle Bus',
        tempo: 'Tempo Traveller',
        suv: 'Luxury SUV'
    };

    const vehicleFare = selectedIds.reduce((acc, id) => acc + (rates[id] * (counts[id] || 1)), 0);
    const driverFees = selectedIds.length > 0 ? 10000 : 0;
    const fuelSurcharge = Math.round(vehicleFare * 0.1);
    const airportSurcharge = selectedIds.includes('suv') ? 3800 : 0;

    const totalCost = vehicleFare + driverFees + fuelSurcharge + airportSurcharge;

    return (
        <aside className="transport-sidebar">
            <div className="pricing-card">
                <div className="pricing-header">
                    <h3>Cost Breakdown</h3>
                    <span className="live-pill">● LIVE UPDATE</span>
                </div>
                <p className="p-subtitle">Prices calculated based on selections for 3 days.</p>

                <div className="pricing-rows">
                    {selectedIds.map(id => (
                        <div className="p-row" key={id}>
                            <span>{vehicleNames[id]} (x{counts[id] || 1})</span>
                            <span className="val">₹{(rates[id] * (counts[id] || 1)).toLocaleString()}</span>
                        </div>
                    ))}

                    {selectedIds.length > 0 && (
                        <>
                            <div className="p-row">
                                <span>Driver Fees (3 Days)</span>
                                <span className="val">₹{driverFees.toLocaleString()}</span>
                            </div>
                            <div className="p-row">
                                <span>Fuel Surcharge (Est.)</span>
                                <span className="val">₹{fuelSurcharge.toLocaleString()}</span>
                            </div>
                            {airportSurcharge > 0 && (
                                <div className="p-row">
                                    <span>Airport Transfer Surcharge</span>
                                    <span className="val">₹{airportSurcharge.toLocaleString()}</span>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="total-box">
                    <div className="total-row">
                        <span className="total-label">Total Transportation Cost</span>
                        <span className="total-val">₹{totalCost.toLocaleString()}</span>
                    </div>
                    <p className="tax-note">*Excludes GST & Interstate Tolls</p>
                </div>

                <button
                    onClick={() => router.push('/Pre-bookingwedding/hotelList')}
                    className="confirm-btn"
                >
                    Confirm Transportation
                </button>
                <button className="save-btn">Save for Later</button>

                <div className="trust-badge">
                    <span className="trust-icon">🛡️</span>
                    <p>Your booking is protected by our WeddingElite Travel Guarantee.</p>
                </div>
            </div>
        </aside>
    );
};

export default TransportPricing;
