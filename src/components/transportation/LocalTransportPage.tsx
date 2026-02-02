'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  MapPin,
  Plus,
  ArrowRight,
  Clock,
  Calendar,
  Users,
  Car,
  Bus,
  Trash2,
  Lock,
  Eye,
  CheckCircle,
  MoreVertical,
  ArrowLeft
} from 'lucide-react';

// --- Types ---

type GuestGroup = 'VVIP' | 'VIP' | 'Guests';
type EventDay = 'Day 1' | 'Day 2' | 'Day 3';
type TransportMode = 'One-time' | 'Shuttle';
type VehicleType = 'Sedan' | 'SUV' | 'Mini Bus' | 'Coach';

interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  capacity: number;
  rate: string; // e.g., "$45/hr"
  icon: any;
}

interface RouteStop {
  id: string;
  location: string;
}

interface TransportRoute {
  id: string;
  from: string;
  to: string;
  stops: RouteStop[];
  vehicleId: string | null;
  mode: TransportMode;
  startTime: string;
  endTime: string;
  frequency: string; // e.g., "Every 30 mins"
  isLocked: boolean;
  guestGroup: GuestGroup; // Snapshot of context
  eventDay: EventDay;     // Snapshot of context
}

// --- Mock Data ---

const VEHICLES: Vehicle[] = [
  { id: 'sedan', name: 'Executive Sedan', type: 'Sedan', capacity: 4, rate: '$45/hr', icon: Car },
  { id: 'suv', name: 'Luxury SUV', type: 'SUV', capacity: 6, rate: '$75/hr', icon: Car },
  { id: 'minibus', name: 'Mini Bus', type: 'Mini Bus', capacity: 18, rate: '$120/hr', icon: Bus },
  { id: 'coach', name: 'Luxury Coach', type: 'Coach', capacity: 50, rate: '$250/hr', icon: Bus },
];

export default function LocalTransportPage() {
  const router = useRouter();

  // Context State
  const [activeGroup, setActiveGroup] = useState<GuestGroup>('Guests');
  const [activeDay, setActiveDay] = useState<EventDay>('Day 2');

  // Route State
  const [routes, setRoutes] = useState<TransportRoute[]>([
    {
      id: 'route-1',
      from: 'Grand Hyatt Regency',
      to: 'Royal Botanical Gardens',
      stops: [
        { id: 's1', location: 'Ocean View Point' },
        { id: 's2', location: "St. Mary's Cathedral" }
      ],
      vehicleId: 'sedan',
      mode: 'Shuttle',
      startTime: '06:00',
      endTime: '11:00',
      frequency: 'Every 15 minutes',
      isLocked: false,
      guestGroup: 'Guests',
      eventDay: 'Day 2'
    }
  ]);

  const [routesCount, setRoutesCount] = useState(1);

  // --- Handlers ---

  const addRoute = () => {
    setRoutesCount(prev => prev + 1);
    setRoutes(prev => [
      ...prev,
      {
        id: `route-${Date.now()}`,
        from: '',
        to: '',
        stops: [],
        vehicleId: null,
        mode: 'One-time',
        startTime: '09:00',
        endTime: '10:00',
        frequency: 'Every 30 minutes',
        isLocked: false,
        guestGroup: activeGroup,
        eventDay: activeDay
      }
    ]);
  };

  const updateRoute = (id: string, updates: Partial<TransportRoute>) => {
    setRoutes(prev => prev.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  const toggleLock = (id: string) => {
    setRoutes(prev => prev.map(r => r.id === id ? { ...r, isLocked: !r.isLocked } : r));
  };

  const deleteRoute = (id: string) => {
    setRoutes(prev => prev.filter(r => r.id !== id));
  };

  // --- Render ---

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-slate-800 font-sans pb-32">

      {/* Top Nav */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Overview
        </button>
      </div>

      {/* Header & Controls */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">Local Event Transportation</h1>
          <p className="text-slate-500 text-lg">Orchestrate logistics for weddings, conferences, and gala nights.</p>
        </div>

        {/* Context Selectors */}
        <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-2">
          <div className="px-4 py-2 border-r border-slate-100">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Guest Group</label>
            <select
              value={activeGroup}
              onChange={(e) => setActiveGroup(e.target.value as GuestGroup)}
              className="font-bold text-blue-600 bg-transparent text-sm focus:outline-none cursor-pointer hover:text-blue-700"
            >
              <option>VVIP</option>
              <option>VIP</option>
              <option>Guests</option>
            </select>
          </div>
          <div className="px-4 py-2">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Event Day</label>
            <select
              value={activeDay}
              onChange={(e) => setActiveDay(e.target.value as EventDay)}
              className="font-bold text-blue-600 bg-transparent text-sm focus:outline-none cursor-pointer hover:text-blue-700"
            >
              <option>Day 1: Welcome</option>
              <option>Day 2: Main Event</option>
              <option>Day 3: Farewell</option>
            </select>
          </div>
        </div>
      </div>

      {/* Routes List */}
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {routes.map((route, index) => (
          route.isLocked ? (
            <LockedRouteCard key={route.id} route={route} onUnlock={() => toggleLock(route.id)} />
          ) : (
            <RouteBuilderCard
              key={route.id}
              route={route}
              onUpdate={(u) => updateRoute(route.id, u)}
              onLock={() => toggleLock(route.id)}
              onDelete={() => deleteRoute(route.id)}
            />
          )
        ))}

        {/* Add Route Button */}
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 flex justify-center items-center hover:bg-white/50 transition-colors">
          <button
            onClick={addRoute}
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
          >
            <Plus className="w-5 h-5" />
            Add another local transport route
          </button>
        </div>
      </div>

    </div>
  );
}

// --- Components ---

function RouteBuilderCard({
  route,
  onUpdate,
  onLock,
  onDelete
}: {
  route: TransportRoute;
  onUpdate: (u: Partial<TransportRoute>) => void;
  onLock: () => void;
  onDelete: () => void;
}) {

  const addStop = () => {
    const newStop: RouteStop = { id: `stop-${Date.now()}`, location: '' };
    onUpdate({ stops: [...route.stops, newStop] });
  };

  const removeStop = (stopId: string) => {
    onUpdate({ stops: route.stops.filter(s => s.id !== stopId) });
  };

  const updateStop = (stopId: string, val: string) => {
    onUpdate({ stops: route.stops.map(s => s.id === stopId ? { ...s, location: val } : s) });
  };

  return (
    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-8 relative animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Route Builder</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onDelete}
            className="text-slate-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={onLock}
            className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Draft
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-12">

        {/* Left Col: Visual Route Flow */}
        <div className="xl:w-1/3 relative pl-4">
          {/* Connecting Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-blue-100 border-l border-dashed border-blue-300"></div>

          <div className="space-y-6 relative z-10">
            {/* FROM */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-white mt-3 shrink-0"></div>
              <div className="flex-1">
                <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">From</label>
                <input
                  type="text"
                  value={route.from}
                  onChange={(e) => onUpdate({ from: e.target.value })}
                  placeholder="Start Location"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* STOPS */}
            <div className="bg-blue-50/50 rounded-2xl p-4 ml-10 border border-blue-100">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xs font-bold text-blue-600 uppercase">Route Stops</h4>
                <button onClick={addStop} className="text-blue-500 hover:text-blue-700">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {route.stops.length === 0 && <p className="text-xs text-slate-400 italic">No stops added</p>}
                {route.stops.map((stop, i) => (
                  <div key={stop.id} className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-300 w-4">{i + 1}</span>
                    <input
                      className="flex-1 text-sm bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-700 focus:outline-none focus:border-blue-300"
                      value={stop.location}
                      onChange={(e) => updateStop(stop.id, e.target.value)}
                      placeholder="Venue Name"
                    />
                    <button onClick={() => removeStop(stop.id)} className="text-slate-300 hover:text-red-400">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* TO */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-500 mt-3 shrink-0 shadow-lg shadow-blue-200"></div>
              <div className="flex-1">
                <label className="text-xs font-bold text-slate-400 uppercase mb-1 block">To</label>
                <input
                  type="text"
                  value={route.to}
                  onChange={(e) => onUpdate({ to: e.target.value })}
                  placeholder="End Destination"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Fleet & Timing */}
        <div className="xl:w-2/3 space-y-10">

          {/* Fleet Selection */}
          <div>
            <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
              <Car className="w-5 h-5" /> Select Vehicle Fleet
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {VEHICLES.map(v => {
                const isSelected = route.vehicleId === v.id;
                const Icon = v.icon;
                return (
                  <div
                    key={v.id}
                    onClick={() => onUpdate({ vehicleId: v.id })}
                    className={`
                       relative p-4 rounded-2xl border cursor-pointer transition-all
                       ${isSelected
                        ? 'bg-blue-50 border-blue-500 shadow-md ring-1 ring-blue-500'
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm'}
                     `}
                  >
                    {isSelected && <div className="absolute top-2 right-2 text-blue-600 text-[10px] font-bold">Selected</div>}
                    <div className="mb-3 text-slate-400">
                      <Icon className={`w-8 h-8 ${isSelected ? 'text-blue-600' : ''}`} />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">{v.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{v.capacity} Seats • {v.rate}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-100"></div>

          {/* Type & Timing */}
          <div>
            <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-4">
              <Clock className="w-5 h-5" /> Transport Type & Timing
            </h3>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Type Toggle */}
              <div className="space-y-4 min-w-[200px]">
                <label className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl border transition-all ${route.mode === 'One-time' ? 'bg-slate-50 border-slate-300' : 'border-transparent'}`}>
                  <input
                    type="radio"
                    name={`mode-${route.id}`}
                    checked={route.mode === 'One-time'}
                    onChange={() => onUpdate({ mode: 'One-time' })}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="font-semibold text-slate-700">One-time transfer</span>
                </label>
                <label className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl border transition-all ${route.mode === 'Shuttle' ? 'bg-blue-50 border-blue-300' : 'border-transparent'}`}>
                  <input
                    type="radio"
                    name={`mode-${route.id}`}
                    checked={route.mode === 'Shuttle'}
                    onChange={() => onUpdate({ mode: 'Shuttle' })}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="font-semibold text-slate-700">Shuttle service</span>
                </label>
              </div>

              {/* Timing Controls */}
              <div className="flex-1 bg-slate-50 rounded-2xl p-6">
                {route.mode === 'Shuttle' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Operating Window</label>
                      <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200">
                        <input
                          type="time"
                          value={route.startTime}
                          onChange={(e) => onUpdate({ startTime: e.target.value })}
                          className="bg-transparent font-medium text-sm p-2 outline-none"
                        />
                        <span className="text-slate-300">—</span>
                        <input
                          type="time"
                          value={route.endTime}
                          onChange={(e) => onUpdate({ endTime: e.target.value })}
                          className="bg-transparent font-medium text-sm p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Frequency</label>
                      <select
                        value={route.frequency}
                        onChange={(e) => onUpdate({ frequency: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm font-medium outline-none focus:border-blue-400"
                      >
                        <option>Every 15 minutes</option>
                        <option>Every 30 minutes</option>
                        <option>Every hour</option>
                        <option>Continuous Loop</option>
                      </select>
                    </div>
                    <div className="col-span-full">
                      <p className="text-xs text-slate-500 italic">
                        * Guests will be notified via SMS 5 mins before shuttle arrival at their stop.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Pickup Time</label>
                    <input
                      type="time"
                      value={route.startTime}
                      onChange={(e) => onUpdate({ startTime: e.target.value })}
                      className="bg-white border border-slate-200 rounded-lg p-3 text-sm font-medium outline-none focus:border-blue-400"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

function LockedRouteCard({ route, onUnlock }: { route: TransportRoute, onUnlock: () => void }) {
  const vehicle = VEHICLES.find(v => v.id === route.vehicleId);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center">
          <Lock className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-bold text-slate-900">{route.from} → {route.to}</h3>
            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {route.guestGroup}
            </span>
            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {route.eventDay}
            </span>
          </div>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <span className="font-semibold text-slate-700">{vehicle?.name}</span>
            <span>•</span>
            <span>{route.mode}</span>
            <span>•</span>
            <span>{route.startTime} - {route.endTime}</span>
            {route.stops.length > 0 && (
              <>
                <span>•</span>
                <span className="text-blue-600 font-medium">{route.stops.length} Stops</span>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right mr-4 hidden md:block">
          <div className="text-sm font-bold text-slate-900">{route.mode === 'Shuttle' ? 'Est. Total' : 'Total Price'}</div>
          <div className="text-xs text-slate-400">Calculated at end of event</div>
        </div>
        <button
          onClick={onUnlock}
          className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
          title="Unlock to Edit"
        >
          <Eye className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
