'use client';

import React from 'react';
import './PreviewGallery.css';

const PreviewGallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1544161515-4af6b1d8d179?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ];

    return (
        <div className="preview-gallery-row">
            {images.map((src, idx) => (
                <div key={idx} className="gallery-thumb">
                    <img src={src} alt="Aesthetic Preview" />
                </div>
            ))}
        </div>
    );
};

export default PreviewGallery;
