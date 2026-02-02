"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

export default function BookingsPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [activeTab, setActiveTab] = useState("all");

    // Theme Config
    const theme = isRice ? {
        primary: "text-slate-700",
        accent: "bg-slate-700",
        bg: "bg-slate-50",
        lightAccent: "bg-slate-100",
        border: "border-slate-200",
        button: "bg-slate-800 hover:bg-slate-900",
        emeraldText: "text-blue-700",
        emeraldBg: "bg-blue-50",
        emeraldBorder: "border-blue-100",
        emeraldFill: "bg-blue-500",
    } : {
        primary: "text-emerald-700",
        accent: "bg-emerald-700",
        bg: "bg-[#FAF9F7]",
        lightAccent: "bg-emerald-50",
        border: "border-emerald-100",
        button: "bg-emerald-700 hover:bg-emerald-800",
        emeraldText: "text-emerald-700",
        emeraldBg: "bg-emerald-50",
        emeraldBorder: "border-emerald-100",
        emeraldFill: "bg-emerald-500",
    };

    if (!currentEvent) return null;

    return (
        <div className={`flex flex-col h-full relative ${theme.bg}`}>
            <div className="flex-1 overflow-y-auto p-8 pb-32">
                <div className="max-w-[1600px] mx-auto w-full space-y-12">

                    {/* Header */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-[#DEDFDB] pb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{currentEvent.name}</span>
                                    <span className="text-slate-300">/</span>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText}`}>{isRice ? "Travel Logistics VS" : "Logistics Engine"}</span>
                                </div>
                                <h1 className="text-4xl font-display font-medium text-[#1F2933]">{isRice ? "Travel & Accommodation" : "Logistics & Booking Management"}</h1>
                            </div>
                            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg shadow-lg shadow-emerald-700/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-lg">download</span>
                                <span className="text-xs font-bold uppercase tracking-widest">Export Logistics</span>
                            </button>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex items-center gap-8 border-b border-slate-200">
                            {[
                                { id: 'hotels', icon: 'hotel', label: 'Hotel Bookings' },
                                { id: 'transport', icon: 'flight_takeoff', label: 'Flights & Transport' },
                                { id: 'venues', icon: 'deck', label: 'Venue & Experiences' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`flex items-center gap-2 pb-4 border-b-2 border-transparent hover:border-emerald-400 text-slate-500 hover:text-emerald-700 transition-all group`}
                                >
                                    <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">{tab.icon}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 1: Room Inventory Status */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-display font-medium text-slate-800">Room Inventory Status</h2>
                            <div className="flex gap-2">
                                <span className={`px-3 py-1 ${theme.lightAccent} ${theme.emeraldText} border ${theme.emeraldBorder} rounded text-[10px] font-bold uppercase tracking-wide flex items-center gap-1.5`}>
                                    <span className={`size-1.5 rounded-full ${theme.emeraldFill}`}></span> Confirmed
                                </span>
                                <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-100 rounded text-[10px] font-bold uppercase tracking-wide flex items-center gap-1.5">
                                    <span className="size-1.5 rounded-full bg-amber-500"></span> Tentative
                                </span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Property</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Room Category</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Allotted (Rate / Count)</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Booked</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 w-1/4">Buffer Tracking</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</th>
                                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {/* MICE vs Wedding Data */}
                                    {(isRice ? [
                                        { name: "JW Marriott Aerocity", sub: "New Delhi", cat: "Deluxe King", rate: "₹ 12,500 / 200", booked: 180, buffer: 20, status: "Confirmed", stress: 90 },
                                        { name: "Pullman New Delhi", sub: "Aerocity", cat: "Standard Twin", rate: "₹ 9,500 / 150", booked: 45, buffer: 105, status: "Tentative", stress: 30 }
                                    ] : [
                                        { name: "Taj Lake Palace", sub: "Udaipur, Rajasthan", cat: "Luxury Suite", rate: "₹ 1,25,000 / 50", booked: 42, buffer: 8, status: "Confirmed", stress: 84 },
                                        { name: "The Oberoi Udaivilas", sub: "Lake Pichola", cat: "Premier Room", rate: "₹ 95,000 / 100", booked: 60, buffer: 40, status: "Tentative", stress: 60 }
                                    ]).map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="font-bold text-slate-800">{item.name}</div>
                                                <div className="text-xs text-slate-400">{item.sub}</div>
                                            </td>
                                            <td className={`px-6 py-5 ${theme.emeraldText} font-medium`}>{item.cat}</td>
                                            <td className="px-6 py-4 font-mono text-xs text-slate-600">{item.rate}</td>
                                            <td className="px-6 py-4 font-display text-xl text-slate-800">{item.booked}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                        <div className={`h-full rounded-full ${item.status === 'Confirmed' ? theme.emeraldFill : 'bg-amber-400'}`} style={{ width: `${item.stress}%` }}></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase">{item.buffer} Left</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${item.status === 'Confirmed' ? `${theme.lightAccent} ${theme.emeraldText}` : 'bg-amber-100 text-amber-800'}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className={`text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText} hover:underline`}>
                                                    LOCK
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 2: Charter Blocks & Ground Transport */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display font-medium text-slate-800">Charter Blocks & Ground Transport</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                            {/* Card 1: Charter */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">{isRice ? "Group Flight Block" : "Charter Block A"}</div>
                                    <div className="size-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <span className="material-symbols-outlined text-lg">flight_takeoff</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-6">{isRice ? "AI-402 (DEL-BOM)" : "BOM - UDR (Private)"}</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Capacity:</span>
                                        <span className="font-bold text-slate-800">{isRice ? "50 Seats" : "12 Pax"}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Timing:</span>
                                        <span className="font-bold text-slate-800">08:00 AM - 10:00 AM</span>
                                    </div>
                                    <div className="flex justify-between text-sm border-t border-slate-100 pt-2">
                                        <span className="text-slate-500">Cost:</span>
                                        <span className="font-mono font-bold text-slate-800">{isRice ? "₹ 4,50,000" : "₹ 14,50,000"}</span>
                                    </div>
                                </div>
                                <button className="w-full py-2 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-colors">
                                    Manifest List
                                </button>
                            </div>

                            {/* Card 2: Shuttle */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Group Pickup</div>
                                    <div className="size-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <span className="material-symbols-outlined text-lg">directions_bus</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-6">{isRice ? "Coach Shuttle A" : "Airport Shuttle (Luxe)"}</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Vehicles:</span>
                                        <span className="font-bold text-slate-800">{isRice ? "2x Volvo B9R" : "5x Mercedes V-Class"}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Status:</span>
                                        <span className="font-bold text-amber-500">Tentative Confirmation</span>
                                    </div>
                                    <div className="flex justify-between text-sm border-t border-slate-100 pt-2">
                                        <span className="text-slate-500">Day Total:</span>
                                        <span className="font-mono font-bold text-slate-800">{isRice ? "₹ 1,20,000" : "₹ 4,20,000"}</span>
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-emerald-500/20">
                                    Confirm Vehicles
                                </button>
                            </div>

                            {/* Card 3: Overview (Dark) */}
                            <div className="bg-[#0F172A] p-8 rounded-xl border border-slate-800 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                    <span className="material-symbols-outlined text-9xl text-white -rotate-12">local_shipping</span>
                                </div>
                                <h3 className="text-lg font-display font-medium text-white mb-2">Transport Overview</h3>
                                <p className="text-slate-400 text-xs mb-8">Total logistics overhead.</p>

                                <div className="mb-8">
                                    <div className="text-4xl font-display font-medium text-emerald-400 mb-1">₹ {isRice ? "12,45,000" : "58,75,000"}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Total Budget Committed</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-[84%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold text-white">84% {isRice ? "Capacity" : "Booked"}</span>
                                        <span className="material-symbols-outlined text-emerald-400 text-xl">trending_up</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className={`absolute bottom-0 w-full bg-white border-t border-slate-200 px-8 py-5 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] z-20`}>
                <div className="max-w-[1600px] mx-auto w-full flex justify-between items-center">
                    <div className="flex gap-12">
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Total Committed Budget</div>
                            <div className="text-2xl font-display font-medium text-slate-800">₹ {isRice ? "35,00,000" : "2,45,60,000"}</div>
                        </div>
                        <div className="pl-12 border-l border-slate-200">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Pending Vendor Dues</div>
                            <div className="text-2xl font-display font-medium text-rose-500">₹ {isRice ? "12,00,000" : "82,40,000"}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-6 py-3 rounded-lg border border-slate-300 text-xs font-bold uppercase tracking-widest text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                            Save Draft
                        </button>
                        <button className={`px-8 py-3 ${theme.emeraldFill} hover:opacity-90 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg transition-all hover:scale-105 active:scale-95`}>
                            Finalize & Lock Itinerary
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
