"use client";

import { useState } from "react";

export default function HostBudgetPage() {
    const [scenarioMode, setScenarioMode] = useState(false);

    // Mock Budget Data
    const budgetItems = [
        { category: "Accommodation", budgeted: 10000000, actual: 8500000, paid: 4500000, status: "On Track" },
        { category: "Food & Beverage", budgeted: 7500000, actual: 4500000, paid: 1500000, status: "Under Review" },
        { category: "Decor & Production", budgeted: 5000000, actual: 2000000, paid: 500000, status: "On Track" },
        { category: "Entertainment", budgeted: 2000000, actual: 1800000, paid: 200000, status: "Locked" },
        { category: "Logistics & Transport", budgeted: 1500000, actual: 1200000, paid: 100000, status: "On Track" }
    ];

    // Scenario Calculation (+20 Guests impact)
    // Assuming approx 50k per guest (Room + Food)
    const SCENARIO_IMPACT = 20 * 50000;

    const totalBudget = budgetItems.reduce((acc, item) => acc + item.budgeted, 0);
    const totalActual = budgetItems.reduce((acc, item) => acc + item.actual, 0);
    const totalPaid = budgetItems.reduce((acc, item) => acc + item.paid, 0);

    const projectedTotal = scenarioMode ? totalActual + SCENARIO_IMPACT : totalActual;

    return (
        <main suppressHydrationWarning className="flex-1 p-10 space-y-8 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-display font-bold text-slate-900">Budget Management</h1>
                    <p className="text-slate-500 mt-1">Track every rupee, manage payouts, and forecast scenarios.</p>
                </div>

                {/* Scenario Toggle */}
                <div className={`flex items-center gap-3 p-1 pr-4 rounded-xl transition-all border ${scenarioMode ? "bg-purple-50 border-purple-200" : "bg-white border-slate-200"}`}>
                    <button
                        onClick={() => setScenarioMode(!scenarioMode)}
                        className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${scenarioMode ? "bg-purple-600 text-white shadow-md shadow-purple-600/20" : "bg-slate-100 text-slate-500"}`}
                    >
                        {scenarioMode ? "Scenario Active" : "Simulate Scenario"}
                    </button>
                    <div className="text-sm">
                        <span className={`font-bold ${scenarioMode ? "text-purple-700" : "text-slate-400"}`}>What if +20 Guests?</span>
                    </div>
                </div>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Total Budget</p>
                    <p className="text-3xl font-display font-bold">₹{(totalBudget / 10000000).toFixed(2)} Cr</p>
                    <p className="text-xs text-slate-500 mt-2">Cap Limit</p>
                </div>

                <div className={`p-6 rounded-2xl border transition-all ${scenarioMode ? "bg-purple-50 border-purple-200" : "bg-white border-[#DEDFDB]"}`}>
                    <div className="flex justify-between items-start mb-1">
                        <p className={`text-sm font-medium uppercase tracking-wider ${scenarioMode ? "text-purple-700" : "text-slate-500"}`}>
                            {scenarioMode ? "Projected Spend (+Scenario)" : "Actual Spend"}
                        </p>
                        {scenarioMode && <span className="bg-purple-200 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">+₹{(SCENARIO_IMPACT / 100000).toFixed(1)}L Impact</span>}
                    </div>
                    <p className={`text-3xl font-display font-bold ${scenarioMode ? "text-purple-700" : "text-emerald-600"}`}>
                        ₹{(projectedTotal / 10000000).toFixed(2)} Cr
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                        {((projectedTotal / totalBudget) * 100).toFixed(1)}% of Budget used
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#DEDFDB]">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Paid to Date</p>
                    <p className="text-3xl font-display font-bold text-slate-900">₹{(totalPaid / 100000).toFixed(1)} L</p>
                    <p className="text-xs text-amber-600 font-bold mt-2">₹{((totalActual - totalPaid) / 100000).toFixed(1)} L Pending Payouts</p>
                </div>
            </div>

            {/* Budget Table */}
            <div className="bg-white rounded-2xl border border-[#DEDFDB] shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-[#DEDFDB]">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Budgeted</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actual / Committed</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Paid</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DEDFDB]">
                        {budgetItems.map((item, i) => (
                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-5 font-bold text-slate-900">{item.category}</td>
                                <td className="px-6 py-5 text-right font-mono text-slate-500">₹{item.budgeted.toLocaleString()}</td>
                                <td className="px-6 py-5 text-right">
                                    <span className={`font-mono font-bold ${item.actual > item.budgeted ? "text-red-500" : "text-slate-900"}`}>
                                        ₹{item.actual.toLocaleString()}
                                    </span>
                                    {scenarioMode && (item.category === 'Accommodation' || item.category === 'Food & Beverage') && (
                                        <div className="text-[10px] text-purple-600 font-bold mt-0.5">
                                            +₹{((SCENARIO_IMPACT / 2).toLocaleString())} (Scenario)
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-5 text-right font-mono text-emerald-600">₹{item.paid.toLocaleString()}</td>
                                <td className="px-6 py-5 text-center">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide
                                        ${item.status === 'On Track' ? 'bg-green-50 text-green-700 border border-green-100' : ''}
                                        ${item.status === 'Locked' ? 'bg-slate-100 text-slate-600 border border-slate-200' : ''}
                                        ${item.status === 'Under Review' ? 'bg-amber-50 text-amber-700 border border-amber-100' : ''}
                                    `}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Visual Breakdown (Mini) */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Spend Composition</h3>
                <div className="flex h-4 rounded-full overflow-hidden w-full">
                    {budgetItems.map((item, i) => {
                        const colors = ["bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-amber-500", "bg-rose-500"];
                        const width = (item.actual / totalActual) * 100;
                        return (
                            <div key={i} className={`${colors[i % colors.length]} h-full`} style={{ width: `${width}%` }} title={item.category}></div>
                        );
                    })}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                    {budgetItems.map((item, i) => {
                        const colors = ["bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-amber-500", "bg-rose-500"];
                        return (
                            <div key={i} className="flex items-center gap-2">
                                <span className={`size-3 rounded-full ${colors[i % colors.length]}`}></span>
                                <span className="text-xs text-slate-600 font-medium">{item.category}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </main>
    );
}
