"use client";

import { useState } from "react";

export default function BudgetPage() {
    // Mock Data for Budget
    const [expenses, setExpenses] = useState([
        { id: 1, category: "Venue & Rentals", item: "City Palace Deposit", estimated: 5000000, actual: 5000000, status: "Paid", paidBy: "Mehta Family" },
        { id: 2, category: "Catering", item: "Sangeet Dinner", estimated: 2500000, actual: 0, status: "Pending", paidBy: "-" },
        { id: 3, category: "Decor & Production", item: "Floral Arrangements", estimated: 1200000, actual: 1100000, status: "Partially Paid", paidBy: "Shah Family" },
        { id: 4, category: "Logistics", item: "Guest Transfers (Uber/Bus)", estimated: 800000, actual: 450000, status: "Paid", paidBy: "Mehta Family" },
        { id: 5, category: "Entertainment", item: "DJ & Sound System", estimated: 1500000, actual: 0, status: "Pending", paidBy: "-" },
    ]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(amount);
    };

    const totalEstimated = expenses.reduce((acc, curr) => acc + curr.estimated, 0);
    const totalActual = expenses.reduce((acc, curr) => acc + curr.actual, 0);
    const remainingBudget = totalEstimated - totalActual;
    const progressPercentage = (totalActual / totalEstimated) * 100;

    return (
        <div className="min-h-screen bg-ivory-mist font-sans p-8">
            {/* Background Elements similar to Sidebar/Dashboard */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-teal/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-8 bg-charcoal-ink/20"></span>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-charcoal-ink/40">Financial Planning</span>
                        </div>
                        <h1 className="text-4xl font-display font-medium text-charcoal-ink">
                            Budget <span className="text-emerald-teal italic font-serif">Tracker</span>
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-white border border-black/5 text-charcoal-ink px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-widest hover:bg-soft-ash transition-all shadow-sm hover:shadow active:scale-95 flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px]">download</span>
                            Export
                        </button>
                        <button className="bg-emerald-teal text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-teal-accent transition-all shadow-lg shadow-emerald-teal/20 active:scale-95">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            <span className="text-xs font-bold uppercase tracking-widest">Add Expense</span>
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] group hover:shadow-lg transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="size-10 rounded-full bg-soft-ash flex items-center justify-center text-charcoal-ink/40 group-hover:bg-emerald-teal/10 group-hover:text-emerald-teal transition-colors">
                                <span className="material-symbols-outlined">account_balance_wallet</span>
                            </div>
                            <span className="text-[10px] font-bold bg-black/5 px-2 py-1 rounded text-charcoal-ink/40 uppercase tracking-wider">Estimated</span>
                        </div>
                        <p className="text-[10px] font-bold text-charcoal-ink/40 uppercase tracking-widest mb-1">Total Budget</p>
                        <h2 className="text-3xl font-display font-bold text-charcoal-ink">{formatCurrency(totalEstimated)}</h2>
                    </div>

                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] group hover:shadow-lg transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="size-10 rounded-full bg-soft-ash flex items-center justify-center text-charcoal-ink/40 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <span className="text-[10px] font-bold bg-black/5 px-2 py-1 rounded text-charcoal-ink/40 uppercase tracking-wider">Actual</span>
                        </div>
                        <p className="text-[10px] font-bold text-charcoal-ink/40 uppercase tracking-widest mb-1">Total Spend</p>
                        <h2 className={`text-3xl font-display font-bold ${totalActual > totalEstimated ? 'text-red-500' : 'text-emerald-teal'}`}>{formatCurrency(totalActual)}</h2>
                    </div>

                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] group hover:shadow-lg transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="size-10 rounded-full bg-soft-ash flex items-center justify-center text-charcoal-ink/40 group-hover:bg-amber-50 group-hover:text-amber-500 transition-colors">
                                <span className="material-symbols-outlined">savings</span>
                            </div>
                            <span className="text-[10px] font-bold bg-black/5 px-2 py-1 rounded text-charcoal-ink/40 uppercase tracking-wider">Remaining</span>
                        </div>
                        <p className="text-[10px] font-bold text-charcoal-ink/40 uppercase tracking-widest mb-1">Available Funds</p>
                        <h2 className="text-3xl font-display font-bold text-charcoal-ink/60">{formatCurrency(remainingBudget)}</h2>
                    </div>
                </div>

                {/* Progress Bar with Glassmorphism */}
                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white shadow-[0_4px_30px_-5px_rgba(0,0,0,0.05)] mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <span className="material-symbols-outlined text-[120px]">donut_large</span>
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-lg font-display font-medium text-charcoal-ink">Budget Utilization</h3>
                                <p className="text-xs text-charcoal-ink/50 mt-1">Real-time tracking of expenses against allocated funds.</p>
                            </div>
                            <span className="text-2xl font-display font-bold text-emerald-teal">{progressPercentage.toFixed(1)}%</span>
                        </div>
                        <div className="w-full h-3 bg-soft-ash rounded-full overflow-hidden shadow-inner">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 shadow-lg ${progressPercentage > 90 ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-emerald-teal to-teal-accent'}`}
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-widest text-charcoal-ink/40">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>

                {/* Detailed Table container */}
                <div className="bg-white rounded-2xl border border-black/5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] overflow-hidden">
                    <div className="px-8 py-6 border-b border-black/5 bg-soft-ash/30 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-emerald-teal/10 flex items-center justify-center text-emerald-teal">
                                <span className="material-symbols-outlined text-sm">list_alt</span>
                            </div>
                            <h3 className="font-display font-medium text-lg text-charcoal-ink">Detailed Expenses</h3>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-black/5 rounded-lg text-charcoal-ink/40 hover:text-charcoal-ink transition-colors"><span className="material-symbols-outlined text-[20px]">filter_list</span></button>
                            <button className="p-2 hover:bg-black/5 rounded-lg text-charcoal-ink/40 hover:text-charcoal-ink transition-colors"><span className="material-symbols-outlined text-[20px]">sort</span></button>
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-soft-ash/20 text-[10px] uppercase font-bold text-charcoal-ink/40 border-b border-black/5">
                                <th className="px-8 py-5 tracking-widest">Category</th>
                                <th className="px-8 py-5 tracking-widest">Item Description</th>
                                <th className="px-8 py-5 tracking-widest text-right">Estimated</th>
                                <th className="px-8 py-5 tracking-widest text-right">Actual Paid</th>
                                <th className="px-8 py-5 tracking-widest text-center">Status</th>
                                <th className="px-8 py-5 tracking-widest text-right">Paid By</th>
                                <th className="px-8 py-5"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-charcoal-ink divide-y divide-black/5">
                            {expenses.map((item) => (
                                <tr key={item.id} className="group hover:bg-emerald-teal/[0.02] transition-colors relative">
                                    <td className="px-8 py-5 font-semibold text-charcoal-ink/80">{item.category}</td>
                                    <td className="px-8 py-5 font-medium">{item.item}</td>
                                    <td className="px-8 py-5 text-right font-mono text-charcoal-ink/60">{formatCurrency(item.estimated)}</td>
                                    <td className="px-8 py-5 text-right font-mono font-bold text-emerald-teal">{formatCurrency(item.actual)}</td>
                                    <td className="px-8 py-5 text-center">
                                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5
                                            ${item.status === 'Paid' ? 'bg-emerald-teal/10 text-emerald-teal border border-emerald-teal/20' :
                                                item.status === 'Pending' ? 'bg-black/5 text-charcoal-ink/40 border border-black/5' :
                                                    'bg-amber-100 text-amber-700 border border-amber-200'}`}>
                                            <span className={`size-1.5 rounded-full ${item.status === 'Paid' ? 'bg-emerald-teal' : item.status === 'Pending' ? 'bg-charcoal-ink/40' : 'bg-amber-600'}`}></span>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right text-charcoal-ink/50 italic font-serif">{item.paidBy}</td>
                                    <td className="px-8 py-5 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="text-charcoal-ink/40 hover:text-emerald-teal transition-colors"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="p-4 border-t border-black/5 text-center bg-soft-ash/20">
                        <button className="text-xs font-bold uppercase tracking-widest text-emerald-teal hover:text-teal-accent transition-colors flex items-center justify-center gap-2 group/btn">
                            View All Transactions
                            <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
