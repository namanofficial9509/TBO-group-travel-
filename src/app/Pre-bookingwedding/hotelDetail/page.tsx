'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FoodInclusions from '@/components/hotelDetail/FoodInclusions';
import ServiceInclusions from '@/components/hotelDetail/ServiceInclusions';
import AmenityInclusions from '@/components/hotelDetail/AmenityInclusions';
import HotelPolicies from '@/components/hotelDetail/HotelPolicies';
import PriceSummary from '@/components/hotelDetail/PriceSummary';
import WeddingFooter from '@/components/landingPage/WeddingFooter';
import './hotelDetail.css';

const HotelDetailPage = () => {
    const router = useRouter();

    // Selection states
    const [foodSelected, setFoodSelected] = useState<string[]>(['breakfast', 'dinner']);
    const [serviceSelected, setServiceSelected] = useState<string[]>(['housekeeping']);
    const [amenitySelected, setAmenitySelected] = useState<string[]>(['pool', 'wifi']);

    // Calculation constants
    const rooms = 15;
    const days = 3;
    const guests = rooms * 2; // Assuming 2 guests per room

    const foodRates: any = { breakfast: 1200, lunch: 2500, dinner: 4500, tea: 800 };
    const serviceRates: any = { housekeeping: 0, laundry: 1500, 'extra-bed': 3000 };
    const amenityRates: any = { pool: 15000, wifi: 0, gym: 2000, spa: 5000 };

    // Dynamic costs
    const roomCost = 15 * 3 * 1200; // Fixed from previous step
    const [foodCost, setFoodCost] = useState(0);
    const [amenityCost, setAmenityCost] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const food = foodSelected.reduce((acc, id) => acc + (foodRates[id] * guests * days), 0);
        const services = serviceSelected.reduce((acc, id) => acc + (serviceRates[id] * rooms), 0);
        const amenities = amenitySelected.reduce((acc, id) => acc + amenityRates[id], 0);

        const subtotal = roomCost + food + services + amenities;
        const taxVal = Math.round(subtotal * 0.18);

        setFoodCost(food);
        setAmenityCost(services + amenities);
        setTaxes(taxVal);
        setTotal(subtotal + taxVal);
    }, [foodSelected, serviceSelected, amenitySelected]);

    const toggle = (set: any, list: string[], id: string) => {
        set(list.includes(id) ? list.filter(item => item !== id) : [...list, id]);
    };

    return (
        <div className="hotel-detail-master">
            <header className="detail-header">
                <h1>Hotel Services & Inclusions</h1>
                <p className="subtitle">Customize your stay with premium services and curated amenities for your wedding guests.</p>
            </header>

            <div className="detail-container-grid">
                <main className="detail-main-content">
                    <FoodInclusions
                        selected={foodSelected}
                        onToggle={(id) => toggle(setFoodSelected, foodSelected, id)}
                    />

                    <ServiceInclusions
                        selected={serviceSelected}
                        onToggle={(id) => toggle(setServiceSelected, serviceSelected, id)}
                    />

                    <AmenityInclusions
                        selected={amenitySelected}
                        onToggle={(id) => toggle(setAmenitySelected, amenitySelected, id)}
                    />

                    <HotelPolicies />
                </main>

                <aside className="detail-sidebar-content">
                    <PriceSummary
                        roomCost={roomCost}
                        foodCost={foodCost}
                        amenityCost={amenityCost}
                        taxes={taxes}
                        total={total}
                    />
                </aside>
            </div>

            <nav className="bottom-nav-actions">
                <button className="back-btn" onClick={() => router.push('/Pre-bookingwedding/hotelList')}>
                    ← Back to Hotel List
                </button>
                <button className="next-btn" onClick={() => router.push('/Pre-bookingwedding/previewPage')}>
                    Review Selection ➔
                </button>
            </nav>

            <WeddingFooter />
        </div>
    );
};

export default HotelDetailPage;
