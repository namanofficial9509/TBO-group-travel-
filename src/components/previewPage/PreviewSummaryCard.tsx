'use client';

import React from 'react';
import './PreviewSummaryCard.css';

interface SummaryItem {
    label: string;
    value: string;
}

interface PreviewSummaryCardProps {
    icon: string;
    title: string;
    subtitle: string;
    items: SummaryItem[];
    iconBg: string;
}

const PreviewSummaryCard = ({ icon, title, subtitle, items, iconBg }: PreviewSummaryCardProps) => {
    return (
        <div className="preview-summary-card">
            <button className="edit-action-btn">✏️</button>

            <div className="preview-card-header">
                <div className="icon-box" style={{ backgroundColor: iconBg }}>
                    <span className="p-icon">{icon}</span>
                </div>
                <div className="header-text">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-subtitle">{subtitle}</p>
                </div>
            </div>

            <div className="preview-card-body">
                {items.map((item, idx) => (
                    <div key={idx} className="preview-data-row">
                        <span className="p-label">{item.label}</span>
                        <span className="p-value">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviewSummaryCard;
