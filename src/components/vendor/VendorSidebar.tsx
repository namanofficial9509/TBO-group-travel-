"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    BedDouble,
    Users,
    UtensilsCrossed,
    Receipt,
    Building2,
    LogOut,
    Settings
} from "lucide-react";

export default function VendorSidebar() {
    const pathname = usePathname();

    const links = [
        { name: "Property Overview", href: "/vendor", icon: LayoutDashboard },
        { name: "Inventory Vault", href: "#inventory", icon: BedDouble },
        { name: "Live Rooming List", href: "#rooming-list", icon: Users },
        { name: "Space & Banquets", href: "/vendor/banquets", icon: Building2 },
        { name: "Experiences & F&B", href: "/vendor/fnb", icon: UtensilsCrossed },
        { name: "Settlement & Billing", href: "/vendor/billing", icon: Receipt },
    ];

    return (
        <aside className="w-72 bg-[#002147] text-white h-screen flex flex-col fixed left-0 top-0 z-50 shadow-2xl">
            {/* Branding - Property Hub */}
            <div className="p-8 border-b border-white/10">
                <div className="flex items-center gap-3 mb-1">
                    <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                        <Building2 className="size-6 text-emerald-400" />
                    </div>
                    <div>
                        <h2 className="font-display font-bold text-lg tracking-wide">Taj Palace</h2>
                        <p className="text-[10px] uppercase tracking-widest opacity-60">Udaipur • Property Hub</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8 space-y-2">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${isActive
                                ? "bg-white text-[#002147] font-bold shadow-lg shadow-black/20"
                                : "text-white/70 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <link.icon className={`size-5 ${isActive ? "text-[#002147]" : "text-white/60 group-hover:text-white"}`} />
                            <span className="text-sm tracking-wide">{link.name}</span>
                            {link.name === "Inventory Vault" && (
                                <span className="ml-auto bg-amber-500 text-[#002147] text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                                    ACTION
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / User Profile */}
            <div className="p-6 border-t border-white/10 bg-[#001835]">
                <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/30">
                        RS
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold">Rajesh Singh</p>
                        <p className="text-xs opacity-50">General Manager</p>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Settings className="size-4 opacity-70" />
                    </button>
                </div>
                <Link href="/login" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white">
                    <LogOut className="size-3" />
                    Sign Out
                </Link>
            </div>
        </aside>
    );
}
