"use client";



export default function BudgetPage() {
    // Simulated Backend Logic: 'HOST_PAID' (Wedding) vs 'SELF_PAID' (Corporate/Upgrade)
    const PAYMENT_MODE: 'HOST_PAID' | 'SELF_PAID' = 'HOST_PAID';

    return (
        <div className="max-w-6xl mx-auto animate-fade-in-up">
            <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span>Invitation</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span>Accommodation</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="font-bold text-slate-900">Confirmation</span>
                </div>
                <h1 className="text-3xl font-display font-bold text-slate-900">
                    {PAYMENT_MODE === 'HOST_PAID' ? "Confirm Your Stay Details" : "Secure Your Stay"}
                </h1>
                <p className="text-slate-500">
                    {PAYMENT_MODE === 'HOST_PAID'
                        ? "Your accommodation is hosted by the event family. Please review details."
                        : "Complete your booking for the Royal Rajputana Suite"}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Left Column: Forms */}
                <div className="lg:w-2/3 space-y-6">

                    {/* 1. Guest Details */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="size-8 rounded-full bg-[#11d4b4]/10 text-[#11d4b4] font-bold flex items-center justify-center text-sm">1</div>
                            <h2 className="text-xl font-bold text-slate-900">Guest Details</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2">First Name</label>
                                <input type="text" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#11d4b4]" placeholder="e.g. Arjun" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-2">Last Name</label>
                                <input type="text" className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#11d4b4]" placeholder="e.g. Sharma" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-xs font-bold text-slate-700 mb-2">Dietary Preferences</label>
                            <select className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#11d4b4]">
                                <option>Vegetarian (Veg)</option>
                                <option>Non-Vegetarian</option>
                                <option>Vegan</option>
                                <option>Jain (No Onion/Garlic)</option>
                            </select>
                        </div>
                    </div>

                    {/* NEW: Your Responsibilities (Visible in HOST_PAID mode) */}
                    {PAYMENT_MODE === 'HOST_PAID' && (
                        <div className="bg-amber-50 rounded-2xl border border-amber-100 p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-4 text-amber-900">
                                <span className="material-symbols-outlined">assignment_turned_in</span>
                                <h3 className="text-lg font-bold">Your Responsibilities</h3>
                            </div>
                            <p className="text-sm text-amber-800 mb-6">While your stay is covered, please ensure you complete these steps to help us plan better.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { text: "Confirm Stay Dates", done: true },
                                    { text: "Share Dietary Specs", done: true },
                                    { text: "Add Flight Details", done: false },
                                    { text: "RSVP for Functions", done: false }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-amber-100/50">
                                        <div className={`size-5 rounded-full flex items-center justify-center border ${item.done ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300 text-transparent"}`}>
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        </div>
                                        <span className={`text-sm font-semibold ${item.done ? "text-slate-700" : "text-slate-400"}`}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Additional Info Form (Flight details moved here or shared) */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="size-8 rounded-full bg-[#11d4b4]/10 text-[#11d4b4] font-bold flex items-center justify-center text-sm">2</div>
                            <h2 className="text-xl font-bold text-slate-900">Arrival & Logistics</h2>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-2">Arrival & Flight Information</label>
                            <textarea className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-[#11d4b4] min-h-[100px]" placeholder="Please provide flight number and ETA for airport pickup..."></textarea>
                        </div>
                    </div>


                </div>

                {/* Right Column: Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden sticky top-24">
                        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="font-bold text-slate-900 font-display text-lg">Booking Summary</h3>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-medium">Suite (3 Nights)</span>
                                <span className="font-bold text-slate-900">
                                    {PAYMENT_MODE === 'HOST_PAID' ? "Hosted" : "₹85,000"}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-medium">Event Access & F&B</span>
                                <span className="font-bold text-slate-900">Included</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-600 font-medium">Taxes & Fees</span>
                                <span className="font-bold text-slate-900">
                                    {PAYMENT_MODE === 'HOST_PAID' ? "Hosted" : "₹15,300"}
                                </span>
                            </div>

                            <div className="border-t border-slate-100 pt-4 flex justify-between items-center mt-4">
                                <span className="text-slate-900 font-bold">Total Amount</span>
                                <div className="text-right">
                                    {PAYMENT_MODE === 'HOST_PAID' ? (
                                        <>
                                            <span className="text-2xl font-bold text-[#11d4b4] font-display">₹1,00,300</span>
                                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide mt-1">Paid by Host <span className="material-symbols-outlined text-xs align-middle">check_circle</span></p>
                                        </>
                                    ) : (
                                        <span className="text-2xl font-bold text-[#11d4b4] font-display">₹1,00,300</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 border-t border-slate-100">
                            {PAYMENT_MODE === 'HOST_PAID' ? (
                                <p className="text-xs text-slate-500 mb-6 text-center italic">
                                    &quot;We are delighted to host your stay. Please confirm your details to help us prepare for your arrival.&quot;
                                </p>
                            ) : (
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                        <span className="material-symbols-outlined text-[#11d4b4] text-sm">check_circle</span> Luxury Airport Transfers
                                    </li>
                                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                        <span className="material-symbols-outlined text-[#11d4b4] text-sm">check_circle</span> All Festive Meals & Sangeet Access
                                    </li>
                                </ul>
                            )}

                            <button className="w-full py-4 bg-[#11d4b4] text-[#064e43] font-bold text-sm rounded-xl shadow-lg shadow-[#11d4b4]/20 hover:bg-[#0fd6b6] transition-all hover:scale-[1.02] active:scale-[0.98]">
                                {PAYMENT_MODE === 'HOST_PAID' ? "Confirm Details" : "Confirm & Pay"}
                            </button>

                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-blue-500 text-lg">verified_user</span>
                                <span className="text-[10px] font-bold text-blue-600 uppercase">Premium Experience Guaranteed</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center space-y-2">
                        <p className="text-sm text-slate-500">Need help with your booking?</p>
                        <div className="flex justify-center gap-6">
                            <button className="text-[#11d4b4] font-bold text-sm flex items-center gap-1 hover:text-[#0ebca0] transition-colors"><span className="material-symbols-outlined text-lg">call</span> Call Concierge</button>
                            <button className="text-[#11d4b4] font-bold text-sm flex items-center gap-1 hover:text-[#0ebca0] transition-colors"><span className="material-symbols-outlined text-lg">chat</span> WhatsApp</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
