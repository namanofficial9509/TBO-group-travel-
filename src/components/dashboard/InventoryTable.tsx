"use client";

import { useState } from "react";

interface InventoryItem {
    id: string;
    name: string;
    category: string;
    vendor: string;
    qty: string;
    status: "Confirmed" | "Pending" | "In Transit" | "Low Stock";
    price: string;
}

const initialItems: InventoryItem[] = [
    // Accommodation (Room Blocks)
    { id: "1", name: "Grand Heritage Suite Block", category: "Accommodation", vendor: "Udaibilas Palace", qty: "25 Rooms", status: "Confirmed", price: "₹45,00,000" },
    { id: "2", name: "Lake View Premium Rooms", category: "Accommodation", vendor: "Udaibilas Palace", qty: "50 Rooms", status: "Confirmed", price: "₹60,00,000" },

    // Decor
    { id: "3", name: "Marigold Drapes (Entrance)", category: "Decor", vendor: "Floral Fantasy", qty: "100 Units", status: "In Transit", price: "₹2,50,000" },
    { id: "4", name: "Crystal Chandeliers (Large)", category: "Decor", vendor: "Luxe Lights", qty: "12 Units", status: "Pending", price: "₹8,00,000" },

    // Logistics
    { id: "5", name: "Vintage Rolls Royce", category: "Logistics", vendor: "Royal Transports", qty: "1 Unit", status: "Confirmed", price: "₹1,50,000" },
    { id: "6", name: "Guest Shuttles (Innova Crysta)", category: "Logistics", vendor: "City Cabs", qty: "15 Cabs", status: "Confirmed", price: "₹2,25,000" },

    // Catering
    { id: "7", name: "Gala Dinner Buffet", category: "Catering", vendor: "Maharaja Foods", qty: "550 Plates", status: "Confirmed", price: "₹22,00,000" }
];

export default function InventoryTable() {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All"
        ? initialItems
        : initialItems.filter(item => item.category === filter);

    return (
        <div className="bg-white rounded-3xl border border-[#e7e1cf] overflow-hidden shadow-sm">
            {/* Tabs */}
            <div className="flex items-center gap-2 p-6 border-b border-[#e7e1cf] overflow-x-auto">
                {["All", "Accommodation", "Decor", "Logistics", "Catering"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat
                                ? "bg-[#1b170d] text-white"
                                : "bg-[#f3efe7] text-[#9a864c] hover:bg-[#ecb613] hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-8 py-4 bg-[#fcfbf7] text-[10px] font-bold text-[#9a864c] uppercase tracking-[0.2em] border-b border-[#e7e1cf]">
                <div className="col-span-4">Item Details</div>
                <div className="col-span-2">Vendor</div>
                <div className="col-span-2">Quantity</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right">Value (INR)</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#e7e1cf]">
                {filteredItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 px-8 py-6 items-center hover:bg-[#fcfbf7] transition-colors group cursor-pointer">
                        <div className="col-span-4">
                            <div className="font-serif text-lg font-bold text-[#1b170d] group-hover:text-[#ecb613] transition-colors">{item.name}</div>
                            <div className="text-xs text-[#9a864c] opacity-60">{item.category}</div>
                        </div>

                        <div className="col-span-2 text-sm font-medium text-[#1b170d]">{item.vendor}</div>

                        <div className="col-span-2 text-sm font-medium text-[#1b170d]">{item.qty}</div>

                        <div className="col-span-2">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${item.status === 'Confirmed' ? 'border-green-200 bg-green-50 text-green-700' :
                                    item.status === 'Pending' ? 'border-orange-200 bg-orange-50 text-orange-700' :
                                        'border-blue-200 bg-blue-50 text-blue-700'
                                }`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                {item.status}
                            </span>
                        </div>

                        <div className="col-span-2 text-right font-serif text-lg font-bold text-[#1b170d]">{item.price}</div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
                <div className="p-20 text-center">
                    <span className="material-symbols-outlined text-4xl text-[#e7e1cf] mb-4">inventory_2</span>
                    <p className="text-[#9a864c] font-serif">No items found in this category.</p>
                </div>
            )}
        </div>
    );
}
