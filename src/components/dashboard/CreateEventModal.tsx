"use client";

import { useState } from "react";
import { useEvents, EventType, MiceSubtype } from "@/context/EventContext";

interface CreateEventModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateEventModal({ isOpen, onClose }: CreateEventModalProps) {
    const { createEvent } = useEvents();

    // Form State
    const [step, setStep] = useState(1);
    const [eventType, setEventType] = useState<EventType | "">("");
    const [subtype, setSubtype] = useState<MiceSubtype | undefined>(undefined);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [destination, setDestination] = useState("");

    if (!isOpen) return null;

    const handleCreate = () => {
        if (!eventType || !name || !date) return;

        createEvent({
            name,
            date,
            destination,
            type: eventType as EventType,
            subtype
        });

        // Reset and Close
        resetForm();
        onClose();
    };

    const resetForm = () => {
        setStep(1);
        setEventType("");
        setSubtype(undefined);
        setName("");
        setDate("");
        setDestination("");
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="bg-[#fcfbf7] px-8 py-6 border-b border-[#e7e1cf] flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-display font-bold text-[#1b170d]">
                            {step === 1 ? "Select Event Type" : step === 2 && eventType === "MICE" ? "Select MICE Category" : "Event Details"}
                        </h2>
                        <p className="text-xs text-[#9a864c] mt-1">
                            {step === 1 ? "Choose a template to get started" : "Tell us about your event"}
                        </p>
                    </div>
                    <button onClick={handleClose} className="size-8 rounded-full bg-[#1b170d]/5 hover:bg-[#1b170d]/10 flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-[#1b170d] text-lg">close</span>
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    {step === 1 ? (
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => { setEventType("Wedding"); setStep(3); }}
                                className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-[#e7e1cf] hover:border-[#F2A900] hover:bg-[#FFF9EA] transition-all text-center"
                            >
                                <div className="size-16 rounded-full bg-[#F2A900]/10 text-[#F2A900] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">favorite</span>
                                </div>
                                <div>
                                    <span className="block font-bold text-[#1b170d]">Wedding</span>
                                    <span className="text-xs text-[#9a864c]">Bridal, Sangeet, Reception</span>
                                </div>
                            </button>

                            <button
                                onClick={() => { setEventType("MICE"); setStep(2); }}
                                className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-[#e7e1cf] hover:border-[#008080] hover:bg-[#E6F2F2] transition-all text-center"
                            >
                                <div className="size-16 rounded-full bg-[#008080]/10 text-[#008080] flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">groups</span>
                                </div>
                                <div>
                                    <span className="block font-bold text-[#1b170d]">MICE / Corporate</span>
                                    <span className="text-xs text-[#9a864c]">Retreats, Conferences</span>
                                </div>
                            </button>
                        </div>
                    ) : step === 2 && eventType === "MICE" ? (
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { id: "Meeting", icon: "meeting_room", label: "Meeting" },
                                { id: "Incentive", icon: "flight_takeoff", label: "Incentive" },
                                { id: "Conference", icon: "podium", label: "Conference" },
                                { id: "Exhibition", icon: "storefront", label: "Exhibition" }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => { setSubtype(item.id as MiceSubtype); setStep(3); }}
                                    className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-[#e7e1cf] hover:border-[#008080] hover:bg-[#E6F2F2] transition-all text-center"
                                >
                                    <div className="size-10 rounded-full bg-[#008080]/10 text-[#008080] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    </div>
                                    <span className="text-sm font-bold text-[#1b170d]">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#9a864c] mb-2">Event Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={eventType === "Wedding" ? "e.g., Anjali & Rahul" : `e.g., Tech ${subtype} `}
                                    className="w-full bg-[#fcfbf7] border border-[#e7e1cf] rounded-xl px-4 py-3 text-[#1b170d] placeholder:text-[#1b170d]/30 focus:outline-none focus:ring-2 focus:ring-[#1b170d]/10"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9a864c] mb-2">Date</label>
                                    <input
                                        type="text"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        placeholder="e.g., Nov 2024"
                                        className="w-full bg-[#fcfbf7] border border-[#e7e1cf] rounded-xl px-4 py-3 text-[#1b170d] placeholder:text-[#1b170d]/30 focus:outline-none focus:ring-2 focus:ring-[#1b170d]/10"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9a864c] mb-2">Destination</label>
                                    <input
                                        type="text"
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        placeholder="e.g., Udaipur"
                                        className="w-full bg-[#fcfbf7] border border-[#e7e1cf] rounded-xl px-4 py-3 text-[#1b170d] placeholder:text-[#1b170d]/30 focus:outline-none focus:ring-2 focus:ring-[#1b170d]/10"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-[#fcfbf7] border-t border-[#e7e1cf] flex justify-between">
                    {step > 1 && (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="text-sm font-bold text-[#9a864c] hover:text-[#1b170d]"
                        >
                            Back
                        </button>
                    )}
                    {step === 3 && (
                        <button
                            onClick={handleCreate}
                            disabled={!name || !date}
                            className="ml-auto px-6 py-2 bg-[#1b170d] text-white rounded-full text-sm font-bold hover:bg-[#333] transition-colors disabled:opacity-50"
                        >
                            Create Dashboard
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
