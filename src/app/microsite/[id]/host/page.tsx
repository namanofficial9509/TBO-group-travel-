"use client";

import { useState } from "react";
import GuestViewPage from "../guest/page"; // Reuse the guest view component

export default function HostViewPage() {
    const [isDashboardVisible, setIsDashboardVisible] = useState(false);

    return (
        <div className="relative">
            {/* The underlying Guest View - Fully Visible and Interactive for Host to 'browse' */}
            <div className="h-screen overflow-y-auto">
                <GuestViewPage />
            </div>

            {/* HOST TOOLBAR - Fixed Top Overlay */}
            <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-900/90 backdrop-blur-md text-white px-6 flex items-center justify-between border-b border-white/10 shadow-xl">
                <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-700 px-2 py-0.5 rounded">Host Preview Mode</span>
                    <div className="h-4 w-px bg-slate-700"></div>
                    <div className="flex items-center gap-2">
                        <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-bold">242 Rooms Picked Up</span>
                    </div>
                    <span className="text-[10px] text-slate-400">/ 300 Negotiated</span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 transition-colors">
                        <span className="material-symbols-outlined text-sm">check_circle</span>
                        Approve Design
                    </button>
                    <div className="h-4 w-px bg-slate-700"></div>
                    <button onClick={() => setIsDashboardVisible(true)} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-lg">dashboard</span>
                        <span className="text-xs font-bold uppercase tracking-wide">Dashboard</span>
                    </button>
                </div>
            </div>

            {/* Full Dashboard Modal (Optional Expand) */}
            {isDashboardVisible && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
                        <div className="bg-slate-900 text-white p-6 flex justify-between items-center shrink-0">
                            <div>
                                <h2 className="text-xl font-display font-medium">Event Health Dashboard</h2>
                                <p className="text-xs text-slate-400 mt-1">Real-time stats and approvals</p>
                            </div>
                            <button onClick={() => setIsDashboardVisible(false)} className="text-slate-400 hover:text-white">
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        <div className="p-8 overflow-y-auto bg-slate-50 flex-1">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Check-ins</div>
                                    <div className="text-2xl font-display font-medium text-slate-800">84%</div>
                                    <div className="text-[10px] text-emerald-600 font-bold mt-1">+12% last hour</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">F&B Spend</div>
                                    <div className="text-2xl font-display font-medium text-slate-800">₹4.2L</div>
                                    <div className="text-[10px] text-amber-500 font-bold mt-1">92% of Limit</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">App Active</div>
                                    <div className="text-2xl font-display font-medium text-slate-800">312</div>
                                    <div className="text-[10px] text-slate-400 font-bold mt-1">Users Online</div>
                                </div>
                            </div>

                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Pending Approvals</h3>
                            <div className="space-y-3">
                                <div className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                                            <span className="material-symbols-outlined">upgrade</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-800">Room Upgrade Request</p>
                                            <p className="text-[10px] text-slate-500">Suite 404 • Mr. Sharma • +₹12k Impact</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wide bg-slate-100 text-slate-500 hover:bg-slate-200">Decline</button>
                                        <button className="px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/20">Approve</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
