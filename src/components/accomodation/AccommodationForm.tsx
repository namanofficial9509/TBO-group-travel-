"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Check, Upload, Plus, X, Lock } from "lucide-react";

interface Accommodation {
    id: number;
    type: string;
    price: string;
    distance: string;
    rating: number;
    description: string;
    inclusions: string[];
}

interface GuestCategory {
    id: number;
    name: string;
    rooms: string;
}

const accommodationData: Accommodation[] = [
    {
        id: 1,
        type: "Hotel",
        price: "₹5,000/night",
        distance: "2 km",
        rating: 4.8,
        description:
            "A luxury 5-star hotel with modern amenities, spacious rooms, and world-class facilities. Perfect for hosting guest accommodations with premium services and 24/7 concierge.",
        inclusions: ["Breakfast", "WiFi", "Transport", "Room Service"],
    },
    {
        id: 2,
        type: "Resort",
        price: "₹4,500/night",
        distance: "5 km",
        rating: 4.6,
        description:
            "A sprawling resort with multiple facilities including swimming pool, spa, and recreation areas. Ideal for larger guest groups with diverse entertainment options.",
        inclusions: ["Breakfast", "WiFi", "Pool Access", "Entertainment"],
    },
    {
        id: 3,
        type: "Guest House",
        price: "₹2,500/night",
        distance: "1 km",
        rating: 4.5,
        description:
            "A cozy guest house with comfortable rooms and home-like atmosphere. Great for smaller groups seeking a personalized stay experience.",
        inclusions: ["Breakfast", "WiFi", "Parking", "Common Area"],
    },
];

const requirementOptions = ["WiFi", "Breakfast", "Transport", "Laundry", "Room Service", "Parking"];

export default function AccommodationForm() {
    const router = useRouter();
    const [isAccommodationEnabled, setIsAccommodationEnabled] = useState(false);
    const [title, setTitle] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
    const [selectedRequirements, setSelectedRequirements] = useState<string[]>([]);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [guestCategories, setGuestCategories] = useState<GuestCategory[]>([
        { id: 1, name: "VVIP", rooms: "" },
        { id: 2, name: "VIP", rooms: "" },
        { id: 3, name: "Normal Guest", rooms: "" },
    ]);
    const [isAccommodationLocked, setIsAccommodationLocked] = useState(false);
    const [isAccommodationDropdownOpen, setIsAccommodationDropdownOpen] = useState(false);
    const [isRequirementsDropdownOpen, setIsRequirementsDropdownOpen] = useState(false);

    const handleRequirementToggle = (requirement: string) => {
        setSelectedRequirements((prev) =>
            prev.includes(requirement) ? prev.filter((r) => r !== requirement) : [...prev, requirement]
        );
    };

    const handleAccommodationSelect = (accommodation: Accommodation) => {
        setSelectedAccommodation(accommodation);
        setIsAccommodationDropdownOpen(false);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleGuestCategoryChange = (id: number, value: string) => {
        setGuestCategories((prev) =>
            prev.map((cat) => (cat.id === id ? { ...cat, rooms: value } : cat))
        );
    };

    const handleAddGuestCategory = () => {
        const newId = Math.max(...guestCategories.map((c) => c.id)) + 1;
        setGuestCategories((prev) => [...prev, { id: newId, name: "New Category", rooms: "" }]);
    };

    const handleRemoveGuestCategory = (id: number) => {
        setGuestCategories((prev) => prev.filter((cat) => cat.id !== id));
    };

    const handleLockAccommodation = () => {
        setIsAccommodationLocked(true);
    };

    return (
        <div className="space-y-8">
            {/* SECTION 1: HEADER & TOGGLE */}
            <div className="space-y-4">
                <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-ink dark:text-white mb-2">
                        Pre-Booked Accommodation for Guests
                    </h2>
                    <p className="text-sm text-charcoal-ink/60 dark:text-white/60">
                        Is you are booking accommodation facility for all members/guests that will attend your event
                    </p>
                </div>

                {/* Yes/No Toggle */}
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsAccommodationEnabled(true)}
                        className={`px-6 py-2.5 rounded-xl font-bold uppercase text-sm tracking-widest transition-all ${
                            isAccommodationEnabled
                                ? "text-black bg-emerald-teal shadow-lg shadow-emerald-teal/20 border border-emerald-teal/50"
                                : "text-charcoal-ink dark:text-white bg-charcoal-ink/10 dark:bg-white/10 border border-charcoal-ink/20 dark:border-white/20 hover:bg-charcoal-ink/15 dark:hover:bg-white/15"
                        }`}
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => {
                            setIsAccommodationEnabled(false);
                            setTitle("");
                            setNumberOfGuests("");
                            setSelectedAccommodation(null);
                            setSelectedRequirements([]);
                            setUploadedFile(null);
                            setGuestCategories([
                                { id: 1, name: "VVIP", rooms: "" },
                                { id: 2, name: "VIP", rooms: "" },
                                { id: 3, name: "Normal Guest", rooms: "" },
                            ]);
                            setIsAccommodationLocked(false);
                        }}
                        className={`px-6 py-2.5 rounded-xl font-bold uppercase text-sm tracking-widest transition-all ${
                            !isAccommodationEnabled
                                ? "text-black bg-emerald-teal shadow-lg shadow-emerald-teal/20 border border-emerald-teal/50"
                                : "text-charcoal-ink dark:text-white bg-charcoal-ink/10 dark:bg-white/10 border border-charcoal-ink/20 dark:border-white/20 hover:bg-charcoal-ink/15 dark:hover:bg-white/15"
                        }`}
                    >
                        No
                    </button>
                </div>
            </div>

            {/* SECTION 2: BASIC DETAILS */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-charcoal-ink dark:text-white">
                    Basic Details
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    {/* Title */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="VVIP"
                            disabled={isAccommodationLocked}
                            className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white placeholder:text-charcoal-ink/30 dark:placeholder:text-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    {/* Number of Guests */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Number of Guests
                        </label>
                        <input
                            type="number"
                            value={numberOfGuests}
                            onChange={(e) => setNumberOfGuests(e.target.value)}
                            placeholder="200"
                            disabled={isAccommodationLocked}
                            className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white placeholder:text-charcoal-ink/30 dark:placeholder:text-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
            </div>

            {/* SECTION 3: ACCOMMODATION SELECTION */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-charcoal-ink dark:text-white">
                    Accommodation Selection
                </h3>

                {/* Accommodation Dropdown */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                        Accommodation Type
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsAccommodationDropdownOpen(!isAccommodationDropdownOpen)}
                            disabled={isAccommodationLocked}
                            className="w-full flex items-center justify-between bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white text-left disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {selectedAccommodation ? (
                                <div className="flex items-center gap-4 flex-1">
                                    <span className="font-semibold">{selectedAccommodation.type}</span>
                                    <span className="text-emerald-teal font-semibold">{selectedAccommodation.price}</span>
                                    <span className="text-xs bg-emerald-teal/20 text-emerald-teal px-2 py-1 rounded">
                                        {selectedAccommodation.distance}
                                    </span>
                                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                                        {selectedAccommodation.rating} ★
                                    </span>
                                </div>
                            ) : (
                                <span className="text-charcoal-ink/50 dark:text-white/50">Select accommodation</span>
                            )}
                            <ChevronDown
                                className={`size-5 transition-transform ${
                                    isAccommodationDropdownOpen ? "rotate-180" : ""
                                } text-charcoal-ink/50 dark:text-white/50 flex-shrink-0`}
                            />
                        </button>

                        {isAccommodationDropdownOpen && (
                            <div className="absolute z-20 top-full mt-2 w-full bg-white dark:bg-[#1a1a1a] border border-charcoal-ink/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden">
                                {accommodationData.map((accommodation) => (
                                    <button
                                        key={accommodation.id}
                                        type="button"
                                        onClick={() => handleAccommodationSelect(accommodation)}
                                        className="w-full px-4 py-4 text-left hover:bg-emerald-teal/10 dark:hover:bg-emerald-teal/20 transition-colors border-b border-charcoal-ink/5 dark:border-white/5 last:border-b-0"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-charcoal-ink dark:text-white">
                                                {accommodation.type}
                                            </span>
                                            <span className="text-emerald-teal font-semibold">{accommodation.price}</span>
                                            <span className="text-xs text-charcoal-ink/50 dark:text-white/50">
                                                {accommodation.distance}
                                            </span>
                                            <span className="text-yellow-400">★</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Specific Requirements */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                        Specific Requirements
                        <span className="text-charcoal-ink/50 dark:text-white/50 font-normal text-[10px] ml-2">
                            (Multiple options can be selected)
                        </span>
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsRequirementsDropdownOpen(!isRequirementsDropdownOpen)}
                            disabled={isAccommodationLocked}
                            className="w-full flex items-center justify-between bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white text-left disabled:opacity-50 disabled:cursor-not-allowed"
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
                                        <span className="text-charcoal-ink dark:text-white">
                                            {requirement}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* SECTION 4: ACCOMMODATION DETAILS PANEL */}
            {selectedAccommodation && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Description Panel */}
                    <div className="lg:col-span-2">
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl">
                            <h3 className="text-sm font-bold uppercase tracking-wide text-blue-900 dark:text-blue-300 mb-3">
                                Accommodation Description
                            </h3>
                            <p className="text-sm text-charcoal-ink dark:text-white leading-relaxed">
                                {selectedAccommodation.description}
                            </p>
                        </div>
                    </div>

                    {/* Inclusions Panel */}
                    <div className="p-6 bg-emerald-teal/10 dark:bg-emerald-teal/20 border border-emerald-teal/30 dark:border-emerald-teal/40 rounded-2xl">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-teal mb-4">
                            Inclusions
                        </h3>
                        <ul className="space-y-2">
                            {selectedAccommodation.inclusions.map((inclusion, index) => (
                                <li key={index} className="flex items-start gap-3 text-xs">
                                    <Check className="size-4 text-emerald-teal flex-shrink-0 mt-0.5" />
                                    <span className="text-charcoal-ink dark:text-white">{inclusion}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Lock Button for Accommodation */}
            {selectedAccommodation && !isAccommodationLocked && (
                <button
                    type="button"
                    onClick={handleLockAccommodation}
                    className="w-full py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-black bg-emerald-teal hover:bg-emerald-teal/90 shadow-lg shadow-emerald-teal/20 transition-all hover:-translate-y-1 active:scale-95 border border-emerald-teal/50 flex items-center justify-center gap-2"
                >
                    <Lock className="size-4" />
                    Lock Accommodation
                </button>
            )}

            {/* SECTION 5: GUEST DETAILS UPLOAD */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-charcoal-ink dark:text-white">
                    Guest Details
                </h3>

                <label
                    htmlFor="guest-upload"
                    className="block p-8 border-2 border-dashed border-charcoal-ink/20 dark:border-white/20 rounded-2xl hover:border-emerald-teal/50 hover:bg-emerald-teal/5 dark:hover:bg-emerald-teal/10 transition-all cursor-pointer"
                >
                    <div className="flex flex-col items-center justify-center gap-3">
                        <Upload className="size-8 text-charcoal-ink/40 dark:text-white/40" />
                        <span className="text-sm font-bold uppercase text-charcoal-ink/70 dark:text-white/70">
                            {uploadedFile ? uploadedFile.name : "Upload File"}
                        </span>
                    </div>
                </label>
                <input
                    id="guest-upload"
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={isAccommodationLocked}
                />

                <p className="text-xs text-charcoal-ink/50 dark:text-white/50">
                    Guest detail will be used for booking rooms on their name and sending invitation purposes
                </p>
            </div>

            {/* SECTION 6: GUEST LEVEL ALLOCATION */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-charcoal-ink dark:text-white">
                    Guest Level Allocation
                </h3>

                <div className="space-y-3">
                    {guestCategories.map((category) => (
                        <div key={category.id} className="flex items-end gap-3">
                            <div className="flex-1 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                                    {category.name}
                                </label>
                                <input
                                    type="number"
                                    value={category.rooms}
                                    onChange={(e) => handleGuestCategoryChange(category.id, e.target.value)}
                                    placeholder="Number of rooms"
                                    disabled={isAccommodationLocked}
                                    className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white placeholder:text-charcoal-ink/30 dark:placeholder:text-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>
                            {guestCategories.length > 3 && (
                                <button
                                    type="button"
                                    onClick={() => handleRemoveGuestCategory(category.id)}
                                    disabled={isAccommodationLocked}
                                    className="px-3 py-3.5 rounded-xl bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <X className="size-5" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {!isAccommodationLocked && (
                    <button
                        type="button"
                        onClick={handleAddGuestCategory}
                        className="px-4 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest text-emerald-teal border border-emerald-teal/50 hover:bg-emerald-teal/5 dark:hover:bg-emerald-teal/10 transition-colors flex items-center gap-2"
                    >
                        <Plus className="size-4" />
                        Add
                    </button>
                )}
            </div>

            {/* NEXT BUTTON */}
            <button
                type="button"
                onClick={() => router.push("/prebookingmice/transportation")}
                className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-black bg-emerald-teal hover:bg-emerald-teal/90 shadow-lg shadow-emerald-teal/20 transition-all hover:-translate-y-1 active:scale-95 border border-emerald-teal/50"
            >
                Next
            </button>
        </div>
    );
}
