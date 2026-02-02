"use client";

import { EventProvider } from "@/context/EventContext";

export default function MicrositeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <EventProvider>
            <div className="min-h-screen font-sans bg-slate-50 selection:bg-[#ecb613] selection:text-white" suppressHydrationWarning>
                {children}
            </div>
        </EventProvider>
    );
}
