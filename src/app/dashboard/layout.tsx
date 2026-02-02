import { EventProvider } from "@/context/EventContext";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <EventProvider>
            <div className="min-h-screen font-display selection:bg-[#ecb613] selection:text-white" suppressHydrationWarning>
                {children}
            </div>
        </EventProvider>
    );
}
