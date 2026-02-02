"use client";

import Level2Sidebar from "@/components/dashboard/Level2Sidebar";

export default function EventWorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-ivory-mist min-h-screen text-charcoal-ink font-sans">
            <Level2Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {children}
            </div>
        </div>
    );
}
