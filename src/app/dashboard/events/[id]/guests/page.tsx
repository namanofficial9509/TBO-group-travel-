"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

export default function GuestsPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [activeTab, setActiveTab] = useState("hub");
    const [selectedGroup, setSelectedGroup] = useState("master");

    const weddingGroups = [
        { id: 'master', label: 'Master List', count: 1240, icon: 'groups' },
        { id: 'vip', label: 'VIP Category', count: 112, icon: 'star' },
        { id: 'family', label: 'Family & Friends', count: 385, icon: 'family_restroom' },
        { id: 'logistics', label: 'A1 Morning Cluster', count: 42, icon: 'airport_shuttle' }
    ];

    const miceGroups = [
        { id: 'master', label: 'All Delegates', count: 450, icon: 'groups' },
        { id: 'speakers', label: 'Speakers', count: 12, icon: 'mic_external_on' },
        { id: 'sponsors', label: 'Sponsors & VIPs', count: 25, icon: 'verified' },
        { id: 'staff', label: 'Event Crew', count: 40, icon: 'badge' }
    ];

    const groups = isRice ? miceGroups : weddingGroups;

    // Mock Data Selection
    const weddingGuests = [
        { name: "Ananya Kapoor", role: "VIP", subRole: "Leadership", room: "Grand Hyatt • 1402", sharing: "No Sharing", transport: "A1 - Morning Shuttle", status: "Confirmed" },
        { name: "Vikram Singh", role: "Family", subRole: "Groom Side", room: "Assign Hotel", sharing: "Sharing with Rajesh", transport: "A3 - Midday Cluster", status: "Confirmed" }
    ];

    const miceDelegates = [
        { name: "Dr. Rajesh Koothrappali", role: "Speaker", subRole: "Keynote", room: "Taj • 504", sharing: "Single Occ", transport: "Private Car", status: "Checked In" },
        { name: "Sarah Connor", role: "Delegate", subRole: "Tech Corp", room: "Radisson • 202", sharing: "Twin Sharing", transport: "Shuttle B", status: "Confirmed" }
    ];

    const listData = isRice ? miceDelegates : weddingGuests;

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
        <div className={`flex flex-col h-full p-8 overflow-y-auto ${theme.bg}`}>

            {/* Header Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Metric 1 */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{isRice ? "Registered Delegates" : "Total Expected"}</span>
                        <span className={`material-symbols-outlined ${isRice ? "text-blue-500" : "text-emerald-500"}`}>groups</span>
                    </div>
                    <div className="text-4xl font-display font-medium text-slate-800 mb-2">{isRice ? "450" : "1,240"}</div>
                    <div className={`text-xs font-bold ${isRice ? "text-blue-600" : "text-emerald-600"} flex items-center gap-1`}>
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        +12% vs last week
                    </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Confirmed</span>
                        <span className={`material-symbols-outlined ${isRice ? "text-blue-500" : "text-emerald-500"}`}>check_circle</span>
                    </div>
                    <div className="text-4xl font-display font-medium text-slate-800 mb-2">{isRice ? "380" : "892"}</div>
                    <div className="text-xs font-bold text-slate-400">72% Completion Rate</div>
                </div>

                {/* Metric 3 */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{isRice ? "Speakers & VIPs" : "VIP / High Entitlement"}</span>
                        <span className="material-symbols-outlined text-amber-500">star</span>
                    </div>
                    <div className="text-4xl font-display font-medium text-slate-800 mb-2">{isRice ? "37" : "112"}</div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[40%] bg-amber-500 rounded-full"></div>
                    </div>
                </div>

                {/* Metric 4 */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Operations Staff</span>
                        <span className={`material-symbols-outlined ${isRice ? "text-blue-500" : "text-emerald-500"}`}>engineering</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-display font-medium text-slate-800">64</span>
                        <span className="text-xs font-bold text-slate-400">/ 12 Crew</span>
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-wide ${isRice ? "text-blue-600" : "text-emerald-600"}`}>On-site tracking active</div>
                </div>
            </div>

            <div className="flex items-start gap-8 h-full">

                {/* Left Sidebar: Operational Groups */}
                <div className="w-72 shrink-0 space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="font-display font-medium text-lg text-slate-800 mb-1">{isRice ? "Delegate Segments" : "Operational Groups"}</h3>
                        <p className="text-xs text-slate-400 mb-6">Filter by movement group</p>

                        <div className="space-y-2">
                            {groups.map((group) => (
                                <button
                                    key={group.id}
                                    onClick={() => setSelectedGroup(group.id)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all ${selectedGroup === group.id
                                            ? `${theme.emeraldFill} text-white shadow-lg`
                                            : 'bg-white text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-lg">{group.icon}</span>
                                        <span>{group.label}</span>
                                    </div>
                                    <span className={`text-xs ${selectedGroup === group.id ? 'text-white/80' : 'text-slate-400'}`}>{group.count}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Room Inventory Widget */}
                    <div className={`${theme.emeraldBg} rounded-xl border ${theme.emeraldBorder} p-6`}>
                        <h4 className={`text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText} mb-4`}>Room Inventory</h4>
                        <div className="flex justify-between items-end mb-2">
                            <span className={`text-sm font-medium ${isRice ? "text-blue-900" : "text-emerald-900"}`}>Allocated</span>
                            <span className={`text-xl font-bold ${theme.emeraldText}`}>92%</span>
                        </div>
                        <div className={`h-1.5 w-full ${isRice ? "bg-blue-200" : "bg-emerald-200"} rounded-full overflow-hidden mb-4`}>
                            <div className={`h-full w-[92%] ${theme.emeraldFill} rounded-full`}></div>
                        </div>
                        <button className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText} hover:opacity-80`}>
                            Manage room blocks <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col h-full overflow-hidden bg-white rounded-xl border border-slate-200 shadow-sm">

                    {/* Toolbar */}
                    <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-white z-10">
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-emerald-500 hover:text-emerald-700 flex items-center gap-2 transition-colors">
                                <span className="material-symbols-outlined text-lg">upload</span>
                                Upload CSV
                            </button>
                            <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-emerald-500 hover:text-emerald-700 flex items-center gap-2 transition-colors">
                                <span className="material-symbols-outlined text-lg">search</span>
                                Search
                            </button>
                        </div>

                        <button className={`px-6 py-2.5 ${theme.emeraldFill} hover:opacity-90 text-white rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95`}>
                            <span className="material-symbols-outlined text-lg">auto_fix_high</span>
                            Auto-assign Strategy
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="px-6 pt-6 border-b border-slate-200">
                        <div className="flex gap-8">
                            <button
                                onClick={() => setActiveTab('hub')}
                                className={`pb-4 flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'hub' ? `${isRice ? "border-blue-500 text-blue-800" : "border-emerald-500 text-emerald-800"}` : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className="material-symbols-outlined text-xl">grid_view</span>
                                <span className="font-display font-medium text-sm">{isRice ? "Delegate Hub" : "Attendee Operations Hub"}</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('rooming')}
                                className={`pb-4 flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'rooming' ? `${isRice ? "border-blue-500 text-blue-800" : "border-emerald-500 text-emerald-800"}` : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                            >
                                <span className="material-symbols-outlined text-xl">bed</span>
                                <span className="font-display font-medium text-sm">Master Rooming List</span>
                            </button>
                        </div>
                    </div>

                    {/* High Detail Grid */}
                    <div className="flex-1 overflow-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 sticky top-0 z-10">
                                <tr>
                                    <th className="px-8 py-4 border-b border-slate-200 w-12">
                                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                                    </th>
                                    <th className="px-8 py-4 border-b border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">Identity & Role</th>
                                    <th className="px-8 py-4 border-b border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">Allocation</th>
                                    <th className="px-8 py-4 border-b border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">Movement</th>
                                    <th className="px-8 py-4 border-b border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Preferences</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {listData.map((person, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-slate-900">{person.name}</span>
                                                {person.role === "VIP" && <span className="material-symbols-outlined text-amber-500 text-sm">star</span>}
                                            </div>
                                            <div className="flex gap-1.5">
                                                <span className={`px-1.5 py-0.5 ${isRice ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"} text-[8px] font-bold uppercase tracking-wide rounded`}>{person.role}</span>
                                                <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[8px] font-bold uppercase tracking-wide rounded">{person.subRole}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-start gap-3">
                                                <span className={`material-symbols-outlined ${theme.emeraldText} text-lg mt-0.5`}>apartment</span>
                                                <div>
                                                    <div className="font-bold text-slate-800 text-sm">{person.room}</div>
                                                    <div className="text-xs text-slate-400 italic">{person.sharing}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2 text-xs text-slate-600">
                                                    <span className={`material-symbols-outlined ${theme.emeraldText} text-sm`}>flight_land</span>
                                                    <span className="font-medium">{person.transport}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex flex-col items-end gap-2">
                                                <div className="flex gap-2 text-slate-400">
                                                    <span className={`material-symbols-outlined ${theme.emeraldText} text-sm`}>restaurant</span>
                                                </div>
                                                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-full text-[9px] font-bold text-slate-600 flex items-center gap-1">
                                                    Veg
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Footer */}
                    <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
                        <span className="text-slate-500">Showing <span className="font-bold text-slate-800">1-2</span> of {isRice ? "450" : "1,240"} attendees</span>
                        <div className="flex gap-2">
                            <button className="size-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:border-emerald-500 text-slate-500 hover:text-emerald-700 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button className={`size-8 flex items-center justify-center rounded ${theme.emeraldFill} text-white font-bold shadow-sm`}>1</button>
                            <button className="size-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:border-emerald-500 text-slate-500 hover:text-emerald-700 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
