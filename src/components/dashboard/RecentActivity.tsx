"use client";

export default function RecentActivity() {
    const activities = [
        { text: "New rsvp from The Kapoor Family for 'Sangeet Night'", time: "2 mins ago", icon: "mail", highlight: true },
        { text: "Vendor 'Maharaja Catering' updated quote for Grand Reception", time: "1 hour ago", icon: "receipt_long" },
        { text: "Advance of ₹5,00,000 received for 'The Celestial Vows'", time: "3 hours ago", icon: "payments" },
        { text: "New transport request: 2 Innovas for 'Guest Pickup'", time: "5 hours ago", icon: "directions_car" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e1cf] pb-4">
                <h3 className="font-serif text-2xl font-bold text-[#1b170d]">Latest Updates</h3>
                <button className="text-[10px] font-bold text-[#9a864c] uppercase tracking-[0.2em] hover:text-[#ecb613] transition-colors">View All</button>
            </div>

            <div className="space-y-4">
                {activities.map((activity, i) => (
                    <div key={i} className={`group flex gap-4 items-start p-4 rounded-xl transition-all duration-300 ${activity.highlight ? "bg-white shadow-md border border-[#e7e1cf] border-l-4 border-l-[#ecb613]" : "hover:bg-white/50 hover:pl-6"}`}>
                        <div className={`mt-1 flex items-center justify-center w-8 h-8 rounded-full border ${activity.highlight ? "border-[#ecb613] text-[#ecb613] bg-[#ecb613]/10" : "border-[#e7e1cf] text-[#9a864c]"}`}>
                            <span className="material-symbols-outlined text-sm">{activity.icon}</span>
                        </div>
                        <div>
                            <p className={`font-serif text-lg leading-snug mb-1 ${activity.highlight ? "font-bold text-[#1b170d]" : "text-[#1b170d]/80"}`}>{activity.text}</p>
                            <p className="text-[10px] uppercase tracking-wider text-[#9a864c] opacity-70 font-sans">{activity.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
