import Link from "next/link";

export default function ItineraryTimeline() {
    const events = [
        {
            day: "Day 01",
            date: "Dec 12",
            subEvents: [
                { time: "12:00 PM", title: "Touchdown in Paradise", desc: "Private shuttles from JAIA Airport to Ivory Sands Resort.", icon: "flight_land", location: "Arrival Plaza" },
                { time: "04:00 PM", title: "Henna & Hues (Mehendi)", desc: "A vibrant afternoon of intricate patterns and folk melodies.", icon: "brush", location: "Garden Courtyard" },
                { time: "08:00 PM", title: "Sangeet Under the Stars", desc: "Dance the night away with cocktails and performances.", icon: "music_note", location: "Grand Ballroom" }
            ]
        },
        {
            day: "Day 02",
            date: "Dec 13",
            subEvents: [
                { time: "10:00 AM", title: "Haldi Ceremony", desc: "A splash of turmeric and love.", icon: "water_drop", location: "Poolside Deck" },
                { time: "05:30 PM", title: "The Celestial Vows", desc: "The main ceremony at the Starlight Altar.", icon: "favorite", location: "Starlight Altar", highlight: true },
                { time: "08:00 PM", title: "Grand Reception", desc: "A royal feast to celebrate the newlyweds.", icon: "celebration", location: "Royal Pavilion" }
            ]
        }
    ];

    return (
        <section id="itinerary" className="py-24 max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl lg:text-5xl mb-4 text-[#1b180d] dark:text-[#fcfbf7]">The Journey Timeline</h2>
                <p className="text-antique-gold font-serif italic text-xl">A Celestial Voyage Under the Stars</p>
            </div>

            <div className="relative">
                {/* Center Line (Desktop) */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#e7e1cf] dark:bg-white/10 hidden md:block"></div>

                <div className="space-y-12">
                    {events.map((day, dayIdx) => (
                        <div key={dayIdx} className="relative">
                            {/* Day Marker */}
                            <div className="sticky top-24 z-20 flex justify-center md:mb-12 mb-8">
                                <div className="bg-white dark:bg-[#2c2c2c] border border-primary/30 px-6 py-2 rounded-full shadow-lg">
                                    <span className="font-bold text-primary">{day.day}</span>
                                    <span className="mx-2 opacity-30">|</span>
                                    <span className="font-serif italic">{day.date}</span>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {day.subEvents.map((event, i) => (
                                    <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left text-center"}`}>
                                        {/* Content Card */}
                                        <div className={`flex-1 w-full bg-white dark:bg-white/5 p-8 rounded-2xl shadow-sm border border-[#e7e1cf] dark:border-white/10 hover:shadow-md transition-shadow relative group ${event.highlight ? "border-primary/50 bg-primary/5" : ""}`}>
                                            <div className="text-xs font-bold tracking-widest text-primary mb-2 uppercase">{event.time}</div>
                                            <h3 className="font-serif text-2xl mb-2">{event.title}</h3>
                                            <p className="text-sm opacity-70 mb-4 leading-relaxed">{event.desc}</p>
                                            <div className={`inline-flex items-center gap-2 text-xs font-bold opacity-60 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                                {event.location}
                                            </div>
                                        </div>

                                        {/* Icon Marker */}
                                        <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-background-light dark:bg-background-dark border-2 border-primary flex items-center justify-center shadow-[0_0_0_4px_rgba(236,182,19,0.1)]">
                                            <span className="material-symbols-outlined text-primary text-xl">{event.icon}</span>
                                        </div>

                                        <div className="flex-1 hidden md:block"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
