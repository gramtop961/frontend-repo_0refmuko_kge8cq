import React from 'react';
import { Rocket, Activity, Settings, LayoutGrid, Zap, ShieldCheck, Cpu, DollarSign, Bot } from 'lucide-react';

function Tag({ color, children }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border`} style={{
      color,
      borderColor: '#e2e8f0',
      backgroundColor: '#f8fafc',
    }}>
      {children}
    </span>
  );
}

export default function PortalPreview({ role }) {
  const isSales = role === 'sales';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-2 bg-white border border-[#e2e8f0] rounded-xl p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#1e293b]">
            {isSales ? 'Sales Dashboard' : 'System Command Center'}
          </h3>
          <div className="flex items-center gap-2">
            <Tag color="#3b82f6">Info</Tag>
            <Tag color="#10b981">Success</Tag>
            <Tag color="#f59e0b">Warning</Tag>
            <Tag color="#ef4444">Error</Tag>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="space-y-4">
            <div className="border border-[#e2e8f0] rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm text-[#64748b]">
                <Activity className="w-4 h-4" /> Real-time Agent Status
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#7c3aed' }} /> Main Agent
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#3b82f6' }} /> Technical
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#10b981' }} /> Pricing
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: '#f59e0b' }} /> Sales
                </div>
              </div>
            </div>

            <div className="border border-[#e2e8f0] rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm text-[#64748b]">
                <LayoutGrid className="w-4 h-4" /> Pipeline
              </div>
              <div className="mt-3 grid grid-cols-5 gap-2 text-xs font-medium text-[#1e293b]">
                {['Discovered', 'In Progress', 'Tech Review', 'Pricing', 'Ready'].map((s, i) => (
                  <div key={s} className="p-2 rounded-md text-center" style={{
                    background: ['#f1f5f9', '#dbeafe', '#ede9fe', '#d1fae5', '#ecfdf5'][i],
                  }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div className="border border-[#e2e8f0] rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm text-[#64748b]">
                <Cpu className="w-4 h-4" /> Technical Matching
              </div>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Voltage Rating</span>
                  <div className="w-40 h-2 rounded bg-gray-100">
                    <div className="h-2 rounded" style={{ width: '80%', background: '#7c3aed' }} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Conductor Type</span>
                  <div className="w-40 h-2 rounded bg-gray-100">
                    <div className="h-2 rounded" style={{ width: '90%', background: '#3b82f6' }} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Standards</span>
                  <div className="w-40 h-2 rounded bg-gray-100">
                    <div className="h-2 rounded" style={{ width: '100%', background: '#10b981' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#e2e8f0] rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm text-[#64748b]">
                <DollarSign className="w-4 h-4" /> Pricing Intelligence
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                {[
                  { label: 'Materials', value: '$42,100', color: '#10b981' },
                  { label: 'Labor', value: '$19,500', color: '#3b82f6' },
                  { label: 'Margin', value: '$8,700', color: '#f59e0b' },
                ].map((x) => (
                  <div key={x.label} className="p-2 rounded-md border border-[#e2e8f0]">
                    <div className="text-[#64748b]">{x.label}</div>
                    <div className="font-semibold text-[#1e293b]">{x.value}</div>
                    <div className="mt-1 w-full h-1.5 rounded" style={{ background: x.color }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-[#64748b]">
          <Settings className="w-4 h-4" /> Quick Actions
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Rocket, label: 'Process RFP', color: '#1e40af' },
            { icon: ShieldCheck, label: 'Health Check', color: '#059669' },
            { icon: Zap, label: 'Run Agents', color: '#7c3aed' },
            { icon: Bot, label: 'Discovery Scan', color: '#f59e0b' },
          ].map((a) => (
            <button
              key={a.label}
              className="group border border-[#e2e8f0] rounded-lg p-3 text-left hover:bg-gray-50 transition"
            >
              <a.icon className="w-5 h-5" style={{ color: a.color }} />
              <div className="mt-2 text-sm font-medium text-[#1e293b]">{a.label}</div>
              <div className="text-xs text-[#64748b]">Instant action</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
