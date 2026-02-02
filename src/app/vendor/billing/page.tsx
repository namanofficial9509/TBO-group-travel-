"use client";

import { Landmark, Receipt, Download, ArrowUpRight } from "lucide-react";

export default function BillingPage() {


    const transactions = [
        { id: "#INV-004", desc: "Advance Payment - 40%", date: "Nov 15, 2024", amount: "₹12,40,000", status: "Paid", type: "credit" },
        { id: "#INV-005", desc: "Rooming List Expansion (+10 Rooms)", date: "Jan 10, 2025", amount: "₹2,50,000", status: "Paid", type: "credit" },
        { id: "PENDING", desc: "F&B Consumption (Sangeet)", date: "-", amount: "₹4,20,000", status: "Unbilled", type: "pending" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold text-[#002147]">Settlement & Billing</h1>
                    <p className="text-slate-500 mt-2">Master Account Ledger and Incidentals Tracking.</p>
                </div>
                <button className="flex items-center gap-2 bg-[#002147] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg">
                    <Download className="size-4" />
                    Download Statement
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#002147] rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-xs opacity-60 uppercase tracking-widest font-bold mb-1">Total Contract Value</p>
                        <h3 className="text-3xl font-display font-bold">₹42,50,000</h3>
                        <p className="text-xs mt-4 opacity-80 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Verified by Finance
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Amount Received</p>
                    <h3 className="text-3xl font-display font-bold text-emerald-600">₹14,90,000</h3>
                    <p className="text-xs text-slate-500 mt-4 font-bold">35% of Total</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Pending Balance</p>
                    <h3 className="text-3xl font-display font-bold text-slate-800">₹27,60,000</h3>
                    <p className="text-xs text-slate-500 mt-4 font-bold">Due by Jan 30</p>
                </div>
            </div>

            {/* Ledger Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-[#002147]">Master Account Ledger</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50/50 text-xs uppercase text-slate-400 tracking-widest">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Description</th>
                            <th className="px-6 py-4 font-semibold">Reference ID</th>
                            <th className="px-6 py-4 font-semibold">Date</th>
                            <th className="px-6 py-4 font-semibold text-right">Amount</th>
                            <th className="px-6 py-4 font-semibold text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {transactions.map((tx, idx) => (
                            <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-700">{tx.desc}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 font-mono">{tx.id}</td>
                                <td className="px-6 py-4 text-sm text-slate-500">{tx.date}</td>
                                <td className="px-6 py-4 text-right font-bold text-slate-800">{tx.amount}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${tx.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200'
                                        }`}>
                                        {tx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
