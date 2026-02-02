'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

interface TransportationSection {
  id: string;
  title: string;
  description: string;
  route: string;
  icon: string;
  bgIcon: string;
  actionText: string;
  accent: string;
}

const TransportationOverview = () => {
  const router = useRouter();

  const sections: TransportationSection[] = [
    {
      id: 'flights-train',
      title: 'Flights / Train',
      description: 'Oversee international and long-distance travel. Synchronize manifest files and arrival tracking.',
      route: '/prebookingmice/transportation/flights-train',
      icon: 'flight',
      bgIcon: 'flight',
      actionText: 'MANAGE LOGISTICS',
      accent: 'text-blue-600',
    },
    {
      id: 'airport-transfers',
      title: 'Airport Transfers',
      description: 'Coordinate private chauffeur services and executive car fleets for VIP pick-ups and drop-offs.',
      route: '/prebookingmice/transportation/airport-transfers',
      icon: 'airport_shuttle',
      bgIcon: 'directions_car',
      actionText: 'ASSIGN DRIVERS',
      accent: 'text-gray-600',
    },
    {
      id: 'local-transport',
      title: 'Local Event Transportation',
      description: 'Manage group shuttle loops between hotels, venues, and social event locations throughout the itinerary.',
      route: '/prebookingmice/transportation/local-transport',
      icon: 'hub',
      bgIcon: 'alt_route',
      actionText: 'SETUP ROUTES',
      accent: 'text-indigo-600',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1b180d] font-manrope selection:bg-blue-100 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-16">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Transportation Facilities
            </h1>
            <p className="text-lg text-gray-500 font-medium">
              Configure and manage logistics for global arrivals, chauffeured VIP transfers, and localized shuttle networks.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm text-sm font-bold transition-all w-fit"
          >
            <span className="material-symbols-outlined text-blue-600">calendar_month</span>
            View Global Schedule
          </motion.button>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}
              onClick={() => router.push(section.route)}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 cursor-pointer overflow-hidden transition-all duration-500 h-full flex flex-col"
            >
              {/* Background Icon Watermark */}
              <span className="material-symbols-outlined absolute -top-4 -right-4 text-[120px] opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
                {section.bgIcon}
              </span>

              {/* Icon Header */}
              <div className="mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">
                    {section.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-10 min-h-[4rem]">
                  {section.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="relative z-10 mt-auto flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest uppercase">
                {section.actionText}
                <motion.span
                  className="material-symbols-outlined text-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                >
                  arrow_forward
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Operational Tip Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-xl">info</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 leading-tight">Operational Tip</h4>
              <p className="text-gray-600">
                Ensure all logistics are synchronized with the master event timeline before proceeding to the final vendor assignments.
              </p>
            </div>
          </div>
          <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:underline transition-all whitespace-nowrap">
            View Timeline Guidance
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </motion.div>

        {/* Disclaimer Footer */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-gray-400 font-medium italic tracking-wide uppercase">
            All transport scheduling adheres to international MICE safety standards.
          </p>
        </div>

      </div>

      {/* Floating Grounded Next Button */}
      <div className="fixed bottom-0 left-0 w-full p-8 px-6 lg:px-20 bg-gradient-to-t from-white via-white/90 to-transparent z-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-7xl mx-auto flex justify-end"
        >
          <motion.button
            whileHover={{ scale: 1.02, x: 10 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/prebookingmice/Foodandbeverages")}
            className="group bg-blue-600 text-white rounded-2xl px-12 py-5 font-bold text-xl flex items-center gap-4 shadow-2xl shadow-blue-600/30 transition-all hover:bg-blue-700"
          >
            NEXT
            <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TransportationOverview;
