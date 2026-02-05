'use client';

import React from 'react';
import './PriceSummary.css';

interface PriceSummaryProps {
    roomCost: number;
    foodCost: number;
    amenityCost: number;
    taxes: number;
    total: number;
}

const PriceSummary = ({ roomCost, foodCost, amenityCost, taxes, total }: PriceSummaryProps) => {
    return (
        <aside className="hotel-price-sidebar">
            <div className="price-card-inner">
                <h3>Price Summary</h3>

                <div className="price-rows">
                    <div className="p-row">
                        <span>Rooms Cost (50 rooms x 2 nights)</span>
                        <span className="val">₹{roomCost.toLocaleString()}</span>
                    </div>
                    <div className="p-row">
                        <span>Food & Beverage Total</span>
                        <span className="val">₹{foodCost.toLocaleString()}</span>
                    </div>
                    <div className="p-row">
                        <span>Amenities & Services</span>
                        <span className="val">₹{amenityCost.toLocaleString()}</span>
                    </div>
                    <div className="p-row">
                        <span>GST & Luxury Taxes (18%)</span>
                        <span className="val">₹{taxes.toLocaleString()}</span>
                    </div>
                </div>

                <div className="special-rate-box">
                    <p className="sr-label">REQUEST A SPECIAL RATE</p>
                    <div className="offer-input-wrap">
                        <span className="curr">₹</span>
                        <input type="text" placeholder="Make an Offer" />
                    </div>
                    <p className="sr-note">Enter your proposed budget for review</p>
                </div>

                <div className="grand-total-box">
                    <div className="total-header">
                        <span className="gt-label">GRAND TOTAL</span>
                        <span className="gt-val">₹{total.toLocaleString()}</span>
                    </div>
                    <p className="all-inc-tag">All inclusive</p>
                </div>

                <div className="booking-info">
                    <span className="shield">🛡️</span>
                    <p>Safe & Secure Booking</p>
                </div>

                <p className="legal-note">
                    By clicking Next, you agree to our booking terms and conditions.
                    Prices are inclusive of all statutory taxes.
                </p>
            </div>
        </aside>
    );
};

export default PriceSummary;
