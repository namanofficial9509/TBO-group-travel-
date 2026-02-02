'use client';

import { useState } from 'react';
import {
  Download,
  MapPin,
  Clock,
  Users,
  Check,
  Info,
  Send,
  Mountain,
  Landmark,
  Sparkles,
  Utensils,
  Anchor,
  Palette,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

// --- Types ---

type GuestGroup = 'Top Performers' | 'VIPs' | 'Partners';
type EventDay = 'Day 1' | 'Day 2' | 'Day 3';
type ExperienceTheme = 'Adventure' | 'Cultural' | 'Wellness' | 'Luxury' | 'Team Building' | 'Sightseeing';

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

interface Experience {
  id: string;
  title: string;
  category: string;
  duration: string;
  location: string;
  capacity: string;
  price: number;
  image: string; // Placeholder color/gradient for now
  description: string;
  isPopular?: boolean;
}

interface SelectedActivity {
  id: string;
  title: string;
  price: number;
  guests: number;
  date: EventDay;
}

// --- Data ---

const CATEGORIES: Category[] = [
  { id: 'adventure', name: 'Adventure', icon: Mountain },
  { id: 'cultural', name: 'Cultural', icon: Landmark },
  { id: 'wellness', name: 'Wellness', icon: Sparkles },
  { id: 'culinary', name: 'Culinary', icon: Utensils },
  { id: 'nautical', name: 'Nautical', icon: Anchor },
  { id: 'bespoke', name: 'Bespoke', icon: Palette },
];

const EXPERIENCES: Experience[] = [
  {
    id: 'yacht-charter',
    title: 'Private Yacht Charter & Coastal Discovery',
    category: 'Nautical',
    duration: '6 Hours',
    location: 'Amalfi Coast, Italy',
    capacity: '12 Guests',
    price: 1033160,
    image: 'bg-blue-900',
    description: 'Exclusive private yacht experience exploring hidden coves and pristine beaches.',
    isPopular: true
  },
  {
    id: 'vineyard-tasting',
    title: 'Exclusive Vineyard Estate Tasting',
    category: 'Culinary',
    duration: '4 Hours',
    location: 'Tuscany, Italy',
    capacity: '24 Guests',
    price: 400000,
    image: 'bg-green-900',
    description: 'Private tour and tasting session at a heritage wine estate with sommelier guidance.'
  },
  {
    id: 'wellness-retreat',
    title: 'Morning Wellness Retreat',
    category: 'Wellness',
    duration: '3 Hours',
    location: 'Hillside Villa',
    capacity: '50 Guests',
    price: 500000,
    image: 'bg-teal-900',
    description: 'Rejuvenating yoga and meditation session followed by a healthy organic brunch.'
  }
];

export default function IncentiveActivityPage() {
  // Context State
  const [guestGroup, setGuestGroup] = useState<GuestGroup>('Top Performers');
  const [eventDay, setEventDay] = useState<EventDay>('Day 2');
  const [selectedTheme, setSelectedTheme] = useState<ExperienceTheme | 'All'>('All');

  // Selection State
  const [selectedActivities, setSelectedActivities] = useState<SelectedActivity[]>([
    { id: 'wellness-retreat', title: 'Morning Wellness Retreat', price: 500000, guests: 50, date: 'Day 2' }
  ]);

  // Calculations
  const subtotal = selectedActivities.reduce((sum, item) => sum + item.price, 0);
  const managementFee = subtotal * 0.15;
  const totalCost = subtotal + managementFee;

  // Handlers
  const toggleSelection = (exp: Experience) => {
    const isSelected = selectedActivities.some(a => a.id === exp.id);
    if (isSelected) {
      setSelectedActivities(prev => prev.filter(a => a.id !== exp.id));
    } else {
      setSelectedActivities(prev => [...prev, {
        id: exp.id,
        title: exp.title,
        price: exp.price,
        guests: 12, // Default or dynamic based on exp
        date: eventDay
      }]);
    }
  };

  const removeActivity = (id: string) => {
    setSelectedActivities(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans p-4 md:p-8 pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* --- Main Content (Left 2 Cols) --- */}
        <div className="xl:col-span-2 space-y-10">

          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Experiences & Activities</h1>
              <p className="text-slate-500 text-lg">Curate unforgettable moments for your top performers.</p>
            </div>
            <button className="flex items-center gap-2 bg-[#0EA5E9] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-sky-200 hover:bg-sky-600 transition-colors">
              <Download className="w-4 h-4" />
              Download Catalog
            </button>
          </div>

          {/* Context Selectors */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Guest Group</label>
              <select
                value={guestGroup}
                onChange={(e) => setGuestGroup(e.target.value as GuestGroup)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option>Top Performers</option>
                <option>VIPs</option>
                <option>Partners</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Event Day</label>
              <select
                value={eventDay}
                onChange={(e) => setEventDay(e.target.value as EventDay)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option>Day 1</option>
                <option>Day 2</option>
                <option>Day 3</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Experience Theme</label>
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="All">All Themes</option>
                <option>Adventure</option>
                <option>Cultural</option>
                <option>Wellness</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>

          {/* Browse by Category */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Browse by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button key={cat.id} className="bg-white border border-slate-100 hover:border-sky-300 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all hover:shadow-md group">
                    <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recommended Experiences */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Recommended for {eventDay}</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:text-slate-900">Filters</button>
                <button className="px-4 py-2 text-sky-600 font-bold text-sm hover:underline">View Map</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXPERIENCES.map((exp) => {
                const isSelected = selectedActivities.some(a => a.id === exp.id);
                return (
                  <div key={exp.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
                    {/* Image Placeholder */}
                    <div className={`h-48 ${exp.image} relative p-4 flex flex-col justify-between`}>
                      <div className="flex justify-between items-start">
                        {exp.isPopular && (
                          <span className="bg-[#0EA5E9] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Top Pick</span>
                        )}
                        <span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded-md uppercase">{exp.category}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-white/90 text-xs font-medium mb-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">{exp.title}</h3>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-6">
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                          <Clock className="w-3.5 h-3.5" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                          <Users className="w-3.5 h-3.5" />
                          {exp.capacity}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Inclusive
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-slate-900">₹{exp.price.toLocaleString('en-IN')}</span>

                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-900 text-sm font-bold transition-colors">
                            View Details
                          </button>
                          <button
                            onClick={() => toggleSelection(exp)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 ${isSelected ? 'bg-green-500 text-white' : 'bg-[#0EA5E9] text-white hover:bg-sky-600'}`}
                          >
                            {isSelected ? <Check className="w-4 h-4" /> : 'Select'}
                            {isSelected ? 'Selected' : 'Experience'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* --- Sidebar (Right Col) --- */}
        <div className="xl:col-span-1">
          <div className="sticky top-8 space-y-6">

            {/* Budget Card */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Estimated Budget</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{eventDay} Selection</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center">
                  <Utensils className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {selectedActivities.map(activity => (
                  <div key={activity.id} className="relative group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-bold text-slate-800 pr-4">{activity.title}</span>
                      <span className="text-sm font-bold text-slate-900">₹{activity.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>{activity.guests} Guests • ₹10,000 pp</span>
                      <button
                        onClick={() => removeActivity(activity.id)}
                        className="text-red-400 hover:text-red-600 font-bold text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-dashed border-slate-200 space-y-2 mb-6">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm text-sky-600 font-medium">
                  <span>Management Fee (15%)</span>
                  <span>+₹{managementFee.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-4 mb-6">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Estimated Cost</span>
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-3xl font-black text-slate-900">₹{totalCost.toLocaleString('en-IN')}</div>
              </div>

              <button className="w-full bg-[#1e293b] hover:bg-[#0f172a] text-white py-4 rounded-xl font-bold shadow-lg shadow-slate-200 transition-all flex items-center justify-center gap-2 group">
                Proceed to Confirmation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-3 max-w-[250px] mx-auto">
                Prices are indicative and subject to final availability. Includes corporate event insurance.
              </p>
            </div>

            {/* Optimization Tip */}
            <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 flex gap-4">
              <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-900 leading-relaxed">
                <span className="font-bold block mb-1">Budget Optimization</span>
                Bundle with Day 3 activities to save up to 12% on logistics.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
