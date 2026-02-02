"use client";

import { useState } from "react";

export default function GuestDashboard() {
    const [openAccordion, setOpenAccordion] = useState<string | null>("dresscode");

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="space-y-8 animate-fade-in-up">

            {/* Live Update Banner */}
            <div className="bg-[#0F766E]/5 border border-[#0F766E]/20 rounded-2xl p-4 flex items-start sm:items-center justify-between gap-4">
                <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-[#0F766E] flex items-center justify-center shrink-0 animate-pulse">
                        <span className="material-symbols-outlined text-white text-xl">notifications_active</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#0F766E] text-sm mb-0.5">Live Update</h3>
                        <p className="text-sm text-slate-600">Your airport pickup time has been moved to <span className="font-bold">10:30 AM</span> for a smoother transition.</p>
                    </div>
                </div>
                <button className="hidden sm:block px-4 py-2 bg-[#0F766E] text-white text-xs font-bold rounded-lg hover:bg-[#0d6e66] transition-colors whitespace-nowrap">
                    View Schedule
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Content (2/3) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Hero Section */}
                    <div className="relative rounded-[2rem] overflow-hidden min-h-[400px] flex flex-col justify-end group">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRGap1V-kQ4VE48AgBGN1gUKnyRIt93q6ssj1-cDTInNl7Jz0Dng_bgTX_hekUmS2Hb97d7g0Vf3yAkKKpnBT1pNlgJBrbOMju-1prhi52z40k_C3g0_xtUFvJ5rOd1a1ef8TemSODjtcf0z1lumN98rwwzrwYyoxFD-clSI_lKwH3AnYtRDYqGsKujY-yQzQyzXgqWB98SN77VKbm1aX39xlLK3pIPrurWdbQYT3lUYgT_A72ZAnJPlzryx9qTeqNnvXqIN1DUmc"
                                alt="Udaipur"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D20] via-[#0F1D20]/40 to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-8 md:p-10">
                            <h1 className="text-white text-4xl md:text-5xl font-display font-medium leading-tight mb-2">
                                Welcome to Udaipur, <br /> <span className="text-[#34D399]">Priya</span>
                            </h1>
                            <p className="text-white/80 text-lg mb-8 max-w-md">Your personal travel hub for the Ethereal Vows celebration. Everything is arranged for your seamless stay.</p>

                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-sm hover:bg-white/20 transition-all">
                                    <span className="material-symbols-outlined">description</span>
                                    PDF Itinerary
                                </button>
                                <button className="flex items-center gap-2 px-6 py-3 bg-[#34D399] text-[#064e46] rounded-xl font-bold text-sm hover:bg-[#2ebb89] transition-all shadow-lg shadow-[#34D399]/20">
                                    <span className="material-symbols-outlined">support_agent</span>
                                    Contact Concierge
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Enhance Your Stay */}
                    <div>
                        <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Enhance Your Stay</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Card 1 */}
                            <div className="group bg-white rounded-2xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="h-40 rounded-xl bg-slate-100 overflow-hidden mb-4 relative">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUMfB5wO9NbfWz1sL6T8GKbkXR56gQPY5LoKJKQSPXDJFkdPaz3OeZxB-Lylen9Qrl-6SJb2yCj0MXi_VHsQTksaQaSSBLCE-uKGWzb03yRi1KYyPfR3rSEAwv-cHPkcccU6zrxWI3-lSZrocMwH7pppoEtMAdEl1yhiUCw5kWBtcRMt5JCpWL74bQf4vnTXDdp9YqTmn0BlcH3mewvp1b-DWyLgrN9ttQGP00Myptj0Ws0dJIVIDYNPRuL2WbZgfLLDHtfIvauv0" className="w-full h-full object-cover" alt="City Palace" />
                                    <span className="absolute top-3 right-3 px-2 py-1 bg-emerald-500/90 text-white text-[10px] font-bold uppercase rounded backdrop-blur-md">Included</span>
                                </div>
                                <div className="px-2">
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">Local Udaipur Tour</h3>
                                    <p className="text-slate-500 text-xs mb-4">4 Hours • Guided • City Palace & Jagdish Temple</p>
                                    <button className="w-full py-2 bg-slate-100 text-slate-400 font-bold text-xs rounded-lg cursor-default">Added to Itinerary</button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group bg-white rounded-2xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                                <div className="h-40 rounded-xl bg-slate-100 overflow-hidden mb-4 relative">
                                    <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Spa" />
                                    <span className="absolute top-3 right-3 px-2 py-1 bg-white/90 text-slate-900 text-[10px] font-bold uppercase rounded backdrop-blur-md">$85</span>
                                </div>
                                <div className="px-2">
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">Jiva Spa Session</h3>
                                    <p className="text-slate-500 text-xs mb-4">60 Min • Ayurvedic Massage • Limited Slots</p>
                                    <button className="w-full py-2 border border-[#0F766E] text-[#0F766E] font-bold text-xs rounded-lg hover:bg-[#0F766E] hover:text-white transition-all">+ Add Session</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Sidebar (1/3) */}
                <div className="space-y-6">

                    {/* Weather Widget */}
                    <div className="bg-[#11282C] rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <span className="material-symbols-outlined text-8xl">sunny</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#34D399] mb-4">Udaipur Weather</p>
                        <div className="flex items-end gap-3 mb-2">
                            <span className="text-6xl font-display font-medium">28°</span>
                            <span className="text-3xl opacity-60 font-light text-[#34D399]">/ 14°</span>
                        </div>
                        <p className="text-lg font-medium opacity-90 mb-8">Sunny & Pleasant</p>

                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                            <div>
                                <p className="text-[10px] uppercase tracking-wider opacity-50 mb-1">Humidity</p>
                                <p className="font-bold">42%</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider opacity-50 mb-1">UV Index</p>
                                <p className="font-bold">Moderate</p>
                            </div>
                        </div>
                    </div>

                    {/* Need To Know Accordion */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="font-bold text-slate-900">Need to Know</h3>
                        </div>

                        {/* Item 1 */}
                        <div className="border-b border-slate-100">
                            <button onClick={() => toggleAccordion('dresscode')} className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">checkroom</span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Dress Code</span>
                                </div>
                                <span className={`material-symbols-outlined text-slate-400 transition-transform ${openAccordion === 'dresscode' ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            {openAccordion === 'dresscode' && (
                                <div className="px-4 pb-4 pl-[3.75rem] text-sm text-slate-500 leading-relaxed">
                                    <p className="mb-2"><strong className="text-slate-700">Sangeet:</strong> Royal Sparkle (Indo-Western)</p>
                                    <p><strong className="text-slate-700">Wedding:</strong> Traditional Formal (Pink/Gold Accents)</p>
                                </div>
                            )}
                        </div>

                        {/* Item 2 */}
                        <div className="border-b border-slate-100">
                            <button onClick={() => toggleAccordion('dietary')} className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">restaurant</span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Dietary Preferences</span>
                                </div>
                                <span className={`material-symbols-outlined text-slate-400 transition-transform ${openAccordion === 'dietary' ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            {openAccordion === 'dietary' && (
                                <div className="px-4 pb-4 pl-[3.75rem] text-sm text-slate-500 leading-relaxed">
                                    You have selected <strong className="text-slate-700">Vegetarian (No Onion/Garlic)</strong>. We have informed the chefs at all venues.
                                </div>
                            )}
                        </div>

                        {/* Item 3 */}
                        <div>
                            <button onClick={() => toggleAccordion('map')} className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">map</span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Venue Map</span>
                                </div>
                                <span className={`material-symbols-outlined text-slate-400 transition-transform ${openAccordion === 'map' ? 'rotate-180' : ''}`}>expand_more</span>
                            </button>
                            {openAccordion === 'map' && (
                                <div className="px-4 pb-4 pl-[3.75rem]">
                                    <div className="h-32 bg-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/73.68,24.58,12,0/400x200?access_token=YOUR_TOKEN')] bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 transition-all"></div>
                                        <button className="relative z-10 px-4 py-2 bg-[#1F2933] text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">explore</span> Explore Udaipur
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
