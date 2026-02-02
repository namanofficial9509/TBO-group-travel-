"use client";

export default function ItineraryPage() {
    const events = [
        {
            id: 1,
            day: "Friday, Nov 13",
            time: "07:00 PM",
            title: "The Welcome Sangeet",
            description: "Join us for an evening of music, dance, and celebratory cocktails as we kick off the festivities overlooking the lake.",
            location: "Manek Chowk",
            dressCode: "Royal Sparkle",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUMfB5wO9NbfWz1sL6T8GKbkXR56gQPY5LoKJKQSPXDJFkdPaz3OeZxB-Lylen9Qrl-6SJb2yCj0MXi_VHsQTksaQaSSBLCE-uKGWzb03yRi1KYyPfR3rSEAwv-cHPkcccU6zrxWI3-lSZrocMwH7pppoEtMAdEl1yhiUCw5kWBtcRMt5JCpWL74bQf4vnTXDdp9YqTmn0BlcH3mewvp1b-DWyLgrN9ttQGP00Myptj0Ws0dJIVIDYNPRuL2WbZgfLLDHtfIvauv0",
            icon: "music_note"
        },
        {
            id: 2,
            day: "Saturday, Nov 14",
            time: "10:00 AM",
            title: "The Sacred Vows",
            description: "Witness the traditional vedic ceremony as we take our seven steps together under the royal canopy.",
            location: "Zenana Mahal",
            dressCode: "Royal Traditional",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJzReBP1oFIK6J40ytO-X6omY_b7gmTLjzUFBCjlWVCVISbyIuKWtrIjEANCT8smVTD4R7jVdRh8oMk2Azpq8hz6Qh181F9mBmus6qJaF-WgMR7sPPRihbasHD7ERR6bI7iMdVqknEtzH90ecVrG1tXHUAvGxjtY3X64cu2_7L6vifbE2JaV63daL8igm5VCzwVvCcXwJUeZOEZGB0ebPubX5J29uiIFDVpC5V6pB5FAZVTxSIAPmQAlkqnKUYAih5j4zt5lWlnBo",
            icon: "favorite"
        },
        {
            id: 3,
            day: "Saturday, Nov 14",
            time: "08:00 PM",
            title: "The Grand Reception",
            description: "A formal black-tie evening of gourmet dining, toasts, and dancing to celebrate our first night as a married couple.",
            location: "Outer Hall",
            dressCode: "Black Tie",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRGap1V-kQ4VE48AgBGN1gUKnyRIt93q6ssj1-cDTInNl7Jz0Dng_bgTX_hekUmS2Hb97d7g0Vf3yAkKKpnBT1pNlgJBrbOMju-1prhi52z40k_C3g0_xtUFvJ5rOd1a1ef8TemSODjtcf0z1lumN98rwwzrwYyoxFD-clSI_lKwH3AnYtRDYqGsKujY-yQzQyzXgqWB98SN77VKbm1aX39xlLK3pIPrurWdbQYT3lUYgT_A72ZAnJPlzryx9qTeqNnvXqIN1DUmc",
            icon: "celebration"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-16">
                <p className="text-[#0F766E] font-bold text-xs uppercase tracking-[0.3em] mb-4">Timeline of Love</p>
                <h1 className="text-4xl md:text-5xl font-display font-medium text-slate-900">The Wedding Itinerary</h1>
            </div>

            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-[#0F766E]/20 -translate-x-1/2"></div>

                <div className="space-y-16">
                    {events.map((event, index) => (
                        <div key={event.id} className={`flex flex-col md:flex-row items-center gap-8 relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Icon */}
                            <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 size-12 rounded-full bg-[#ee2b5b] text-white flex items-center justify-center shadow-lg shadow-[#ee2b5b]/30 z-10 ring-4 ring-[#FDFBF7]">
                                <span className="material-symbols-outlined">{event.icon}</span>
                            </div>

                            {/* Text Side */}
                            <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">{event.title}</h3>
                                <p className="text-[#ee2b5b] font-bold text-xs uppercase tracking-wider mb-4">{event.day} • {event.time}</p>
                                <p className="text-slate-500 leading-relaxed text-sm mb-6">{event.description}</p>
                                <div className={`flex gap-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <span className="px-3 py-1.5 rounded bg-[#ee2b5b]/5 text-[#ee2b5b] text-[10px] font-bold uppercase border border-[#ee2b5b]/10">Dress: {event.dressCode}</span>
                                    <span className="px-3 py-1.5 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase border border-slate-200">{event.location}</span>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-16">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white transform transition-transform hover:scale-105 duration-500">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
