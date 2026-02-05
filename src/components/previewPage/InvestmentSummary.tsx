'use client';

import React from 'react';
import './InvestmentSummary.css';

interface InvestmentSummaryProps {
    onOpenModal?: () => void;
}

const InvestmentSummary = ({ onOpenModal }: InvestmentSummaryProps) => {
    return (
        <aside className="investment-sidebar">
            <div className="investment-card-inner">
                <div className="sidebar-header">
                    <span className="s-icon">📊</span>
                    <h3>Investment Summary</h3>
                </div>

                <div className="summary-list">
                    <div className="s-row">
                        <span>Grand Palace Venue</span>
                        <span className="s-val">₹1,200,000</span>
                    </div>
                    <div className="s-row">
                        <span>Catering (500 pax)</span>
                        <span className="s-val">₹850,000</span>
                    </div>
                    <div className="s-row">
                        <span>Logistics & Fleet</span>
                        <span className="s-val">₹320,000</span>
                    </div>
                    <div className="s-row">
                        <span>Hotel Accommodation</span>
                        <span className="s-val">₹945,000</span>
                    </div>
                    <div className="s-row">
                        <span>Decoration Package</span>
                        <span className="s-val">₹400,000</span>
                    </div>
                </div>

                <div className="tax-row">
                    <span>TAXES & GST (18%)</span>
                    <span className="tax-val">₹668,700</span>
                </div>

                <div className="final-total-display">
                    <div className="total-main">
                        <span className="gt-label">Grand Total</span>
                        <div className="price-stack">
                            <span className="gt-val">₹4,383,700</span>
                            <span className="inclusive-tag">FULLY INCLUSIVE OF ALL FEES</span>
                        </div>
                    </div>

                    <button className="submit-booking-btn" onClick={onOpenModal}>
                        SUBMIT
                    </button>

                    <div className="escrow-safe">
                        <span className="lock">🔒</span>
                        <p>Secure encrypted transaction handled by Royal Escrow</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default InvestmentSummary;
