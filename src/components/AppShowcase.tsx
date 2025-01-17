import React from 'react';
import { Smartphone, Building2, UserCircle } from 'lucide-react';
import { AppStoreButtons } from './ui/AppStoreButtons';

export function AppShowcase() {
  return (
    <section id="ourapps" className="relative py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/80 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            One Platform, Three Powerful Apps
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/50 transition-all duration-300">
            <Smartphone className="w-12 h-12 text-amber-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Lumeth</h3>
            <p className="text-gray-300 mb-6">
              Find and book beauty services instantly. Get personalized recommendations and manage your appointments with ease.
            </p>
            <AppStoreButtons variant="dark" appType="customer" className="mt-6" />
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/50 transition-all duration-300">
            <Building2 className="w-12 h-12 text-amber-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Lumeth Helm</h3>
            <p className="text-gray-300 mb-6">
              Powerful tools for service providers to manage bookings, staff, and grow their business with data-driven insights.
            </p>
            <AppStoreButtons variant="dark" appType="helm" className="mt-6" />
          </div>

          <div className="bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-amber-400/50 transition-all duration-300">
            <UserCircle className="w-12 h-12 text-amber-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Lumeth Tocca</h3>
            <p className="text-gray-300 mb-6">
              Empower beauty professionals to manage schedules, connect with clients, and boost their career growth.
            </p>
            <AppStoreButtons variant="dark" appType="tocca" className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}