"use client";

import InventoryGrid from "@/components/vendor/InventoryGrid";
import RoomingList from "@/components/vendor/RoomingList";
import { TrendingUp, Users, CalendarCheck, DollarSign } from "lucide-react";

export default function VendorDashboard() {
    return (
        <div className="space-y-12">

            {/* Header / Date */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold text-[#002147]">Property Hub</h1>
                    <p className="text-slate-500 mt-2">Welcome back, Rajesh. Operations for <span className="font-bold text-[#002147]">Udaipur Palace Wedding</span> are active.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50">
                        Download Report
                    </button>
                </div>
            </div>

            {/* KPI Section - Occupancy Rings & Trends */}
            <div className="grid grid-cols-4 gap-6">

                {/* KPI Card 1: Total Committed Occupancy */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Committed Occ.</p>
                        <h3 className="text-3xl font-display font-bold text-[#002147]">82%</h3>
                        <p className="text-[10px] text-emerald-600 font-bold mt-2 flex items-center gap-1">
                            <TrendingUp className="size-3" />
                            +5% vs Last Week
                        </p>
                    </div>
                    {/* Ring Chart Mockup */}
                    <div className="size-16 relative">
                        <svg className="size-full -rotate-90">
                            <circle cx="32" cy="32" r="28" stroke="#f1f5f9" strokeWidth="6" fill="none" />
                            <circle cx="32" cy="32" r="28" stroke="#002147" strokeWidth="6" fill="none" strokeDasharray="175.9" strokeDashoffset="31.6" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* KPI Card 2: Arrivals Today */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group">
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Arrivals Today</p>
                        <h3 className="text-3xl font-display font-bold text-[#002147]">45</h3>
                        <p className="text-[10px] text-slate-400 font-bold mt-2">Expected by 2 PM</p>
                    </div>
                    <div className="size-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center">
                        <Users className="size-6" />
                    </div>
                </div>

                {/* KPI Card 3: Pending Releases */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group">
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Pending Release</p>
                        <h3 className="text-3xl font-display font-bold text-amber-500">12</h3>
                        <p className="text-[10px] text-amber-600 font-bold mt-2">Action Required (48h)</p>
                    </div>
                    <div className="size-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center animate-pulse">
                        <CalendarCheck className="size-6" />
                    </div>
                </div>

                {/* KPI Card 4: Forecast Revenue */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group">
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Q1 Forecast</p>
                        <h3 className="text-3xl font-display font-bold text-[#002147]">₹2.4Cr</h3>
                        <p className="text-[10px] text-emerald-600 font-bold mt-2 flex items-center gap-1">
                            <TrendingUp className="size-3" />
                            On Track
                        </p>
                    </div>
                    <div className="size-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center">
                        <DollarSign className="size-6" />
                    </div>
                </div>
            </div>

            {/* Main Modules */}
            <div id="inventory">
                <InventoryGrid />
            </div>

            <div id="rooming-list">
                <RoomingList />
            </div>

            <div id="banquets" className="h-[300px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50/50">
                <p className="text-slate-400 font-bold text-lg">Space & Banquets Module</p>
                <p className="text-xs text-slate-300 uppercase tracking-widest mt-2">Coming Soon</p>
            </div>
        </div>
    );
}
