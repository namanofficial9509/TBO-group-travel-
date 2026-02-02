"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function MicrositePage() {
    useEffect(() => {
        // Load fonts manually if not already loaded in layout
        const link = document.createElement('link');
        link.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    return (
        <div className="bg-[#FCFAF7] dark:bg-[#221015] font-sans text-[#1b0d11] dark:text-[#fcf8f9] selection:bg-[#ee2b5b]/30">

            {/* Navigation */}
            <header className="fixed top-0 z-50 w-full bg-[#FCFAF7]/80 dark:bg-[#221015]/80 backdrop-blur-md border-b border-[#f3e7ea] dark:border-[#3a1d25]">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-8 text-[#ee2b5b]">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[#ee2b5b]">Ethereal Vows</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        <a className="text-sm font-semibold hover:text-[#ee2b5b] transition-colors" href="#itinerary">Itinerary</a>
                        <a className="text-sm font-semibold hover:text-[#ee2b5b] transition-colors" href="#packages">Packages</a>
                        <a className="text-sm font-semibold hover:text-[#ee2b5b] transition-colors" href="#venue">The Venue</a>
                        <Link
                            href="/microsite/hub"
                            className="bg-[#ee2b5b] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide hover:opacity-90 transition-all shadow-[0_10px_30px_-10px_rgba(238,43,91,0.5)]"
                        >
                            Guest Profile
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#221015]">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
                    <img
                        alt="Grand Udaipur Palace at sunset"
                        className="w-full h-full object-cover scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNfkMs2Xtq4RCyVYxa-zH416uk_Ilr1XL2PGxvXJFnf6imxkiixkmSjtU13akxxcCsZYPHkqMyqku_FK78YPfHxgOZFzerEg4cLT4QUpxFO2IgDo4AwPERte52uJ7i12gyTQyWChWKWDG550C9HKTFsF9W2NGw3lYliUm6UACzQQcwFa7TKAI5pGRbRN7MZRVucwPPbLBA27-hsDCqkQ2ldAzOHrp60N1meIyUZv37NUD1EjNTqz26swYkZcy2VV_Omv44Adhl-GE"
                    />
                </div>

                <div className="relative z-20 text-center px-6">
                    <p className="text-white/90 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4">You are invited to</p>
                    <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 leading-none">
                        Ananya <span className="text-[#ee2b5b]">&</span> Ishaan
                    </h1>
                    <h2 className="text-white/90 text-lg md:text-2xl font-light italic mb-10">A Grand Wedding Celebration in Udaipur</h2>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="bg-[#ee2b5b] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ee2b5b]/90 transition-all shadow-[0_10px_30px_-10px_rgba(238,43,91,0.5)] hover:scale-105 active:scale-95">
                            Explore the Journey
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <span className="material-symbols-outlined text-white text-4xl">expand_more</span>
                </div>
            </section>

            {/* Sticky Status Bar */}
            <div className="sticky top-20 z-40 bg-white/95 dark:bg-[#221015]/95 border-b border-[#f3e7ea] dark:border-[#3a1d25] backdrop-blur-sm shadow-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[#ee2b5b]">verified</span>
                            <span className="text-sm font-medium">Status: <span className="text-[#ee2b5b] font-bold">Pending Confirmation</span></span>
                        </div>
                        <div className="h-4 w-px bg-[#f3e7ea] dark:bg-[#3a1d25]"></div>
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[#ee2b5b]">calendar_today</span>
                            <span className="text-sm font-medium">Arrival: <span className="font-bold text-slate-800 dark:text-white">12th Nov, 2024</span></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[#ee2b5b]">location_on</span>
                            <span className="text-sm font-medium">Location: <span className="font-bold text-slate-800 dark:text-white">City Palace, Udaipur</span></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <main className="max-w-7xl mx-auto px-6 lg:px-20 py-24 space-y-32">

                {/* Itinerary Section */}
                <section id="itinerary">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#ee2b5b] font-bold tracking-[0.2em] uppercase text-xs">Timeline of Love</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold mt-3">The Wedding Itinerary</h2>
                        </div>

                        <div className="relative space-y-12">
                            {/* Vertical Line */}
                            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#ee2b5b]/20 -translate-x-1/2"></div>

                            {/* Item 1 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="md:w-5/12 text-left md:text-right">
                                    <h3 className="text-2xl font-bold">The Welcome Sangeet</h3>
                                    <p className="text-[#ee2b5b] font-semibold mt-1">12th Nov • 07:00 PM</p>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Join us for an evening of music, dance, and celebratory cocktails as we kick off the festivities overlooking the lake.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                                        <span className="px-4 py-1.5 bg-[#ee2b5b]/10 text-[#ee2b5b] text-xs font-bold rounded-full">Dress: Ethnic Chic</span>
                                        <span className="px-4 py-1.5 bg-[#FCFAF7] border border-[#f3e7ea] text-xs font-bold rounded-full text-gray-600">Manek Chowk</span>
                                    </div>
                                </div>
                                <div className="absolute left-6 md:static size-12 bg-[#ee2b5b] rounded-full z-10 flex items-center justify-center text-white shadow-lg ring-8 ring-[#FCFAF7] dark:ring-[#221015] -translate-x-1/2 md:translate-x-0">
                                    <span className="material-symbols-outlined">music_note</span>
                                </div>
                                <div className="md:w-5/12 hidden md:block">
                                    <img
                                        alt="Sangeet decoration"
                                        className="rounded-[2rem] w-full h-48 object-cover shadow-[0_10px_30px_-10px_rgba(238,43,91,0.1)]"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUMfB5wO9NbfWz1sL6T8GKbkXR56gQPY5LoKJKQSPXDJFkdPaz3OeZxB-Lylen9Qrl-6SJb2yCj0MXi_VHsQTksaQaSSBLCE-uKGWzb03yRi1KYyPfR3rSEAwv-cHPkcccU6zrxWI3-lSZrocMwH7pppoEtMAdEl1yhiUCw5kWBtcRMt5JCpWL74bQf4vnTXDdp9YqTmn0BlcH3mewvp1b-DWyLgrN9ttQGP00Myptj0Ws0dJIVIDYNPRuL2WbZgfLLDHtfIvauv0"
                                    />
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8">
                                <div className="md:w-5/12 text-left">
                                    <h3 className="text-2xl font-bold">The Sacred Vows</h3>
                                    <p className="text-[#ee2b5b] font-semibold mt-1">13th Nov • 10:00 AM</p>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Witness the traditional Vedic ceremony as we take our seven steps together under the royal canopy.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="px-4 py-1.5 bg-[#ee2b5b]/10 text-[#ee2b5b] text-xs font-bold rounded-full">Dress: Royal Traditional</span>
                                        <span className="px-4 py-1.5 bg-[#FCFAF7] border border-[#f3e7ea] text-xs font-bold rounded-full text-gray-600">Zenana Mahal</span>
                                    </div>
                                </div>
                                <div className="absolute left-6 md:static size-12 bg-[#ee2b5b] rounded-full z-10 flex items-center justify-center text-white shadow-lg ring-8 ring-[#FCFAF7] dark:ring-[#221015] -translate-x-1/2 md:translate-x-0">
                                    <span className="material-symbols-outlined">favorite</span>
                                </div>
                                <div className="md:w-5/12 hidden md:block">
                                    <img
                                        alt="Wedding Mandap"
                                        className="rounded-[2rem] w-full h-48 object-cover shadow-[0_10px_30px_-10px_rgba(238,43,91,0.1)]"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJzReBP1oFIK6J40ytO-X6omY_b7gmTLjzUFBCjlWVCVISbyIuKWtrIjEANCT8smVTD4R7jVdRh8oMk2Azpq8hz6Qh181F9mBmus6qJaF-WgMR7sPPRihbasHD7ERR6bI7iMdVqknEtzH90ecVrG1tXHUAvGxjtY3X64cu2_7L6vifbE2JaV63daL8igm5VCzwVvCcXwJUeZOEZGB0ebPubX5J29uiIFDVpC5V6pB5FAZVTxSIAPmQAlkqnKUYAih5j4zt5lWlnBo"
                                    />
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="md:w-5/12 text-left md:text-right">
                                    <h3 className="text-2xl font-bold">The Grand Reception</h3>
                                    <p className="text-[#ee2b5b] font-semibold mt-1">14th Nov • 08:00 PM</p>
                                    <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                        A formal black-tie evening of gourmet dining, toasts, and dancing to celebrate our first night as a married couple.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                                        <span className="px-4 py-1.5 bg-[#ee2b5b]/10 text-[#ee2b5b] text-xs font-bold rounded-full">Dress: Black Tie</span>
                                        <span className="px-4 py-1.5 bg-[#FCFAF7] border border-[#f3e7ea] text-xs font-bold rounded-full text-gray-600">Durbar Hall</span>
                                    </div>
                                </div>
                                <div className="absolute left-6 md:static size-12 bg-[#ee2b5b] rounded-full z-10 flex items-center justify-center text-white shadow-lg ring-8 ring-[#FCFAF7] dark:ring-[#221015] -translate-x-1/2 md:translate-x-0">
                                    <span className="material-symbols-outlined">nightlight</span>
                                </div>
                                <div className="md:w-5/12 hidden md:block">
                                    <img
                                        alt="Reception Setup"
                                        className="rounded-[2rem] w-full h-48 object-cover shadow-[0_10px_30px_-10px_rgba(238,43,91,0.1)]"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN2nYT4xTwURUMrBk_999AUVW5M3WPVUVIyO1oGtChdXqArh9l_w9LybzWg_RjNUfIVK0IFQ1HiSfFJqE_CD0nibbsG5lNIOLzN780KgrI7RZUyYqwMUIOoavEeDckPH2X0n2M3dsaLS-SsfWA5aNRytf_LgVBCXqBWy9gDA0Ad02wdjYQZwlId7tVjzZ3_EWL7ALjm7uYq9EILDRXtW4M6Lhy1x99IzciXEpE_pFS5I0rpfwmlnuvtkzhNoBxSlC0IIgR0x8hzIQ"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Packages Section */}
                <section id="packages" className="scroll-mt-32">
                    <div className="text-center mb-16">
                        <span className="text-[#ee2b5b] font-bold tracking-[0.2em] uppercase text-xs">Stay in Luxury</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Curated Packages</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Selected guest inventory reserved specifically for our wedding weekend at the City Palace Udaipur.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Silver */}
                        <div className="group bg-white dark:bg-[#221015]/50 p-8 rounded-[2rem] border border-[#f3e7ea] dark:border-[#3a1d25] flex flex-col h-full hover:border-[#ee2b5b]/30 transition-all shadow-[0_10px_30px_-10px_rgba(238,43,91,0.1)]">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold">Heritage</h3>
                                    <p className="text-sm text-gray-500">Essential Palace Luxury</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-3xl font-black">₹45k</span>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">per night</p>
                                </div>
                            </div>
                            <ul className="space-y-4 flex-1">
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Heritage Classic Room
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Breakfast Buffet at Surya Mahal
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Guided Palace Walk
                                </li>
                            </ul>
                            <div className="mt-8 pt-8 border-t border-[#f3e7ea] dark:border-[#3a1d25]">
                                <button className="w-full py-3 rounded-full border-2 border-[#ee2b5b] text-[#ee2b5b] font-bold hover:bg-[#ee2b5b] hover:text-white transition-all">
                                    Select Heritage
                                </button>
                            </div>
                        </div>

                        {/* Gold / Bestseller */}
                        <div className="relative group bg-white dark:bg-[#221015]/50 p-8 rounded-[2rem] border-2 border-[#ee2b5b] flex flex-col h-full scale-105 shadow-2xl">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ee2b5b] text-white text-[10px] font-black tracking-widest uppercase py-1 px-4 rounded-full">
                                Bestseller
                            </div>
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold">Royal Suite</h3>
                                    <p className="text-sm text-[#ee2b5b] font-semibold">The Couple&apos;s Choice</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-3xl font-black">₹75k</span>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">per night</p>
                                </div>
                            </div>
                            <ul className="space-y-4 flex-1">
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Lake-View Palace Suite
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    All Inclusive Meal Plan
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Exclusive Spa Credit (₹5000)
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Priority Event Access
                                </li>
                            </ul>
                            <div className="mt-8">
                                <p className="text-[11px] text-center text-[#ee2b5b] font-bold mb-3 animate-pulse">Only 4 suites remaining!</p>
                                <button className="w-full py-4 rounded-full bg-[#ee2b5b] text-white font-bold hover:opacity-90 transition-all shadow-[0_10px_30px_-10px_rgba(238,43,91,0.5)]">
                                    Select Royal Suite
                                </button>
                            </div>
                        </div>

                        {/* VIP */}
                        <div className="group bg-white dark:bg-[#221015]/50 p-8 rounded-[2rem] border border-[#f3e7ea] dark:border-[#3a1d25] flex flex-col h-full hover:border-[#ee2b5b]/30 transition-all soft-shadow">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold">Imperial</h3>
                                    <p className="text-sm text-gray-500">Ultimate Indulgence</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-3xl font-black">₹140k</span>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">per night</p>
                                </div>
                            </div>
                            <ul className="space-y-4 flex-1">
                                <li className="flex items-center gap-3 text-sm">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Grand Presidential Suite
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    24/7 Personal Butler
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="material-symbols-outlined text-[#ee2b5b] text-xl">check_circle</span>
                                    Luxury Airport Limousine
                                </li>
                            </ul>
                            <div className="mt-8 pt-8 border-t border-[#f3e7ea] dark:border-[#3a1d25]">
                                <button className="w-full py-3 rounded-full border-2 border-[#ee2b5b] text-[#ee2b5b] font-bold hover:bg-[#ee2b5b] hover:text-white transition-all">
                                    Select Imperial
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery/Venue Intro */}
                <section id="venue" className="rounded-3xl overflow-hidden relative group">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
                        <div className="relative overflow-hidden">
                            <img
                                alt="Udaipur Palace Courtyard"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7w3wQ35K8CG_feRrjkWxiuuKuTCPp_qcwDMSDZK1CNmcnhsm_gYo1LXd-u6TmuGWyksGUy7sZ0MNfy4bjcRQDdiUHOaLs7N2W0Kar038_FTpLnABRA9pzKGduCdP-kJHnLxPZ9b2hS9KEaAw7X0xa5gvRuxpwNtJfWfHPyl7Unub_-oUHMFyAd_58bKk6-ATXQ9MCGMm2ol_usSNjOyAqpSApsbSO5z3SKy3xgnK0CGASFsJ6NL48iNpTevSJkzgmvlKWl53LU6A"
                            />
                        </div>
                        <div className="bg-[#ee2b5b] p-12 lg:p-20 flex flex-col justify-center text-white">
                            <h2 className="text-4xl font-bold mb-6">The City Palace, Udaipur</h2>
                            <p className="text-white/80 leading-relaxed mb-8">
                                Steeped in history and standing as a testament to the Mewar dynasty, the City Palace is one of India&apos;s most romantic architectural marvels. We can&apos;t wait to share this magical piece of heritage with you.
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="bg-white text-[#ee2b5b] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                                    View Venue Map
                                </button>
                                <a href="#" className="text-white text-sm font-bold border-b-2 border-white/30 hover:border-white transition-all pb-1">
                                    Hotel Concierge
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-[#221015] border-t border-[#f3e7ea] dark:border-[#3a1d25] py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl font-extrabold text-[#ee2b5b] mb-8 tracking-tighter">Ethereal Vows</h2>
                    <nav className="flex justify-center gap-8 mb-12">
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-[#ee2b5b] transition-colors">RSVP</a>
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-[#ee2b5b] transition-colors">Gift Registry</a>
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-[#ee2b5b] transition-colors">FAQ</a>
                        <a href="#" className="text-sm font-medium text-gray-500 hover:text-[#ee2b5b] transition-colors">Travel Policy</a>
                    </nav>
                    <p className="text-gray-400 text-xs">Designed with love for Ananya & Ishaan. All rights reserved.</p>
                </div>
            </footer>

            {/* FAB: Wedding Concierge */}
            <button className="fixed bottom-8 right-8 z-50 size-16 bg-[#ee2b5b] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                <span className="absolute right-20 bg-white dark:bg-[#221015] text-[#ee2b5b] font-bold py-2 px-4 rounded-full text-xs shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#ee2b5b]/20">
                    Chat with Concierge
                </span>
            </button>

        </div>
    );
}
