"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";

export default function SettingsPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [activeTab, setActiveTab] = useState("workflow");

    if (!currentEvent) return <div className="flex items-center justify-center h-screen text-slate-400">Loading Settings...</div>;

    // Theme Config
    const theme = isRice ? {
        primary: "text-slate-700",
        accent: "text-blue-600",
        bg: "bg-slate-50",
        headerBg: "bg-slate-900",
        headerText: "text-white",
        sidebarHighlight: "bg-blue-50 text-blue-600",
        button: "bg-slate-800 hover:bg-slate-900",
        badge: "bg-blue-100 text-blue-700",
        iconHtml: "text-blue-500",
        iconBg: "bg-blue-50",
        toggleOn: "bg-blue-600",
        risk: "bg-amber-50 text-amber-700 border-amber-200"
    } : {
        primary: "text-slate-900",
        accent: "text-[#ee2b5b]",
        bg: "bg-slate-50",
        headerBg: "bg-white",
        headerText: "text-slate-900",
        sidebarHighlight: "bg-[#ee2b5b]/5 text-[#ee2b5b]",
        button: "bg-[#ee2b5b] hover:bg-[#ee2b5b]/90",
        badge: "bg-[#ee2b5b]/10 text-[#ee2b5b]",
        iconHtml: "text-[#ee2b5b]",
        iconBg: "bg-[#ee2b5b]/10",
        toggleOn: "bg-[#ee2b5b]",
        risk: "bg-rose-50 text-rose-700 border-rose-200"
    };

    return (
        <div className={`flex h-full min-h-[calc(100vh-64px)] ${theme.bg} font-sans text-slate-900`}>

            {/* Internal Settings Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex-shrink-0">
                <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center gap-3 mb-1">
                        <div className={`size-8 rounded-lg ${theme.iconBg} ${theme.iconHtml} flex items-center justify-center`}>
                            <span className="material-symbols-outlined">event</span>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-slate-900 leading-tight truncate max-w-[140px]">{currentEvent.name}</h2>
                            <p className={`text-[10px] font-bold uppercase tracking-wide ${theme.accent}`}>{isRice ? "Corporate MICE" : "Wedding"}</p>
                        </div>
                    </div>
                </div>

                <nav className="p-4 space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors text-left">
                        <span className="material-symbols-outlined text-[20px]">info</span>
                        Event Basics
                    </button>

                    <button
                        onClick={() => setActiveTab("workflow")}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors text-left ${activeTab === "workflow" ? theme.sidebarHighlight : "text-slate-500 hover:bg-slate-50"}`}
                    >
                        <span className="material-symbols-outlined text-[20px]">tune</span>
                        {isRice ? "Compliance & Rules" : "Workflow Guardrails"}
                    </button>

                    <button
                        onClick={() => setActiveTab("financials")}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors text-left ${activeTab === "financials" ? theme.sidebarHighlight : "text-slate-500 hover:bg-slate-50"}`}
                    >
                        <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                        {isRice ? "Billing & Access" : "Financials & Access"}
                    </button>

                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-50 rounded-lg transition-colors text-left">
                        <span className="material-symbols-outlined text-[20px]">notification_important</span>
                        Emergency & Audit
                    </button>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
                <header className="px-8 py-6 border-b border-slate-200 bg-white sticky top-0 z-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                <span>Settings</span>
                                <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                                <span className={theme.accent}>{activeTab === 'workflow' ? (isRice ? 'Compliance' : 'Workflow') : (isRice ? 'Billing' : 'Financials')}</span>
                            </div>
                            <h1 className="text-2xl font-display font-medium text-slate-900">
                                {activeTab === 'workflow' ? (isRice ? 'Compliance & Rules' : 'Workflow Guardrails') : (isRice ? 'Billing & Access Control' : 'Financials & Access')}
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 border border-slate-200 text-slate-600 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">Discard</button>
                            <button className={`px-6 py-2 text-white font-bold text-sm rounded-lg shadow-lg transition-all ${theme.button}`}>Save Changes</button>
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-5xl mx-auto space-y-8">

                    {/* TAB: WORKFLOW GUARDRAILS */}
                    {activeTab === "workflow" && (
                        <>
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <h3 className="font-bold text-lg text-slate-900">Approvals & Workflow</h3>
                                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wide ${theme.risk}`}>
                                        <span className="material-symbols-outlined text-sm">warning</span>
                                        {isRice ? "Strict Compliance Mode" : "Risky Action Protection On"}
                                    </div>
                                </div>

                                <div className="p-6 space-y-6">
                                    {/* Item 1 */}
                                    <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                            <span className="material-symbols-outlined">auto_fix_high</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-slate-900">Auto-confirm bookings</h4>
                                                <div className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out cursor-pointer rounded-full ${theme.toggleOn}`}>
                                                    <span className="absolute left-[26px] top-[2px] inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out"></span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500">
                                                {isRice
                                                    ? "Automatically confirm employee bookings within policy limits."
                                                    : "Automatically approve bookings that meet standard criteria."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
                                        <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                            <span className="material-symbols-outlined">supervisor_account</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-slate-900">{isRice ? "Executive Review Required" : "Manual approval required (VIP)"}</h4>
                                                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out cursor-pointer rounded-full bg-slate-200">
                                                    <span className="absolute left-[2px] top-[2px] inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out"></span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500">
                                                {isRice
                                                    ? "Flag requests exceeding budget cap for Finance approval."
                                                    : "Flag all requests from Groom/Bride side for concierge review."}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors relative overflow-hidden">
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${theme.toggleOn}`}></div>
                                        <div className={`size-10 rounded-full ${theme.iconBg} flex items-center justify-center ${theme.iconHtml} shrink-0`}>
                                            <span className="material-symbols-outlined">verified_user</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-slate-900">{isRice ? "VIP Policy Bypass" : "Conditional VIP auto-confirm"}</h4>
                                                <div className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out cursor-pointer rounded-full ${theme.toggleOn}`}>
                                                    <span className="absolute left-[26px] top-[2px] inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out"></span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 mb-4">
                                                {isRice
                                                    ? "Skip approval workflow for C-Suite executives."
                                                    : "Bypass approval queue for designated VIP accounts."}
                                            </p>

                                            <div className="bg-slate-50 p-4 rounded-lg flex items-center gap-2 border border-slate-200">
                                                <span className="text-xs font-bold text-slate-400 uppercase">IF</span>
                                                <select className={`bg-white border border-slate-200 text-sm font-medium rounded px-2 py-1 text-slate-700 outline-none focus:border-current ${theme.accent}`}>
                                                    <option>{isRice ? "Designation" : "Group Tag"}</option>
                                                </select>
                                                <span className="text-xs font-bold text-slate-400 uppercase">EQUALS</span>
                                                <select className={`bg-white border border-slate-200 text-sm font-medium rounded px-2 py-1 text-slate-700 outline-none focus:border-current ${theme.accent}`}>
                                                    <option>{isRice ? "C-Level / VP" : "Family"}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                                    <h3 className="font-bold text-lg text-slate-900">{isRice ? "Procurement Rules" : "Bundle Selection Rules"}</h3>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">{isRice ? "Booking Window Closure" : "Selection Cut-off Date"}</label>
                                        <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 bg-white">
                                            <span className="material-symbols-outlined text-slate-400">calendar_today</span>
                                            <input type="text" value="3 days before travel" className="flex-1 outline-none text-sm text-slate-700" readOnly />
                                        </div>
                                        <p className="text-xs text-slate-400 mt-2">Hard stop for new resource requests.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">{isRice ? "Upgrade Policy" : "Upgrade Permissions"}</label>
                                        <div className="space-y-3">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <div className={`size-5 rounded border-2 ${theme.toggleOn} border-current flex items-center justify-center text-white`}>
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                                <span className="text-sm text-slate-600">Block upgrades not in policy</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <div className={`size-5 rounded border-2 ${theme.toggleOn} border-current flex items-center justify-center text-white`}>
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                                <span className="text-sm text-slate-600">Force VP approval for exceptions</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* TAB: FINANCIALS & ACCESS */}
                    {activeTab === "financials" && (
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                            {/* Financial Config */}
                            <div className="space-y-8">
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden h-full">
                                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                                        <h3 className="font-bold text-lg text-slate-900">Financial Configuration</h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-8">
                                            <h4 className="font-bold text-slate-900 mb-4">{isRice ? "Payer Logic" : "Who Pays?"}</h4>
                                            <div className="flex bg-slate-100 p-1 rounded-lg">
                                                <button className="flex-1 py-2 text-sm font-bold text-slate-500 rounded-md hover:text-slate-700">{isRice ? "Company" : "Planner"}</button>
                                                <button className="flex-1 py-2 text-sm font-bold text-slate-500 rounded-md hover:text-slate-700">{isRice ? "Delegate" : "Guest"}</button>
                                                <button className={`flex-1 py-2 text-sm font-bold bg-white shadow-sm rounded-md ${theme.accent}`}>{isRice ? "Cost Center" : "Hybrid"}</button>
                                            </div>
                                            <div className={`mt-4 flex gap-3 p-4 rounded-lg border ${theme.badge} bg-opacity-10 border-opacity-20`}>
                                                <span className="material-symbols-outlined">info</span>
                                                <p className="text-xs leading-relaxed opacity-80">
                                                    {isRice
                                                        ? "In Cost Center mode, expenses are routed to individual department codes (e.g., MKT-001, ENG-292)."
                                                        : "In Hybrid mode, you can specify per-item who is responsible for payment."}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-4">{isRice ? "Transparency" : "Visibility & Privacy"}</h4>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800">{isRice ? "Show Negotiated Rates" : "Show prices to guests"}</p>
                                                        <p className="text-xs text-slate-500">{isRice ? "Employees see corporate discounts" : "Guests can see individual item costs"}</p>
                                                    </div>
                                                    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out cursor-pointer rounded-full bg-slate-200">
                                                        <span className="absolute left-[2px] top-[2px] inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out"></span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800">{isRice ? "GST Compliance Mode" : "Mask contract rates"}</p>
                                                        <p className="text-xs text-slate-500">{isRice ? "Enforce GSTIN on all invoices" : "Vendors see redacted wholesale pricing"}</p>
                                                    </div>
                                                    <div className={`relative inline-block w-12 h-6 transition duration-200 ease-in-out cursor-pointer rounded-full ${theme.toggleOn}`}>
                                                        <span className="absolute left-[26px] top-[2px] inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Roles & Access */}
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col h-full">
                                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Roles & Access</h3>
                                        <p className="text-xs text-slate-500">Manage granular permissions.</p>
                                    </div>
                                    <button className={`flex items-center gap-2 text-xs font-bold uppercase hover:bg-opacity-10 px-3 py-1.5 rounded-lg transition-colors ${theme.accent} hover:bg-slate-100`}>
                                        <span className="material-symbols-outlined text-sm">person_add</span>
                                        Add User
                                    </button>
                                </div>
                                <div className="flex-1 overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px]">
                                            <tr>
                                                <th className="px-6 py-3 tracking-wider">User</th>
                                                <th className="px-6 py-3 tracking-wider">Role</th>
                                                <th className="px-6 py-3 tracking-wider text-center">View</th>
                                                <th className="px-6 py-3 tracking-wider text-center">Edit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {/* User 1 */}
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                                                            <img src="https://i.pravatar.cc/150?u=a" alt="User" className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900">Diya Sharma</p>
                                                            <p className="text-xs text-slate-400">diya.s@tbo.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded-md text-xs font-bold border ${theme.badge} bg-opacity-10 border-opacity-20`}>{isRice ? "Admin" : "Planner"}</span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className={`size-5 mx-auto rounded flex items-center justify-center text-white ${theme.toggleOn}`}><span className="material-symbols-outlined text-xs">check</span></div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className={`size-5 mx-auto rounded flex items-center justify-center text-white ${theme.toggleOn}`}><span className="material-symbols-outlined text-xs">check</span></div>
                                                </td>
                                            </tr>
                                            {/* User 2 */}
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                                                            <img src="https://i.pravatar.cc/150?u=b" alt="User" className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900">Finance Team</p>
                                                            <p className="text-xs text-slate-400">audit@tbo.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold border border-slate-200">{isRice ? "Auditor" : "Observer"}</span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className={`size-5 mx-auto rounded flex items-center justify-center text-white ${theme.toggleOn}`}><span className="material-symbols-outlined text-xs">check</span></div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <div className="size-5 mx-auto border-2 border-slate-200 rounded"></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
