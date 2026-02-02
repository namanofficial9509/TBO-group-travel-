"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { name: "Overview", href: "/dashboard", icon: "dashboard" },
        { name: "Inventory", href: "/dashboard/inventory", icon: "inventory_2" },
        { name: "Microsites", href: "/dashboard/microsites", icon: "web" },
        { name: "Guests", href: "/dashboard/guests", icon: "groups" },
        { name: "Finance", href: "/dashboard/finance", icon: "currency_rupee" },
        { name: "Settings", href: "/dashboard/settings", icon: "settings" },
    ];

    return (
        <aside className="w-72 fixed left-0 top-0 bottom-0 flex flex-col z-50 overflow-hidden group transition-all duration-500 hover:w-80 shadow-[10px_0_40px_rgba(0,0,0,0.2)] bg-[#12100b]">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ecb613]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0f0e0a] to-transparent"></div>

            {/* Branding */}
            <div className="relative z-10 h-32 flex flex-col justify-center px-10 border-b border-white/5 mx-6 mb-4">
                <Link href="/" className="flex items-center gap-4 group/logo">
                    <div className="text-[#ecb613] transition-transform duration-700 group-hover/logo:rotate-180 drop-shadow-[0_0_15px_rgba(236,182,19,0.3)]">
                        <svg className="size-11" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter font-serif italic text-[#ecb613]">TBO</h2>
                        <p className="text-[10px] text-[#9a864c] tracking-[0.2em] uppercase mt-1 opacity-80">Royal Weddings</p>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 flex-1 px-4 space-y-2 py-4">
                <div className="text-[10px] text-[#9a864c]/60 font-bold tracking-[0.2em] uppercase px-6 mb-4 mt-2">Atelier Menu</div>
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`group/item relative flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden ${isActive
                                    ? "text-[#fcfbf7]"
                                    : "text-[#9a864c] hover:text-[#fcfbf7]"
                                }`}
                        >
                            {/* Active Indicator & Glow */}
                            {isActive && (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#ecb613]/10 to-transparent"></div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#ecb613] rounded-r-full shadow-[0_0_15px_#ecb613]"></div>
                                </>
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>

                            <span className={`material-symbols-outlined text-2xl relative z-10 transition-transform duration-300 group-hover/item:scale-110 ${isActive ? "text-[#ecb613]" : ""}`}>
                                {link.icon}
                            </span>
                            <span className={`text-sm tracking-wide relative z-10 font-sans ${isActive ? "font-bold text-white shadow-black drop-shadow-md" : "font-medium"}`}>
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile (Indian Context) */}
            <div className="relative z-10 px-6 pb-8 pt-4">
                <div className="group/user relative p-4 rounded-2xl bg-gradient-to-br from-white/5 to-black/40 border border-white/5 cursor-pointer transition-all duration-300 hover:border-[#ecb613]/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-4">
                        <div className="relative w-11 h-11">
                            <div className="absolute inset-0 rounded-full border border-[#ecb613]/50 animate-spin-slow"></div>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="rounded-full w-full h-full object-cover border-2 border-[#12100b]" alt="Planner" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-serif font-bold text-[#fcfbf7] truncate group-hover/user:text-[#ecb613] transition-colors">Diya Sharma</p>
                            <p className="text-[10px] text-[#9a864c] uppercase tracking-wider truncate">Senior Planner</p>
                        </div>
                        <span className="material-symbols-outlined text-[#9a864c] text-lg">unfold_more</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
