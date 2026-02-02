'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Download,
  Sun,
  Moon,
  Coffee,
  CloudSun,
  Check,
  Info,
  ChevronRight,
  Send,
  PlusSquare
} from 'lucide-react';

// --- Types ---

type GuestGroup = 'VVIP' | 'VIP' | 'Guests';
type EventDay = 'Day 1' | 'Day 2' | 'Day 3';
type MealType = 'Breakfast' | 'Lunch' | 'Hi-Tea' | 'Dinner';
type ServiceStyle = 'Buffet' | 'Plated' | 'Family' | 'Live Station';

interface MenuOption {
  id: string;
  name: string;
  description: string[]; // e.g., ["4 Starters", "6 Mains"]
  price: number;
  tags: string[]; // e.g., ["Bestseller"]
  image?: string; // Placeholder for now
}

interface AddOn {
  id: string;
  name: string;
  price: number;
}

// --- Data ---
const MENUS: MenuOption[] = [
  {
    id: 'royal-indian',
    name: 'Royal Indian',
    description: ['4 Starters (2V/2NV)', '6 Main Courses', 'Dal Tadka & Biryani', '3 Signature Desserts'],
    price: 3500,
    tags: ['Bestseller']
  },
  {
    id: 'continental',
    name: 'Continental',
    description: ['3 Starters', '5 Main Courses', 'Artisan Bread Basket', '4 European Desserts'],
    price: 4200,
    tags: []
  },
  {
    id: 'pan-asian',
    name: 'Pan Asian',
    description: ['Dimsum & Sushi Station', '4 Main Courses', 'Jasmine Rice & Noodles', 'Exotic Fruit Platter'],
    price: 3800,
    tags: []
  }
];

const ADDONS: AddOn[] = [
  { id: 'welcome-drinks', name: 'Welcome Drinks (Sparkling)', price: 450 },
  { id: 'live-pasta', name: 'Live Pasta Counter', price: 850 },
  { id: 'premium-bar', name: 'Premium Bar Setup', price: 1800 },
  { id: 'midnight-snacks', name: 'Late Night Snacks', price: 650 },
];

export default function FoodAndBeveragesPage() {
  const router = useRouter();
  // Context State
  const [guestGroup, setGuestGroup] = useState<GuestGroup>('VIP');
  const [eventDay, setEventDay] = useState<EventDay>('Day 1');

  // Selection State
  const [activeMeal, setActiveMeal] = useState<MealType>('Breakfast');
  const [mealTimes, setMealTimes] = useState<Record<MealType, { start: string, end: string }>>({
    'Breakfast': { start: '08:00', end: '10:30' },
    'Lunch': { start: '13:00', end: '15:00' },
    'Hi-Tea': { start: '17:00', end: '18:30' },
    'Dinner': { start: '20:00', end: '23:00' },
  });

  const [serviceStyle, setServiceStyle] = useState<ServiceStyle>('Buffet');
  const [selectedMenuId, setSelectedMenuId] = useState<string>('royal-indian');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['welcome-drinks']);

  // Quote State
  const [guestCount, setGuestCount] = useState<number>(120);

  // --- Calculations ---
  const selectedMenu = MENUS.find(m => m.id === selectedMenuId);
  const menuCost = (selectedMenu?.price || 0) * guestCount;

  const addonsCost = ADDONS
    .filter(a => selectedAddons.includes(a.id))
    .reduce((sum, a) => sum + (a.price * guestCount), 0);

  const subTotal = menuCost + addonsCost;
  const serviceFee = subTotal * 0.15; // 15%
  const totalCost = subTotal + serviceFee;
  const costPerPlate = Math.round(totalCost / guestCount);

  // --- Handlers ---
  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleTimeChange = (type: MealType, field: 'start' | 'end', value: string) => {
    setMealTimes(prev => ({
      ...prev,
      [type]: { ...prev[type], [field]: value }
    }));
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] font-sans p-4 md:p-8 pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* --- Main Content Area (Left 2 Cols) --- */}
        <div className="xl:col-span-2 space-y-10">

          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Food & Beverages</h1>
              <p className="text-slate-500 text-lg">Manage menus, meal timings, and service styles for your event groups.</p>
            </div>
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>

          {/* Planning Context */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Planning Context</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Guest Group</label>
                <div className="flex bg-slate-50 p-1 rounded-xl">
                  {(['VVIP', 'VIP', 'Guests'] as const).map(g => (
                    <button
                      key={g}
                      onClick={() => setGuestGroup(g)}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${guestGroup === g ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Event Day</label>
                <div className="flex bg-slate-50 p-1 rounded-xl">
                  {(['Day 1', 'Day 2', 'Day 3'] as const).map(d => (
                    <button
                      key={d}
                      onClick={() => setEventDay(d)}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${eventDay === d ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Meal Type & Timing */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Meal Type & Timing</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: 'Breakfast', icon: CloudSun },
                { type: 'Lunch', icon: Sun },
                { type: 'Hi-Tea', icon: Coffee },
                { type: 'Dinner', icon: Moon }
              ].map((item) => {
                const isActive = activeMeal === item.type;
                const times = mealTimes[item.type as MealType];
                const Icon = item.icon;

                return (
                  <div
                    key={item.type}
                    onClick={() => setActiveMeal(item.type as MealType)}
                    className={`
                      cursor-pointer rounded-2xl p-4 border-2 transition-all relative overflow-hidden
                      ${isActive ? 'border-blue-500 bg-blue-50/50' : 'border-slate-100 bg-white hover:border-blue-200'}
                    `}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-slate-900 mb-3">{item.type}</div>
                      <div className="flex items-center justify-center gap-1 bg-white rounded-lg p-1 border border-slate-200">
                        <input
                          type="time"
                          value={times.start}
                          onChange={(e) => handleTimeChange(item.type as MealType, 'start', e.target.value)}
                          className="w-12 text-[10px] font-bold text-center bg-transparent outline-none text-slate-600"
                        />
                        <span className="text-slate-300">-</span>
                        <input
                          type="time"
                          value={times.end}
                          onChange={(e) => handleTimeChange(item.type as MealType, 'end', e.target.value)}
                          className="w-12 text-[10px] font-bold text-center bg-transparent outline-none text-slate-600"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Style */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Service Style</h3>
            <div className="flex flex-wrap gap-6">
              {(['Buffet', 'Plated', 'Family', 'Live Station'] as const).map(style => (
                <label
                  key={style}
                  onClick={() => setServiceStyle(style)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${serviceStyle === style ? 'border-blue-500' : 'border-slate-300 group-hover:border-blue-400'}`}>
                    {serviceStyle === style && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                  </div>
                  <span className={`font-semibold ${serviceStyle === style ? 'text-slate-900' : 'text-slate-600'}`}>{style} Style</span>
                </label>
              ))}
            </div>
          </div>

          {/* Menu Selection */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-lg font-bold text-slate-900">Menu Selection</h3>
              <button className="text-sm font-bold text-blue-600 hover:underline">Customize Selection</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MENUS.map(menu => {
                const isSelected = selectedMenuId === menu.id;
                return (
                  <div
                    key={menu.id}
                    className={`
                       rounded-2xl border-2 transition-all p-5 flex flex-col h-full
                       ${isSelected ? 'border-blue-500 bg-white shadow-lg ring-4 ring-blue-500/5' : 'border-slate-100 bg-white hover:border-blue-200 hover:shadow-md'}
                     `}
                  >
                    {/* Placeholder Image Header */}
                    <div className="h-32 bg-slate-100 rounded-xl mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-3">
                        {menu.tags.includes('Bestseller') && (
                          <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Bestseller</span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-2">{menu.name}</h4>

                    <ul className="space-y-2 mb-6 flex-1">
                      {menu.description.map((item, i) => (
                        <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <div>
                        <span className="text-lg font-bold text-slate-900">₹{menu.price.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-slate-400 uppercase ml-1">/pp</span>
                      </div>
                      <button
                        onClick={() => setSelectedMenuId(menu.id)}
                        className={`
                            px-4 py-2 rounded-lg text-xs font-bold transition-colors
                            ${isSelected ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                          `}
                      >
                        {isSelected ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add-ons */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Add-ons & Extras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ADDONS.map(addon => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`
                        flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all
                        ${isChecked ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100 hover:border-slate-300'}
                      `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${isChecked ? 'bg-blue-500' : 'bg-slate-200'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className={`font-semibold text-sm ${isChecked ? 'text-slate-900' : 'text-slate-600'}`}>{addon.name}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">+₹{addon.price} pp</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NEXT BUTTON */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => router.push("/prebookingmice/incentiveactivity")}
              className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest text-black bg-emerald-teal hover:bg-emerald-teal/90 shadow-lg shadow-emerald-teal/20 transition-all hover:-translate-y-1 active:scale-95 border border-emerald-teal/50"
            >
              Next
            </button>
          </div>

        </div>

        {/* --- Sidebar (Right Col) --- */}
        <div className="xl:col-span-1">
          <div className="sticky top-8 space-y-6">

            {/* Quote Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-1">Estimated Quote</h3>
              <p className="text-white/50 text-xs mb-6">Pricing based on "{guestGroup}" group selection</p>

              <div className="mb-6">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2 block">Guest Count</label>
                <input
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-3 mb-6 border-b border-white/10 pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">{selectedMenu?.name} Menu</span>
                  <span className="font-medium">₹{(menuCost).toLocaleString('en-IN')}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Add-ons ({selectedAddons.length})</span>
                    <span className="font-medium">₹{(addonsCost).toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Service Fee (15%)</span>
                  <span className="font-medium">₹{(serviceFee).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-xs font-bold text-white/50 uppercase">Total Cost</span>
                  <span className="text-xs font-bold text-white/50">₹{costPerPlate.toLocaleString('en-IN')} per plate</span>
                </div>
                <div className="text-4xl font-black text-blue-400">₹{totalCost.toLocaleString('en-IN')}</div>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Finalize Selection
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 flex gap-4">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-800 leading-relaxed">
                <span className="font-bold block mb-1">Planning Note</span>
                Special dietary requests (Vegan, Gluten-free) are automatically accounted for as 5% of the total guest count unless specified in custom options.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
