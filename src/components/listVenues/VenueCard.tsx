'use client';

import { useRouter } from 'next/navigation';
import './VenueCard.css';

interface VenueProps {
    venue: {
        id: number;
        name: string;
        location: string;
        rating: number;
        pricePerPlate: number;
        image: string;
        guestCapacity: string;
        type: string;
        badge?: string;
        amenities: string[];
    }
}

const VenueCard: React.FC<VenueProps> = ({ venue }) => {
    const router = useRouter();

    return (
        <div className="venue-card">
            <div className="venue-image-wrapper">
                <img src={venue.image} alt={venue.name} className="venue-image" />
                {venue.badge && <span className="venue-badge">{venue.badge}</span>}
                <button className="wishlist-btn">❤️</button>
            </div>
            <div className="venue-content">
                <div className="venue-header">
                    <h3 className="venue-name">{venue.name}</h3>
                    <div className="venue-rating">
                        <span className="star">⭐</span>
                        <span className="rating-value">{venue.rating}</span>
                    </div>
                </div>
                <div className="venue-location">
                    <span className="pin-icon">📍</span>
                    {venue.location}
                </div>
                <div className="venue-details">
                    <div className="detail-item">
                        <span className="icon">👥</span>
                        {venue.guestCapacity}
                    </div>
                    <div className="detail-item">
                        <span className="icon">🍴</span>
                        {venue.amenities.join(', ')}
                    </div>
                </div>
                <div className="venue-footer">
                    <div className="venue-price">
                        <span className="label">STARTING FROM</span>
                        <span className="price">₹{venue.pricePerPlate.toLocaleString()} <small>/plate</small></span>
                    </div>
                    <button
                        onClick={() => router.push('/Pre-bookingwedding/viewDetails')}
                        className="view-details-btn"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VenueCard;
