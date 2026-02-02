"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

function SidebarLink({ icon, text, href, active, external = false, colorClass = "text-emerald-teal" }: { icon: string, text: string, href: string, active: boolean, external?: boolean, colorClass?: string }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${active ? `bg-white ${colorClass} font-semibold shadow-sm ring-1 ring-black/5` : "text-slate-500 hover:bg-white/50 hover:text-slate-700 font-medium"}`}
            target={external ? "_blank" : undefined}
        >
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
            <p className="text-sm tracking-wide">{text}</p>
        </Link>
    )
}

export default function Level2Sidebar() {
    const params = useParams();
    const pathname = usePathname();
    const { events } = useEvents();
    const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

    // Robust ID extraction
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    // Dynamic Theme Colors
    const colorClass = isRice ? "text-slate-700" : "text-rose-600";
    const accentColor = isRice ? "bg-slate-700" : "bg-rose-600";

    const peopleLabel = isRice ? "Delegates" : "Guest List";
    const scheduleLabel = isRice ? "Agenda" : "Rituals & Parties";
    const siteLabel = "Microsite";
    const inventoryLabel = isRice ? "Inventory" : "Venue & Stay";

    // Helper to check if link is active
    const isActive = (path: string) => pathname === path;

    return (
        <aside className="w-64 flex flex-col h-screen sticky top-0 bg-[#F1F3F5] border-r border-[#DEDFDB]">
            {/* Event Switcher (Workspace Context) */}
            <div className="p-4 relative z-50">
                <button
                    onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
                    className={`w-full text-left border border-[#DEDFDB] bg-white rounded-xl p-3 shadow-sm cursor-pointer hover:border-opacity-100 transition-all group relative ${isRice ? 'hover:border-slate-500' : 'hover:border-rose-400'}`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">Current Event</span>
                        <span className="material-symbols-outlined text-slate-400 text-sm">unfold_more</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className={`size-8 rounded-lg ${accentColor} text-white flex items-center justify-center font-bold text-xs shadow-md uppercase`}>
                            {currentEvent ? currentEvent.name.substring(0, 2) : "??"}
                        </div>
                        <div className="overflow-hidden">
                            <h2 className="text-sm font-bold text-slate-900 truncate leading-tight">{currentEvent?.name || "Loading..."}</h2>
                            <p className="text-[10px] text-slate-500 truncate">{currentEvent?.destination || "..."} • {currentEvent?.date}</p>
                        </div>
                    </div>
                </button>

                {/* Dropdown Menu */}
                {isSwitcherOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsSwitcherOpen(false)}></div>
                        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 z-50 py-2 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-1">
                                Switch Event
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {events.map(event => (
                                    <Link
                                        key={event.id}
                                        href={`/dashboard/events/${event.id}`}
                                        onClick={() => setIsSwitcherOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors ${currentEvent?.id === event.id ? "bg-slate-50/80" : ""}`}
                                    >
                                        <div className={`size-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-sm uppercase ${event.type === 'MICE' ? 'bg-slate-700 text-white' : 'bg-rose-600 text-white'}`}>
                                            {event.name.substring(0, 2)}
                                        </div>
                                        <div className="overflow-hidden">
                                            <h3 className={`text-sm font-bold truncate ${currentEvent?.id === event.id ? "text-slate-900" : "text-slate-600"}`}>{event.name}</h3>
                                            <p className="text-[10px] text-slate-400 truncate">{event.type} • {event.date}</p>
                                        </div>
                                        {currentEvent?.id === event.id && (
                                            <span className="material-symbols-outlined text-emerald-500 text-lg ml-auto">check</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                            <div className="border-t border-slate-100 pt-1 mt-1">
                                <Link href="/dashboard" className="flex items-center gap-2 px-4 py-3 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">
                                    <span className="material-symbols-outlined text-sm">grid_view</span>
                                    See All Projects
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-2 space-y-1.5">
                <SidebarLink colorClass={colorClass} icon="dashboard" text="Overview" href={`/dashboard/events/${id}`} active={isActive(`/dashboard/events/${id}`)} />
                <SidebarLink colorClass={colorClass} icon={isRice ? "inventory_2" : "castle"} text={inventoryLabel} href={`/dashboard/events/${id}/inventory`} active={isActive(`/dashboard/events/${id}/inventory`)} />

                {isRice && (
                    <SidebarLink colorClass={colorClass} icon="package_2" text="Bundles" href={`/dashboard/events/${id}/bundles`} active={isActive(`/dashboard/events/${id}/bundles`)} />
                )}

                <SidebarLink colorClass={colorClass} icon="group" text={peopleLabel} href={`/dashboard/events/${id}/guests`} active={isActive(`/dashboard/events/${id}/guests`)} />

                <SidebarLink colorClass={colorClass} icon="confirmation_number" text={isRice ? "Bookings" : "RSVPs"} href={`/dashboard/events/${id}/bookings`} active={isActive(`/dashboard/events/${id}/bookings`)} />

                <SidebarLink colorClass={colorClass} icon="calendar_today" text={scheduleLabel} href={`/dashboard/events/${id}/agenda`} active={isActive(`/dashboard/events/${id}/agenda`)} />
                <SidebarLink colorClass={colorClass} icon="savings" text="Budget" href={`/dashboard/events/${id}/budget`} active={isActive(`/dashboard/events/${id}/budget`)} />
                <SidebarLink colorClass={colorClass} icon="smartphone" text={siteLabel} href={`/dashboard/events/${id}/app`} active={isActive(`/dashboard/events/${id}/app`)} />
            </nav>

            {/* Footer Actions */}
            <div className="p-6 border-t border-[#DEDFDB] space-y-1">
                <SidebarLink colorClass={colorClass} icon="settings" text="Settings" href={`/dashboard/events/${id}/settings`} active={isActive(`/dashboard/events/${id}/settings`)} />
                <SidebarLink colorClass={colorClass} icon="contact_support" text="Support" href="#" active={false} />

                {/* Debug Info (Temporary) */}
                <div className="mt-4 p-2 bg-slate-100 rounded text-[10px] text-slate-400 font-mono break-all">
                    ID: {id} <br />
                    Type: {currentEvent?.type || "Undefined"} <br />
                    Rice: {isRice ? "Yes" : "No"}
                </div>
            </div>
        </aside>
    );
}
