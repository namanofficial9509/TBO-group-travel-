"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEvents } from "@/context/EventContext";
import MicrositeHero from "@/components/microsite/MicrositeHero";
import ItineraryTimeline from "@/components/microsite/ItineraryTimeline";
import PackageSelection from "@/components/microsite/PackageSelection";

export default function EventAppStudioPage() {
    const params = useParams();
    const { events } = useEvents();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const currentEvent = events.find(e => e.id === id);
    const isRice = currentEvent?.type === "MICE";

    const [selectedTemplate, setSelectedTemplate] = useState(isRice ? "minimal" : "royal");
    const [previewMode, setPreviewMode] = useState("mobile"); // mobile | desktop
    const [primaryColor, setPrimaryColor] = useState("#3B82F6"); // Blue-500 default
    const [brandingCta, setBrandingCta] = useState(true);
    const [showNetworking, setShowNetworking] = useState(true);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

    const templates = isRice ? [
        {
            id: 'minimal',
            name: 'Corporate Minimal',
            description: 'Clean, high-contrast design optimized for C-Suite summits.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
            color: 'bg-slate-900'
        },
        {
            id: 'tech',
            name: 'Tech Blue',
            description: 'Modern, vibrant aesthetic for product launches and tech expos.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
            color: 'bg-blue-600'
        },
        {
            id: 'vibrant',
            name: 'Vibrant Summit',
            description: 'Energetic and colorful layout for incentive trips and creative festivals.',
            image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800',
            color: 'bg-orange-500'
        }
    ] : [
        {
            id: 'royal',
            name: 'Royal Palace',
            description: 'Luxurious gold and black theme for heritage weddings.',
            image: 'https://images.unsplash.com/photo-1583994017639-6889745e1f7f?auto=format&fit=crop&q=80&w=800',
            color: 'bg-[#1a1a1a]'
        },
        {
            id: 'floral',
            name: 'Modern Floral',
            description: 'Soft pastels and floral accents for daytime ceremonies.',
            image: 'https://images.unsplash.com/photo-1522673607200-1645062cd95c?auto=format&fit=crop&q=80&w=800',
            color: 'bg-[#ee2b5b]'
        },
        {
            id: 'minimal_chic',
            name: 'Minimal Chic',
            description: 'Contemporary typography and white space for modern couples.',
            image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800',
            color: 'bg-slate-50'
        }
    ];

    // Theme Config
    const theme = isRice ? {
        primary: "text-slate-700",
        accent: "bg-slate-700",
        bg: "bg-slate-50",
        lightAccent: "bg-slate-100",
        border: "border-slate-200",
        button: "bg-slate-800 hover:bg-slate-900",
        emeraldText: "text-blue-700",
        emeraldBg: "bg-blue-50",
        emeraldBorder: "border-blue-100",
        emeraldFill: "bg-blue-500",
        checked: "bg-blue-600 border-blue-600",
    } : {
        primary: "text-emerald-700",
        accent: "bg-emerald-700",
        bg: "bg-[#FAF9F7]",
        lightAccent: "bg-emerald-50",
        border: "border-emerald-100",
        button: "bg-emerald-700 hover:bg-emerald-800",
        emeraldText: "text-emerald-700",
        emeraldBg: "bg-emerald-50",
        emeraldBorder: "border-emerald-100",
        emeraldFill: "bg-emerald-500",
        checked: "bg-emerald-600 border-emerald-600",
    };

    if (!currentEvent) return null;

    return (
        <div className={`flex flex-col h-full bg-[#FAF9F7] overflow-hidden ${theme.bg} relative`}>

            {/* Top Toolbar */}
            <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 z-20 shadow-sm relative">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Design Studio</span>
                        <span className="text-slate-300">/</span>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.emeraldText}`}>{isRice ? "Microsite" : "Event Microsite"}</span>
                    </div>
                    <h1 className="text-lg font-display font-medium text-slate-800">{isRice ? "Microsite Configuration" : "Site Builder"}</h1>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsPreviewModalOpen(true)}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors border border-slate-200"
                    >
                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                        Live External Preview
                    </button>

                    <button className={`${theme.emeraldFill} hover:opacity-90 text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95`}>
                        <span className="material-symbols-outlined text-lg">rocket_launch</span>
                        Launch Live Microsite
                    </button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">

                {/* Left Panel: Templates */}
                <aside className="w-80 border-r border-slate-200 bg-white overflow-y-auto flex flex-col">
                    <div className="p-6">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Choose Template</h2>
                        <div className="space-y-4">
                            {templates.map((template) => (
                                <div
                                    key={template.id}
                                    onClick={() => setSelectedTemplate(template.id)}
                                    className={`group cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 relative ${selectedTemplate === template.id ? `${theme.emeraldBorder} shadow-lg ring-1 ${theme.emeraldFill.replace('bg-', 'ring-')}` : "border-transparent hover:border-slate-200"}`}
                                >
                                    <div className="aspect-video bg-slate-200 relative">
                                        <img src={template.image} alt={template.name} className="w-full h-full object-cover" />
                                        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                                            <span className="text-white font-bold uppercase text-xs tracking-widest border border-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Preview</span>
                                        </div>
                                    </div>
                                    <div className={`p-4 ${selectedTemplate === template.id ? `${theme.lightAccent}` : "bg-slate-50"}`}>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className={`font-bold text-sm ${selectedTemplate === template.id ? "text-slate-900" : "text-slate-600"}`}>{template.name}</h3>
                                            {selectedTemplate === template.id && <span className={`material-symbols-outlined text-lg ${theme.emeraldText}`}>check_circle</span>}
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed">{template.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Center Panel: Live Preview */}
                <main className="flex-1 bg-slate-100/50 flex flex-col items-center justify-center relative p-8">
                    {/* Device Toggle */}
                    <div className="absolute top-6 flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm">
                        <button
                            onClick={() => setPreviewMode("mobile")}
                            className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all ${previewMode === "mobile" ? "bg-slate-800 text-white shadow" : "text-slate-400 hover:text-slate-600"}`}
                        >
                            <span className="material-symbols-outlined text-lg">smartphone</span>
                            <span className="text-xs font-bold uppercase tracking-wide">Mobile</span>
                        </button>
                        <button
                            onClick={() => setPreviewMode("desktop")}
                            className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all ${previewMode === "desktop" ? "bg-slate-800 text-white shadow" : "text-slate-400 hover:text-slate-600"}`}
                        >
                            <span className="material-symbols-outlined text-lg">desktop_mac</span>
                            <span className="text-xs font-bold uppercase tracking-wide">Desktop</span>
                        </button>
                    </div>

                    {/* Phone Mockup */}
                    <div className={`transition-all duration-500 ${previewMode === 'mobile' ? 'w-[375px] h-[750px] rounded-[3rem]' : 'w-[1024px] h-[640px] rounded-xl'} bg-black p-3 shadow-2xl relative border-4 border-slate-800 ring-4 ring-slate-900/10`}>
                        {/* Notch / Camera */}
                        {previewMode === 'mobile' && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                        )}

                        {/* Screen Content */}
                        <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative font-sans">

                            {!isRice ? (
                                /* WEDDING PREVIEW (Real Components) */
                                <div className="h-full overflow-y-auto bg-[#1b180d] scrollbar-hide">
                                    <div className="scale-[0.85] origin-top w-[117%]"> {/* Scaling to fit desktop-first components into mobile view */}
                                        <MicrositeHero />
                                        <ItineraryTimeline />
                                        <PackageSelection />
                                    </div>
                                </div>
                            ) : (
                                /* CORPORATE/MICE PREVIEW (Existing Logic) */
                                <>
                                    {/* App Header */}
                                    <div className={`h-48 ${selectedTemplate === 'tech' ? 'bg-blue-600' : selectedTemplate === 'vibrant' ? 'bg-orange-500' : 'bg-slate-900'} relative p-6 text-white flex flex-col justify-end items-center text-center`}>
                                        <h1 className="text-2xl font-bold font-display mb-1">{currentEvent.name}</h1>
                                        <p className="text-white/70 text-sm mb-4">Nov 12-14, 2024 • {currentEvent.destination}</p>

                                        {/* Tabs */}
                                        <div className="flex gap-6 text-sm font-medium border-b border-white/20 pb-0.5 mt-auto">
                                            <span className="border-b-2 border-white pb-3">Agenda</span>
                                            <span className="text-white/50 border-b-2 border-transparent pb-3">Speakers</span>
                                            <span className="text-white/50 border-b-2 border-transparent pb-3">Networking</span>
                                        </div>
                                    </div>

                                    {/* App Content */}
                                    <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-12rem)] bg-slate-50">
                                        {/* Happening Now */}
                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Happening Now</h3>
                                                <span className="px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded uppercase animate-pulse">Live</span>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                                <h4 className="font-bold text-slate-800">Opening Keynote: Future Tech</h4>
                                                <p className="text-xs text-slate-500 mt-1">Main Auditorium • Dr. Jensen Huang</p>
                                                <div className="mt-3 flex gap-2">
                                                    {showNetworking && <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase tracking-wide flex-1">Ask Question</button>}
                                                    <button className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wide flex-1">View Details</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Up Next */}
                                        <div>
                                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Up Next</h3>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-3">
                                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-bold text-slate-400 shrink-0 flex-col">
                                                        <span>10:30</span>
                                                        <span className="text-[10px] uppercase font-normal">AM</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-700 text-sm">Product Reveal</h4>
                                                        <p className="text-[10px] text-slate-400 mt-0.5">Exhibition Hall B</p>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-3">
                                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xs font-bold text-slate-400 shrink-0 flex-col">
                                                        <span>12:00</span>
                                                        <span className="text-[10px] uppercase font-normal">PM</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-700 text-sm">Networking Lunch</h4>
                                                        <p className="text-[10px] text-slate-400 mt-0.5">Grand Ballroom</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Feature Toggles Reflection */}
                                        {brandingCta && (
                                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 text-white shadow-lg shadow-emerald-500/20 mt-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-bold text-lg">Book a Meeting</h3>
                                                        <p className="text-xs opacity-90 mt-1">Connect with exhibitors directly.</p>
                                                    </div>
                                                    <div className="bg-white/20 p-2 rounded-full">
                                                        <span className="material-symbols-outlined">calendar_add_on</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* App Nav Bar */}
                            <div className="absolute bottom-0 w-full h-16 bg-white border-t border-slate-100 flex items-center justify-around text-slate-400">
                                <div className="flex flex-col items-center gap-1 text-slate-800">
                                    <span className="material-symbols-outlined">home</span>
                                    <span className="text-[9px] font-bold uppercase">Home</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                    <span className="text-[9px] font-bold uppercase">Schedule</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="material-symbols-outlined">{isRice ? "chat" : "photo_camera"}</span>
                                    <span className="text-[9px] font-bold uppercase">{isRice ? "Chat" : "Moments"}</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="material-symbols-outlined">person</span>
                                    <span className="text-[9px] font-bold uppercase">Profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Right Panel: Configuration */}
                <aside className="w-80 border-l border-slate-200 bg-white overflow-y-auto">
                    <div className="p-6 space-y-8">

                        {/* Branding */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">palette</span>
                                Branding
                            </h2>
                            <div>
                                <label className="text-xs font-bold text-slate-700 mb-2 block">Logo Upload</label>
                                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-500 transition-all cursor-pointer">
                                    <span className="material-symbols-outlined text-2xl mb-1">cloud_upload</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wide">Drop Logo Here</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-700 mb-2 block">Accent Color</label>
                                <div className="flex gap-2">
                                    {['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'].map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setPrimaryColor(color)}
                                            className={`size-8 rounded-full border-2 transition-transform hover:scale-110 ${primaryColor === color ? 'border-slate-800 scale-110 shadow-sm' : 'border-transparent'}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Features */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">toggle_on</span>
                                Modules
                            </h2>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <span className="material-symbols-outlined text-lg">{isRice ? "forum" : "auto_stories"}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-800">{isRice ? "Networking" : "Guest Book"}</h3>
                                        <p className="text-[10px] text-slate-400">{isRice ? "Matchmaking & Chat" : "Digital Wishes"}</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={showNetworking} onChange={(e) => setShowNetworking(e.target.checked)} className="sr-only peer" />
                                    <div className={`w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all ${theme.checked}`}></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                        <span className="material-symbols-outlined text-lg">{isRice ? "calendar_add_on" : "music_note"}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-800">{isRice ? "Meetings" : "Song Requests"}</h3>
                                        <p className="text-[10px] text-slate-400">{isRice ? "Exhibitor Booking" : "DJ Playlist"}</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={brandingCta} onChange={(e) => setBrandingCta(e.target.checked)} className="sr-only peer" />
                                    <div className={`w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all ${theme.checked}`}></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between opacity-50">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                        <span className="material-symbols-outlined text-lg">{isRice ? "poll" : "videocam"}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-800">{isRice ? "Live Polling" : "Live Stream"}</h3>
                                        <p className="text-[10px] text-slate-400">{isRice ? "Q&A Integration" : "Virtual Attendance"}</p>
                                    </div>
                                </div>
                                <span className="text-[9px] font-bold uppercase bg-slate-100 px-2 py-0.5 rounded text-slate-400">Pro Plan</span>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Actions */}
                        <div className="space-y-3">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Host Approval</h2>
                            <button className="w-full py-3 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
                                <span className="material-symbols-outlined text-lg">send</span>
                                Send for Review
                            </button>
                            <p className="text-[10px] text-slate-400 text-center">
                                Generates a secure staging link for client approval.
                            </p>
                        </div>

                    </div>
                </aside>
            </div>

            {/* PREVIEW MODAL */}
            {
                isPreviewModalOpen && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 animate-in zoom-in-95 duration-200 border border-slate-200">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-display font-bold text-slate-800">How would you like to preview?</h2>
                                <button onClick={() => setIsPreviewModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                    <span className="material-symbols-outlined text-2xl">close</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Guest Option */}
                                <Link href={`/microsite/${id}/guest`} target="_blank" className="group rounded-xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all flex flex-col items-center text-center cursor-pointer">
                                    <div className="size-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">person</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">View as Guest</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Simulate the end-user booking experience. View itineraries, select packages, and check live availability.
                                    </p>
                                    <span className="mt-6 px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-colors">Launch Guest View</span>
                                </Link>

                                {/* Host Option */}
                                <Link href={`/microsite/${id}/host`} target="_blank" className="group rounded-xl border border-slate-200 p-6 hover:border-slate-800 hover:shadow-xl hover:shadow-slate-500/10 transition-all flex flex-col items-center text-center cursor-pointer">
                                    <div className="size-16 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-4 group-hover:bg-slate-800 group-hover:text-white transition-all group-hover:scale-110">
                                        <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">View as Host</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Simulate the client approval view. See inventory consumption, approve designs, and monitor health.
                                    </p>
                                    <span className="mt-6 px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-widest group-hover:bg-slate-800 group-hover:text-white transition-colors">Launch Host View</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}
