"use client";

import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function BanquetsPage() {
    const venues = [
        {
            name: "Mewar Terrace",
            type: "Outdoor",
            capacity: "400 Pax",
            status: "Booked",
            event: "Sangeet Ceremony",
            time: "19:00 - 01:00",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Durbar Hall",
            type: "Ballroom",
            capacity: "250 Pax",
            status: "Setup in Progress",
            event: "Wedding Reception",
            time: "Tomorrow, 12:00",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold text-[#002147]">Space & Banquets</h1>
                    <p className="text-slate-500 mt-2">Manage venue allocation and setup schedules.</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
                {venues.map((venue, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
                        <div className="h-48 relative">
                            <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#002147] uppercase tracking-wide">
                                {venue.status}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#002147]">{venue.name}</h3>
                                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                                        <Building2 className="size-4" />
                                        {venue.type} • {venue.capacity}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4">
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Allocated Event</p>
                                <p className="font-bold text-[#002147] flex items-center gap-2">
                                    <Calendar className="size-4 text-emerald-500" />
                                    {venue.event}
                                </p>
                                <p className="text-xs text-slate-500 mt-1 pl-6">{venue.time}</p>
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                                    View Floor Plan
                                </button>
                                <button className="flex-1 py-2.5 rounded-lg bg-[#002147] text-white font-bold text-sm hover:bg-[#003366] transition-colors">
                                    Update Status
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
