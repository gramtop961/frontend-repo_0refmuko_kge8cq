import React from 'react';
import { User, Shield } from 'lucide-react';

export default function RoleSwitcher({ role, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button
        onClick={() => onChange('sales')}
        className={`group flex items-center gap-3 p-4 rounded-xl border transition-all ${
          role === 'sales'
            ? 'border-[#1e40af] bg-[#f8fafc]'
            : 'border-[#e2e8f0] hover:border-[#1e40af]/50'
        }`}
      >
        <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 grid place-items-center text-[#1e40af]">
          <User className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="font-semibold text-[#1e293b]">Sales Team</div>
          <div className="text-sm text-[#64748b]">Client Portal</div>
        </div>
      </button>
      <button
        onClick={() => onChange('admin')}
        className={`group flex items-center gap-3 p-4 rounded-xl border transition-all ${
          role === 'admin'
            ? 'border-[#059669] bg-[#f8fafc]'
            : 'border-[#e2e8f0] hover:border-[#059669]/50'
        }`}
      >
        <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 grid place-items-center text-[#059669]">
          <Shield className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="font-semibold text-[#1e293b]">System Admin</div>
          <div className="text-sm text-[#64748b]">Admin Portal</div>
        </div>
      </button>
    </div>
  );
}
