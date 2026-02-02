"use client";

import { useState } from "react";

export default function HostGuestListPage() {
    const [activeSegment, setActiveSegment] = useState<'all' | 'groom' | 'bride' | 'vip'>('all');

    // Mock Guest Data
    const guests = [
        { id: 1, name: "Arjun & Priya Kapoor", relation: "Cousin (Groom)", rsvp: "Confirmed", room: "Royal Suite", logistics: "Flight Booked", impact: 85000, type: "groom", vip: true },
        { id: 2, name: "Mr. Rajesh Sharma", relation: "Uncle (Bride)", rsvp: "Confirmed", room: "Lake View Room", logistics: "Pending", impact: 42000, type: "bride", vip: true },
        { id: 3, name: "Sarah Jenkins", relation: "Friend (Groom)", rsvp: "Pending", room: "Not Assigned", logistics: "Pending", impact: 0, type: "groom", vip: false },
        { id: 4, name: "Ananya Mehra", relation: "Sister (Bride)", rsvp: "Confirmed", room: "Heritage Room", logistics: "Arrived", impact: 55000, type: "bride", vip: true },
        { id: 5, name: "Rahul Verma", relation: "Colleague", rsvp: "Declined", room: "—", logistics: "—", impact: 0, type: "groom", vip: false },
    ];

    const filteredGuests = guests.filter(g => {
        if (activeSegment === 'all') return true;
        if (activeSegment === 'vip') return g.vip;
        return g.type === activeSegment;
    });

    return (
        <main suppressHydrationWarning className="flex-1 p-10 space-y-8 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-display font-bold text-slate-900">Guest List Management</h1>
                    <p className="text-slate-500 mt-1">Manage invites, logistics, and understand the financial impact of your guest list.</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-slate-800 transition-all">
                    <span className="material-symbols-outlined text-lg">person_add</span>
                    Add Guest
                </button>
            </div>

            {/* Segments & Stats */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-2 rounded-2xl border border-[#DEDFDB] shadow-sm">
                <div className="flex p-1 bg-slate-100 rounded-xl">
                    {[
                        { id: 'all', label: "All Guests" },
                        { id: 'groom', label: "Groom's Side" },
                        { id: 'bride', label: "Bride's Side" },
                        { id: 'vip', label: "VIPs" }
                    ].map((seg) => (
                        <button
                            key={seg.id}
                            onClick={() => setActiveSegment(seg.id as 'all' | 'groom' | 'bride' | 'vip')}
                            className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${activeSegment === seg.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
                        >
                            {seg.label}
                        </button>
                    ))}
                </div>
                <div className="flex gap-6 pr-6">
                    <div className="text-right">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Count</p>
                        <p className="text-xl font-bold text-slate-900">240 <span className="text-sm font-medium text-slate-400">/ 300</span></p>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="text-right">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">RSVP Rate</p>
                        <p className="text-xl font-bold text-emerald-600">82%</p>
                    </div>
                </div>
            </div>

            {/* Guest Table */}
            <div className="bg-white rounded-2xl border border-[#DEDFDB] shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-[#DEDFDB]">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Guest Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Relationship</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">RSVP & Logistics</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                                <div className="flex items-center justify-end gap-1">
                                    Impact Meter
                                    <span className="material-symbols-outlined text-sm text-slate-400" title="Total estimated cost per guest including stay and meals">info</span>
                                </div>
                            </th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DEDFDB]">
                        {filteredGuests.map((guest) => (
                            <tr key={guest.id} className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm ${guest.vip ? "bg-amber-100 text-amber-700 ring-2 ring-amber-100 ring-offset-2" : "bg-slate-100 text-slate-600"}`}>
                                            {guest.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">{guest.name}</p>
                                            <p className="text-xs text-slate-500">{guest.room}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${guest.type === 'groom' ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-pink-50 text-pink-700 border-pink-100"
                                        }`}>
                                        {guest.relation}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2">
                                            <span className={`size-2 rounded-full ${guest.rsvp === 'Confirmed' ? "bg-emerald-500" :
                                                guest.rsvp === 'Pending' ? "bg-amber-500" : "bg-slate-300"
                                                }`}></span>
                                            <span className="text-sm font-medium text-slate-700">{guest.rsvp}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <span className="material-symbols-outlined text-[14px]">flight_land</span>
                                            {guest.logistics}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {guest.impact > 0 ? (
                                        <div className="inline-flex flex-col items-end">
                                            <span className="text-sm font-bold text-slate-900">₹{guest.impact.toLocaleString()}</span>
                                            <div className="h-1.5 w-24 bg-slate-100 rounded-full mt-1 overflow-hidden">
                                                <div
                                                    className="h-full bg-amber-500 rounded-full"
                                                    style={{ width: `${Math.min((guest.impact / 100000) * 100, 100)}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-[10px] text-slate-400 mt-0.5">Cost Impact</span>
                                        </div>
                                    ) : (
                                        <span className="text-xs text-slate-400 italic">No cost allocated</span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
