"use client";

import Link from "next/link";
import { useState } from "react";
import { useEvents } from "@/context/EventContext";
import CreateEventModal from "@/components/dashboard/CreateEventModal";

export default function PlannerHome() {
    const { events } = useEvents();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState("All Events");

    const filteredEvents = filter === "All Events"
        ? events
        : events.filter(e => e.type === (filter === "Weddings" ? "Wedding" : filter === "Retreats" ? "MICE" : filter));

    return (
        <div className="min-h-screen bg-ivory-mist font-sans" suppressHydrationWarning>
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-black/5 bg-ivory-mist/80 backdrop-blur-md px-6 py-4">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-8">
                    <div className="flex items-center gap-10 flex-1">
                        <div className="flex items-center gap-3">
                            <div className="text-emerald-teal">
                                <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-display font-bold tracking-tight hidden lg:block text-charcoal-ink">Studio Planner</h1>
                        </div>
                        <div className="relative max-w-md w-full">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-charcoal-ink/40 text-[20px]">search</span>
                            </div>
                            <input className="w-full bg-soft-ash border-none rounded-full py-2 pl-10 pr-12 text-sm focus:ring-1 focus:ring-emerald-teal placeholder:text-charcoal-ink/40 outline-none" placeholder="Search events or destinations..." type="text" />
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <span className="text-[10px] font-semibold bg-black/5 px-1.5 py-0.5 rounded text-charcoal-ink/40">⌘K</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-semibold text-emerald-teal" href="#">Portfolio</a>
                            <Link className="text-sm font-medium text-charcoal-ink/60 hover:text-charcoal-ink" href="/dashboard/calendar">Calendar</Link>
                            <Link className="text-sm font-medium text-charcoal-ink/60 hover:text-charcoal-ink" href="/dashboard/partners">Partners</Link>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center justify-center size-10 rounded-full hover:bg-soft-ash relative">
                                <span className="material-symbols-outlined text-charcoal-ink/70">notifications</span>
                                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-ivory-mist"></span>
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-emerald-teal text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-teal-accent transition-colors shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[18px]">add</span>
                                <span className="hidden sm:inline">New Event</span>
                            </button>
                        </div>
                        <div className="size-9 rounded-full bg-center bg-cover ring-2 ring-emerald-teal/10 cursor-pointer" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJXMabMBX-CSyKtMmNAzuV4um5ZVWPG27t31tclvfaLdKDxGv91lmQkM0SoSw-HwQn2ZjprG7pnswFf_YBmQQ7p2VI9KfAF34Pw2n_UV8thvqgmT2DNaPiR5khNa2m4iskHG89CeZRFuNr6JzpXmsPcj7qB7p0iw280rDFgW9S7nQxOsjvMpUjDJWU94zsokf9-dXEiqNBrOfJXUBr6RcTGpw2jiaQCAc3Raugi7u12LhORrrqsUGx9b-E-OUxxJNGZ2kHu_-BQDs')" }}></div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <h2 className="text-4xl font-display font-medium mb-3 text-charcoal-ink">Event Portfolio</h2>
                        <p className="text-charcoal-ink/60 text-base">Managing premium Indian group travel and high-impact MICE productions.</p>
                    </div>
                    <div className="flex items-center p-1 bg-soft-ash rounded-full border border-black/5">
                        {["All Events", "MICE", "Weddings"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${filter === tab ? "bg-white shadow-sm text-emerald-teal" : "text-charcoal-ink/60 hover:text-charcoal-ink"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                    {/* Dynamic Event Cards */}
                    {filteredEvents.map(event => (
                        <Link key={event.id} href={`/dashboard/events/${event.id}`} className="bg-soft-ash rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-black/5 group cursor-pointer block">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-lg ${event.type === 'Wedding' ? 'bg-emerald-teal' : 'bg-charcoal-ink'}`}>
                                        {event.type}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-emerald-teal text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                        <span className={`size-1.5 rounded-full ${event.status === 'Live' ? 'bg-emerald-teal' : 'bg-amber-500'}`}></span>
                                        {event.status}
                                    </span>
                                </div>
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${event.image}')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/90 via-[#1F2933]/30 to-transparent"></div>
                                <div className="absolute bottom-4 left-5 pr-5">
                                    <p className="text-white font-display text-2xl mb-1">{event.name}</p>
                                    <p className="text-white/80 text-xs font-medium tracking-wide">{event.destination} • {event.date}</p>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-5">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs font-bold tracking-tight uppercase text-charcoal-ink/50">
                                        <span>{event.type === 'Wedding' ? 'RSVP Progress' : 'Sourcing Status'}</span>
                                        <span className={event.type === 'Wedding' ? 'text-emerald-teal' : 'text-charcoal-ink/40'}>{event.progress}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full ${event.type === 'Wedding' ? 'bg-emerald-teal' : 'bg-charcoal-ink/20'}`} style={{ width: `${event.progress}%` }}></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {event.checklist.slice(0, 1).map((item, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full bg-black/5 text-charcoal-ink/60 text-[10px] font-bold uppercase tracking-wider border border-black/5 truncate max-w-full">
                                            {item}
                                        </span>
                                    ))}
                                    {event.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider border border-amber-200 flex items-center gap-1.5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* New Event Card (Always last) */}
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white rounded-2xl border-2 border-dashed border-charcoal-ink/10 p-6 flex flex-col min-h-[400px] hover:border-emerald-teal/40 transition-all duration-300 group text-left cursor-pointer"
                        role="button"
                        tabIndex={0}
                    >
                        <div className="flex flex-col items-center justify-center flex-1 border-b border-black/5 pb-6 w-full">
                            <div className="size-14 rounded-full bg-soft-ash flex items-center justify-center text-charcoal-ink/30 group-hover:text-emerald-teal group-hover:bg-emerald-teal/10 transition-all duration-300">
                                <span className="material-symbols-outlined text-[32px]">add_circle</span>
                            </div>
                            <p className="mt-4 text-xl font-display font-semibold text-charcoal-ink">Start New Event</p>
                            <p className="text-xs text-charcoal-ink/40 mt-1 uppercase tracking-widest font-bold">Launch a fresh project</p>
                        </div>
                        <div className="pt-6 w-full">
                            <p className="text-[10px] font-bold text-charcoal-ink/40 uppercase tracking-[0.2em] mb-4 text-center">Quick Templates</p>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="w-full flex items-center justify-between p-3 rounded-xl bg-soft-ash hover:bg-emerald-teal hover:text-white transition-all group/btn">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[20px]">temple_hindu</span>
                                        <span className="text-sm font-medium">Destination Wedding</span>
                                    </div>
                                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover/btn:opacity-100">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-display font-medium mb-6 flex items-center gap-3 text-charcoal-ink">
                            <span className="material-symbols-outlined text-emerald-teal">analytics</span>
                            Inventory Performance
                        </h3>
                        <div className="bg-soft-ash rounded-2xl p-8 border border-black/5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-8">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between text-sm items-end">
                                            <span className="font-bold uppercase tracking-widest text-[10px] text-charcoal-ink/50">National Hotel Blocks</span>
                                            <span className="text-charcoal-ink font-medium">1,240 / 1,500 <span className="text-emerald-teal ml-2">(82%)</span></span>
                                        </div>
                                        <div className="w-full h-2 bg-black/5 rounded-full">
                                            <div className="h-full bg-emerald-teal rounded-full" style={{ width: "82%" }}></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex justify-between text-sm items-end">
                                            <span className="font-bold uppercase tracking-widest text-[10px] text-charcoal-ink/50">Charter Connectivity</span>
                                            <span className="text-charcoal-ink font-medium">8 / 10 Active <span className="text-amber-600 ml-2">(80%)</span></span>
                                        </div>
                                        <div className="w-full h-2 bg-black/5 rounded-full">
                                            <div className="h-full bg-amber-500 rounded-full" style={{ width: "80%" }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center bg-white/40 p-6 rounded-2xl border border-black/5">
                                    <p className="text-[10px] font-bold text-charcoal-ink/40 uppercase tracking-widest mb-2">Total Managed Volume</p>
                                    <p className="text-4xl font-display font-bold text-emerald-teal">₹8.42 Cr</p>
                                    <p className="text-xs text-charcoal-ink/60 mt-2 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px] text-emerald-500">trending_up</span>
                                        +14.2% vs last quarter
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-display font-medium mb-6 text-charcoal-ink">Recent Alerts</h3>
                        <div className="flex flex-col gap-4">
                            <div className="p-5 bg-white rounded-2xl border border-black/5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex gap-5 items-start">
                                <div className="size-10 rounded-full bg-emerald-teal/10 flex items-center justify-center text-emerald-teal shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">payments</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-charcoal-ink">Payment Received</p>
                                    <p className="text-xs text-charcoal-ink/60 mt-1 leading-relaxed">Deposit for Udaipur Wedding: ₹25,00,000 confirmed.</p>
                                    <p className="text-[10px] font-bold text-emerald-teal/60 uppercase tracking-widest mt-2">Just now</p>
                                </div>
                            </div>
                            <div className="p-5 bg-white rounded-2xl border border-black/5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex gap-5 items-start relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                                <div className="size-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">assignment_late</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-charcoal-ink">Contract Deadline</p>
                                    <p className="text-xs text-charcoal-ink/60 mt-1 leading-relaxed">Goa Retreat vendor contracts expiring in 24h.</p>
                                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-2 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[12px]">alarm</span> URGENT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CreateEventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </main>
        </div>
    );
}
