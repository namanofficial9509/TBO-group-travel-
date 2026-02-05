'use client';

import { useRouter } from 'next/navigation';
import './InclusionSummary.css';

const InclusionSummary = () => {
    const router = useRouter();
    return (
        <aside className="summary-sidebar">
            <div className="summary-card">
                <h3 className="summary-title">Pricing Summary</h3>
                <p className="summary-subtitle">Live estimation based on selections</p>

                <div className="summary-list">
                    <div className="summary-item">
                        <span>Base Venue Fee</span>
                        <span className="amount">$12,500</span>
                    </div>
                    <div className="summary-item">
                        <span>Catering (450 Guests)</span>
                        <span className="amount">$28,250</span>
                    </div>
                    <div className="summary-item">
                        <span>Decor & Production</span>
                        <span className="amount">$18,400</span>
                    </div>
                    <div className="summary-item">
                        <span>Photography Pkg</span>
                        <span className="amount">$4,500</span>
                    </div>
                </div>

                <div className="tax-row">
                    <span>Taxes & Fees (18%)</span>
                    <span className="amount">$11,457</span>
                </div>

                <div className="estimate-total-box">
                    <span className="label">TOTAL ESTIMATED COST</span>
                    <span className="total-cost">$75,107</span>
                </div>

                <button
                    onClick={() => router.push('/Pre-bookingwedding/transportationWedding')}
                    className="continue-next-btn"
                >
                    Continue to Next ➔
                </button>

                <button className="save-later-btn">Save for Later</button>

                <div className="protection-alert">
                    <span className="lock-icon">🛡️</span>
                    <p>Your price is protected for the next 24 hours. Secure now to lock in these rates.</p>
                </div>
            </div>
        </aside>
    );
};

export default InclusionSummary;
