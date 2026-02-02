export default function PackageSelection() {
    const packages = [
        {
            name: "The Royal Retreat",
            price: "$850",
            per: "per night",
            tag: "Most Popular",
            features: [
                "Suite at Ivory Sands Resort",
                "All-Inclusive Dining & Drinks",
                "Access to all 6 Ceremonies",
                "Private Airport Transfers",
                "Dedicated Concierge (24/7)"
            ]
        },
        {
            name: "The Heritage Stay",
            price: "$600",
            per: "per night",
            features: [
                "Deluxe Room with City View",
                "Breakfast & Wedding Feasts",
                "Access to all 6 Ceremonies",
                "Group Shuttle Transfers"
            ]
        },
        {
            name: "Day Guest Pass",
            price: "$0",
            per: "RSVP Required",
            features: [
                "Access to Wedding & Reception",
                "Dining during events",
                "No Accommodation",
                "Self-arranged transport"
            ]
        }
    ];

    return (
        <section id="stay" className="py-24 px-6 bg-white/50 dark:bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl lg:text-5xl mb-4 text-[#1b180d] dark:text-[#fcfbf7]">Select Your Stay</h2>
                    <p className="opacity-60 max-w-2xl mx-auto">Choose from our curated accommodation packages designed for your comfort and ease.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, i) => (
                        <div key={i} className={`relative p-8 rounded-2xl border ${pkg.tag ? "border-primary bg-primary/5 dark:bg-primary/10" : "border-[#e7e1cf] dark:border-white/10 bg-white dark:bg-[#1b180d]"} shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col`}>
                            {pkg.tag && (
                                <div className="absolute top-0 right-0 bg-primary text-background-dark text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                                    {pkg.tag}
                                </div>
                            )}

                            <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                                <span className="text-sm opacity-60">{pkg.per}</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {pkg.features.map((feat, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm opacity-80">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.tag ? "bg-primary text-background-dark hover:brightness-110 shadow-lg" : "border border-primary text-primary hover:bg-primary/10"}`}>
                                {pkg.price === "$0" ? "Confirm Attendance" : "Book This Package"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
