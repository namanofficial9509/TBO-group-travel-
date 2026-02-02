"use client";
import { useState } from "react";

export default function ActivityGrid() {
    const categories = ["All", "Wellness", "Cultural", "Adventure", "Social"];
    const [activeCat, setActiveCat] = useState("All");

    const activities = [
        { title: "Sunset Yoga", cat: "Wellness", time: "Day 1 • 07:00 AM", spots: "4 Slots Left", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJfTYRoOGOGDlEdpM7JLyr2XU-5wMf9A7LQG191RlOwthXrGnDzUKVdJRx_q8XLZVa1sgU-M-N7dKhcXnFD18IJEE6vt5kR5kE71ZFz7tFr6Hg4watpD3dthFifXpWVhsi7qoZe7xNfko_qhHIyqi-p7_CbYSPlaKTEEAHz_x6NUpsCa9B1xesk1fgwZTlqVzOvz-kewY9Dvqtxmct46rzFm1bEENgqSUqlB8YpeAlY9AYRyZJI8jtmR4HB43luyvwNqS_C-2YYzut" },
        { title: "City Palace Tour", cat: "Cultural", time: "Day 1 • 10:00 AM", spots: "Available", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn611PzXqWWbKSQCEozbRCjVXhePldoPLvze8I66JtT857O-Xf3ucg_wQml31b-zUKVGjJDParBgLA7aL1_EUpJmQIeCbIaQzum_uufYXiMm0GWeFYZTip_oo4PNOpZUPAAxU1SVf-s239_0PxSupretlSDBGK867YMTPJWM65T49gEllviVUGW2grpMj_skDjGa0Mdabzd4t3fbv0TEIpyk9blALMXbykgn0qpgvRUz4gF3ob4no7ucY1I1ad8H7b-gNlOHgJG6Xc" },
        { title: "Spa & Massage", cat: "Wellness", time: "Day 2 • Flexible", spots: "Limited", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4fZeG7N0dQd6Bhtu7Qg5hmMIE1wbmCu17C9o_aFyzk5mKIJTN6e9-Au8SL0zeqbwD1zplCCEsJjyvUt-m2D1Hmus1OoaQKLda3cFb_672AxT2hn1Egdzls-NnlQ2IJrgPz3ZqtKSRVfxykXWCG3V_v00x0ohsy6Zd5566Zp_64ct0KGiIxGNw7sBE6ZUx6BExD3VYSks8_bEEevfl3AnUjUNddrmLaa0Oflc9ydd5IX7ahTjRsohYSspp1Ixj8LLNR7ZvGWaCKAvy" },
        { title: "Safari Adventure", cat: "Adventure", time: "Day 3 • 06:00 AM", spots: "Sold Out", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKWywkzB2J0j39cC5h_d-m6TjsDkPvrmbfi2nwWOgUx5yTqJPOlJHHoqnoSRoFIqrCR8V3ItenkHnYwCMPbyM3V5nVRW1wcFUpjAoWL063atDCteowmtC2A0HyUNXHigWpxGsbC5fJxUghC_pf_jZyEI3gSot1Uor0Hc-Nnl8Dd6r22uYSLZjyj_2xWwxAidwDbBLp4enXiFoQNglAb6hbc3Er7EjSefgQDRQ1Z6nWD0jzMztvDhFI1OgzG2R_ImddeS-qC4JFdA77" },
        { title: "Cocktail Mixer", cat: "Social", time: "Day 1 • 06:00 PM", spots: "Open", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaw3pKvh83CJ10xsbA47LZh1lz8M5lOVvcChzYgrdlwzPA7gPzTCoCBuDEhCKLAbFvNxwU38HLpklPSwGmQNsVdXHDlo6vD3WymAFcX7tN_G5Lr8I1nGDY3hYKtWqTgE3lPRToGqOjAbVwg7N0qGIzYkRHpVuQM-VIR-PLg4jXBfXACmcSx66gXg9Ae0eiCy9zBn5ht4W0y4ZDSmLiTAD9YuXVR0dHum0D6mAdJRxHPeDo3H6F3x87jYWmo-MT-HPgUtYAM9OdCzZj" },
    ];

    const filtered = activeCat === "All" ? activities : activities.filter(a => a.cat === activeCat);

    return (
        <section id="activities" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="font-serif text-4xl lg:text-5xl mb-4 text-[#1b180d] dark:text-[#fcfbf7]">Curated Experiences</h2>
                    <p className="opacity-60 max-w-lg">Enhance your journey with these optional add-ons, tailored for relaxation, adventure, and connection.</p>
                </div>

                {/* Simple Tab Switcher */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${activeCat === cat
                                    ? "bg-primary text-background-dark border-primary"
                                    : "border-[#e7e1cf] dark:border-white/10 opacity-60 hover:opacity-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((activity, i) => (
                    <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-all">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${activity.img}')` }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                        <div className="absolute top-4 left-4">
                            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{activity.cat}</span>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-primary text-xs font-bold uppercase">{activity.time}</span>
                                {activity.spots === "Sold Out" ? (
                                    <span className="text-red-400 text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded">SOLD OUT</span>
                                ) : (
                                    <span className="text-green-400 text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded">{activity.spots}</span>
                                )}
                            </div>
                            <h3 className="font-serif text-xl text-white mb-4 line-clamp-2">{activity.title}</h3>
                            <button className="w-full bg-white text-black py-3 rounded-lg font-bold text-sm hover:bg-primary transition-colors">
                                details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
