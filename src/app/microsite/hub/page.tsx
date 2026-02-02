"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GuestHubPage() {
    useEffect(() => {
        // Load fonts manually
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <div className="bg-[#f6f8f8] dark:bg-[#10221f] min-h-screen font-sans text-slate-900 dark:text-white selection:bg-[#11d4b4]/30">

            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">

                    {/* Navigation */}
                    <div className="w-full flex justify-center py-2 border-b border-solid border-slate-200 dark:border-[#234842] bg-[#f6f8f8]/80 dark:bg-[#10221f]/80 backdrop-blur-md sticky top-0 z-50">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                            <header className="flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="size-6 text-[#11d4b4]">
                                        <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] uppercase hidden md:block">Ethereal Vows</h2>
                                </div>
                                <div className="flex flex-1 justify-end gap-8">
                                    <div className="hidden md:flex items-center gap-9">
                                        <a className="text-[#11d4b4] text-sm font-semibold leading-normal" href="#">My Travel</a>
                                        <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[#11d4b4] transition-colors" href="/microsite#itinerary">Itinerary</Link>
                                        <a className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[#11d4b4] transition-colors" href="#">Gallery</a>
                                        <a className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[#11d4b4] transition-colors" href="#">Concierge</a>
                                    </div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-[#11d4b4]/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAAyWGlxgNKL6Hf0H0nBLhdsEhL9mcrurTWqY1b64rAD3AZOMQB7GGH7g2Q_ARd2_Ai99OklCz2Rr3SR7k2_wthB5GFIORTfx-sxJgzmc1bMbzxMXgrz4EyUMYtwwZ2tmEh8DKEEcKnb6DG9Np8v7aRGGAaQTux-J_KgItmZAhODWysTX9iwfdasbLwN1tYDd12kIq5mbM8ru8MOK9O6IyHCg4RrWRHidwT1FniOdLIbaAku56ZlQh77JFJlP79iWGo1KL6-ge8Yo")' }}></div>
                                </div>
                            </header>
                        </div>
                    </div>

                    <main className="flex flex-1 justify-center py-8">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 md:px-10">

                            {/* Live Update Banner */}
                            <div className="mb-6">
                                <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#11d4b4]/30 bg-[#11d4b4]/10 p-5 md:flex-row md:items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#11d4b4] text-[#10221f] p-2 rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-xl">notifications_active</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">Live Update</p>
                                            <p className="text-slate-600 dark:text-[#92c9c0] text-sm font-normal leading-normal">Your airport pickup time has been moved to 10:30 AM for a smoother transition.</p>
                                        </div>
                                    </div>
                                    <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#11d4b4] text-[#10221f] text-sm font-bold leading-normal hover:opacity-90 transition-opacity shadow-lg shadow-[#11d4b4]/20">
                                        <span className="truncate">View Schedule</span>
                                    </button>
                                </div>
                            </div>

                            {/* Welcome Heading */}
                            <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
                                <div className="flex flex-col gap-2">
                                    <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Welcome to Udaipur, Ananya</p>
                                    <p className="text-slate-600 dark:text-[#92c9c0] text-lg font-normal leading-normal">Your personal travel hub for Ethereal Vows.</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 border border-slate-300 dark:border-[#32675e] text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                                        <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                                        <span>PDF Itinerary</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-[#11d4b4] text-[#10221f] font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#11d4b4]/20">
                                        <span className="material-symbols-outlined text-lg">support_agent</span>
                                        <span>Contact Concierge</span>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                {/* Travel Summary Main Card */}
                                <div className="lg:col-span-2 space-y-8">
                                    <div className="@container">
                                        <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-[#19332f] border border-slate-200 dark:border-[#234842]">
                                            <div className="w-full bg-center bg-no-repeat aspect-[21/9] bg-cover relative group" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200")' }}>
                                                {/* Switched image to Hyatt/Modern Luxury feel to match data, though keeping the user's high quality style */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                                    <span className="bg-[#11d4b4]/90 text-[#10221f] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-lg">Primary Residence</span>
                                                </div>
                                            </div>
                                            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-6 p-6 md:p-8">
                                                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Grand Hyatt</h3>
                                                        <div className="flex items-center gap-2 text-[#11d4b4]">
                                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                                            <p className="text-sm font-medium">Bambora, Udaipur, Rajasthan 313001</p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white p-2 rounded-lg shadow-inner">
                                                        <img alt="Check-in QR Code" className="size-24" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKFU9ZwOJoMPe4pH2Gqgi3iox-D4hn9U_M_WNWsTdGHre09IjhHRN3Oir6WNojooGcKEzuD1n_9UEhuepe_yZ7H07FlpvdOcyHBFYpMKSURa4NTibWG2fvBFrfX0P7XIPrgrLv9E3MAhRr7BwQ12v-feuEU3yVpj8IHhG64qFsxqnKXIRCU1_cmYKpBeoi8JHF8sQWV6W0M3qJ62gKTMOyKSTWcB8R-BFx3ktGVjHS28BCdq3s1tzmR90A3Y3vKSx2f6jfS95S-k" />
                                                        <p className="text-[10px] text-slate-500 font-bold text-center mt-1 uppercase">Digital Check-in</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y border-slate-100 dark:border-[#234842]">
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-slate-400 dark:text-[#92c9c0] text-xs font-bold uppercase tracking-wider">Room Category</p>
                                                        <p className="text-slate-800 dark:text-white text-base font-semibold">Luxury Lake View</p>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-slate-400 dark:text-[#92c9c0] text-xs font-bold uppercase tracking-wider">Arrival Transfer</p>
                                                        <p className="text-slate-800 dark:text-white text-base font-semibold">Pickup: 10:30 AM</p>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-slate-400 dark:text-[#92c9c0] text-xs font-bold uppercase tracking-wider">Booking Status</p>
                                                        <div className="flex items-center gap-2">
                                                            <span className="size-2 rounded-full bg-[#11d4b4] animate-pulse"></span>
                                                            <p className="text-[#11d4b4] text-base font-semibold">Confirmed</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end gap-3">
                                                    <button className="px-6 h-10 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:text-slate-900 dark:hover:text-white transition-colors">Modify Request</button>
                                                    <button className="px-6 h-10 bg-[#11d4b4] text-[#10221f] rounded-lg font-bold hover:opacity-90 transition-all shadow-lg shadow-[#11d4b4]/20">View Full Booking</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Add-ons Section */}
                                    <div>
                                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight px-2 pb-4">Enhance Your Stay</h2>
                                        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-2 px-2">
                                            {/* Add-on 1 */}
                                            <div className="min-w-[280px] group bg-white dark:bg-[#19332f] border border-slate-200 dark:border-[#234842] rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                                                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC6kMFCjzbJgtTJiFvRvM_73k9wHosn4nYq3zwvpX0gLsXqmWUDpvnWOA1cKPMKmonMhwpGT258J9F8YmmRVjkopzLc1-_b5O6OZn9IqAoPNQva-u5hle3PV_xshl6tz3uwvGecU_CW9T2-uyAJHXw9ViwaUY0otkVxHiroZ6zX3pyDlUGudGys5WgnJAmoPsACmWSIcL0RbUVbg1IGUKa-ehl9SA0v7AVUqb2e9FpCs1wo0PgxxhdktvTMW0vVQlBCKIQZ3upMXdo")' }}></div>
                                                <div className="p-4 flex flex-col gap-3">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <p className="text-slate-900 dark:text-white font-bold text-base">Local Udaipur Tour</p>
                                                            <p className="text-slate-500 dark:text-[#92c9c0] text-xs">4 Hours • Guided</p>
                                                        </div>
                                                        <span className="text-[#11d4b4] font-bold text-sm">Included</span>
                                                    </div>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <div className="flex -space-x-2">
                                                            <div className="size-6 rounded-full border border-white dark:border-[#19332f] bg-slate-200 bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6dnc1kvktSXAQpVpOIE3GJgiqERtUtFgYaKy_omcKTgzrJoVm-h5LhaIUgkjkxrPVwOQx_9vl3_r0Ff3Gjr01VArfYZOHAlFSn2akVQkNeXD1_JjHHECfEKmaMVHpDsYNGoDreAnjNcwZNslH9Pd2Povdr3EcfCXh3_5gA-FkuGIkwNtc_k2fBXquuNAMnOwP_kzLOrvRUMEMGlkcIVtgt4m3QHBcqELrtlEO2oZe3-O7HDNaY8J7vHALRxikzAEiI8qdruwFdx4")' }}></div>
                                                            <div className="size-6 rounded-full border border-white dark:border-[#19332f] bg-slate-300 flex items-center justify-center text-[10px] text-slate-600 font-bold">+12</div>
                                                        </div>
                                                        <button className="bg-[#11d4b4]/20 hover:bg-[#11d4b4] text-[#11d4b4] hover:text-[#10221f] px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Added</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Add-on 2 */}
                                            <div className="min-w-[280px] group bg-white dark:bg-[#19332f] border border-slate-200 dark:border-[#234842] rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                                                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSpkzBrI5x_SeSOYSehorjYRNelGUxXNvWPWUertH0r0IezD1r2KlfuCjnMz-jBFnTmqwTlgjUvzGFEP77PKD6snVBdjq6ziDmRbkOYwDwWxdj05tRZUJlbVxtr08vHpeC-EHKPqMZPXj22xhE1ECkTbiNZcF54avfg4DN1zW-gNLyvEyoh64e1iPlv7FFl3NoWsNDSxZxYyd-5q8WnAg9opy5QT9O7jVgxl7okviBtfvqZbqIBLusCzi52Yn1WM9wylreasNysQg")' }}></div>
                                                <div className="p-4 flex flex-col gap-3">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <p className="text-slate-900 dark:text-white font-bold text-base">Jiva Spa Session</p>
                                                            <p className="text-slate-500 dark:text-[#92c9c0] text-xs">60 Min • Ayurvedic</p>
                                                        </div>
                                                        <span className="text-slate-400 font-bold text-sm">$85</span>
                                                    </div>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <p className="text-[10px] text-slate-400 uppercase font-bold">Limited Slots</p>
                                                        <button className="border border-[#11d4b4] text-[#11d4b4] hover:bg-[#11d4b4] hover:text-[#10221f] px-4 py-1.5 rounded-lg text-xs font-bold transition-all">+ Add Extra</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Add-on 3 */}
                                            <div className="min-w-[280px] group bg-white dark:bg-[#19332f] border border-slate-200 dark:border-[#234842] rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                                                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjDgyqYH-Hn9-HWrRIlB-vDLzbRV9fUIbs9A8DsHGjmIoiFoSEo_BWgvEPkjKnS1KY9suVA4nYa8zMfGMM47fQoYuQ-tRnwIznwyT4XKVLMtjc0gIqdj7sp7dyUU8qZu0JXO9DpSlWb5Lw4Ya8KqTsCqeRcWIGfEnfwJF8_HG1lRagInmHJbbh9hwJ3SJSfA-Qz8cbdkOb3_hgOpT4NNP9whDBXU4QdgYsK4joN0wEQJIKXOFDJ1r-9hJlNOY7Hw9uWyL5gB_U7JM")' }}></div>
                                                <div className="p-4 flex flex-col gap-3">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <p className="text-slate-900 dark:text-white font-bold text-base">Early Arrival (Extra Night)</p>
                                                            <p className="text-slate-500 dark:text-[#92c9c0] text-xs">Nov 12th Check-in</p>
                                                        </div>
                                                        <span className="text-slate-400 font-bold text-sm">$320</span>
                                                    </div>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <p className="text-[10px] text-slate-400 uppercase font-bold">Upon Availability</p>
                                                        <button className="border border-[#11d4b4] text-[#11d4b4] hover:bg-[#11d4b4] hover:text-[#10221f] px-4 py-1.5 rounded-lg text-xs font-bold transition-all">Request</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Side Column: Logistics & FAQs */}
                                <div className="flex flex-col gap-8">
                                    {/* Weather Card */}
                                    <div className="bg-[#11d4b4]/5 border border-[#11d4b4]/20 rounded-xl p-6 flex items-center justify-between">
                                        <div>
                                            <p className="text-slate-500 dark:text-[#92c9c0] text-xs font-bold uppercase mb-1">Udaipur Weather</p>
                                            <p className="text-2xl font-black text-slate-900 dark:text-white">28°C / 14°C</p>
                                            <p className="text-sm text-slate-600 dark:text-[#92c9c0]">Sunny & Pleasant</p>
                                        </div>
                                        <span className="material-symbols-outlined text-5xl text-[#11d4b4]">wb_sunny</span>
                                    </div>

                                    {/* FAQ Accordions */}
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-slate-900 dark:text-white text-lg font-bold px-2">Need to Know</h3>

                                        <div className="group cursor-pointer bg-white dark:bg-[#19332f] border border-slate-200 dark:border-[#234842] rounded-lg p-4 transition-all hover:border-[#11d4b4]/50">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-[#11d4b4]">checkroom</span>
                                                    <span className="font-bold text-sm">Dress Code</span>
                                                </div>
                                                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#11d4b4] transition-colors">expand_more</span>
                                            </div>
                                            <div className="hidden group-active:block group-hover:block mt-3 text-sm text-slate-600 dark:text-[#92c9c0] leading-relaxed">
                                                Wedding events are semi-formal. Traditional Indian wear is highly encouraged for the Sangeet.
                                            </div>
                                        </div>

                                        <div className="group cursor-pointer bg-white dark:bg-[#19332f] border border-slate-200 dark:border-[#234842] rounded-lg p-4 transition-all hover:border-[#11d4b4]/50">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-[#11d4b4]">restaurant</span>
                                                    <span className="font-bold text-sm">Dietary Preferences</span>
                                                </div>
                                                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#11d4b4] transition-colors">expand_more</span>
                                            </div>
                                            <div className="hidden group-active:block group-hover:block mt-3 text-sm text-slate-600 dark:text-[#92c9c0] leading-relaxed">
                                                Vegetarian and Gluten-free options will be available at all banquet events.
                                            </div>
                                        </div>

                                        <div className="group cursor-pointer bg-white dark:bg-[#19332f] border border-slate-200 dark:border-[#234842] rounded-lg p-4 transition-all hover:border-[#11d4b4]/50">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-[#11d4b4]">map</span>
                                                    <span className="font-bold text-sm">Venue Map</span>
                                                </div>
                                                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#11d4b4] transition-colors">expand_more</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map Section */}
                                    <div className="rounded-xl overflow-hidden h-48 relative group border border-slate-200 dark:border-[#234842]">
                                        <img
                                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSEpTvX89zxWkRxhPaoX0uB2OCMLrGj64Fv8FzAo501r-5kpqTD_j4lSInxDmm7tN4wwzwMTP7P5i4_GgLLNhskj-c6OYw2AwmhkMGqGCTFTLrxZ2CsHFuHM4bTx9tLffSSARoy9Ch3U93dzrc-HJyxSU4aH5lzM180_enWapwBmU72ONh_YXMSwh1fwBMu8avbxAPLMmKUN2I77eLxK8qSXGIKO3PkaB402SMaPGuekv-SbC-Smbk8BKE7iSwVCmvHo1v6myTUZI"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-[#10221f]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#11d4b4]/40 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[#11d4b4] text-sm">explore</span>
                                                <span className="text-xs font-bold text-white tracking-widest uppercase">Explore Udaipur</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>

                    <footer className="mt-auto py-12 border-t border-slate-200 dark:border-[#234842] flex justify-center">
                        <div className="layout-content-container max-w-[1200px] flex-1 px-10 flex flex-col items-center gap-6">
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                                <span className="material-symbols-outlined text-xl">auto_awesome</span>
                                <p className="text-sm font-bold uppercase tracking-[0.2em]">Ethereal Vows 2026</p>
                            </div>
                            <div className="flex gap-8">
                                <a className="text-xs text-slate-400 hover:text-[#11d4b4] uppercase tracking-widest transition-colors" href="#">Terms of Travel</a>
                                <a className="text-xs text-slate-400 hover:text-[#11d4b4] uppercase tracking-widest transition-colors" href="#">Privacy Hub</a>
                                <a className="text-xs text-slate-400 hover:text-[#11d4b4] uppercase tracking-widest transition-colors" href="#">Help Desk</a>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
        </div>
    );
}
