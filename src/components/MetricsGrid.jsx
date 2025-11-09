import React from 'react';
import { Gauge, Clock3, Trophy, Timer } from 'lucide-react';

const cards = [
  {
    title: 'Total RFPs Processed',
    value: '1,284',
    delta: '+12% MoM',
    color: 'text-[#1e40af]',
    ring: 'ring-[#1e40af]/20',
    icon: Gauge,
  },
  {
    title: 'Avg Response Time',
    value: '3.2 hrs',
    delta: '-18% faster',
    color: 'text-[#059669]',
    ring: 'ring-[#059669]/20',
    icon: Clock3,
  },
  {
    title: 'Estimated Win Rate',
    value: '42%',
    delta: '+5% QoQ',
    color: 'text-[#7c3aed]',
    ring: 'ring-[#7c3aed]/20',
    icon: Trophy,
  },
  {
    title: 'Time Saved',
    value: '217 hrs',
    delta: '+31 this month',
    color: 'text-[#d97706]',
    ring: 'ring-[#d97706]/20',
    icon: Timer,
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div
          key={c.title}
          className={`bg-white border border-[#e2e8f0] rounded-xl p-4 flex items-start gap-3 ring-1 ${c.ring}`}
        >
          <div className={`w-10 h-10 rounded-lg bg-gray-50 grid place-items-center ${c.color}`}>
            <c.icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-[#64748b]">{c.title}</div>
            <div className="mt-1 text-2xl font-bold text-[#1e293b]">{c.value}</div>
            <div className="text-xs text-[#64748b]">{c.delta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
