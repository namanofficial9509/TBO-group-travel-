"use client";

import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";
import { useState } from "react";

export default function GuestViewPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [activeTab, setActiveTab] = useState("bookings");

    if (!currentEvent) return <div className="flex items-center justify-center h-screen text-slate-400">Loading Configuration...</div>;

    // Theme Config (Shared with Studio, could be extracted to a utility)
    const theme = isRice ? {
        primary: "text-slate-700",
        bg: "bg-slate-50",
        header: "bg-slate-900",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
    } : {
        primary: "text-emerald-900",
        bg: "bg-[#FAF9F7]",
        header: "bg-emerald-900",
        accent: "text-emerald-600",
        button: "bg-emerald-700 hover:bg-emerald-800"
    };

    return (
        <div className={`min-h-screen ${theme.bg} pb-24 font-sans`}>
            {/* Header / Hero */}
            <header className={`${theme.header} text-white pt-12 pb-24 px-6 relative overflow-hidden`}>
                <div className="max-w-md mx-auto relative z-10 flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 mb-2">{isRice ? "Welcome Delegate" : "Wedding Invitation"}</span>
                    <h1 className="text-3xl font-display font-medium mb-2">{currentEvent.name}</h1>
                    <p className="text-white/70 text-sm font-light">{currentEvent.date} • {currentEvent.destination}</p>
                </div>
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 10px 10px, white 2px, transparent 0)", backgroundSize: "30px 30px" }}></div>
            </header>

            {/* Main Content Card - Overlapping Header */}
            <main className="max-w-md mx-auto -mt-16 px-4 relative z-20 space-y-4">

                {/* Status Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">{isRice ? "My Pass" : "Your RSVP"}</h2>
                            <p className="text-[10px] text-slate-400">Access Code: <span className="font-mono text-slate-600 font-bold">#8291</span></p>
                        </div>
                        <div className={`size-10 rounded-full ${isRice ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"} flex items-center justify-center`}>
                            <span className="material-symbols-outlined">qr_code_2</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest text-white shadow-lg ${theme.button}`}>
                            {isRice ? "View Ticket" : "Itinerary"}
                        </button>
                        <button className="flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-600 hover:bg-slate-200">
                            Check-in
                        </button>
                    </div>
                </div>

                {/* Personalized Agenda or Booking Engine */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="flex border-b border-slate-100">
                        {['Agenda', isRice ? 'Bookings' : 'Travel', 'Info'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === tab.toLowerCase() ? `text-slate-900 border-b-2 ${isRice ? "border-blue-600" : "border-emerald-600"}` : "text-slate-400 hover:text-slate-600"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="p-6 min-h-[300px] bg-slate-50/50">
                        {activeTab === 'agenda' && (
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-center w-12 shrink-0">
                                            <div className="text-sm font-bold text-slate-800">09:00</div>
                                            <div className="text-[10px] text-slate-400 uppercase">AM</div>
                                        </div>
                                        <div className="flex-1 pb-6 border-b border-slate-100 last:border-0 relative">
                                            <div className={`absolute left-[-21px] top-1 size-2.5 rounded-full border-2 border-white ${isRice ? "bg-blue-500" : "bg-emerald-500"}`}></div>
                                            <h3 className="font-bold text-slate-800 text-sm mb-1">{isRice ? "Keynote: Innovation" : "Welcome Lunch"}</h3>
                                            <p className="text-xs text-slate-500 mb-2">{isRice ? "Main Hall • Dr. Singh" : "Courtyard • Casual"}</p>
                                            <button className="px-3 py-1 bg-slate-50 text-slate-600 rounded border border-slate-200 text-[10px] font-bold uppercase">Details</button>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="text-center w-12 shrink-0">
                                            <div className="text-sm font-bold text-slate-800">12:30</div>
                                            <div className="text-[10px] text-slate-400 uppercase">PM</div>
                                        </div>
                                        <div className="flex-1 pb-6 border-b border-slate-100 last:border-0 relative">
                                            <div className={`absolute left-[-21px] top-1 size-2.5 rounded-full border-2 border-white ${isRice ? "bg-blue-500" : "bg-emerald-500"}`}></div>
                                            <h3 className="font-bold text-slate-800 text-sm mb-1">{isRice ? "Networking Lunch" : "Mehendi Ceremony"}</h3>
                                            <p className="text-xs text-slate-500 mb-2">{isRice ? "Dining Hall" : "Poolside • Bright Colors"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {(activeTab === 'bookings' || activeTab === 'travel') && (
                            <div className="space-y-4">
                                <div className="text-center mb-6">
                                    <h3 className="font-bold text-slate-800">Negotiated Room Rates</h3>
                                    <p className="text-xs text-slate-500">Exclusive pricing locked for this event.</p>
                                </div>

                                {/* Room Card 1 */}
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="h-24 bg-slate-200 relative">
                                        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=400" alt="Room" className="w-full h-full object-cover" />
                                        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Available</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-slate-800 text-sm">Deluxe King Suite</h4>
                                            <span className="text-xs font-bold text-slate-900">₹8,500</span>
                                        </div>
                                        <p className="text-[10px] text-slate-500 mb-3">Include Breakfast • City View • Free WiFi</p>
                                        <button className={`w-full py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-white shadow-md ${theme.button}`}>
                                            Book Now
                                        </button>
                                    </div>
                                </div>

                                {/* Room Card 2 */}
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm opacity-75">
                                    <div className="h-24 bg-slate-200 relative">
                                        <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=400" alt="Room" className="w-full h-full object-cover grayscale" />
                                        <div className="absolute top-2 right-2 bg-slate-500 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Sold Out</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-slate-600 text-sm">Twin Executive</h4>
                                            <span className="text-xs font-bold text-slate-500">₹7,200</span>
                                        </div>
                                        <p className="text-[10px] text-slate-400 mb-3">Twin Bed • Park View</p>
                                        <button disabled className="w-full py-2 rounded-lg text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200">
                                            Allotted
                                        </button>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>

            </main>

            {/* Floating Action Button (Concierge) */}
            <button className={`fixed bottom-6 right-6 size-14 rounded-full ${theme.button} text-white shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95`}>
                <span className="material-symbols-outlined text-2xl">support_agent</span>
            </button>
        </div>
    );
}
