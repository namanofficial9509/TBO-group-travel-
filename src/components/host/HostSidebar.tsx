"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HostSidebar() {
    const pathname = usePathname();

    const links = [
        { name: "Overview", href: "/host", icon: "grid_view" },
        { name: "My Events", href: "/host/events", icon: "celebration" },
        { name: "Guest List", href: "/host/guests", icon: "people" },
        { name: "Budget", href: "/host/budget", icon: "payments" },
        { name: "Approvals", href: "/host/approvals", icon: "fact_check", alert: 6 },
    ];

    return (
        <aside className="w-64 fixed left-0 top-0 bottom-0 flex flex-col z-50 bg-white border-r border-[#DEDFDB]">

            {/* Branding */}
            <div className="h-20 flex items-center px-8 border-b border-[#DEDFDB]">
                <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-serif font-bold italic text-sm">T</div>
                    <div>
                        <h2 className="text-sm font-bold font-serif tracking-wide text-slate-900">TBO Atelier</h2>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Host Portal</p>
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
                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`material-symbols-outlined text-[20px] ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-900"}`}>
                                    {link.icon}
                                </span>
                                <span className={`text-sm font-medium tracking-wide ${isActive ? "font-bold" : ""}`}>
                                    {link.name}
                                </span>
                            </div>
                            {link.alert && (
                                <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                    {link.alert}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-[#DEDFDB]">
                <div className="p-3 rounded-xl bg-slate-50 border border-[#DEDFDB] flex items-center gap-3 cursor-pointer hover:bg-white hover:shadow-sm transition-all">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-10 rounded-full object-cover border border-white shadow-sm"
                        alt="Host"
                    />
                    <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-bold text-slate-900 truncate">Siddharth</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider truncate">Groom • Owner</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-lg">expand_more</span>
                </div>
            </div>
        </aside>
    );
}
