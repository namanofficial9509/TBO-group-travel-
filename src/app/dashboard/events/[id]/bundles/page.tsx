"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

export default function BundlesPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    // Dynamic Data
    const weddingBundles = [
        {
            id: 1,
            name: "Royal Rajputana Suite",
            description: "Premium Heritage Experience in Jaipur",
            price: "₹85,500",
            fulfillment: 98,
            confidence: "High",
            type: "Live",
            bestseller: true,
            features: ["4N Stay at Heritage Wing", "Vintage Car Transfers"],
            guests: "Wedding Guests"
        },
        {
            id: 2,
            name: "Mewar Classic Retreat",
            description: "Udaipur Lakeview Selection",
            price: "₹62,000",
            fulfillment: 45,
            confidence: "Low",
            type: "Live",
            bestseller: false,
            features: ["3N Lake View Premier", "Private Sunset Boat Ride"],
            guests: "Corporate Executives"
        },
        {
            id: 3,
            name: "Modern Corporate Day",
            description: "Offsite package for NCR teams",
            price: "₹18,500",
            fulfillment: 92,
            confidence: "High",
            type: "Draft",
            bestseller: false,
            features: ["Day Use Conference", "Premium Buffet Lunch"],
            guests: "HR & Tech Teams"
        }
    ];

    const miceBundles = [
        {
            id: 1,
            name: "Platinum Delegate Pass",
            description: "All-Access Summit Experience",
            price: "₹25,000",
            fulfillment: 85,
            confidence: "High",
            type: "Live",
            bestseller: true,
            features: ["Keynote Access", "Gala Dinner Entry", "Stay Included"],
            guests: "VIP Delegates"
        },
        {
            id: 2,
            name: "Standard Exhibitor",
            description: "Booth Space & Basic Amenities",
            price: "₹1,50,000",
            fulfillment: 60,
            confidence: "Medium",
            type: "Live",
            bestseller: false,
            features: ["3x3m Shell Scheme", "2 Staff Passes", "Power + WiFi"],
            guests: "Exhibitors"
        },
        {
            id: 3,
            name: "Virtual Attendee",
            description: "Remote Access Stream",
            price: "₹4,500",
            fulfillment: 20,
            confidence: "Low",
            type: "Draft",
            bestseller: false,
            features: ["Live Stream Access", "Networking App"],
            guests: "Remote"
        }
    ];

    const [bundles] = useState(isRice ? miceBundles : weddingBundles);
    const [isAssistantOpen, setIsAssistantOpen] = useState(false);

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
        gradienthigh: 'from-blue-600 via-indigo-500 to-blue-400',
        gradientlow: 'from-slate-500 via-gray-400 to-slate-500'
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
        gradienthigh: 'from-emerald-600 via-teal-500 to-emerald-400',
        gradientlow: 'from-amber-500 via-orange-400 to-amber-500'
    };

    if (!currentEvent) return null;

    return (
        <div className={`flex flex-col h-full bg-[#FAF9F7] p-8 overflow-y-auto relative ${theme.bg}`}>
            <div className="max-w-[1600px] mx-auto w-full space-y-8">

                {/* Header */}
                <div className="flex justify-between items-end border-b border-[#DEDFDB] pb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{currentEvent.name}</span>
                            <span className="text-slate-300">/</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText}`}>Pricing Strategy</span>
                        </div>
                        <h1 className="text-4xl font-display font-medium text-[#1F2933]">{isRice ? "Packages & Tickets" : "Bundles & Pricing"}</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-5 py-2.5 bg-white border border-[#DEDFDB] text-slate-600 rounded-lg text-xs font-bold uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">compare_arrows</span>
                            Compare Mode
                        </button>
                        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-lg shadow-lg shadow-emerald-700/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <span className="material-symbols-outlined text-lg">add_circle</span>
                            <span className="text-xs font-bold uppercase tracking-widest">{isRice ? "Create Ticket Type" : "Create Bundle"}</span>
                        </button>
                    </div>
                </div>

                {/* Main Content - Full Width */}
                <div className="space-y-12 pb-24">

                    {/* Live Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`size-2.5 rounded-full ${theme.emeraldFill} animate-pulse`}></div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Active {isRice ? "Sales" : "on Microsite"}</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {bundles.filter(b => b.type === "Live").map(bundle => (
                                <div key={bundle.id} className="relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                                    {/* Cinematic Header Gradient */}
                                    <div className={`h-2 w-full bg-gradient-to-r ${bundle.confidence === 'High' ? theme.gradienthigh : theme.gradientlow}`}></div>

                                    {/* Subtle pattern overlay */}
                                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                                        <span className="material-symbols-outlined text-9xl text-slate-900 rotate-12">{isRice ? "badge" : "temple_hindu"}</span>
                                    </div>

                                    <div className="p-8 relative">
                                        {/* Status Header */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm ${bundle.confidence === 'High' ? `${theme.emeraldBg} ${theme.emeraldText} ${theme.emeraldBorder}` : 'bg-rose-50 text-rose-800 border-rose-100'}`}>
                                                <div className="relative flex h-2 w-2">
                                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${bundle.confidence === 'High' ? theme.emeraldFill : 'bg-rose-400'}`}></span>
                                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${bundle.confidence === 'High' ? theme.emeraldFill : 'bg-rose-500'}`}></span>
                                                </div>
                                                {bundle.fulfillment}% {isRice ? "Sold" : "Confidence"}
                                            </div>
                                            {bundle.bestseller && (
                                                <span className="px-3 py-1.5 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border border-amber-200 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-sm">
                                                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                                    Bestseller
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="mb-8">
                                            <h2 className="text-3xl font-display font-medium text-slate-800 mb-2 leading-tight group-hover:text-emerald-900 transition-colors">{bundle.name}</h2>
                                            <p className="text-slate-500 font-serif italic text-lg">{bundle.description}</p>
                                        </div>

                                        {/* Audience Chip */}
                                        <div className="mb-8">
                                            <div className={`inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 transition-colors group-hover:${theme.emeraldBg} group-hover:${theme.emeraldBorder}`}>
                                                <div className="size-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                                    <span className="material-symbols-outlined text-slate-400 text-xs">groups</span>
                                                </div>
                                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{bundle.guests}</span>
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <div className="space-y-4 mb-8">
                                            {bundle.features.map((feat, i) => (
                                                <div key={i} className="flex items-center gap-4 text-slate-700 group-hover:text-slate-900 transition-colors">
                                                    <div className={`size-6 rounded-full ${theme.emeraldBg} ${theme.emeraldBorder} flex items-center justify-center ${theme.emeraldText} shrink-0 shadow-sm group-hover:scale-110 transition-all`}>
                                                        <span className="material-symbols-outlined text-[14px]">check</span>
                                                    </div>
                                                    <span className="text-sm font-medium tracking-wide">{feat}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-end justify-between border-t border-slate-100 pt-6 mt-auto">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{isRice ? "Ticket Price" : "Package Total"}</p>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-display font-medium text-slate-800">{bundle.price}</span>
                                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{isRice ? "" : "/ PER PERSON"}</span>
                                                </div>
                                            </div>
                                            <button className="size-12 rounded-full bg-slate-50 text-slate-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-sm hover:shadow-emerald-500/30 hover:scale-110 active:scale-95 group/btn">
                                                <span className="material-symbols-outlined text-xl group-hover/btn:rotate-12 transition-transform">edit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Drafts Section */}
                    {bundles.filter(b => b.type === "Draft").length > 0 && (
                        <div className="space-y-6 pt-6 border-t border-dashed border-slate-200">
                            <div className="flex items-center gap-3 opacity-60">
                                <div className="size-2.5 rounded-full bg-slate-300"></div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Drafts & Blueprints</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 opacity-75 hover:opacity-100 transition-opacity">
                                {bundles.filter(b => b.type === "Draft").map(bundle => (
                                    <div key={bundle.id} className="bg-[#F8F9FA] rounded-xl border-2 border-dashed border-slate-300 p-8 hover:bg-white hover:border-slate-400 hover:shadow-lg transition-all group relative">
                                        <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-slate-300 border border-slate-200 px-2 py-1 rounded">Draft Mode</div>

                                        <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <h2 className="text-2xl font-display font-medium text-slate-600 mb-1">{bundle.name}</h2>
                                            <p className="text-slate-400 font-serif italic">{bundle.description}</p>
                                        </div>

                                        <div className="flex items-end justify-between border-t border-slate-200 pt-6">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Estimated</p>
                                                <div className="flex items-end gap-1">
                                                    <span className="text-2xl font-display font-bold text-slate-400">{bundle.price}</span>
                                                </div>
                                            </div>
                                            <button className="px-5 py-2 rounded-lg border border-slate-300 bg-white text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-700 hover:border-emerald-500 transition-colors shadow-sm">
                                                Resume
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Operations Assistant */}
            <div className={`fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 transition-all duration-300`}>
                {isAssistantOpen && (
                    <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-2xl border border-slate-800 w-80 animate-in slide-in-from-bottom-10 chat-panel">
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <h3 className="font-bold text-sm uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                                {isRice ? "Sales Bot" : "Ops Assistant"}
                            </h3>
                            <button onClick={() => setIsAssistantOpen(false)} className="text-slate-400 hover:text-white">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="space-y-4 max-h-[400px] overflow-y-auto">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                                <p className="text-xs font-medium leading-relaxed text-slate-200">
                                    {isRice ? "Early Bird period ends in 48h. Push a reminder?" : "Guests hesitate at ₹85k. Suggest ₹79k Variant."}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => setIsAssistantOpen(!isAssistantOpen)}
                    className={`h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-3 px-6`}
                >
                    <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                    <span className="font-bold text-sm tracking-wide">AI Ops</span>
                </button>
            </div>
        </div>
    );
}
