import HostSidebar from '@/components/host/HostSidebar';

export default function HostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div suppressHydrationWarning className="flex min-h-screen bg-[#FDFBF7] font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
            <HostSidebar />
            <div className="flex-1 ml-64 flex flex-col min-h-screen">
                {children}
            </div>
        </div>
    );
}
