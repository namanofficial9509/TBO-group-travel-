"use client";

import { Plane, Utensils, CreditCard, Search, Download, MoreHorizontal, UserCheck } from "lucide-react";

export default function RoomingList() {
    const guests = [
        {
            name: "Rahul & Anjali Kapoor",
            type: "Wedding Party",
            room: "Heritage Suite",
            checkIn: "Jan 18",
            checkOut: "Jan 20",
            flight: "AI 445 (10:30 AM)",
            dietary: "Jain / Vegan",
            payment: "Paid",
            status: "Checked In"
        },
        {
            name: "Mr. Thomas Anderson",
            type: "Delegate",
            room: "Lake View Deluxe",
            checkIn: "Jan 18",
            checkOut: "Jan 21",
            flight: "Pending",
            dietary: "None",
            payment: "Pending",
            status: "Confirmed"
        },
        {
            name: "Sarah Jenkins",
            type: "Speaker",
            room: "Lake View Deluxe",
            checkIn: "Jan 19",
            checkOut: "Jan 21",
            flight: "BA 112 (06:00 PM)",
            dietary: "Gluten Free",
            payment: "Paid (Host)",
            status: "Confirmed"
        }
    ];

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm mt-8">
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-display font-bold text-[#002147]">Live Rooming List</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Real-time Guest Manifest • 2 Recent Updates</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search guest..."
                            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#002147]/20 w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#002147] text-white rounded-lg text-sm font-bold hover:bg-[#003366] transition-colors shadow-lg shadow-[#002147]/20">
                        <Download className="size-4" />
                        Export PMS
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50/50">
                        <tr className="border-b border-slate-100 text-xs uppercase tracking-widest text-slate-400">
                            <th className="px-6 py-4 font-semibold w-12">
                                <input type="checkbox" className="rounded border-slate-300" />
                            </th>
                            <th className="px-6 py-4 font-semibold">Guest Name</th>
                            <th className="px-6 py-4 font-semibold">Room Type</th>
                            <th className="px-6 py-4 font-semibold">Stay Dates</th>
                            <th className="px-6 py-4 font-semibold">Preferences</th>
                            <th className="px-6 py-4 font-semibold">Payment</th>
                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {guests.map((guest, idx) => (
                            <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="rounded border-slate-300" />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs ring-2 ring-white shadow-sm">
                                            {guest.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-[#002147] text-sm">{guest.name}</span>
                                                <UserCheck className="size-3 text-emerald-500" />
                                            </div>
                                            <span className="text-[10px] text-slate-400 uppercase tracking-wide">{guest.type}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                    {guest.room}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col text-xs">
                                        <span className="text-slate-700 font-bold">{guest.checkIn} - {guest.checkOut}</span>
                                        <span className="text-slate-400">3 Nights</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        {guest.flight !== "Pending" && (
                                            <div className="group/tooltip relative">
                                                <Plane className="size-4 text-slate-400 hover:text-[#002147] cursor-help" />
                                            </div>
                                        )}
                                        {guest.dietary !== "None" && (
                                            <div className="group/tooltip relative">
                                                <Utensils className="size-4 text-amber-500 cursor-help" />
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${guest.payment.includes("Paid") ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-100 text-slate-600 border-slate-200"
                                        }`}>
                                        <CreditCard className="size-3" />
                                        {guest.payment}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-[#002147] transition-colors">
                                        <MoreHorizontal className="size-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
