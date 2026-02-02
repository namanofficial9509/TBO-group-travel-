"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

export default function BudgetPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [filter, setFilter] = useState("all");

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
        <div className={`flex flex-col h-full bg-[#FAF9F7] p-8 overflow-y-auto ${theme.bg}`}>
            <div className="max-w-[1600px] mx-auto w-full space-y-8">

                {/* Header */}
                <div className="flex justify-between items-end border-b border-[#DEDFDB] pb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Finance</span>
                            <span className="text-slate-300">/</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText}`}>{isRice ? "P&L View" : "Cost Center"}</span>
                        </div>
                        <h1 className="text-3xl font-display font-medium text-[#1F2933]">
                            {isRice ? "Event Financials & P&L" : "Budget & Payments"}
                        </h1>
                    </div>
                </div>


                {/* Financial Health Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#1F2933] text-white p-6 rounded-xl relative overflow-hidden shadow-xl">
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{isRice ? "Total Revenue Projected" : "Total Estimated Cost"}</p>
                            <h2 className="text-3xl font-display font-medium mb-4">₹ {isRice ? "1,20,00,000" : "4,25,00,000"}</h2>
                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                {isRice ? "14% Above Target" : "Within Limit"}
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-9xl">account_balance_wallet</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{isRice ? "Costs Incurred" : "Paid to Date"}</p>
                        <h2 className={`text-3xl font-display font-medium ${theme.primary} mb-4`}>₹ {isRice ? "45,00,000" : "1,12,00,000"}</h2>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div className={`h-full ${theme.emeraldFill} rounded-full`} style={{ width: "35%" }}></div>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 mt-2 text-right">35% Fulfilled</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Pending Invoices</p>
                        <h2 className="text-3xl font-display font-medium text-amber-500 mb-4">₹ {isRice ? "12,50,000" : "85,00,000"}</h2>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-slate-300 hover:text-slate-800 transition-colors">
                            View 4 Invoices
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
                        <h3 className="font-display font-medium text-lg text-slate-800">Expense Breakdown</h3>
                        <div className="flex gap-2">
                            {['All', isRice ? 'Production' : 'Venue', isRice ? 'Marketing' : 'Catering', isRice ? 'Logistics' : 'Decor'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab.toLowerCase())}
                                    className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wide transition-colors ${filter === tab.toLowerCase() ? `${theme.emeraldBg} ${theme.emeraldText}` : 'text-slate-500 hover:bg-slate-50'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Category / Vendor</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Allocation</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Cost Center</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</th>
                                <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {(isRice ? [
                                { cat: "Production", vendor: "SoundPro India", budget: "₹ 15,00,000", payer: "Marketing Budget", status: "Partially Paid", amt: "₹ 5,00,000" },
                                { cat: "Venue", vendor: "Pullman Aerocity", budget: "₹ 25,00,000", payer: "Events Team", status: "Pending", amt: "₹ 25,00,000" },
                                { cat: "Marketing", vendor: "Digital Ads", budget: "₹ 8,00,000", payer: "Sponsor A", status: "Paid", amt: "₹ 8,00,000" }
                            ] : [
                                { cat: "Venue", vendor: "The City Palace", budget: "₹ 1,50,00,000", payer: "Groom Side", status: "Paid", amt: "₹ 1,50,00,000" },
                                { cat: "Catering", vendor: "Food Inc.", budget: "₹ 85,00,000", payer: "Bride Side", status: "Partially Paid", amt: "₹ 40,00,000" },
                                { cat: "Decor", vendor: "Ferns & Petals", budget: "₹ 60,00,000", payer: "Joint Account", status: "Pending", amt: "₹ 60,00,000" }
                            ]).map((item, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-4">
                                        <div className="font-bold text-slate-800 text-sm">{item.cat}</div>
                                        <div className="text-xs text-slate-400">{item.vendor}</div>
                                    </td>
                                    <td className="px-8 py-4 font-mono text-xs text-slate-600">{item.budget}</td>
                                    <td className="px-8 py-4 text-xs font-bold text-slate-500 uppercase">{item.payer}</td>
                                    <td className="px-8 py-4">
                                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide ${item.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                                                item.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                                            }`}>{item.status}</span>
                                    </td>
                                    <td className="px-8 py-4 text-right font-display font-medium text-slate-800">
                                        {item.amt}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
