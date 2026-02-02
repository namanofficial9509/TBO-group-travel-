'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Users,
  Briefcase,
  Check as Check,
  Car,
  Bus,
  ChevronDown,
  Plus,
  Lock,
  Edit2,
  ArrowLeft
} from 'lucide-react';

// --- Types ---

type GuestTier = 'VVIP' | 'VIP' | 'Guests';
type TransferType = 'Shared' | 'Private';
type CoverageType = 'Arrival' | 'Departure' | 'Both';

interface Vehicle {
  id: string;
  name: string;
  type: TransferType;
  pax: number;
  bags: number;
  price: number;
}

interface GuestGroupState {
  id: string;
  tier: GuestTier;
  selectedVehicleId: string | null;
  coverage: CoverageType | null;
  isLocked: boolean;
}

// --- Mock Data ---

const VEHICLES: Vehicle[] = [
  // Shared
  { id: 'shuttle-bus', name: 'Shuttle Bus', type: 'Shared', pax: 20, bags: 15, price: 2500 },
  { id: 'coaster-van', name: 'Coaster Van', type: 'Shared', pax: 12, bags: 10, price: 4000 },
  // Private
  { id: 'private-suv', name: 'Private SUV', type: 'Private', pax: 6, bags: 4, price: 9000 },
  { id: 'luxury-sedan', name: 'Luxury Sedan', type: 'Private', pax: 3, bags: 2, price: 12000 },
];

const sharedVehicles = VEHICLES.filter(v => v.type === 'Shared');
const privateVehicles = VEHICLES.filter(v => v.type === 'Private');

// --- Helper Components ---

const StatusBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    <Lock className="w-3 h-3 mr-1" />
    {label}
  </span>
);

export default function AirportTransfersPage() {
  const router = useRouter();

  // Initial State: One group
  const [groups, setGroups] = useState<GuestGroupState[]>([
    { id: 'group-1', tier: 'VVIP', selectedVehicleId: null, coverage: null, isLocked: false }
  ]);

  const addGroup = () => {
    const newId = `group-${groups.length + 1}`;
    setGroups(prev => [
      ...prev,
      { id: newId, tier: 'Guests', selectedVehicleId: null, coverage: null, isLocked: false }
    ]);
  };

  const updateGroup = (id: string, updates: Partial<GuestGroupState>) => {
    setGroups(prev => prev.map(g => g.id === id ? { ...g, ...updates } : g));
  };

  const handleBook = (groupId: string, vehicleId: string) => {
    updateGroup(groupId, { selectedVehicleId: vehicleId, isLocked: true, coverage: 'Both' });
  };

  const handleUnlock = (groupId: string) => {
    updateGroup(groupId, { isLocked: false });
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-slate-800 font-sans pb-20">

      {/* --- Top Navigation / Back --- */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Overview
        </button>
      </div>

      {/* --- Page Header --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">Airport Transfers</h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Arrange airport pickup and drop for different guest groups.
          Manage shared shuttles or exclusive private rides effortlessly.
        </p>
      </div>

      {/* --- Groups List --- */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {groups.map((group, index) => (
          <GroupCard
            key={group.id}
            group={group}
            onUpdate={(updates) => updateGroup(group.id, updates)}
            onBook={(vehicleId) => handleBook(group.id, vehicleId)}
            onUnlock={() => handleUnlock(group.id)}
            index={index}
          />
        ))}
      </div>

      {/* --- Footer Action --- */}
      <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-end">
        <button
          onClick={addGroup}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
        >
          <Plus className="w-5 h-5" />
          Add another guest group
        </button>
      </div>
    </div>
  );
}

// --- Main Group Card Component ---

function GroupCard({
  group,
  onUpdate,
  onBook,
  onUnlock,
  index
}: {
  group: GuestGroupState;
  onUpdate: (u: Partial<GuestGroupState>) => void;
  onBook: (vid: string) => void;
  onUnlock: () => void;
  index: number;
}) {

  const selectedVehicle = VEHICLES.find(v => v.id === group.selectedVehicleId);
  const isPrivateSelected = selectedVehicle?.type === 'Private';
  const isSharedSelected = selectedVehicle?.type === 'Shared';

  return (
    <div className="relative">
      {/* Decorative Index Label (Optional) */}
      <div className="absolute -left-12 top-0 text-slate-200 font-black text-6xl select-none hidden xl:block">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* 1. Guest Tier Selection */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8 max-w-xl">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Guest Tier
        </label>
        <div className="relative">
          <select
            value={group.tier}
            onChange={(e) => onUpdate({ tier: e.target.value as GuestTier })}
            disabled={group.isLocked}
            className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-lg font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-400 cursor-pointer disabled:cursor-not-allowed"
          >
            <option value="VVIP">VVIP (Executive Delegates)</option>
            <option value="VIP">VIP (Speakers & Partners)</option>
            <option value="Guests">Standard Guests</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
        </div>
      </div>

      {/* 2. Transfer Type Selection Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Transfer Type Selection</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: Shared Transfer */}
          <div className={`
            rounded-3xl p-1 transition-all duration-300
            ${isSharedSelected ? 'ring-2 ring-blue-500 bg-blue-50/50 shadow-xl' : 'bg-white border border-slate-100 shadow-sm'}
            ${group.isLocked && !isSharedSelected ? 'opacity-50 grayscale pointer-events-none' : ''}
          `}>
            <div className="h-full bg-white/50 rounded-[22px] p-6 sm:p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Economy</span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1">Shared Transfer</h4>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">Economic shuttle services for groups. Multiple stops may occur.</p>
                </div>
                <Users className="text-slate-300 w-8 h-8" />
              </div>

              <div className="space-y-4 flex-1">
                {sharedVehicles.map(vehicle => (
                  <VehicleItem
                    key={vehicle.id}
                    vehicle={vehicle}
                    isSelected={group.selectedVehicleId === vehicle.id}
                    isLocked={group.isLocked}
                    onBook={() => onBook(vehicle.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Private Transfer */}
          <div className={`
            rounded-3xl p-1 transition-all duration-300 relative
            ${isPrivateSelected ? 'ring-2 ring-blue-500 bg-blue-50 shadow-xl' : 'bg-white border border-blue-100 shadow-md shadow-blue-100/50'}
            ${group.isLocked && !isPrivateSelected ? 'opacity-50 grayscale pointer-events-none' : ''}
          `}>
            {/* Selected Badge */}
            {isPrivateSelected && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                Selected
              </div>
            )}

            <div className="h-full bg-white/80 rounded-[22px] p-6 sm:p-8 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Premium</span>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1">Private Transfer</h4>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">Exclusive vehicle for your group. Direct to destination.</p>
                </div>
                <Briefcase className="text-blue-500 w-8 h-8" />
              </div>

              <div className="space-y-4 flex-1">
                {privateVehicles.map(vehicle => (
                  <VehicleItem
                    key={vehicle.id}
                    vehicle={vehicle}
                    isSelected={group.selectedVehicleId === vehicle.id}
                    isLocked={group.isLocked}
                    onBook={() => onBook(vehicle.id)}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Coverage & Summary (Visible when locked) */}
      {group.isLocked && selectedVehicle && (
        <div className="mt-8 animate-fade-in-up">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Coverage Type</h3>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex bg-white rounded-full p-1 border border-slate-200 shadow-sm">
              {(['Arrival', 'Departure', 'Both'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => onUpdate({ coverage: type })}
                  className={`
                    px-6 py-3 rounded-full text-sm font-bold transition-all
                    ${group.coverage === type
                      ? 'bg-blue-100 text-blue-700 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                  `}
                >
                  {type === 'Both' ? 'Both (Round Trip)' : `${type} only`}
                </button>
              ))}
            </div>

            {/* If Both, show check */}
            {group.coverage === 'Both' && (
              <div className="text-emerald-500 flex items-center gap-1 text-sm font-bold animate-pulse">
                <Check className="w-4 h-4" /> Recommended
              </div>
            )}
          </div>

          {/* Locked Summary Bar */}
          <div className="mt-8 bg-slate-900 text-white p-2 pl-6 pr-2 rounded-full flex items-center justify-between shadow-2xl max-w-2xl">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-sm sm:text-base">
                {selectedVehicle.name} • {group.coverage === 'Both' ? 'Round Trip' : `${group.coverage} Only`} • ₹{(selectedVehicle.price * (group.coverage === 'Both' ? 2 : 1)).toLocaleString()}
              </span>
            </div>
            <button
              onClick={onUnlock}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-full transition-colors flex items-center gap-2"
            >
              Modify
              <Edit2 className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Visual Separator for next group */}
      <div className="mt-16 border-b border-slate-200/60 lg:hidden"></div>
    </div>
  );
}

// --- Vehicle Item Component ---

function VehicleItem({
  vehicle,
  isSelected,
  isLocked,
  onBook
}: {
  vehicle: Vehicle;
  isSelected: boolean;
  isLocked: boolean;
  onBook: () => void;
}) {
  return (
    <div className={`
      flex items-center justify-between p-4 rounded-xl border transition-all
      ${isSelected
        ? 'bg-blue-50 border-blue-200'
        : 'bg-slate-50 border-transparent hover:bg-slate-100'}
    `}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-slate-400">
          {vehicle.type === 'Shared' ? <Bus className="w-6 h-6" /> : <Car className="w-6 h-6" />}
        </div>
        <div>
          <div className="font-bold text-slate-900">{vehicle.name}</div>
          <div className="text-xs text-slate-500 font-medium flex items-center gap-3 mt-0.5">
            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {vehicle.pax} pax</span>
            <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {vehicle.bags} bags</span>
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className="font-bold text-slate-900 mb-1">₹{vehicle.price.toLocaleString()}</div>
        {isSelected && isLocked ? (
          <StatusBadge label="Booked" />
        ) : (
          <button
            onClick={onBook}
            disabled={isLocked && !isSelected}
            className={`
              text-xs font-bold px-4 py-1.5 rounded-full border transition-all
              ${isSelected
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-slate-600 border-slate-300 hover:border-slate-800 hover:text-slate-900'}
            `}
          >
            {isSelected ? 'Booked' : 'Book'}
          </button>
        )}
      </div>
    </div>
  );
}
