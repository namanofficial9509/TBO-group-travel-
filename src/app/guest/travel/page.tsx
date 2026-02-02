"use client";

export default function TravelPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">

            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Your Guest Experience</h1>
                <p className="text-slate-500">Welcome to Udaipur. Everything is arranged for your seamless stay during the Ethereal Vows celebration.</p>
                <button className="mt-8 px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-700 shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2 mx-auto">
                    <span className="material-symbols-outlined">download</span>
                    Download Offline Itinerary PDF
                </button>
            </div>

            {/* Section 1: Travel & Stay */}
            <div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">bed</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">1. Travel & Stay</h2>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-5/12 relative min-h-[300px]">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUMfB5wO9NbfWz1sL6T8GKbkXR56gQPY5LoKJKQSPXDJFkdPaz3OeZxB-Lylen9Qrl-6SJb2yCj0MXi_VHsQTksaQaSSBLCE-uKGWzb03yRi1KYyPfR3rSEAwv-cHPkcccU6zrxWI3-lSZrocMwH7pppoEtMAdEl1yhiUCw5kWBtcRMt5JCpWL74bQf4vnTXDdp9YqTmn0BlcH3mewvp1b-DWyLgrN9ttQGP00Myptj0Ws0dJIVIDYNPRuL2WbZgfLLDHtfIvauv0" alt="Taj Lake Palace" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute top-6 left-6">
                            <span className="px-3 py-1.5 bg-[#11d4b4] text-[#064e43] text-[10px] font-bold uppercase rounded shadow-lg backdrop-blur-md">Primary Residence</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:w-7/12 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-display font-medium text-slate-900">Taj Lake Palace</h3>
                                    <p className="text-sm text-[#11d4b4] font-bold flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined text-sm">verified</span> RESERVED
                                    </p>
                                </div>
                                <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl text-center min-w-[100px]">
                                    <span className="material-symbols-outlined text-3xl text-slate-800">qr_code_2</span>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">Digital Check-in</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Check-in</p>
                                    <p className="font-bold text-slate-900 text-lg">Oct 12, 2024</p>
                                    <p className="text-xs text-slate-500">From 2:00 PM</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Room Category</p>
                                    <p className="font-bold text-slate-900 text-lg">Luxury Lake View</p>
                                    <p className="text-xs text-slate-500">2 Adults</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4">
                                <p className="text-xs font-bold text-slate-900 mb-1">Premium Lake View Room</p>
                                <p className="text-xs text-slate-500 leading-relaxed">Features high-clarity panoramic windows offering views of the lake and city lights.</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 flex gap-4">
                            <button className="flex-1 py-3 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">map</span> Open in Google Maps
                            </button>
                            <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors">
                                View Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Transport */}
            <div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="size-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">directions_car</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">2. Movement & Transport</h2>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-2 flex items-stretch">
                    <div className="flex-1 p-6 md:p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Upcoming Transfer</p>
                                <h3 className="text-xl font-bold text-slate-900">Airport Pickup</h3>
                            </div>
                            <span className="px-3 py-1 bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold uppercase rounded-full">Confirmed</span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mt-1">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">10:30 AM</p>
                                    <p className="text-sm text-slate-500">Udaipur International Airport (UDR)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mt-1">
                                    <span className="material-symbols-outlined text-sm">directions_car</span>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Luxury Sedan</p>
                                    <p className="text-sm text-slate-500">BMW 5 Series • Black (RJ 27 AB 0001)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-72 bg-slate-50 rounded-[1.25rem] p-6 border-l border-slate-100">
                        <div className="text-center">
                            <div className="size-20 rounded-full bg-white p-1 shadow-sm mx-auto mb-3">
                                <img src="https://i.pravatar.cc/150?u=vikram" alt="Vikram" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h4 className="font-bold text-slate-900">Vikram Singh</h4>
                            <p className="text-xs text-slate-500 mb-6">Ground Coordinator</p>
                            <button className="w-full py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-sm">call</span> Call Coordinator
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
