"use client";

interface StatCardProps {
    title: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
    icon: string;
}

export default function StatCard({ title, value, trend, trendUp, icon }: StatCardProps) {
    return (
        <div className="group relative bg-[#fcfbf7] p-8 rounded-3xl border border-[#e7e1cf] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1">

            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ecb613]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-6">
                    <div className="text-[10px] font-bold text-[#9a864c] uppercase tracking-[0.2em]">{title}</div>
                    <div className="p-2 rounded-full bg-[#f3efe7] text-[#1b170d] group-hover:bg-[#ecb613] group-hover:text-white transition-colors duration-300">
                        <span className="material-symbols-outlined text-lg">{icon}</span>
                    </div>
                </div>

                <div>
                    <div className="font-serif text-5xl text-[#1b170d] mb-3">{value}</div>

                    {trend && (
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${trendUp
                                ? 'border-green-200 bg-green-50 text-green-700'
                                : 'border-red-200 bg-red-50 text-red-700'
                            }`}>
                            <span className="material-symbols-outlined text-sm">{trendUp ? 'north_east' : 'south_east'}</span>
                            {trend}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
