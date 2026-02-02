"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

export default function AgendaPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [activeDay, setActiveDay] = useState("day2");

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
        highlight: "text-blue-600 border-blue-600",
        highlightBg: "bg-blue-500"
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
        highlight: "text-[#ee2b5b] border-[#ee2b5b]",
        highlightBg: "bg-[#ee2b5b]"
    };

    if (!currentEvent) return null;

    return (
        <div className={`flex flex-col h-full relative ${theme.bg}`}>
            <div className="flex-1 overflow-hidden flex flex-col">

                {/* Header Section */}
                <div className="bg-white border-b border-slate-200 px-8 py-6 flex-none z-10">
                    <div className="flex items-center justify-between mb-6">
                        {/* Day Tabs */}
                        <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg border border-slate-200">
                            {['Day 1', 'Day 2', 'Day 3', 'Day 4'].map((day, idx) => (
                                <button
                                    key={day}
                                    onClick={() => setActiveDay(`day${idx + 1}`)}
                                    className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${activeDay === `day${idx + 1}`
                                        ? `bg-white ${theme.highlight} shadow-sm border`
                                        : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">
                                            {idx === 0 ? 'flight_land' : idx === 3 ? 'flight_takeoff' : 'event'}
                                        </span>
                                        {day}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                            <span className={`${isRice ? "text-blue-600" : "text-[#ee2b5b]"} font-bold`}>{currentEvent.name}</span>
                            <span>/</span>
                            <span>Manager View</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h1 className="text-3xl font-display font-medium text-slate-800">{isRice ? "Day 2: Innovation Summit" : "Day 2: The Sacred Union"}</h1>
                                <span className={`px-3 py-1 ${isRice ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-[#ee2b5b]/10 text-[#ee2b5b] border-[#ee2b5b]/20"} rounded-full text-[10px] font-bold uppercase tracking-widest border`}>
                                    Nov 12
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm font-serif italic">City Palace • Main Courtyard</p>
                        </div>

                        <div className="flex gap-3">
                            <button className={`size-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:${theme.highlight} transition-colors shadow-sm`}>
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                            <button className={`px-6 py-2 ${theme.highlightBg} hover:opacity-90 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95`}>
                                <span className="material-symbols-outlined text-lg">add</span>
                                Add {isRice ? "Session" : "Ceremony"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Split */}
                <div className="flex flex-1 overflow-hidden relative">

                    {/* Left: Timeline Schedule */}
                    <div className="flex-1 overflow-y-auto p-8 border-r border-slate-200 pb-32">

                        {/* Filters */}
                        <div className="flex items-center gap-6 mb-8 border-b border-slate-200 pb-4">
                            <button className={`text-sm font-bold ${theme.highlight} border-b-2 pb-4 -mb-4.5`}>Full Itinerary</button>
                            <button className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">{isRice ? "Main Stage" : "Bride Side"}</button>
                            <button className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">{isRice ? "Breakouts" : "Groom Side"}</button>
                        </div>

                        {/* Timeline */}
                        <div className="relative space-y-8">
                            {/* Vertical Line */}
                            <div className="absolute left-[3.25rem] top-4 bottom-0 w-px bg-slate-200 -z-0"></div>

                            {/* 09:00 Slot */}
                            <div className="flex gap-8 relative z-10 group">
                                <div className={`w-14 text-right text-xs font-bold ${isRice ? "text-blue-600" : "text-[#ee2b5b]"} pt-6`}>09:00</div>
                                <div className="flex-1">
                                    <div className="bg-white rounded-xl shadow-sm border-l-4 border-yellow-400 p-6 hover:shadow-md transition-shadow cursor-pointer relative">

                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex gap-3">
                                                <span className="px-2 py-0.5 bg-yellow-50 text-yellow-700 text-[9px] font-bold uppercase tracking-widest rounded">{isRice ? "Keynote" : "Ritual"}</span>
                                                <span className="text-xs text-slate-400 font-mono">09:00 - 11:30 (2.5 hrs)</span>
                                            </div>
                                            <button className="text-slate-300 hover:text-slate-500">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-800 mb-4">{isRice ? "Opening Keynote: Future of Tech" : "The Haldi Ceremony"}</h3>

                                        <div className="flex items-center gap-6 text-sm text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <span className={`material-symbols-outlined ${isRice ? "text-blue-600" : "text-[#ee2b5b]"} text-lg`}>location_on</span>
                                                <span>{isRice ? "Main Hall A" : "Zenana Mahal Courtyard"}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-slate-400 text-lg">{isRice ? "mic" : "checkroom"}</span>
                                                <span>{isRice ? "Speaker: Jensen Huang" : "Shades of Yellow"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 12:00 Slot (Conflict) */}
                            <div className="flex gap-8 relative z-10 group">
                                <div className="w-14 text-right text-xs font-bold text-slate-400 pt-6">12:00</div>
                                <div className="flex-1">
                                    <div className="bg-rose-50/30 rounded-xl shadow-sm border-l-4 border-rose-500 p-6 hover:shadow-md transition-shadow cursor-pointer relative ring-1 ring-rose-100">

                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex gap-3">
                                                <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-[9px] font-bold uppercase tracking-widest rounded">{isRice ? "Workshop" : "Bride Only"}</span>
                                                <span className="text-xs text-rose-500 font-bold font-mono">12:00 - 14:00 (Overlap)</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-rose-500 animate-pulse">warning</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-800 mb-4">{isRice ? "AI Ethics Panel" : "Choora Ceremony"}</h3>

                                        <div className="flex items-center gap-6 text-sm text-slate-500">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-rose-500 text-lg">location_on</span>
                                                <span className="text-rose-700 font-medium">{isRice ? "Room 202" : "Bridal Suite"}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-slate-400 text-lg">group</span>
                                                <span>{isRice ? "Max 50" : "Family Only"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Conflict Panel */}
                    <div className="w-[400px] bg-white border-l border-slate-200 flex flex-col items-stretch overflow-y-auto">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="font-display font-medium text-lg text-slate-800">Logistics Check</h2>
                                    <span className="flex items-center justify-center size-5 bg-rose-500 text-white text-[10px] font-bold rounded-full shadow-sm">2</span>
                                </div>
                                <p className="text-[10px] text-slate-400 uppercase tracking-wide mt-1">{isRice ? "Event Ops" : "Wedding Operations"}</p>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Alert */}
                            <div className="bg-rose-50 rounded-xl p-5 border border-rose-100 relative overflow-hidden">
                                <div className="flex items-start gap-4 z-10 relative">
                                    <div className="size-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                                        <span className="material-symbols-outlined text-lg">error</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-rose-900 text-sm mb-1">{isRice ? "Speaker Overlap" : "Make-up Delay Risk"}</h4>
                                        <p className="text-xs text-rose-800 leading-relaxed mb-3">
                                            {isRice ? "Panel speaker Dr. Singh is double-booked for workshop." : "Choora Ceremony likely to delay makeup slot."}
                                        </p>
                                        <button className="text-[10px] font-bold uppercase tracking-widest text-rose-600 underline hover:text-rose-800">
                                            Adjust Schedule
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={`absolute bottom-0 w-full bg-white border-t border-slate-200 px-8 py-4 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] z-20`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="pr-6 border-r border-slate-200">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Agenda Status</div>
                            <div className="flex items-center gap-2">
                                <span className={`size-2 rounded-full ${theme.highlightBg} animate-pulse`}></span>
                                <span className="font-bold text-slate-800 text-sm">Drafting</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className={`px-6 py-2.5 rounded-lg border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600 hover:${theme.highlight} transition-colors bg-white`}>
                            Export PDF
                        </button>
                        <button className={`px-6 py-2.5 ${theme.highlightBg} hover:opacity-90 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg transition-all hover:scale-105 active:scale-95`}>
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
