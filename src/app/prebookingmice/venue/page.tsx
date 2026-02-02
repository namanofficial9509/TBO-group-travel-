"use client";

import VenueForm from "@/components/venue/VenueForm";

export default function VenuePage() {
    return (
        <div className="min-h-screen w-full bg-background-light dark:bg-background-dark py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-display font-bold text-charcoal-ink dark:text-white mb-2">
                        Venue
                    </h1>
                    <p className="text-lg text-charcoal-ink/60 dark:text-white/60">
                        Select and customize your event venue with inclusions and negotiation options.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white dark:bg-[#121212] rounded-3xl p-8 lg:p-12 shadow-sm border border-charcoal-ink/5 dark:border-white/5">
                    <VenueForm />
                </div>
            </div>
        </div>
    );
}
