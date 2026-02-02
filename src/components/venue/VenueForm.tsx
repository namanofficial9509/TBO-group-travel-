"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Check, X, DollarSign, Send } from "lucide-react";

interface Venue {
    id: number;
    name: string;
    price: string;
    rating: number;
    description: string;
    inclusions: string[];
}

interface RequirementItem {
    id: number;
    name: string;
    included: boolean;
}

type NegotiationStatus = "pending" | "accepted" | "rejected" | "counter";

const venuesData: Venue[] = [
    {
        id: 1,
        name: "Grand Ballroom Palace",
        price: "₹2,50,000",
        rating: 4.8,
        description:
            "A luxurious ballroom with state-of-the-art facilities, elegant chandeliers, and spacious dining areas. Perfect for grand celebrations and corporate events.",
        inclusions: ["Sound system across the hall", "Drinking water facility", "Air conditioning", "Parking facilities"],
    },
    {
        id: 2,
        name: "Sapphire Convention Center",
        price: "₹1,80,000",
        rating: 4.5,
        description:
            "Modern convention center with multiple breakout rooms, high-speed WiFi, and professional audio-visual setup. Ideal for conferences and seminars.",
        inclusions: ["High-speed WiFi", "AV equipment", "Breakout rooms", "Conference room setup"],
    },
    {
        id: 3,
        name: "The Royal Heritage Venue",
        price: "₹3,00,000",
        rating: 4.9,
        description:
            "An iconic heritage venue with traditional architecture and modern amenities. Offers stunning interiors with classical decor and premium catering options.",
        inclusions: ["Premium catering", "Valet parking", "Sound system", "Lighting setup"],
    },
];

const requirementsData: RequirementItem[] = [
    { id: 1, name: "Sound system across the hall", included: true },
    { id: 2, name: "Drinking water facility", included: true },
    { id: 3, name: "Video conferencing setup", included: false },
    { id: 4, name: "High-speed WiFi", included: false },
    { id: 5, name: "Breakout rooms", included: true },
    { id: 6, name: "Premium catering", included: false },
];

const requirementOptions = ["Sound System", "WiFi", "Catering", "Parking", "Valet Service", "AV Equipment"];

export default function VenueForm() {
    const router = useRouter();
    const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
    const [selectedRequirements, setSelectedRequirements] = useState<string[]>([]);
    const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
    const [isRequirementsDropdownOpen, setIsRequirementsDropdownOpen] = useState(false);
    const [offerRate, setOfferRate] = useState("");
    const [negotiationStatus, setNegotiationStatus] = useState<NegotiationStatus>("pending");
    const [requirements, setRequirements] = useState<RequirementItem[]>(requirementsData);

    const handleVenueSelect = (venue: Venue) => {
        setSelectedVenue(venue);
        setIsVenueDropdownOpen(false);
        setNegotiationStatus("pending");
        setOfferRate("");
    };

    const handleRequirementToggle = (requirement: string) => {
        setSelectedRequirements((prev) =>
            prev.includes(requirement) ? prev.filter((r) => r !== requirement) : [...prev, requirement]
        );
    };

    const handleSendOffer = () => {
        if (offerRate.trim()) {
            const statuses: NegotiationStatus[] = ["accepted", "rejected", "counter"];
            setNegotiationStatus(statuses[Math.floor(Math.random() * statuses.length)]);
        }
    };

    const handleLetInclude = (id: number) => {
        setRequirements((prev) =>
            prev.map((req) => (req.id === id ? { ...req, included: true } : req))
        );
    };

    const completionPercentage = Math.round(
        (requirements.filter((r) => r.included).length / requirements.length) * 100
    );

    const isLockEnabled = negotiationStatus === "accepted" && completionPercentage >= 80;

    const getStatusColor = (status: NegotiationStatus) => {
        switch (status) {
            case "accepted":
                return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700";
            case "rejected":
                return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700";
            case "counter":
                return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700";
            default:
                return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-700";
        }
    };

    const getStatusText = (status: NegotiationStatus) => {
        switch (status) {
            case "accepted":
                return "✓ Accepted";
            case "rejected":
                return "✗ Rejected";
            case "counter":
                return "↔ Counter-offer";
            default:
                return "Pending";
        }
    };

    return (
        <div className="space-y-8">
            {/* TOP SECTION */}
            <div className="space-y-6">
                {/* Venue Selector */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                        Venue
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsVenueDropdownOpen(!isVenueDropdownOpen)}
                            className="w-full flex items-center justify-between bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white text-left"
                        >
                            <div className="flex-1">
                                {selectedVenue ? (
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold">{selectedVenue.name}</span>
                                        <span className="text-xs bg-emerald-teal/20 text-emerald-teal px-2 py-1 rounded">
                                            {selectedVenue.rating} ★
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-charcoal-ink/50 dark:text-white/50">Select a venue</span>
                                )}
                            </div>
                            <ChevronDown
                                className={`size-5 transition-transform ${
                                    isVenueDropdownOpen ? "rotate-180" : ""
                                } text-charcoal-ink/50 dark:text-white/50 flex-shrink-0`}
                            />
                        </button>

                        {isVenueDropdownOpen && (
                            <div className="absolute z-20 top-full mt-2 w-full bg-white dark:bg-[#1a1a1a] border border-charcoal-ink/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden">
                                <div className="grid grid-cols-3 gap-4 p-3 bg-charcoal-ink/2 dark:bg-white/2 border-b border-charcoal-ink/10 dark:border-white/10 text-xs font-bold uppercase">
                                    <div>Venue</div>
                                    <div>Price</div>
                                    <div>Rating</div>
                                </div>
                                {venuesData.map((venue) => (
                                    <button
                                        key={venue.id}
                                        type="button"
                                        onClick={() => handleVenueSelect(venue)}
                                        className="w-full px-4 py-4 text-left hover:bg-emerald-teal/10 dark:hover:bg-emerald-teal/20 transition-colors border-b border-charcoal-ink/5 dark:border-white/5 last:border-b-0 grid grid-cols-3 gap-4"
                                    >
                                        <div className="font-semibold text-charcoal-ink dark:text-white">
                                            {venue.name}
                                        </div>
                                        <div className="text-emerald-teal font-semibold">{venue.price}</div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-charcoal-ink dark:text-white font-semibold">
                                                {venue.rating}
                                            </span>
                                            <span className="text-yellow-400">★</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Specific Requirements Multi-select */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                        Specific Requirement
                        <span className="text-charcoal-ink/50 dark:text-white/50 font-normal text-[10px] ml-2">
                            (Multiple options can be selected)
                        </span>
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsRequirementsDropdownOpen(!isRequirementsDropdownOpen)}
                            className="w-full flex items-center justify-between bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white text-left"
                        >
                            <span
                                className={
                                    selectedRequirements.length > 0
                                        ? "text-charcoal-ink dark:text-white"
                                        : "text-charcoal-ink/50 dark:text-white/50"
                                }
                            >
                                {selectedRequirements.length > 0
                                    ? `${selectedRequirements.length} selected`
                                    : "Select requirements"}
                            </span>
                            <ChevronDown
                                className={`size-5 transition-transform ${
                                    isRequirementsDropdownOpen ? "rotate-180" : ""
                                } text-charcoal-ink/50 dark:text-white/50`}
                            />
                        </button>

                        {isRequirementsDropdownOpen && (
                            <div className="absolute z-20 top-full mt-2 w-full bg-white dark:bg-[#1a1a1a] border border-charcoal-ink/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden">
                                <div className="max-h-64 overflow-y-auto">
                                    {requirementOptions.map((requirement, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => handleRequirementToggle(requirement)}
                                            className="w-full px-4 py-3 text-left hover:bg-emerald-teal/10 dark:hover:bg-emerald-teal/20 transition-colors flex items-center gap-3"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedRequirements.includes(requirement)}
                                                onChange={() => {}}
                                                className="size-4 rounded"
                                            />
                                            <span
                                                className={
                                                    selectedRequirements.includes(requirement)
                                                        ? "text-emerald-teal font-semibold text-charcoal-ink dark:text-white"
                                                        : "text-charcoal-ink dark:text-white"
                                                }
                                            >
                                                {requirement}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Info Badge */}
                {selectedVenue && (
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                        <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">
                            ℹ Venues free for event in selected time period
                        </p>
                    </div>
                )}
            </div>

            {/* VENUE DETAILS SECTION */}
            {selectedVenue && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Venue Description Panel */}
                    <div className="lg:col-span-2">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-900 dark:text-blue-300 mb-3">
                                Venue Description
                            </h3>
                            <p className="text-sm text-charcoal-ink dark:text-white leading-relaxed">
                                {selectedVenue.description}
                            </p>
                        </div>
                    </div>

                    {/* Inclusions Panel */}
                    <div className="p-6 bg-emerald-teal/10 dark:bg-emerald-teal/20 border border-emerald-teal/30 dark:border-emerald-teal/40 rounded-2xl">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-teal mb-4">
                            Inclusions
                        </h3>
                        <ul className="space-y-2">
                            {selectedVenue.inclusions.map((inclusion, index) => (
                                <li key={index} className="flex items-start gap-3 text-xs">
                                    <Check className="size-4 text-emerald-teal flex-shrink-0 mt-0.5" />
                                    <span className="text-charcoal-ink dark:text-white">{inclusion}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* NEGOTIATION SECTION */}
            {selectedVenue && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Offer Your Rate */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Offer Your Rate
                        </label>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-ink/50 dark:text-white/50 font-semibold">
                                    ₹
                                </span>
                                <input
                                    type="number"
                                    value={offerRate}
                                    onChange={(e) => setOfferRate(e.target.value)}
                                    placeholder="Enter amount"
                                    className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 pl-8 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleSendOffer}
                                disabled={!offerRate.trim()}
                                className="px-6 py-3.5 rounded-xl bg-emerald-teal hover:bg-emerald-teal/90 text-black font-bold uppercase text-sm tracking-widest transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                <Send className="size-4" />
                                Send
                            </button>
                        </div>
                    </div>

                    {/* Status of Rate Request */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Status of Rate Request
                        </label>
                        <div
                            className={`p-3.5 rounded-xl border text-sm font-semibold ${getStatusColor(
                                negotiationStatus
                            )}`}
                        >
                            {getStatusText(negotiationStatus)}
                        </div>
                    </div>
                </div>
            )}

            {/* REQUIREMENT COMPLETION STATUS */}
            {selectedVenue && (
                <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-2xl space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-yellow-900 dark:text-yellow-300">
                        Specific Requirement Completion
                    </h3>

                    {/* Requirements List */}
                    <div className="space-y-2">
                        {requirements.map((requirement) => (
                            <div
                                key={requirement.id}
                                className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-lg border border-yellow-200/50 dark:border-yellow-700/50"
                            >
                                <div className="flex items-center gap-3">
                                    {requirement.included ? (
                                        <Check className="size-5 text-green-600" />
                                    ) : (
                                        <X className="size-5 text-red-600" />
                                    )}
                                    <span className="text-sm text-charcoal-ink dark:text-white">
                                        {requirement.name}
                                    </span>
                                </div>
                                {!requirement.included && (
                                    <button
                                        type="button"
                                        onClick={() => handleLetInclude(requirement.id)}
                                        className="px-3 py-1.5 rounded-lg bg-yellow-200 dark:bg-yellow-900/50 hover:bg-yellow-300 dark:hover:bg-yellow-900/70 text-yellow-900 dark:text-yellow-300 text-xs font-bold transition-colors"
                                    >
                                        Let Include
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Completion Progress */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-charcoal-ink/70 dark:text-white/70">
                                Completion Progress
                            </span>
                            <span className="text-sm font-bold text-charcoal-ink dark:text-white">
                                {completionPercentage}%
                            </span>
                        </div>
                        <div className="w-full bg-yellow-200 dark:bg-yellow-900/30 rounded-full h-2 overflow-hidden">
                            <div
                                className="h-full bg-yellow-600 dark:bg-yellow-500 transition-all duration-300"
                                style={{ width: `${completionPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* LOCK BUTTON */}
            {selectedVenue && (
                <button
                    type="button"
                    disabled={!isLockEnabled}
                    className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest border transition-all hover:-translate-y-1 active:scale-95 ${
                        isLockEnabled
                            ? "text-black bg-emerald-teal hover:bg-emerald-teal/90 shadow-lg shadow-emerald-teal/20 border-emerald-teal/50 cursor-pointer"
                            : "text-charcoal-ink dark:text-white/60 bg-emerald-teal/40 dark:bg-emerald-teal/20 border-emerald-teal/30 opacity-50 cursor-not-allowed"
                    }`}
                >
                    Lock Inventory
                </button>
            )}

            {/* NEXT BUTTON */}
            {selectedVenue && (
                <button
                    type="button"
                    onClick={() => router.push("/prebookingmice/accomodation")}
                    className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-black bg-emerald-teal hover:bg-emerald-teal/90 shadow-lg shadow-emerald-teal/20 transition-all hover:-translate-y-1 active:scale-95 border border-emerald-teal/50"
                >
                    Next
                </button>
            )}
        </div>
    );
}
