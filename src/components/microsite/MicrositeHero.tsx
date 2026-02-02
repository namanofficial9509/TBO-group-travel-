"use client";

import { useEffect, useState } from "react";

export default function MicrositeHero() {
    const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 4, minutes: 32 });

    return (
        <div className="relative h-[85vh] w-full overflow-hidden flex items-end justify-center pb-24">
            {/* Background Video/Image */}
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLHWb62-iNilyLM3RH20TuYiMwIAMpaCiXUb923ggbE-OVT5nBuw1tKsBPGGPxFQRrkVs2ugdWxWiLGQjoQoBJPj8nOIPUEXzjP9kjB1lmordHqGhlEtXhxMp8Jty_g-npDSpUaW3sh-GX50SYZAfwdIARcXz7GorAXdM3ZgN1WxO5Kuw2GBviY9J1xURql2fo-nVP0-HK44aH2Xb58lWjc61qpNbxhWrWCBh-Yxhrxpk_lNOv3nMn4MF5FhQAFD1uDMsJr_tafinU')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
            </div>

            <div className="relative z-10 text-center text-white px-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up">
                    <span className="material-symbols-outlined text-sm text-primary">favorite</span>
                    <span className="text-xs font-bold tracking-widest uppercase">Dec 12 - 14, 2026 • Jaipur, India</span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-2xl">
                    The Celestial Vows
                </h1>

                <p className="max-w-xl mx-auto text-lg opacity-90 mb-12 font-light">
                    Join Arjun & Ananya as they embark on their journey of a lifetime under the starlit skies of the Pink City.
                </p>

                {/* Countdown */}
                <div className="flex justify-center gap-8 mb-12">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Minutes", value: timeLeft.minutes }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="font-serif text-4xl md:text-5xl font-bold">{item.value}</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-70">{item.label}</span>
                        </div>
                    ))}
                </div>

                <button className="bg-primary hover:bg-[#d4a012] text-background-dark px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(236,182,19,0.4)] transition-all transform hover:-translate-y-1">
                    RSVP & View Details
                </button>
            </div>
        </div>
    );
}
