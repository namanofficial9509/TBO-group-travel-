"use client";

import Link from "next/link";
import { useState } from "react";

export default function HostDashboard() {
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    return (
        <main className="flex-1 p-10 space-y-10 overflow-y-auto">
            {/* Header */}
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold text-slate-900">Welcome back, Siddharth</h1>
                    <p className="text-slate-500 mt-1">Here is the executive summary for <span className="font-bold text-slate-900">The Kapoor-Sharma Wedding</span></p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#DEDFDB] text-slate-600 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export Report
                    </button>

                    {/* Payment Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-slate-800 transition-all"
                        >
                            <span className="material-symbols-outlined text-lg">add</span>
                            Make Payment
                            <span className="material-symbols-outlined text-sm ml-1">expand_more</span>
                        </button>

                        {isPaymentOpen && (
                            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#DEDFDB] overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                                <div className="p-2 space-y-1">
                                    {[
                                        { label: "Pay Vendor", icon: "storefront" },
                                        { label: "Pay Hotel", icon: "hotel" },
                                        { label: "Advance for Event", icon: "event" },
                                        { label: "Final Settlement", icon: "receipt_long" }
                                    ].map((action, i) => (
                                        <button key={i} className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors text-left">
                                            <span className="material-symbols-outlined text-lg opacity-70">{action.icon}</span>
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Backdrop to close */}
                        {isPaymentOpen && (
                            <div className="fixed inset-0 z-40" onClick={() => setIsPaymentOpen(false)}></div>
                        )}
                    </div>
                </div>
            </header>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Total Guests", value: "240", sub: "200 Confirmed", icon: "groups", color: "blue" },
                    { label: "Total Budget", value: "₹2.4 Cr", sub: "₹1.8 Cr Spent (75%)", icon: "account_balance_wallet", color: "emerald", alert: false },
                    { label: "Pending Approvals", value: "6", sub: "Action Required", icon: "gavel", color: "amber", alert: true },
                    { label: "Days to Go", value: "14", sub: "Jan 18, 2025", icon: "event", color: "slate" },
                ].map((stat, i) => (
                    <div key={i} className={`p-6 bg-white rounded-2xl border ${stat.alert ? "border-amber-200 bg-amber-50/50" : "border-[#DEDFDB]"} shadow-sm`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2 rounded-lg ${stat.alert ? "bg-amber-100 text-amber-600" : "bg-slate-50 text-slate-600"}`}>
                                <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                            </div>
                            {stat.alert && <span className="size-2 rounded-full bg-amber-500 animate-pulse"></span>}
                        </div>
                        <p className="text-3xl font-display font-bold text-slate-900">{stat.value}</p>
                        <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
                        <hr className="my-3 border-slate-100" />
                        <p className={`text-xs font-bold uppercase tracking-wider ${stat.alert ? "text-amber-600" : "text-slate-400"}`}>{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Left Column (2/3) - Events & Guests */}
                <div className="lg:col-span-2 space-y-10">

                    {/* Event Functions */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">Event Functions</h3>
                            <Link href="/host/events" className="text-sm font-bold text-emerald-600 hover:text-emerald-700">View All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { name: "Mehendi", date: "Jan 18 • 11:00 AM", guests: 180, budget: "₹12L", status: "Review", statusColor: "amber" },
                                { name: "Sangeet", date: "Jan 18 • 7:00 PM", guests: 240, budget: "₹45L", status: "Approved", statusColor: "green" },
                                { name: "Wedding Ceremony", date: "Jan 19 • 10:00 AM", guests: 240, budget: "₹60L", status: "Locked", statusColor: "slate" },
                                { name: "Reception", date: "Jan 19 • 8:00 PM", guests: 300, budget: "₹35L", status: "Draft", statusColor: "slate" },
                            ].map((event, i) => (
                                <div key={i} className="group bg-white p-6 rounded-2xl border border-[#DEDFDB] hover:border-emerald-500/30 hover:shadow-md transition-all cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide
                                            ${event.statusColor === 'amber' ? 'bg-amber-50 text-amber-600' : ''}
                                            ${event.statusColor === 'green' ? 'bg-green-50 text-green-600' : ''}
                                            ${event.statusColor === 'slate' ? 'bg-slate-50 text-slate-500' : ''}
                                        `}>
                                            {event.status}
                                        </div>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-emerald-500 transition-colors">arrow_outward</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">{event.name}</h4>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{event.date}</p>

                                    <div className="mt-6 flex items-center justify-between text-sm">
                                        <div>
                                            <p className="text-slate-400 text-xs">Guests</p>
                                            <p className="font-semibold text-slate-700">{event.guests}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-slate-400 text-xs">Budget</p>
                                            <p className="font-semibold text-slate-700">{event.budget}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pending Approvals List */}
                    <div className="bg-white rounded-2xl border border-[#DEDFDB] overflow-hidden">
                        <div className="p-6 border-b border-[#DEDFDB] flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Action Required</h3>
                                <p className="text-xs text-slate-500">6 Items pending your approval</p>
                            </div>
                            <span className="flex size-6 items-center justify-center bg-amber-100 text-amber-600 rounded-full text-xs font-bold">6</span>
                        </div>
                        <div className="divide-y divide-[#DEDFDB]">
                            {[
                                { title: "Approve Decor Upgrade for Mehendi", cost: "₹3,20,000", vendor: "Ferns & Petals", urgency: "High" },
                                { title: "Confirm DJ Lineup for Afterparty", cost: "₹1,50,000", vendor: "DJ Aqueel", urgency: "Medium" },
                                { title: "Finalize Menu Tasting Selection", cost: "—", vendor: "Foodlink", urgency: "High" },
                            ].map((item, i) => (
                                <div key={i} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <span className="material-symbols-outlined">description</span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.vendor} • <span className="font-medium text-slate-700">{item.cost}</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">Reject</button>
                                        <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-sm">Approve</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 text-center border-t border-[#DEDFDB]">
                            <button className="text-xs font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wide">View All Approvals</button>
                        </div>
                    </div>

                </div>

                {/* Right Column (1/3) - Budget & Alerts */}
                <div className="space-y-8">

                    {/* Budget Breakdown */}
                    <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                        <h3 className="text-xl font-display font-medium mb-6 relative z-10">Budget Overview</h3>

                        <div className="space-y-6 relative z-10">
                            {[
                                { cat: "Accommodation", val: 85, spent: "₹85L", total: "₹1.0Cr" },
                                { cat: "Food & Beverage", val: 60, spent: "₹45L", total: "₹75L" },
                                { cat: "Decor & Prod", val: 40, spent: "₹20L", total: "₹50L" },
                                { cat: "Entertainment", val: 90, spent: "₹18L", total: "₹20L" },
                            ].map((b, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="opacity-80">{b.cat}</span>
                                        <span className="font-mono text-emerald-300">{b.spent} <span className="text-white/40">/ {b.total}</span></span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${b.val}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Upcoming Payments List */}
                        <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                            <h4 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">Upcoming Payments (Next 7 days)</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 size-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">hotel</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-bold text-white">Taj Lake Palace</p>
                                            <p className="text-sm font-mono text-emerald-300">₹4,50,000</p>
                                        </div>
                                        <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Accommodation • Due Tomorrow</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 size-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">music_note</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-bold text-white">DJ Advance</p>
                                            <p className="text-sm font-mono text-emerald-300">₹1,20,000</p>
                                        </div>
                                        <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Sangeet • Due in 3 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Alerts */}
                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                        <div className="flex items-center gap-3 mb-4 text-amber-800">
                            <span className="material-symbols-outlined">warning</span>
                            <h4 className="font-bold">Attention Needed</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="text-sm text-amber-900/80 flex gap-2">
                                <span className="mt-1.5 size-1.5 rounded-full bg-amber-500"></span>
                                Confirm total room count by Friday to avoid cancellation fees.
                            </li>
                            <li className="text-sm text-amber-900/80 flex gap-2">
                                <span className="mt-1.5 size-1.5 rounded-full bg-amber-500"></span>
                                12 VIP guests have invalid flight details.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}
