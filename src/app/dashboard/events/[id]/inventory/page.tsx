"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

export default function InventoryIntelligencePage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [mix, setMix] = useState(60); // 60% Corporate
    const [stress, setStress] = useState("High Impact");

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
        <div className={`flex flex-col h-full p-8 overflow-y-auto ${theme.bg}`}>
            <div className="max-w-[1600px] mx-auto w-full space-y-8">

                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Decision Support</span>
                            <span className="text-slate-300">/</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText}`}>
                                {isRice ? "Resource Allocation" : "Inventory Intelligence"}
                            </span>
                        </div>
                        <h1 className="text-3xl font-display font-medium text-[#1F2933]">
                            {isRice ? "Inventory & Resource Management" : "Inventory – Decision Intelligence"}
                        </h1>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-red-600/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group">
                        <span className="material-symbols-outlined group-hover:animate-spin text-lg">emergency_share</span>
                        <span className="text-xs font-bold uppercase tracking-widest">One-Click Recovery</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">

                    {/* Left Panel: Simulator */}
                    <div className="xl:col-span-1 space-y-6">
                        <div className="bg-[#1F2933] text-white p-6 rounded-2xl border border-black/5 shadow-xl sticky top-6">
                            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                <span className={`material-symbols-outlined ${isRice ? "text-blue-400" : "text-emerald-400"}`}>psychology</span>
                                <div>
                                    <h3 className="font-display font-semibold text-lg italic">{isRice ? "Demand Forecast" : "Persona Simulator"}</h3>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400">{isRice ? "Delegate Turnout Model" : "HNI Wedding Circuit"}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-3">
                                        <span className="text-slate-400">{isRice ? "Registration Velocity" : "Mix Simulation"}</span>
                                        <span className={`${isRice ? "text-blue-400" : "text-emerald-400"}`}>{mix}% {isRice ? "Confirmed" : "Corp"}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={mix}
                                        onChange={(e) => setMix(parseInt(e.target.value))}
                                        className={`w-full h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer ${isRice ? "accent-blue-400" : "accent-emerald-400"}`}
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-3">
                                        <span className="text-slate-400">Stress Sensitivity</span>
                                        <span className="text-white">{stress}</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1">
                                        {["Aggressive", "Balanced", "Safety"].map((mode) => (
                                            <button
                                                key={mode}
                                                className={`text-[9px] font-bold uppercase py-2 rounded-md transition-all ${stress === mode || (mode === "High Impact" && stress === "High Impact") ? "bg-emerald-600 text-white" : "bg-slate-700 text-slate-400 hover:bg-slate-600"}`}
                                                onClick={() => setStress(mode)}
                                            >
                                                {mode}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Controls</p>
                                <button className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-white/5 text-slate-300 text-xs font-medium transition-colors text-left">
                                    <span>Intelligence Feed</span>
                                    <span className="material-symbols-outlined text-sm">monitoring</span>
                                </button>
                                <button className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-white/5 text-slate-300 text-xs font-medium transition-colors text-left">
                                    <span>Auto-Release Bundles</span>
                                    <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Content */}
                    <div className="xl:col-span-3 space-y-8">

                        {/* Intelligence Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Critical Risk */}
                            <div className="bg-white p-6 rounded-xl shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] border-l-4 border-red-500 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex gap-4 mb-4">
                                    <div className="size-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                        <span className="material-symbols-outlined">warning</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Critical Risk</p>
                                        <h3 className="text-lg font-display font-semibold text-slate-800 leading-tight">
                                            {isRice ? "AV Equipment Shortage" : "Rooms run out in 2 days"}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                    {isRice ? "Main stage LED wall inventory is critical. 2 units pending confirmation." : "Booking velocity for Jaipur segment has spiked 400%. Release waitlist now to avoid overbooking."}
                                </p>
                                <button className="text-[10px] font-bold text-red-600 uppercase tracking-widest border-b border-red-200 hover:border-red-600 pb-0.5 transition-colors">
                                    {isRice ? "Source Externally" : "Execute Release"}
                                </button>
                            </div>

                            {/* Optimization */}
                            <div className={`bg-white p-6 rounded-xl shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] border-l-4 ${isRice ? "border-blue-500" : "border-emerald-500"} relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}>
                                <div className="flex gap-4 mb-4">
                                    <div className={`size-10 rounded-full ${isRice ? "bg-blue-50 text-blue-500" : "bg-emerald-50 text-emerald-500"} flex items-center justify-center shrink-0`}>
                                        <span className="material-symbols-outlined">trending_up</span>
                                    </div>
                                    <div>
                                        <p className={`text-[10px] font-bold ${isRice ? "text-blue-600" : "text-emerald-600"} uppercase tracking-widest mb-1`}>Optimization</p>
                                        <h3 className="text-lg font-display font-semibold text-slate-800 leading-tight">
                                            {isRice ? "Surplus: Breakout Rooms" : "Safe: Upsell deluxe packages"}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                    {isRice ? "3 rooms in Block B are unassigned. Can be converted to VIP lounges." : "High inventory buffer in Udaipur Suites. Recommend ₹12,000 upgrade for corporate tier."}
                                </p>
                                <button className={`text-[10px] font-bold ${isRice ? "text-blue-600 border-blue-200 hover:border-blue-600" : "text-emerald-600 border-emerald-200 hover:border-emerald-600"} uppercase tracking-widest border-b pb-0.5 transition-colors`}>
                                    {isRice ? "Reassign" : "Push Bundles"}
                                </button>
                            </div>

                            {/* Intelligence */}
                            <div className="bg-white p-6 rounded-xl shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] border-l-4 border-amber-400 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex gap-4 mb-4">
                                    <div className="size-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                                        <span className="material-symbols-outlined">lightbulb</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Intelligence</p>
                                        <h3 className="text-lg font-display font-semibold text-slate-800 leading-tight">
                                            {isRice ? "Speaker Flight Delay" : "Persona Drift Detected"}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                    {isRice ? "Incoming flight AI-402 from Delhi is delayed by 2 hours. Adjust keynote." : "Current mix shifting to 70% Corporate. Adjust twin-bed inventory."}
                                </p>
                                <button className="text-[10px] font-bold text-amber-600 uppercase tracking-widest border-b border-amber-200 hover:border-amber-600 pb-0.5 transition-colors">
                                    {isRice ? "Update Agenda" : "Adjust Allotment"}
                                </button>
                            </div>
                        </div>

                        {/* Inventory Table */}
                        <div className="bg-white rounded-xl shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
                            <div className="grid grid-cols-12 bg-slate-50/50 border-b border-slate-100 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                <div className="col-span-3">Inventory Unit</div>
                                <div className="col-span-2">Net Cost</div>
                                <div className="col-span-3">Stress Level</div>
                                <div className="col-span-3">Allocation</div>
                                <div className="col-span-1 text-right">Lock</div>
                            </div>

                            <div className="divide-y divide-slate-50">
                                {/* Dynamic List based on Type */}
                                {[
                                    {
                                        name: isRice ? "P4.8 Outdoor LED Wall" : "Taj Lake Palace",
                                        sub: isRice ? "Main Stage • 12x4m" : "Udaipur Suites (Lake View)",
                                        cost: isRice ? "₹4,50,000" : "₹82,000",
                                        meta: isRice ? "Vendor: AudioVisual Co" : "Net • LTA Compliant",
                                        status: "Safe",
                                        allotted: "1 / 1",
                                        stress: 10,
                                        img: isRice ? "https://images.unsplash.com/photo-1517604931442-710c8ef55529?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" : "https://lh3.googleusercontent.com/aida-public/AB6AXuCjuMWlpZ6S_NuQvvaauflXZGy1oqUIjMj34TxKDjdJJyRr1rshfGX2Kpxw7MGXn2_R8BmUgRLBOmOGFX0MFgQtnLMXxxcICIoCMgfM1Lj9eIBQzQyynNQ-Rl_6Y-CwqW-k1EsT5b6FIICajXP__BGXjLdoL7YP0lB7ujQfQwLnR2fLGjOeOsTkC0wZ2azbst_Wvml-b9IiWOVeIECvGUG9FwyvdhYb6TjKDFbSEaxxxvzuemWwGVfXzVA3wl6UThsQubqJVo-yCx4"
                                    },
                                    {
                                        name: isRice ? "JBL VTX Line Array" : "The Oberoi Udaivilas",
                                        sub: isRice ? "Audio System • 32 Tops" : "Premier Pool View",
                                        cost: isRice ? "₹2,20,000" : "₹95,000",
                                        meta: isRice ? "Vendor: SoundPro" : "Rate Expiry 24h",
                                        status: "Critical",
                                        allotted: isRice ? "Pending" : "58 / 60",
                                        stress: 95,
                                        img: isRice ? "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" : "https://lh3.googleusercontent.com/aida-public/AB6AXuDoPW5fcySvKCcXOM3At4pGNcQqPr0a6LRX-nOu1g_cgmdKFdzvM9ajHwmXWgHi7pHAAC9c6wqjnYojVSGONjYK9ABIGL1rBL4cMAjRObGyN3OLGAjSQcSypOqfaccXlbSgIlVsu_yK5abuPMi3nJT2TGE6I4LXRXB3j3RAn2Jgg7G2ZddYIEOcN7a3ytbZA55GHaAs_7xCYehJOhxgssrdUThn1tXbVDiQyHViGkeWbn6MJpylsC_pzMNH0pDSs0vM4h-FGVl2NnI"
                                    },
                                    {
                                        name: isRice ? "Delegate Kits" : "ITC Grand Bharat",
                                        sub: isRice ? "Bag, Notepad, Pen, ID" : "Terrace Suites (Block B)",
                                        cost: isRice ? "₹850/unit" : "₹45,500",
                                        meta: isRice ? "In-House Procurement" : "Bulk Corporate",
                                        status: "Tight",
                                        allotted: isRice ? "450 / 500" : "78 / 90",
                                        stress: 86,
                                        img: isRice ? "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" : "https://lh3.googleusercontent.com/aida-public/AB6AXuAy1TA4Km6xd2aZHXyuk5HQcXTC_nDSGSYZA_dENUeTk2VkPeHQ2DHa0CePyFY6gsnx90hi36gn-slTxqm0HOkOd6xCAnYyKSS1BEIDd4PX6bg9HEDkuCAtRpQ1cGu1pTboYtXaQ8SGTX96tuDvuRxOM-4tJxm-KCKBWxdl0B3FsvDPD9e6Uwud3C6NTPHAD2uvjzBMDWfXlWOPie6shh1e1dy4SgsyHv7-TZzpUR39DeFNVMPR6ih9QOX-7wEJts7smxrSHzaaAOw"
                                    }
                                ].map((item, i) => (
                                    <div key={i} className={`grid grid-cols-12 px-8 py-6 items-center hover:bg-slate-50/30 transition-colors cursor-pointer group ${item.status === 'Critical' ? 'bg-red-50/10' : ''}`}>
                                        <div className="col-span-3 flex gap-4 items-center">
                                            <div className="size-12 rounded bg-slate-200 shrink-0 overflow-hidden">
                                                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                                                <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <p className={`font-bold ${theme.primary}`}>{item.cost}</p>
                                            <p className="text-[9px] font-bold text-slate-300 uppercase mt-0.5">{item.meta}</p>
                                        </div>
                                        <div className="col-span-3 pr-8">
                                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full w-fit border ${item.status === 'Safe' ? `${theme.lightAccent} ${theme.emeraldText} ${theme.emeraldBorder}` :
                                                    item.status === 'Critical' ? 'bg-red-50 text-red-700 border-red-100' :
                                                        'bg-amber-50 text-amber-700 border-amber-100'
                                                }`}>
                                                <span className={`size-2 rounded-full animate-pulse ${item.status === 'Safe' ? `${theme.emeraldFill}` :
                                                        item.status === 'Critical' ? 'bg-red-500' :
                                                            'bg-amber-500'
                                                    }`}></span>
                                                <span className="text-[10px] font-bold uppercase tracking-wide">{item.status}</span>
                                            </div>
                                        </div>
                                        <div className="col-span-3 pr-8">
                                            <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1.5">
                                                <span>{item.allotted} Allotted</span>
                                                <span className={`${item.status === 'Safe' ? `${theme.emeraldText}` :
                                                        item.status === 'Critical' ? 'text-red-600' :
                                                            'text-amber-600'
                                                    }`}>{item.stress}% Stress</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${item.status === 'Safe' ? `${theme.emeraldFill}` :
                                                        item.status === 'Critical' ? 'bg-red-500' :
                                                            'bg-amber-500'
                                                    }`} style={{ width: `${item.stress}%` }}></div>
                                            </div>
                                        </div>
                                        <div className="col-span-1 flex justify-end">
                                            <button className={`flex items-center justify-center size-8 rounded-full transition-colors ${item.status === 'Critical' ? 'bg-red-100 text-red-600 hover:bg-red-200' :
                                                    'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                                }`}>
                                                <span className="material-symbols-outlined text-[16px]">{item.status === 'Critical' ? 'lock' : 'lock_open'}</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Recovery Footer - Sticky inside the scroll view */}
            <div className="sticky bottom-0 z-50 bg-[#0F172A] text-white py-4 px-10 flex items-center justify-between border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] mt-8 rounded-xl mx-auto w-full max-w-[1600px] mb-4">
                <div className="flex items-center gap-8">
                    <div className="border-l-4 border-red-500 pl-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Recovery Status</p>
                        <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                            <span className="material-symbols-outlined text-lg">warning</span>
                            Simulation Stress: Critical (+22%)
                        </div>
                    </div>
                    <div className="border-l border-white/10 pl-8">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Impact on Margin</p>
                        <div className="flex items-end gap-2 text-white font-display font-bold text-xl">
                            ₹18,20,000 <span className="text-red-400 text-sm font-sans mb-1">(-4.2%)</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Discard Sim</button>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all">
                        <span className="material-symbols-outlined text-lg">rocket_launch</span>
                        Commit Recovery Plan
                    </button>
                </div>
            </div>
        </div>
    );
}
