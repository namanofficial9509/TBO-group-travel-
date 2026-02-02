"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useEvents } from "@/context/EventContext";

export default function EventWorkspace() {
    const params = useParams();
    const router = useRouter();
    const { events } = useEvents();

    // ID extraction
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    // Dynamic Theme Config
    const theme = isRice ? {
        primary: "text-slate-900",
        secondary: "text-slate-500",
        accent: "text-blue-600",
        bg: "bg-[#F8FAFC]",
        cardBg: "bg-white",
        border: "border-slate-200",
        button: "bg-blue-600 hover:bg-blue-700",
        buttonSecondary: "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50",
        highlight: "bg-blue-50 text-blue-700",
        progressTrack: "bg-slate-100",
        progressFill: "bg-blue-500",
        iconContainer: "bg-blue-50 text-blue-600"
    } : {
        primary: "text-charcoal-ink",
        secondary: "text-charcoal-ink/60",
        accent: "text-[#ee2b5b]",
        bg: "bg-ivory-mist",
        cardBg: "bg-white",
        border: "border-black/5",
        button: "bg-[#ee2b5b] hover:bg-[#d92550]",
        buttonSecondary: "bg-white border border-black/5 text-charcoal-ink hover:bg-soft-ash",
        highlight: "bg-[#ee2b5b]/10 text-[#ee2b5b]",
        progressTrack: "bg-black/5",
        progressFill: "bg-[#ee2b5b]",
        iconContainer: "bg-[#ee2b5b]/10 text-[#ee2b5b]"
    };

    const [status, setStatus] = useState<string>('PLANNING');

    if (!currentEvent) return <div className="flex items-center justify-center h-screen text-slate-400">Loading Event...</div>;

    return (
        <main className={`flex-1 flex flex-col overflow-y-auto h-screen ${theme.bg} font-sans`}>

            {/* Top Bar */}
            <header className={`h-16 bg-white border-b ${theme.border} px-8 flex items-center justify-between shrink-0 sticky top-0 z-40`}>
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">{currentEvent.name}</h1>
                    <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                        <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${status === 'PLANNING' ? "bg-white text-slate-800 shadow-sm" : "text-slate-400"}`}>Planning</span>
                        <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${status === 'LIVE' ? "bg-white text-slate-800 shadow-sm" : "text-slate-400"}`}>Live</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-500 uppercase tracking-widest ml-2">
                        <span className="size-1.5 rounded-full bg-amber-500"></span>
                        Unsaved changes
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-xs font-bold uppercase tracking-widest transition-colors mr-2">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                        Preview
                    </button>
                    <button className={`flex items-center gap-2 px-5 py-2 ${theme.button} text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg transition-all active:scale-95`}>
                        <span className="material-symbols-outlined text-lg">save</span>
                        Save Workspace
                    </button>
                </div>
            </header>

            {/* Content Body */}
            <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full pb-20">

                {/* Hero Section */}
                <div className={`rounded-2xl p-2 border shadow-sm flex flex-col md:flex-row ${theme.cardBg} ${theme.border}`}>
                    {/* Image */}
                    <div className="w-full md:w-1/3 aspect-video relative rounded-xl overflow-hidden group">
                        <img
                            src={isRice ? "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200"}
                            alt="Event Cover"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-0.5">Event Preview</p>
                            <p className="text-sm font-bold">{currentEvent.name}</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h2 className={`text-2xl font-bold ${theme.primary}`}>Event Configuration</h2>
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-[10px] font-bold uppercase tracking-widest">3 of 8 Active</span>
                            </div>
                            <p className={`${theme.secondary} text-sm leading-relaxed max-w-2xl`}>
                                {isRice ? "Manage corporate attendees, session scheduling, and resource allocation." : "Curate exclusive delegate experiences by bundling logistics, catering, and accommodations."}
                            </p>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button className={`flex items-center gap-2 px-6 py-2.5 ${theme.button} text-white rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all`}>
                                <span className="material-symbols-outlined text-lg">add_circle</span>
                                {isRice ? "Create New Bundle" : "Add Service"}
                            </button>
                            <button className={`flex items-center gap-2 px-6 py-2.5 ${theme.buttonSecondary} rounded-lg text-sm font-bold transition-all`}>
                                <span className="material-symbols-outlined text-lg">link</span>
                                Copy Portal Link
                            </button>
                        </div>
                    </div>
                </div>

                {/* Milestones Tracker */}
                <div className={`rounded-2xl border p-8 shadow-sm ${theme.cardBg} ${theme.border}`}>
                    <div className="mb-8">
                        <h3 className={`text-lg font-bold ${theme.primary}`}>{isRice ? "Packaging Milestones" : "Wedding Production Timeline"}</h3>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">{isRice ? "Project Roadmap & Inventory Locking" : "Critical Path to Big Day"}</p>
                    </div>

                    <div className="relative px-12 pb-4">
                        {/* Line */}
                        <div className={`absolute top-5 left-20 right-20 h-0.5 ${theme.progressTrack} -z-0`}></div>
                        <div className={`absolute top-5 left-20 right-1/2 h-0.5 ${theme.progressFill} -z-0`}></div>

                        <div className="flex justify-between relative z-10 w-full">
                            {(isRice ? [
                                { label: "Draft Created", status: "Done", icon: "check", done: true },
                                { label: "Inventory Linked", status: "Done", icon: "check", done: true },
                                { label: "Price Strategy", status: "Done", icon: "check", done: true },
                                { label: "Final Approval", status: "Pending", icon: "hourglass_empty", done: false }
                            ] : [
                                { label: "Venue Locked", status: "Completed", icon: "church", done: true },
                                { label: "Invites Sent", status: "Completed", icon: "mark_email_read", done: true },
                                { label: "RSVP Tracking", status: "Active", icon: "groups_3", done: true },
                                { label: "Vendor Payments", status: "Due Soon", icon: "payments", done: false }
                            ]).map((step, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 text-center w-32">
                                    <div className={`size-10 rounded-full flex items-center justify-center text-white shadow-lg border-4 ${theme.cardBg} ${step.done ? theme.progressFill : `${theme.progressTrack} ${theme.secondary} opacity-50`}`}>
                                        <span className="material-symbols-outlined text-sm font-bold">{step.icon}</span>
                                    </div>
                                    <div>
                                        <p className={`text-xs font-bold ${theme.primary} mb-0.5`}>{step.label}</p>
                                        <p className={`text-[9px] font-bold uppercase tracking-widest ${step.done ? theme.accent : "text-amber-500"}`}>{step.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Access Grid (Styled like Bundles) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: People */}
                    <div className={`rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer ${theme.cardBg} ${theme.border}`} onClick={() => router.push(`/dashboard/events/${id}/guests`)}>
                        <div className="flex justify-between items-start mb-6">
                            <div className={`size-10 rounded-xl flex items-center justify-center ${theme.iconContainer}`}>
                                <span className="material-symbols-outlined text-xl">{isRice ? "groups" : "favorite"}</span>
                            </div>
                            <span className={`material-symbols-outlined ${theme.secondary} opacity-50 group-hover:opacity-100`}>more_vert</span>
                        </div>

                        <div className="mb-6">
                            <p className={`text-[10px] font-bold ${theme.secondary} opacity-60 uppercase tracking-widest mb-1`}>{isRice ? "Total Attendees" : "Guest List"}</p>
                            <h3 className={`text-xl font-bold ${theme.primary} mb-2`}>{isRice ? "Delegate Management" : "Family & Friends"}</h3>
                            <p className={`text-xs ${theme.secondary} leading-relaxed`}>
                                {isRice ? "Manage employees, VIPs, and external partners." : "Manage RSVPs for Bride & Groom sides independently."}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className={`flex items-center gap-3 text-xs ${theme.secondary}`}>
                                <span className={`material-symbols-outlined text-sm ${theme.accent}`}>check_circle</span>
                                <span>{isRice ? "Waitlist Enabled" : "RSVPs Open"}</span>
                            </div>
                            <div className={`flex items-center gap-3 text-xs ${theme.secondary}`}>
                                <span className={`material-symbols-outlined text-sm ${theme.accent}`}>{isRice ? "mail" : "diversity_1"}</span>
                                <span>{isRice ? "Invites Pending" : "Seating Chart Pending"}</span>
                            </div>
                        </div>

                        <div className={`mt-8 pt-6 border-t ${theme.border} flex items-baseline gap-1`}>
                            <span className={`text-2xl font-bold ${theme.accent}`}>452</span>
                            <span className={`text-[10px] font-bold ${theme.secondary} uppercase`}>/ 500 Confirmed</span>
                        </div>
                        <button className="w-full mt-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            {isRice ? "Manage Delegates" : "View Guest List"}
                        </button>
                    </div>

                    {/* Card 2: Logistics */}
                    <div className={`rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer ${theme.cardBg} ${theme.border}`} onClick={() => router.push(`/dashboard/events/${id}/inventory`)}>
                        <div className="flex justify-between items-start mb-6">
                            <div className={`size-10 rounded-xl flex items-center justify-center ${theme.iconContainer}`}>
                                <span className="material-symbols-outlined text-xl">{isRice ? "inventory_2" : "castle"}</span>
                            </div>
                            <span className={`material-symbols-outlined ${theme.secondary} opacity-50 group-hover:opacity-100`}>more_vert</span>
                        </div>

                        <div className="mb-6">
                            <p className={`text-[10px] font-bold ${theme.secondary} opacity-60 uppercase tracking-widest mb-1`}>Logistics</p>
                            <h3 className={`text-xl font-bold ${theme.primary} mb-2`}>{isRice ? "Inventory & Rooms" : "Venue & Stay"}</h3>
                            <p className={`text-xs ${theme.secondary} leading-relaxed`}>
                                {isRice ? "Track room blocks, banquet halls, and AV equipment availability." : "Manage room allocations for key family members."}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className={`flex items-center gap-3 text-xs ${theme.secondary}`}>
                                <span className={`material-symbols-outlined text-sm ${theme.accent}`}>hotel</span>
                                <span>{isRice ? "2 Hotels Contracted" : "Bridal Suite Booked"}</span>
                            </div>
                            <div className={`flex items-center gap-3 text-xs ${theme.secondary}`}>
                                <span className={`material-symbols-outlined text-sm ${theme.accent}`}>flight</span>
                                <span>{isRice ? "Airport Transfers Live" : "Guest Arrivals Tracking"}</span>
                            </div>
                        </div>

                        <div className={`mt-8 pt-6 border-t ${theme.border} flex items-baseline gap-1`}>
                            <span className={`text-2xl font-bold ${theme.accent}`}>85%</span>
                            <span className={`text-[10px] font-bold ${theme.secondary} uppercase`}>Occupancy</span>
                        </div>
                        <button className="w-full mt-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            {isRice ? "View Inventory" : "Manage Allocations"}
                        </button>
                    </div>

                    {/* Card 3: Experience */}
                    <div className={`rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer ${theme.cardBg} ${theme.border}`} onClick={() => router.push(`/dashboard/events/${id}/app`)}>
                        <div className="flex justify-between items-start mb-6">
                            <div className={`size-10 rounded-xl flex items-center justify-center ${theme.iconContainer}`}>
                                <span className="material-symbols-outlined text-xl">{isRice ? "smartphone" : "auto_awesome"}</span>
                            </div>
                            <span className={`material-symbols-outlined ${theme.secondary} opacity-50 group-hover:opacity-100`}>more_vert</span>
                        </div>

                        <div className="mb-6">
                            <p className={`text-[10px] font-bold ${theme.secondary} opacity-60 uppercase tracking-widest mb-1`}>Experience</p>
                            <h3 className={`text-xl font-bold ${theme.primary} mb-2`}>Microsite Builder</h3>
                            <p className={`text-xs ${theme.secondary} leading-relaxed`}>
                                {isRice ? "Customize the attendee app, agenda, and registration portal." : "Customize the digital invite and itinerary for guests."}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className={`flex items-center gap-3 text-xs ${theme.secondary}`}>
                                <span className={`material-symbols-outlined text-sm ${theme.accent}`}>public</span>
                                <span>Live on Web</span>
                            </div>
                            <div className={`flex items-center gap-3 text-xs ${theme.secondary}`}>
                                <span className={`material-symbols-outlined text-sm ${theme.accent}`}>{isRice ? "chat" : "photo_library"}</span>
                                <span>{isRice ? "Networking Active" : "Gallery Uploads Open"}</span>
                            </div>
                        </div>

                        <div className={`mt-8 pt-6 border-t ${theme.border} flex items-baseline gap-1`}>
                            <span className={`text-2xl font-bold ${theme.accent}`}>1.2k</span>
                            <span className={`text-[10px] font-bold ${theme.secondary} uppercase`}>Visits</span>
                        </div>
                        <button className="w-full mt-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            Customize Site
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
