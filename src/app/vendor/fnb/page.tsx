"use client";

import { Utensils, Wine, FileSpreadsheet, AlertCircle } from "lucide-react";

export default function FnBPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold text-[#002147]">Experiences & F&B</h1>
                    <p className="text-slate-500 mt-2">Menu planning, dietary requirements, and catering logs.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#002147] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg">
                    <FileSpreadsheet className="size-4" />
                    Export Kitchen Sheet
                </button>
            </div>

            {/* Critical Dietary Alerts */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                    <AlertCircle className="size-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-amber-900">Critical Dietary Alerts</h3>
                    <p className="text-sm text-amber-800/80 mt-1 max-w-3xl">
                        Please alert the Executive Chef regarding <b>3 Severe Nut Allergies</b> and <b>12 Jain Requests</b> for the Sangeet Dinner tonight.
                        Verify special meal trays are tagged correctly.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Menu Card 1 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#002147]">
                                <Utensils className="size-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#002147] text-lg">Sangeet Dinner</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Mewar Terrace • 19:30</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">Finalized</span>
                    </div>

                    <div className="space-y-4 border-t border-slate-100 pt-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Pax Count</span>
                            <span className="font-bold text-slate-800">350 Guaranteed</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Service Style</span>
                            <span className="font-bold text-slate-800">Luxury Buffet + Live Counters</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Bar Setup</span>
                            <span className="font-bold text-slate-800">Premium Open Bar (Host Paid)</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <button className="flex-1 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                            View Menu
                        </button>
                    </div>
                </div>

                {/* Menu Card 2 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#002147]">
                                <Wine className="size-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#002147] text-lg">Wedding High Tea</h3>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Poolside • 16:00</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">Drafting</span>
                    </div>

                    <div className="space-y-4 border-t border-slate-100 pt-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Pax Count</span>
                            <span className="font-bold text-slate-800">150 Expected</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Service Style</span>
                            <span className="font-bold text-slate-800">Pass-around & Stations</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Special Request</span>
                            <span className="font-bold text-slate-800">Coconut Water Station</span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <button className="flex-1 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                            Approve Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
