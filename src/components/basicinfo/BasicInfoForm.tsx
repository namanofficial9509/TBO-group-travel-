"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, X, Upload } from "lucide-react";

interface BasicInfoFormData {
    eventName: string;
    organisedBy: string;
    city: string;
    fromDate: string;
    toDate: string;
    attendeesCondition: "greater" | "equal" | "less";
    attendeesCount: string;
    selectedRequirements: string[];
    logo: File | null;
}

interface BasicInfoFormProps {
    onSubmit?: (data: BasicInfoFormData) => void;
}

const cityOptions = ["New Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Chennai"];
const requirementOptions = [
    "Projector",
    "Stage",
    "Catering",
    "AV Setup",
    "High-Speed Internet",
    "WiFi",
    "Parking",
    "Security",
];

export default function BasicInfoForm({ onSubmit }: BasicInfoFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState<BasicInfoFormData>({
        eventName: "",
        organisedBy: "",
        city: "",
        fromDate: "",
        toDate: "",
        attendeesCondition: "equal",
        attendeesCount: "",
        selectedRequirements: [],
        logo: null,
    });

    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [isRequirementsDropdownOpen, setIsRequirementsDropdownOpen] = useState(false);
    const [isAttendeeConditionOpen, setIsAttendeeConditionOpen] = useState(false);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    const conditionOptions = [
        { value: "greater", label: "Greater than (>)" },
        { value: "equal", label: "Equal to (=)" },
        { value: "less", label: "Less than (<)" },
    ];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCitySelect = (city: string) => {
        setFormData((prev) => ({
            ...prev,
            city,
        }));
        setIsCityDropdownOpen(false);
    };

    const handleRequirementToggle = (requirement: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedRequirements: prev.selectedRequirements.includes(requirement)
                ? prev.selectedRequirements.filter((r) => r !== requirement)
                : [...prev.selectedRequirements, requirement],
        }));
    };

    const handleRemoveRequirement = (requirement: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedRequirements: prev.selectedRequirements.filter((r) => r !== requirement),
        }));
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                logo: file,
            }));
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogoPreview(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const isFormValid =
        formData.eventName.trim() !== "" &&
        formData.city !== "" &&
        formData.fromDate !== "" &&
        formData.toDate !== "";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            onSubmit?.(formData);
            console.log("Form Data:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form Section */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Logo Upload */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Logo (if required)
                        </label>
                        <div className="flex justify-start">
                            <label
                                htmlFor="logo-upload"
                                className="size-24 rounded-full border-2 border-dashed border-charcoal-ink/20 dark:border-white/20 hover:border-emerald-teal/50 transition-all flex items-center justify-center cursor-pointer bg-charcoal-ink/2 dark:bg-white/2 hover:bg-emerald-teal/5 dark:hover:bg-emerald-teal/10"
                            >
                                {logoPreview ? (
                                    <img
                                        src={logoPreview}
                                        alt="Logo preview"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center">
                                        <Upload className="size-6 text-charcoal-ink/40 dark:text-white/40 mb-1" />
                                        <span className="text-[10px] text-charcoal-ink/40 dark:text-white/40 text-center">
                                            Add
                                        </span>
                                    </div>
                                )}
                            </label>
                            <input
                                id="logo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="hidden"
                            />
                        </div>
                    </div>

                    {/* Event Name */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Event Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleInputChange}
                            placeholder="Annual Discussion Meeting"
                            className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white placeholder:text-charcoal-ink/30 dark:placeholder:text-white/30"
                            required
                        />
                    </div>

                    {/* Organised By */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Organised By
                        </label>
                        <input
                            type="text"
                            name="organisedBy"
                            value={formData.organisedBy}
                            onChange={handleInputChange}
                            placeholder="Organization Name"
                            className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white placeholder:text-charcoal-ink/30 dark:placeholder:text-white/30"
                        />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            City <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                                className="w-full flex items-center justify-between bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white text-left"
                            >
                                <span
                                    className={
                                        formData.city
                                            ? "text-charcoal-ink dark:text-white"
                                            : "text-charcoal-ink/50 dark:text-white/50"
                                    }
                                >
                                    {formData.city || "Select a city"}
                                </span>
                                <ChevronDown
                                    className={`size-5 transition-transform ${
                                        isCityDropdownOpen ? "rotate-180" : ""
                                    } text-charcoal-ink/50 dark:text-white/50`}
                                />
                            </button>

                            {isCityDropdownOpen && (
                                <div className="absolute z-20 top-full mt-2 w-full bg-white dark:bg-[#1a1a1a] border border-charcoal-ink/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden">
                                    {cityOptions.map((city, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => handleCitySelect(city)}
                                            className={`w-full px-4 py-3 text-left hover:bg-emerald-teal/10 dark:hover:bg-emerald-teal/20 transition-colors ${
                                                formData.city === city
                                                    ? "bg-emerald-teal/20 text-emerald-teal font-semibold"
                                                    : "text-charcoal-ink dark:text-white"
                                            }`}
                                        >
                                            {city}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Event Dates */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Event Dates <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            {/* From Date */}
                            <div>
                                <input
                                    type="date"
                                    name="fromDate"
                                    value={formData.fromDate}
                                    onChange={handleInputChange}
                                    className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                    required
                                />
                                <p className="text-xs text-charcoal-ink/50 dark:text-white/50 mt-1">From Date</p>
                            </div>

                            {/* To Date */}
                            <div>
                                <input
                                    type="date"
                                    name="toDate"
                                    value={formData.toDate}
                                    onChange={handleInputChange}
                                    className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white"
                                    required
                                />
                                <p className="text-xs text-charcoal-ink/50 dark:text-white/50 mt-1">To Date</p>
                            </div>
                        </div>
                    </div>

                    {/* Number of Attendees */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Number of Attendees
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Condition Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setIsAttendeeConditionOpen(!isAttendeeConditionOpen)}
                                    className="w-full flex items-center justify-between bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white text-left"
                                >
                                    <span className="text-sm">
                                        {
                                            conditionOptions.find((c) => c.value === formData.attendeesCondition)
                                                ?.label
                                        }
                                    </span>
                                    <ChevronDown
                                        className={`size-5 transition-transform ${
                                            isAttendeeConditionOpen ? "rotate-180" : ""
                                        } text-charcoal-ink/50 dark:text-white/50`}
                                    />
                                </button>

                                {isAttendeeConditionOpen && (
                                    <div className="absolute z-20 top-full mt-2 w-full bg-white dark:bg-[#1a1a1a] border border-charcoal-ink/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden">
                                        {conditionOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        attendeesCondition: option.value as
                                                            | "greater"
                                                            | "equal"
                                                            | "less",
                                                    }));
                                                    setIsAttendeeConditionOpen(false);
                                                }}
                                                className={`w-full px-4 py-3 text-left hover:bg-emerald-teal/10 dark:hover:bg-emerald-teal/20 transition-colors text-sm ${
                                                    formData.attendeesCondition === option.value
                                                        ? "bg-emerald-teal/20 text-emerald-teal font-semibold"
                                                        : "text-charcoal-ink dark:text-white"
                                                }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Attendees Count */}
                            <input
                                type="number"
                                name="attendeesCount"
                                value={formData.attendeesCount}
                                onChange={handleInputChange}
                                placeholder="Enter number"
                                className="w-full bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white placeholder:text-charcoal-ink/30 dark:placeholder:text-white/30"
                            />
                        </div>
                    </div>

                    {/* Specific Requirements */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wide text-charcoal-ink/70 dark:text-white/70">
                            Specific Requirements
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() =>
                                    setIsRequirementsDropdownOpen(!isRequirementsDropdownOpen)
                                }
                                className="w-full flex items-center justify-between bg-charcoal-ink/5 dark:bg-white/5 border border-charcoal-ink/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-teal/50 transition-all text-charcoal-ink dark:text-white text-left"
                            >
                                <span
                                    className={
                                        formData.selectedRequirements.length > 0
                                            ? "text-charcoal-ink dark:text-white"
                                            : "text-charcoal-ink/50 dark:text-white/50"
                                    }
                                >
                                    {formData.selectedRequirements.length > 0
                                        ? `${formData.selectedRequirements.length} selected`
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
                                                    checked={formData.selectedRequirements.includes(
                                                        requirement
                                                    )}
                                                    onChange={() => {}}
                                                    className="size-4 rounded border-charcoal-ink/30 dark:border-white/30 cursor-pointer"
                                                />
                                                <span
                                                    className={
                                                        formData.selectedRequirements.includes(requirement)
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
                </div>

                {/* Right Panel - Specific Requirements Summary */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8 bg-emerald-teal/5 dark:bg-emerald-teal/10 border border-emerald-teal/20 dark:border-emerald-teal/30 rounded-2xl p-6 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-charcoal-ink dark:text-white">
                            Specific Requirements
                        </h3>

                        {formData.selectedRequirements.length > 0 ? (
                            <div className="space-y-2">
                                {formData.selectedRequirements.map((requirement, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between bg-white dark:bg-white/5 px-3 py-2 rounded-lg border border-emerald-teal/20"
                                    >
                                        <span className="text-sm text-charcoal-ink dark:text-white">
                                            {requirement}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveRequirement(requirement)}
                                            className="text-charcoal-ink/50 hover:text-charcoal-ink dark:text-white/50 dark:hover:text-white transition-colors"
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-xs text-charcoal-ink/50 dark:text-white/50">
                                No requirements selected
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 grid grid-cols-2 gap-4 lg:gap-6">
                <button
                    type="button"
                    onClick={() => router.push("/prebookingmice/venue")}
                    className="py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-black bg-emerald-teal hover:bg-emerald-teal/90 shadow-lg shadow-emerald-teal/20 transition-all hover:-translate-y-1 active:scale-95 border border-emerald-teal/50"
                >
                    Next
                </button>
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className="py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-black bg-emerald-teal hover:bg-emerald-teal/90 shadow-lg shadow-emerald-teal/20 transition-all hover:-translate-y-1 active:scale-95 border border-emerald-teal/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Create Inventory
                </button>
            </div>
        </form>
    );
}
