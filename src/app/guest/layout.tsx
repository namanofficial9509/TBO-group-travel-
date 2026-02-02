"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GuestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", path: "/guest" },
        { name: "Itinerary", path: "/guest/itinerary" },
        { name: "My Stay", path: "/guest/travel" },
        { name: "Details & Budget", path: "/guest/budget" },
    ];

    const isActive = (path: string) => {
        if (path === "/guest" && pathname === "/guest") return true;
        if (path !== "/guest" && pathname?.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-900 selection:bg-[#0F766E]/20">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#0F766E]/10 px-6 md:px-12 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/guest" className="flex items-center gap-3 group">
                        <div className="size-10 rounded-xl bg-[#0F766E] text-white flex items-center justify-center shadow-lg shadow-[#0F766E]/20 group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                        </div>
                        <div>
                            <h1 className="font-display font-bold text-lg text-slate-900 leading-none">Ethereal Vows</h1>
                            <p className="text-[10px] uppercase tracking-widest text-[#0F766E] font-bold mt-1">Guest Portal</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center bg-slate-50 p-1 rounded-full border border-slate-200/50">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isActive(item.path)
                                        ? "bg-white text-[#0F766E] shadow-sm ring-1 ring-black/5"
                                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* User & Actions */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#0F766E]/10 text-[#0F766E] font-bold text-sm rounded-lg hover:bg-[#0F766E]/20 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">support_agent</span>
                            <span className="hidden lg:inline">Concierge</span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                            <div className="text-right hidden lg:block">
                                <p className="text-sm font-bold text-slate-900">Priya Kapoor</p>
                                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Confirmed</p>
                            </div>
                            <div className="size-10 rounded-full bg-gradient-to-br from-emerald-100 to-teal-50 border-2 border-white shadow-md flex items-center justify-center text-[#0F766E] font-bold">
                                Pk
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto p-6 md:p-8 lg:p-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white py-12 mt-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex justify-center items-center gap-2 mb-4 text-[#0F766E] opacity-50">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        <span className="font-display font-bold">Ethereal Vows</span>
                    </div>
                    <div className="flex justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
                        <Link href="#" className="hover:text-[#0F766E]">My Travel</Link>
                        <Link href="#" className="hover:text-[#0F766E]">Itinerary</Link>
                        <Link href="#" className="hover:text-[#0F766E]">Gallery</Link>
                        <Link href="#" className="hover:text-[#0F766E]">Concierge</Link>
                    </div>
                    <p className="text-xs text-slate-300">© 2025 The Grand Wedding Royale. All payments are secure and encrypted.</p>
                </div>
            </footer>
        </div>
    );
}
