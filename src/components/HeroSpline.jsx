import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full bg-[#0b1020] overflow-hidden rounded-2xl shadow-xl">
      <div className="h-[360px] w-full">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 400px at 50% 60%, rgba(124,58,237,0.35), rgba(59,130,246,0.18) 40%, rgba(245,158,11,0.14) 65%, rgba(0,0,0,0) 75%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 p-6 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
          AI RFP Orchestration
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
          Dual-Portal RFP AI Management System
        </h1>
        <p className="mt-2 max-w-3xl text-sm md:text-base text-white/80">
          Seamlessly switch between Client and Admin portals. Orchestrate technical, pricing, and sales agents with
          real-time insights and beautiful, responsive dashboards.
        </p>
      </div>
    </section>
  );
}
