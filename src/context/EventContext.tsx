"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Event Types
export type EventType = "Wedding" | "MICE";
export type MiceSubtype = "Meeting" | "Incentive" | "Conference" | "Exhibition";
export type EventStatus = "Draft" | "Planning" | "Sourcing" | "Contracted" | "In-Session" | "Live" | "Post-Event";

export interface MiceKPIs {
    roi?: number; // Return on Investment %
    utilization?: number; // Budget Utilization %
    registrations?: number;
    capacity?: number;
    leads?: number; // Qualified Leads or Check-ins
    daysToKickoff?: number;
}

export interface Event {
    id: string;
    name: string;
    date: string;
    destination: string;
    type: EventType;
    subtype?: MiceSubtype; // Optional, only for MICE
    status: EventStatus;
    image: string;
    tags: string[];
    // Simulated "Template" Data
    progress: number;
    checklist: string[];
    kpis?: MiceKPIs; // New: MICE Specific Metrics
}

interface EventContextType {
    events: Event[];
    createEvent: (data: { name: string; date: string; destination: string; type: EventType; subtype?: MiceSubtype }) => void;
    deleteEvent: (id: string) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: ReactNode }) {
    const [events, setEvents] = useState<Event[]>([]);

    // Load from LocalStorage on mount
    useEffect(() => {
        const savedEvents = localStorage.getItem("plannerEvents_v5"); // Bumped to v5 for schema change
        if (savedEvents) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setEvents(JSON.parse(savedEvents));
        } else {
            // Default Initial Data (Simulating a fresh account with some demo data)
            setEvents([
                {
                    id: "1",
                    name: "Udaipur Palace Wedding",
                    date: "Nov 2024",
                    destination: "Udaipur",
                    type: "Wedding",
                    status: "Live",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjuMWlpZ6S_NuQvvaauflXZGy1oqUIjMj34TxKDjdJJyRr1rshfGX2Kpxw7MGXn2_R8BmUgRLBOmOGFX0MFgQtnLMXxxcICIoCMgfM1Lj9eIBQzQyynNQ-Rl_6Y-CwqW-k1EsT5b6FIICajXP__BGXjLdoL7YP0lB7ujQfQwLnR2fLGjOeOsTkC0wZ2azbst_Wvml-b9IiWOVeIECvGUG9FwyvdhYb6TjKDFbSEaxxxvzuemWwGVfXzVA3wl6UThsQubqJVo-yCx4",
                    tags: ["Days to Sangeet: 120", "Guest List"],
                    progress: 85,
                    checklist: ["Finalize Guest List", "Menu Tasting", "Sangeet Choreography"],
                    kpis: { daysToKickoff: 120, registrations: 350, capacity: 500 } // Re-used for Wedding logic if needed (Guest count)
                },
                {
                    id: "2",
                    name: "Goa Leadership Retreat",
                    date: "Oct 2024",
                    destination: "Goa",
                    type: "MICE",
                    subtype: "Incentive",
                    status: "Sourcing",
                    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoPW5fcySvKCcXOM3At4pGNcQqPr0a6LRX-nOu1g_cgmdKFdzvM9ajHwmXWgHi7pHAAC9c6wqjnYojVSGONjYK9ABIGL1rBL4cMAjRObGyN3OLGAjSQcSypOqfaccXlbSgIlVsu_yK5abuPMi3nJT2TGE6I4LXRXB3j3RAn2Jgg7G2ZddYIEOcN7a3ytbZA55GHaAs_7xCYehJOhxgssrdUThn1tXbVDiQyHViGkeWbn6MJpylsC_pzMNH0pDSs0vM4h-FGVl2NnI",
                    tags: ["Delegate Tracking: Active", "Activities Focus"],
                    progress: 12,
                    checklist: ["Venue Sourcing", "Delegate Registration Setup", "Flight Blocking"],
                    kpis: { roi: 185, utilization: 45, daysToKickoff: 32, registrations: 42, capacity: 50 }
                },
                {
                    id: "3",
                    name: "Tech Innovators Summit",
                    date: "Dec 2024",
                    destination: "Bangalore",
                    type: "MICE",
                    subtype: "Conference",
                    status: "Contracted",
                    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    tags: ["Speaker Management", "Sponsorships"],
                    progress: 45,
                    checklist: ["Finalize Keynote Speakers", "Sponsor Outreach", "AV Setup"],
                    kpis: { roi: 320, utilization: 60, daysToKickoff: 65, registrations: 850, capacity: 1200, leads: 210 }
                },
                {
                    id: "4",
                    name: "Global Auto Expo",
                    date: "Feb 2025",
                    destination: "New Delhi",
                    type: "MICE",
                    subtype: "Exhibition",
                    status: "Planning",
                    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    tags: ["Floor Plan: Draft", "Exhibitor Sales"],
                    progress: 30,
                    checklist: ["Venue Layout Approval", "Exhibitor Manual", "Security Clearance"],
                    kpis: { roi: 450, utilization: 25, daysToKickoff: 110, registrations: 200, capacity: 5000, leads: 45 }
                }
            ]);
        }
    }, []);

    // Save to LocalStorage whenever events change
    useEffect(() => {
        if (events.length > 0) {
            localStorage.setItem("plannerEvents_v5", JSON.stringify(events));
        }
    }, [events]);

    const createEvent = (data: { name: string; date: string; destination: string; type: EventType; subtype?: MiceSubtype }) => {

        // Helper to generate template data based on type/subtype
        const getTemplateData = () => {
            if (data.type === "Wedding") {
                return {
                    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    tags: ["Days to Sangeet: 120", "Guest List"],
                    checklist: ["Finalize Venue", "Send Save the Dates", "Book Sangeet Choreographer"]
                };
            }

            // MICE Subtypes
            switch (data.subtype) {
                case "Meeting":
                    return {
                        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        tags: ["Boardroom Setup", "AV Requirements"],
                        checklist: ["Approve Agenda", "Send Calendar Invites", "Order Catering"]
                    };
                case "Incentive":
                    return {
                        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        tags: ["Gala Dinner", "Excursions"],
                        checklist: ["Select Resort", "Plan Activities", "Gift Hamper Sourcing"]
                    };
                case "Conference":
                    return {
                        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        tags: ["Speaker Management", "Track: Tech"],
                        checklist: ["Call for Papers", "Sponsor Reachout", "Badge Printing"]
                    };
                case "Exhibition":
                    return {
                        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        tags: ["Floor Plan Pending", "Exhibitor Portal"],
                        checklist: ["Finalize Floor Plan", "Sell Booths", "Safety Inspection"]
                    };
                default: // Fallback MICE
                    return {
                        image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                        tags: ["Delegate Tracking", "Sourcing"],
                        checklist: ["Define Budget", "Source Venues", "Create Agenda"]
                    };
            }
        };

        const template = getTemplateData();

        const newEvent: Event = {
            id: Date.now().toString(),
            name: data.name,
            date: data.date,
            destination: data.destination,
            type: data.type,
            subtype: data.subtype,
            status: "Planning",
            image: template.image,
            tags: template.tags,
            progress: 10,
            checklist: template.checklist
        };

        setEvents((prev) => [newEvent, ...prev]);
    };

    const deleteEvent = (id: string) => {
        setEvents((prev) => prev.filter(e => e.id !== id));
    };

    return (
        <EventContext.Provider value={{ events, createEvent, deleteEvent }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvents() {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error("useEvents must be used within an EventProvider");
    }
    return context;
}
