"use client";

export default function PartnersPage() {
    const partners = [
        {
            category: "Hospitality & Venues",
            items: [
                {
                    name: "Taj Lake Palace",
                    location: "Udaipur, Rajasthan",
                    type: "Luxury Hotel",
                    rating: 4.9,
                    status: "Preferred",
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                    name: "W Goa",
                    location: "Vagator, Goa",
                    type: "Resort",
                    rating: 4.8,
                    status: "Contracted",
                    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                    name: "Raffles Udaipur",
                    location: "Udaipur, Rajasthan",
                    type: "Luxury Hotel",
                    rating: 4.9,
                    status: "Active",
                    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }
            ]
        },
        {
            category: "Event Production",
            items: [
                {
                    name: "Sound & Light Co.",
                    location: "Mumbai / Pan-India",
                    type: "AV Production",
                    rating: 4.7,
                    status: "Active",
                    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                    name: "Floral Artistry",
                    location: "Delhi NCR",
                    type: "Decor",
                    rating: 4.6,
                    status: "Preferred",
                    image: "https://images.unsplash.com/photo-1478146704077-88275e3a619d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                }

            ]
        }
    ];

    return (
        <div className="min-h-screen bg-ivory-mist font-sans p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-display font-medium text-charcoal-ink">Strategic Partners</h1>
                        <p className="text-charcoal-ink/60 mt-2 max-w-2xl">
                            Curated network of premium venues, production houses, and logistics experts.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <input type="text" placeholder="Search partners..." className="bg-white border border-black/5 rounded-full py-2.5 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-emerald-teal outline-none shadow-sm" />
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[18px]">search</span>
                        </div>
                        <button className="bg-charcoal-ink text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-black transition-all shadow-md">
                            <span className="material-symbols-outlined text-[18px]">add_business</span>
                            <span className="text-sm font-semibold">Add Partner</span>
                        </button>
                    </div>
                </div>

                <div className="space-y-12">
                    {partners.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-display font-medium text-charcoal-ink mb-6 flex items-center gap-2">
                                {section.category}
                                <span className="text-xs font-sans font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{section.items.length}</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {section.items.map((item, i) => (
                                    <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="relative h-48 overflow-hidden">
                                            <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:animate-none">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${item.status === 'Preferred' ? 'bg-emerald-teal/90 text-white' :
                                                        item.status === 'Contracted' ? 'bg-amber-500/90 text-white' :
                                                            'bg-gray-800/80 text-white'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-display font-semibold text-lg text-charcoal-ink group-hover:text-emerald-teal transition-colors">{item.name}</h4>
                                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                                                        {item.location}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100">
                                                    <span className="material-symbols-outlined text-[14px] text-amber-500 fill-1">star</span>
                                                    <span className="text-xs font-bold text-amber-900">{item.rating}</span>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-50 mt-4 pt-4 flex items-center justify-between">
                                                <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">{item.type}</span>
                                                <button className="text-emerald-teal hover:bg-emerald-50 p-1.5 rounded-full transition-colors">
                                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Add New Card Placeholder */}
                                <div className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-gray-400 hover:border-emerald-teal/50 hover:bg-emerald-50/10 cursor-pointer transition-all min-h-[300px]">
                                    <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-white group-hover:shadow-sm">
                                        <span className="material-symbols-outlined">add</span>
                                    </div>
                                    <span className="text-sm font-medium">Onboard Vendor</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
