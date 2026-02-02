"use client";

import Link from "next/link";

export default function HostEventsPage() {
    const events = [
        {
            id: 1,
            name: "Mehendi Carnival",
            date: "Jan 18, 2025",
            time: "11:00 AM - 4:00 PM",
            venue: "Poolside Gardens, Raffles",
            guests: 180,
            budget: "₹12,00,000",
            status: "Review",
            statusColor: "amber",
            image: "https://images.unsplash.com/photo-1561732561-125026c4593f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            name: "Sangeet Night",
            date: "Jan 18, 2025",
            time: "7:00 PM Onwards",
            venue: "Grand Ballroom",
            guests: 240,
            budget: "₹45,00,000",
            status: "Approved",
            statusColor: "green",
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            name: "Wedding Ceremony",
            date: "Jan 19, 2025",
            time: "10:00 AM - 1:00 PM",
            venue: "The Royal Lawns",
            guests: 240,
            budget: "₹60,00,000",
            status: "Locked",
            statusColor: "slate",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            name: "Reception Dinner",
            date: "Jan 19, 2025",
            time: "8:00 PM Onwards",
            venue: "Sunset Terrace",
            guests: 300,
            budget: "₹35,00,000",
            status: "Draft",
            statusColor: "slate",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
    ];

    return (
        <main suppressHydrationWarning className="flex-1 p-10 space-y-8 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-display font-bold text-slate-900">My Events</h1>
                    <p className="text-slate-500 mt-1">Detailed breakdown of your wedding functions.</p>
                </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((event) => (
                    <div key={event.id} className="group bg-white rounded-2xl border border-[#DEDFDB] overflow-hidden hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col">

                        {/* Image Header */}
                        <div className="h-48 relative overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md border shadow-sm
                                    ${event.statusColor === 'amber' ? 'bg-amber-500/90 text-white border-amber-400' : ''}
                                    ${event.statusColor === 'green' ? 'bg-emerald-500/90 text-white border-emerald-400' : ''}
                                    ${event.statusColor === 'slate' ? 'bg-slate-800/90 text-white border-slate-700' : ''}
                                `}>
                                    {event.status}
                                </span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-6 text-white">
                                <h3 className="text-xl font-bold font-display">{event.name}</h3>
                                <p className="text-xs font-medium opacity-90 flex items-center gap-1.5 mt-0.5">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    {event.venue}
                                </p>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div className="grid grid-cols-2 gap-y-4 mb-6">
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Date & Time</p>
                                    <p className="text-sm font-semibold text-slate-700 mt-0.5">{event.date}</p>
                                    <p className="text-xs text-slate-500">{event.time}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Guest Count</p>
                                    <p className="text-sm font-semibold text-slate-700 mt-0.5">{event.guests} Guests</p>
                                    <p className="text-xs text-slate-500">Expected</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Allocated Budget</p>
                                    <p className="text-sm font-semibold text-slate-700 mt-0.5">{event.budget}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Readiness</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${event.status === 'Approved' ? 'bg-emerald-500' : event.status === 'Review' ? 'bg-amber-500' : 'bg-slate-300'}`}
                                                style={{ width: event.status === 'Approved' ? '100%' : event.status === 'Review' ? '80%' : '30%' }}
                                            ></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500">
                                            {event.status === 'Approved' ? '100%' : event.status === 'Review' ? '80%' : '30%'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-slate-50 text-slate-600 border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors flex items-center justify-center gap-2">
                                Manage Function
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
