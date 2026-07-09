"use client";
import { motion } from "framer-motion";
import {
  TrendingUp, Users, DollarSign, ShoppingCart,
  Activity, BarChart2, ArrowUpRight, Bell
} from "lucide-react";

const kpiCards = [
  { label: "Total Revenue", value: "$284,590", change: "+18.2%", icon: DollarSign, color: "#2563EB" },
  { label: "Active Users", value: "12,847", change: "+9.1%", icon: Users, color: "#06B6D4" },
  { label: "Sales Today", value: "1,284", change: "+24.5%", icon: ShoppingCart, color: "#8B5CF6" },
  { label: "Growth Rate", value: "34.8%", change: "+4.2%", icon: TrendingUp, color: "#10B981" },
];

const barData = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute -left-10 top-8 z-10 glass border border-white/10 rounded-2xl p-3 shadow-2xl hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center">
            <TrendingUp size={12} className="text-green-400" />
          </div>
          <span className="text-xs text-gray-400">Revenue</span>
        </div>
        <p className="text-white font-bold text-sm">+$12,400</p>
        <p className="text-green-400 text-xs">↑ 18.2% this month</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        className="absolute -right-8 top-16 z-10 glass border border-white/10 rounded-2xl p-3 shadow-2xl hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Users size={12} className="text-blue-400" />
          </div>
          <span className="text-xs text-gray-400">New Clients</span>
        </div>
        <p className="text-white font-bold text-sm">+247</p>
        <p className="text-blue-400 text-xs">This week</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-6 bottom-20 z-10 glass border border-white/10 rounded-2xl p-3 shadow-2xl hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Activity size={12} className="text-purple-400" />
          </div>
          <span className="text-xs text-gray-400">Uptime</span>
        </div>
        <p className="text-white font-bold text-sm">99.9%</p>
        <p className="text-purple-400 text-xs">System status</p>
      </motion.div>

      {/* Main dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        style={{ boxShadow: "0 25px 80px rgba(37,99,235,0.2)" }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-gray-500">NovaCode Analytics Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell size={13} className="text-gray-500" />
            <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">CL</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-3">
            {kpiCards.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-light rounded-xl p-3 border border-white/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-gray-500">{kpi.label}</span>
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: `${kpi.color}20` }}
                  >
                    <kpi.icon size={11} style={{ color: kpi.color }} />
                  </div>
                </div>
                <p className="text-white font-bold text-sm">{kpi.value}</p>
                <p className="text-green-400 text-[10px] flex items-center gap-0.5 mt-0.5">
                  <ArrowUpRight size={9} />
                  {kpi.change}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="glass-light rounded-xl p-3 border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-300 font-medium">Revenue Overview</span>
              <span className="text-[10px] text-[#06B6D4] px-2 py-0.5 rounded-full bg-[#06B6D4]/10">2025</span>
            </div>
            <div className="flex items-end gap-1 h-20">
              {barData.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1 + i * 0.05, duration: 0.4 }}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 11
                      ? "linear-gradient(to top, #2563EB, #06B6D4)"
                      : "rgba(37,99,235,0.3)",
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-1 mt-1">
              {months.map((m) => (
                <span key={m} className="flex-1 text-center text-[8px] text-gray-600">{m}</span>
              ))}
            </div>
          </div>

          {/* Mini stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Conversion", value: "8.4%", icon: BarChart2, color: "#2563EB" },
              { label: "Avg. Order", value: "$248", icon: ShoppingCart, color: "#06B6D4" },
              { label: "Team NPS", value: "94", icon: Users, color: "#8B5CF6" },
            ].map((s) => (
              <div key={s.label} className="glass-light rounded-xl p-2.5 border border-white/5 text-center">
                <s.icon size={12} style={{ color: s.color }} className="mx-auto mb-1" />
                <p className="text-white text-xs font-bold">{s.value}</p>
                <p className="text-gray-600 text-[9px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
