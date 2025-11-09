import React, { useState } from 'react';
import HeroSpline from './components/HeroSpline';
import RoleSwitcher from './components/RoleSwitcher';
import MetricsGrid from './components/MetricsGrid';
import PortalPreview from './components/PortalPreview';

export default function App() {
  const [role, setRole] = useState('sales');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Hero with Spline */}
        <HeroSpline />

        {/* Role Switcher + Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white border border-[#e2e8f0] rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Unified Login with Role Selection</h2>
                <p className="text-[#64748b]">Choose how you want to manage RFPs today.</p>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-[#64748b]">System Online</span>
              </div>
            </div>
            <RoleSwitcher role={role} onChange={setRole} />
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6">
            <div className="text-sm text-[#64748b]">Active Role</div>
            <div className="mt-2 text-2xl font-bold">
              {role === 'sales' ? 'Sales Team' : 'System Admin'}
            </div>
            <p className="mt-2 text-sm text-[#64748b]">
              Seamless role switching with tailored dashboards, controls, and analytics.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <MetricsGrid />

        {/* Portal Preview */}
        <PortalPreview role={role} />

        {/* Footer */}
        <footer className="pt-6 pb-10 text-center text-sm text-[#64748b]">
          Built with Deep Ocean Blue, Emerald Green, and Amber accents for a professional enterprise aesthetic.
        </footer>
      </div>
    </div>
  );
}
