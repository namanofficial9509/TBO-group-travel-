"use client";

import AccommodationForm from "@/components/accomodation/AccommodationForm";

export default function AccommodationPage() {
    return (
        <div className="min-h-screen w-full bg-background-light dark:bg-background-dark py-12 lg:py-16">
            <div className="max-w-5xl mx-auto px-4 lg:px-8">
                {/* Form Card */}
                <div className="bg-white dark:bg-[#121212] rounded-3xl p-8 lg:p-12 shadow-sm border border-charcoal-ink/5 dark:border-white/5">
                    <AccommodationForm />
                </div>
            </div>
        </div>
    );
}
