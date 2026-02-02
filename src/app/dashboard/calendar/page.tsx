"use client";

import { useState } from "react";

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 15)); // Nov 2024

    // Authentic Indian Event Data
    const events = [
        {
            id: 1,
            title: "Udaipur Palace Wedding",
            client: "Mehta & Shah",
            type: "wedding",
            startDate: new Date(2024, 10, 14),
            endDate: new Date(2024, 10, 16),
            location: "Jagmandir Island, Udaipur",
            status: "confirmed",
            color: "bg-emerald-100 text-emerald-800 border-emerald-200",
        },
        {
            id: 2,
            title: "Goa Leadership Retreat",
            client: "TechVision Corp",
            type: "mice",
            startDate: new Date(2024, 10, 20),
            endDate: new Date(2024, 10, 23),
            location: "W Goa, Vagator",
            status: "planning",
            color: "bg-blue-100 text-blue-800 border-blue-200",
        },
        {
            id: 3,
            title: "Jaipur Sangeet Night",
            client: "Kapoor Family",
            type: "wedding",
            startDate: new Date(2024, 10, 8),
            endDate: new Date(2024, 10, 8),
            location: "Fairmont, Jaipur",
            status: "completed",
            color: "bg-purple-100 text-purple-800 border-purple-200",
        },
        {
            id: 4,
            title: "Kerala Ayurveda Retreat",
            client: "Wellness Group",
            type: "retreat",
            startDate: new Date(2024, 10, 28),
            endDate: new Date(2024, 11, 2),
            location: "Kumarakom Lake Resort",
            status: "tentative",
            color: "bg-amber-100 text-amber-800 border-amber-200",
        },
    ];

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const renderCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);
        const calendarDays = [];

        // Empty cells for days before the 1st
        for (let i = 0; i < startDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="h-32 bg-gray-50/50 border-r border-b border-gray-100"></div>);
        }

        // Day cells
        for (let day = 1; day <= days; day++) {
            const currentDayDate = new Date(year, month, day);
            const dayEvents = events.filter(
                (e) =>
                    day >= e.startDate.getDate() &&
                    day <= e.endDate.getDate() &&
                    e.startDate.getMonth() === month &&
                    e.startDate.getFullYear() === year
            );

            const isToday =
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

            calendarDays.push(
                <div key={day} className={`h-32 border-r border-b border-gray-100 p-2 relative group hover:bg-white transition-colors ${isToday ? 'bg-amber-50/30' : ''}`}>
                    <span className={`text-sm font-medium ${isToday ? "bg-emerald-teal text-white size-6 rounded-full flex items-center justify-center shadow-md" : "text-gray-500"}`}>
                        {day}
                    </span>
                    <div className="mt-2 space-y-1">
                        {dayEvents.map((event) => (
                            <div
                                key={event.id}
                                className={`text-[10px] px-2 py-1 rounded border truncate font-medium cursor-pointer ${event.color} hover:opacity-80 transition-opacity flex items-center gap-1`}
                            >
                                <span className={`size-1.5 rounded-full ${event.type === 'wedding' ? 'bg-pink-500' : 'bg-blue-500'}`}></span>
                                {event.title}
                            </div>
                        ))}
                    </div>
                    {/* Add button on hover */}
                    <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-emerald-teal transition-all">
                        <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    </button>
                </div>
            );
        }
        return calendarDays;
    };

    return (
        <div className="min-h-screen bg-ivory-mist font-sans p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-display font-medium text-charcoal-ink">Global Event Calendar</h1>
                        <p className="text-charcoal-ink/60 mt-1">Manage production schedules and deadlines</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex bg-white rounded-lg border border-gray-200 p-1 shadow-sm">
                            <button className="px-4 py-1.5 text-sm font-medium bg-emerald-teal text-white rounded shadow-sm">Month</button>
                            <button className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">Week</button>
                            <button className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">Day</button>
                        </div>
                        <button className="bg-emerald-teal text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-teal-accent transition-all shadow-md active:scale-95">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            <span className="text-sm font-semibold">New Event</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-black/5 overflow-hidden">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-emerald-teal" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>chevron_left</span>
                            {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                            <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-emerald-teal" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>chevron_right</span>
                        </h2>
                        <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-emerald-500"></span>Confirmed</span>
                            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-blue-500"></span>Planning</span>
                            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-amber-500"></span>Tentative</span>
                        </div>
                    </div>

                    {/* Days Header */}
                    <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/30">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 bg-white">
                        {renderCalendarDays()}
                    </div>
                </div>
            </div>
        </div>
    );
}
