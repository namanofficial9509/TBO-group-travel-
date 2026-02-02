"use client";

import { useState } from "react";

export default function HostApprovalsPage() {
    const [previewId, setPreviewId] = useState<number | null>(null);

    const approvals = [
        {
            id: 1,
            title: "Mehendi Decor Upgrade",
            vendor: "Ferns & Petals",
            cost: 320000,
            category: "Decor",
            deadline: "Tomorrow",
            impact: "High",
            description: "Upgrade from Standard Marigold to Exotic Orchids & Drapery theme.",
            consequences: [
                "Increases Decor Budget by ₹3.2L (Overrun warning)",
                "Locks contract for Mehendi Event",
                "Non-refundable advance of ₹1.0L required immediately"
            ]
        },
        {
            id: 2,
            title: "DJ Lineup Confirmation",
            vendor: "DJ Aqueel",
            cost: 150000,
            category: "Entertainment",
            deadline: "Jan 20",
            impact: "Medium",
            description: "Finalize artist for Sangeet Afterparty (11 PM - 3 AM).",
            consequences: [
                "Deducts ₹1.5L from Entertainment allocation",
                "Requires sound system rider approval",
                "Buffer budget reduces to ₹80k"
            ]
        },
        {
            id: 3,
            title: "Menu Tasting Finalization",
            vendor: "Foodlink",
            cost: 0,
            category: "F&B",
            deadline: "Urgent",
            impact: "Critical",
            description: "Approve the final 6-course menu for the Reception dinner.",
            consequences: [
                "Locks per-plate cost at ₹2800",
                "Triggers inventory order for imported ingredients",
                "No further menu changes allowed after 24 hours"
            ]
        }
    ];

    return (
        <main suppressHydrationWarning className="flex-1 p-10 space-y-8 overflow-y-auto">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-display font-bold text-slate-900">Decision Board</h1>
                <p className="text-slate-500 mt-1">Review pending items, understand the impact, and keep the planning moving.</p>
            </div>

            {/* Approvals Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {approvals.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl border border-[#DEDFDB] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">

                        {/* Card Header */}
                        <div className="p-6 border-b border-[#DEDFDB] flex justify-between items-start">
                            <div className="flex gap-4">
                                <div className="size-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined text-2xl">
                                        {item.category === 'Decor' ? 'local_florist' : item.category === 'Entertainment' ? 'music_note' : 'restaurant'}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.vendor} • <span className="font-semibold text-slate-700">{item.category}</span></p>
                                </div>
                            </div>
                            <div className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${item.impact === 'Critical' ? "bg-red-50 text-red-600 border-red-100" : "bg-amber-50 text-amber-600 border-amber-100"}`}>
                                Due {item.deadline}
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex-1">
                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Financial Impact</p>
                                    <p className="text-xl font-bold text-slate-900 mt-0.5">{item.cost > 0 ? `₹${item.cost.toLocaleString()}` : "No Cost Impact"}</p>
                                </div>
                                <button
                                    onClick={() => setPreviewId(previewId === item.id ? null : item.id)}
                                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                                >
                                    {previewId === item.id ? "Hide Consequences" : "View Consequences"}
                                    <span className="material-symbols-outlined text-base">{previewId === item.id ? "expand_less" : "expand_more"}</span>
                                </button>
                            </div>

                            {/* CONSEQUENCE PREVIEW (Innovation) */}
                            {previewId === item.id && (
                                <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Approval Consequences</p>
                                    <ul className="space-y-2">
                                        {item.consequences.map((c, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                                                <span className={`mt-0.5 material-symbols-outlined text-sm ${c.includes("Overrun") || c.includes("Non-refundable") ? "text-red-500" : "text-emerald-500"}`}>
                                                    {c.includes("Overrun") || c.includes("Non-refundable") ? "warning" : "check_circle"}
                                                </span>
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Card Footer */}
                        <div className="bg-slate-50 p-4 flex gap-3 border-t border-[#DEDFDB]">
                            <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 font-bold text-sm rounded-xl hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors">
                                Reject / Query
                            </button>
                            <button className="flex-1 py-3 bg-slate-900 text-white font-bold text-sm rounded-xl shadow-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-lg">check</span>
                                Approve Details
                            </button>
                        </div>

                    </div>
                ))}
            </div>

        </main>
    );
}
