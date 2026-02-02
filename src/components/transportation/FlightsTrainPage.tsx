'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type Mode = 'flight' | 'train';

type ResultItem = {
  id: string;
  name: string;
  code: string;
  aircraft: string;
  departureTime: string;
  departureCode: string;
  arrivalTime: string;
  arrivalCode: string;
  duration: string;
  stops: string;
  price: number;
  seatsLeft: number;
  type: string;
};

type SearchBlock = {
  id: string;
  mode: Mode;
  date: string;
  from: string;
  to: string;
  group: string;
  seats: number | '';
  isSearching: boolean;
  results: ResultItem[];
  selectedIds: string[];
};

const mockFlights = (from: string, to: string): ResultItem[] => [
  {
    id: `fl-${Math.random()}`,
    name: 'IndiGo',
    code: '6E-2015',
    aircraft: 'Airbus A321',
    departureTime: '08:30',
    departureCode: from || 'DEL',
    arrivalTime: '10:45',
    arrivalCode: to || 'BOM',
    duration: '2H 15M',
    stops: 'Non-stop',
    price: 8184,
    seatsLeft: 24,
    type: 'Economy Saver',
  },
  {
    id: `fl-${Math.random()}`,
    name: 'Air India',
    code: 'AI-865',
    aircraft: 'Boeing 787',
    departureTime: '14:45',
    departureCode: from || 'DEL',
    arrivalTime: '16:55',
    arrivalCode: to || 'BOM',
    duration: '2H 10M',
    stops: 'Non-stop',
    price: 7165,
    seatsLeft: 40,
    type: 'Economy Flex',
  },
  {
    id: `fl-${Math.random()}`,
    name: 'Vistara',
    code: 'UK-944',
    aircraft: 'Airbus A320neo',
    departureTime: '19:30',
    departureCode: from || 'DEL',
    arrivalTime: '21:45',
    arrivalCode: to || 'BOM',
    duration: '2H 15M',
    stops: 'Non-stop',
    price: 11142,
    seatsLeft: 8,
    type: 'Premium Economy',
  },
];

const mockTrains = (from: string, to: string): ResultItem[] => [
  {
    id: `tr-${Math.random()}`,
    name: 'Rajdhani Express',
    code: '12431',
    aircraft: 'First Class AC',
    departureTime: '16:55',
    departureCode: from || 'NZM',
    arrivalTime: '08:35',
    arrivalCode: to || 'BCT',
    duration: '15H 40M',
    stops: 'Superfast Express',
    price: 4210,
    seatsLeft: 12,
    type: 'Bulk Booking',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
};

export default function FlightsTrainPage() {
  const router = useRouter();
  const [blocks, setBlocks] = useState<SearchBlock[]>([
    {
      id: 'block-0',
      mode: 'flight',
      date: '2024-10-24',
      from: 'Delhi (DEL)',
      to: 'Mumbai (BOM)',
      group: 'WIP Wedding Guests',
      seats: 12,
      isSearching: false,
      results: [],
      selectedIds: [],
    }
  ]);

  const updateBlock = (id: string, updates: Partial<SearchBlock>) => {
    setBlocks(prev => prev.map(block => block.id === id ? { ...block, ...updates } : block));
  };

  const addBlock = () => {
    const lastBlock = blocks[blocks.length - 1];
    const newBlock: SearchBlock = {
      ...lastBlock,
      id: `block-${Date.now()}`,
      isSearching: false,
      results: [],
      selectedIds: [],
    };
    setBlocks(prev => [...prev, newBlock]);
  };

  const removeBlock = (id: string) => {
    if (blocks.length > 1) {
      setBlocks(prev => prev.filter(block => block.id !== id));
    }
  };

  const handleSearch = (id: string, modeOverride?: Mode) => {
    const block = blocks.find(b => b.id === id);
    if (!block) return;

    const targetMode = modeOverride || block.mode;
    updateBlock(id, { isSearching: true });

    setTimeout(() => {
      const results = targetMode === 'flight'
        ? mockFlights(block.from.split(' ')[0], block.to.split(' ')[0])
        : mockTrains(block.from.split(' ')[0], block.to.split(' ')[0]);
      updateBlock(id, { results, isSearching: false });
    }, 800);
  };

  const toggleSelection = (blockId: string, resultId: string) => {
    setBlocks(prev => prev.map(block => {
      if (block.id !== blockId) return block;
      return {
        ...block,
        selectedIds: block.selectedIds.includes(resultId)
          ? block.selectedIds.filter(id => id !== resultId)
          : [...block.selectedIds, resultId]
      };
    }));
  };

  const totals = blocks.reduce((acc, block) => {
    const selectedInBlock = block.results.filter(r => block.selectedIds.includes(r.id));
    const blockCost = selectedInBlock.reduce((sum, r) => sum + (r.price * Number(block.seats || 0)), 0);
    return {
      count: acc.count + block.selectedIds.length,
      cost: acc.cost + blockCost,
    };
  }, { count: 0, cost: 0 });

  useEffect(() => {
    blocks.forEach(block => {
      if (block.results.length === 0 && !block.isSearching) {
        handleSearch(block.id);
      }
    });
  }, [blocks.length]);

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1b180d] font-manrope selection:bg-blue-100 pb-52">

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-12 relative z-10">

        {/* Navigation & Header */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-blue-600 font-bold text-xs tracking-widest uppercase transition-colors mb-8"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Transportation
        </motion.button>

        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Flights & Trains
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 font-medium"
          >
            Manage group travel via flights and rail with precision for your upcoming event
          </motion.p>
        </header>

        <div className="space-y-20">
          <AnimatePresence mode="popLayout">
            {blocks.map((block, index) => (
              <motion.section
                key={block.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                {/* Header for Block */}
                <div className="flex items-center justify-between mb-8 px-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-600/20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 uppercase">Travel Cluster: {block.group || 'Untitled Group'}</h2>
                  </div>
                  {blocks.length > 1 && (
                    <button
                      onClick={() => removeBlock(block.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Remove</span>
                      <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                  )}
                </div>

                {/* Search Panel Card */}
                <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] mb-12">
                  <div className="flex justify-center mb-10">
                    <div className="inline-flex items-center bg-gray-100/80 p-1.5 rounded-2xl w-full max-w-sm">
                      <button
                        onClick={() => {
                          updateBlock(block.id, { mode: 'flight', results: [], selectedIds: [] });
                          handleSearch(block.id, 'flight');
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${block.mode === 'flight'
                          ? 'bg-white text-blue-600 shadow-md ring-1 ring-black/5'
                          : 'text-gray-500 hover:text-gray-700'
                          }`}
                      >
                        <span className="material-symbols-outlined text-xl">flight</span>
                        Flights
                      </button>
                      <button
                        onClick={() => {
                          updateBlock(block.id, { mode: 'train', results: [], selectedIds: [] });
                          handleSearch(block.id, 'train');
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${block.mode === 'train'
                          ? 'bg-white text-blue-600 shadow-md ring-1 ring-black/5'
                          : 'text-gray-500 hover:text-gray-700'
                          }`}
                      >
                        <span className="material-symbols-outlined text-xl">train</span>
                        Trains
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-3">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 ml-1">Travel Date</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform pointer-events-none z-10">calendar_today</span>
                        <input
                          type="date"
                          value={block.date}
                          onChange={(e) => updateBlock(block.id, { date: e.target.value })}
                          className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-4 relative">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 ml-1">Route (From/To)</label>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1 group">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform">location_on</span>
                          <input
                            type="text"
                            list={`from-city-${block.id}`}
                            value={block.from}
                            onChange={(e) => updateBlock(block.id, { from: e.target.value })}
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all placeholder:text-gray-400"
                            placeholder="e.g. London (LHR)"
                          />
                          <datalist id={`from-city-${block.id}`}>
                            <option value="London (LHR)" />
                            <option value="Paris (CDG)" />
                            <option value="New York (JFK)" />
                            <option value="Dubai (DXB)" />
                            <option value="Singapore (SIN)" />
                            <option value="Mumbai (BOM)" />
                            <option value="Delhi (DEL)" />
                            <option value="Bangalore (BLR)" />
                          </datalist>
                        </div>
                        <button
                          onClick={() => updateBlock(block.id, { from: block.to, to: block.from })}
                          className="w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:text-blue-600 hover:shadow-md transition-all active:scale-90"
                        >
                          <span className="material-symbols-outlined text-lg">swap_horiz</span>
                        </button>
                        <div className="relative flex-1 group">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform">location_on</span>
                          <input
                            type="text"
                            list={`to-city-${block.id}`}
                            value={block.to}
                            onChange={(e) => updateBlock(block.id, { to: e.target.value })}
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all placeholder:text-gray-400"
                            placeholder="e.g. Paris (CDG)"
                          />
                          <datalist id={`to-city-${block.id}`}>
                            <option value="London (LHR)" />
                            <option value="Paris (CDG)" />
                            <option value="New York (JFK)" />
                            <option value="Dubai (DXB)" />
                            <option value="Singapore (SIN)" />
                            <option value="Mumbai (BOM)" />
                            <option value="Delhi (DEL)" />
                            <option value="Bangalore (BLR)" />
                          </datalist>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 ml-1">Guest Group / Title</label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 group-focus-within:scale-110 transition-transform">groups</span>
                        <input
                          type="text"
                          value={block.group}
                          onChange={(e) => updateBlock(block.id, { group: e.target.value })}
                          className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all placeholder:text-gray-300"
                          placeholder="Group Title"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 ml-1 text-center">Seats</label>
                      <div className="relative group flex items-center">
                        <input
                          type="number"
                          value={block.seats}
                          onChange={(e) => updateBlock(block.id, { seats: e.target.value === '' ? '' : Number(e.target.value) })}
                          className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-4 text-center text-sm font-bold focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-200 outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <div className="absolute right-2 flex flex-col gap-0.5">
                          <button
                            onClick={() => updateBlock(block.id, { seats: Number(block.seats || 0) + 1 })}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg leading-none">arrow_drop_up</span>
                          </button>
                          <button
                            onClick={() => updateBlock(block.id, { seats: Math.max(1, Number(block.seats || 0) - 1) })}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg leading-none">arrow_drop_down</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSearch(block.id)}
                        className="w-full bg-blue-600 text-white rounded-2xl py-4 font-bold text-sm tracking-widest shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
                      >
                        {block.isSearching ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>SEARCH</>
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Results Matrix Panel */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-8 px-2">
                    <h3 className="text-xl font-bold tracking-tight text-gray-800">Available Options for {block.group || 'this cluster'}</h3>
                    <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-100" />
                        <span className="text-gray-400">Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                        <span className="text-gray-900">Selected</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4"
                  >
                    <AnimatePresence mode="popLayout">
                      {block.results.map((result) => {
                        const isSelected = block.selectedIds.includes(result.id);
                        return (
                          <motion.div
                            key={result.id}
                            variants={itemVariants}
                            layout
                            whileHover={{ scale: 1.005, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
                            className={`group relative flex flex-col lg:flex-row lg:items-center justify-between p-6 lg:px-10 rounded-[2rem] border transition-all duration-500 overflow-hidden ${isSelected
                              ? 'bg-blue-50/50 border-blue-200 shadow-[inset_0_0_20px_rgba(37,99,235,0.02)]'
                              : 'bg-white border-gray-100'
                              }`}
                          >
                            <div className={`absolute top-0 right-0 h-full w-32 bg-gradient-to-l opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${block.mode === 'flight' ? 'from-blue-600' : 'from-indigo-600'
                              }`} />

                            <div className="flex items-center gap-6 lg:w-1/4">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100/50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                                }`}>
                                <span className="material-symbols-outlined text-3xl">
                                  {block.mode === 'flight' ? 'flight' : 'train'}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-bold text-gray-900">{result.name}</h4>
                                <p className="text-xs text-gray-400 font-medium tracking-tight uppercase">{result.code} • {result.aircraft}</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between lg:justify-center gap-10 lg:w-2/5 my-6 lg:my-0">
                              <div className="text-center">
                                <span className="block text-2xl font-bold text-gray-900 leading-none mb-1">{result.departureTime}</span>
                                <span className="text-[10px] font-bold text-gray-400 tracking-widest">{result.departureCode}</span>
                              </div>
                              <div className="flex-1 max-w-[120px] text-center px-4 relative">
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2" />
                                <div className="relative z-10 bg-white px-2 -mt-1 inline-block">
                                  <span className="block text-[9px] font-bold text-blue-500 uppercase tracking-tighter mb-0.5">{result.duration}</span>
                                  <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-tighter">{result.stops}</span>
                                </div>
                              </div>
                              <div className="text-center">
                                <span className="block text-2xl font-bold text-gray-900 leading-none mb-1">{result.arrivalTime}</span>
                                <span className="text-[10px] font-bold text-gray-400 tracking-widest">{result.arrivalCode}</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between lg:justify-end gap-10 lg:w-1/3">
                              <div className="text-right">
                                <span className="block text-[10px] font-bold text-blue-500 uppercase tracking-tight">{result.seatsLeft} Seats Left</span>
                                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-0.5">{result.type}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-gray-900">₹{result.price.toLocaleString()}</div>
                                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Incl. Taxes</div>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleSelection(block.id, result.id)}
                                className={`min-w-[110px] py-3 rounded-2xl font-bold text-xs tracking-widest shadow-md transition-all ${isSelected
                                  ? 'bg-blue-600 text-white shadow-blue-600/20 flex items-center justify-center gap-2'
                                  : 'bg-white border border-gray-100 text-blue-600 group-hover:border-blue-200 group-hover:shadow-lg'
                                  }`}
                              >
                                {isSelected ? (
                                  <>
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    SELECTED
                                  </>
                                ) : (
                                  'SELECT'
                                )}
                              </motion.button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.section>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Add Button */}
        <div className="flex justify-center mt-20 mb-24">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={addBlock}
            className="flex items-center gap-4 text-blue-600 font-bold text-base bg-white border-2 border-dashed border-blue-200 px-10 py-6 rounded-[2rem] hover:bg-blue-50 hover:border-blue-400 transition-all group shadow-xl shadow-blue-600/5"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-2xl transition-transform group-hover:rotate-90 duration-500">add</span>
            </div>
            ADD ANOTHER GROUP / ROUTE
          </motion.button>
        </div>

      </div>

      {/* Floating Confirmation Bar */}
      <AnimatePresence>
        {totals.count > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 z-50 py-4"
          >
            <div className="bg-blue-600/95 text-white rounded-[2.5rem] p-4 pr-6 flex items-center justify-between shadow-[0_20px_60px_rgba(37,99,235,0.4)] backdrop-blur-xl border border-white/20">
              <div className="flex items-center gap-8 pl-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                    <span className="material-symbols-outlined text-2xl text-blue-200">shopping_cart</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Global Selection</span>
                    <span className="text-xl font-bold">{totals.count} Options Locked</span>
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
                <div className="hidden md:flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Clusters</span>
                  <span className="text-sm font-bold">{blocks.length} Groups Configured</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-blue-200 mb-0.5">Total Estimated Cost</span>
                  <span className="block text-3xl font-bold tracking-tighter">₹{totals.cost.toLocaleString()}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-blue-600 rounded-2xl px-12 py-5 font-bold text-lg flex items-center gap-3 transition-all hover:shadow-2xl shadow-black/10 hover:-translate-y-0.5"
                >
                  Confirm Selection
                  <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
