import VendorSidebar from "@/components/vendor/VendorSidebar";

export default function VendorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">
            <VendorSidebar />
            <main className="flex-1 ml-72 p-8 lg:p-12 overflow-y-auto h-screen bg-slate-50 text-slate-800">
                <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500">
                    {children}
                </div>
            </main>
        </div>
    );
}
