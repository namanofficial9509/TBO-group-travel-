"use client";

import { AlertTriangle, Clock, CheckCircle2 } from "lucide-react";

export default function InventoryGrid() {
    const inventory = [
        {
            category: "Heritage Suite",
            totalLocked: 25,
            pickedUp: 22,
            rate: "₹45,000",
            cutoff: "48h",
            status: "critical" // critical = < 48h and unbooked
        },
        {
            category: "Lake View Deluxe",
            totalLocked: 50,
            pickedUp: 15,
            rate: "₹22,000",
            cutoff: "14 Days",
            status: "healthy"
        },
        {
            category: "Pool Villa",
            totalLocked: 10,
            pickedUp: 10,
            rate: "₹65,000",
            cutoff: "Closed",
            status: "sold-out"
        }
    ];

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                    <h3 className="text-lg font-display font-bold text-[#002147]">Inventory Vault</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Contracted Allotment • Yield Management</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Sync Active
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-slate-100 text-xs uppercase tracking-widest text-slate-400">
                            <th className="px-6 py-4 font-semibold">Room Category</th>
                            <th className="px-6 py-4 font-semibold text-center">Negotiated Rate</th>
                            <th className="px-6 py-4 font-semibold text-center">Total Allotment</th>
                            <th className="px-6 py-4 font-semibold text-center">Current Pick-up</th>
                            <th className="px-6 py-4 font-semibold text-center">Remaining</th>
                            <th className="px-6 py-4 font-semibold">Validity Tracker</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {inventory.map((item, idx) => {
                            const remaining = item.totalLocked - item.pickedUp;
                            const isCritical = item.status === 'critical' && remaining > 0;

                            return (
                                <tr key={idx} className={`group transition-colors hover:bg-slate-50 ${isCritical ? 'bg-amber-50/30' : ''}`}>
                                    <td className="px-6 py-5">
                                        <span className="font-bold text-[#002147] text-sm block">{item.category}</span>
                                        <span className="text-[10px] text-slate-400 uppercase">Room Only + Breakfast</span>
                                    </td>
                                    <td className="px-6 py-5 text-center font-mono text-slate-600 font-medium">
                                        {item.rate}
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-flex items-center justify-center size-8 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs">
                                            {item.totalLocked}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-flex items-center justify-center size-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-100">
                                            {item.pickedUp}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`inline-flex items-center justify-center size-8 rounded-lg font-bold text-xs ${remaining === 0 ? 'bg-slate-100 text-slate-400' : 'bg-[#002147] text-white'}`}>
                                            {remaining}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        {item.status === 'sold-out' ? (
                                            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full w-fit">
                                                <CheckCircle2 className="size-3.5" />
                                                <span className="text-[10px] font-bold uppercase tracking-wide">Sold Out</span>
                                            </div>
                                        ) : (
                                            <div className={`flex items-center gap-3 ${isCritical ? 'animate-pulse' : ''}`}>
                                                <div className={`p-2 rounded-lg ${isCritical ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                                                    {isCritical ? <AlertTriangle className="size-4" /> : <Clock className="size-4" />}
                                                </div>
                                                <div>
                                                    <p className={`text-xs font-bold uppercase ${isCritical ? 'text-amber-600' : 'text-slate-600'}`}>
                                                        {isCritical ? 'Auto-Release Warning' : 'Valid Until'}
                                                    </p>
                                                    <p className="text-[10px] text-slate-400">Cut-off: {item.cutoff}</p>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
