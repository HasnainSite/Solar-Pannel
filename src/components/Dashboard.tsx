import React, { useState } from 'react';
import {
  Sun,
  Zap,
  BatteryCharging,
  TrendingUp,
  ShieldCheck,
  Activity,
  Award,
  DollarSign,
  TreePine,
  Download,
  RotateCcw,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Cpu,
  Wifi,
  Radio,
  FileText
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

interface DashboardProps {
  darkMode: boolean;
  onNavigateToQuote: (details: string) => void;
}

// Simulated 24-Hour Telemetry Data
const HOURLY_ENERGY_DATA = [
  { time: '00:00', solar: 0, consumption: 1.2, battery: 85, gridExport: 0 },
  { time: '02:00', solar: 0, consumption: 0.9, battery: 80, gridExport: 0 },
  { time: '04:00', solar: 0, consumption: 0.8, battery: 75, gridExport: 0 },
  { time: '06:00', solar: 0.8, consumption: 1.5, battery: 72, gridExport: 0 },
  { time: '08:00', solar: 3.4, consumption: 2.2, battery: 78, gridExport: 0.4 },
  { time: '10:00', solar: 6.8, consumption: 2.8, battery: 88, gridExport: 2.5 },
  { time: '12:00', solar: 9.2, consumption: 3.1, battery: 98, gridExport: 4.8 },
  { time: '14:00', solar: 8.8, consumption: 3.5, battery: 100, gridExport: 5.3 },
  { time: '16:00', solar: 6.1, consumption: 3.8, battery: 96, gridExport: 2.1 },
  { time: '18:00', solar: 2.2, consumption: 4.2, battery: 92, gridExport: 0 },
  { time: '20:00', solar: 0.1, consumption: 3.9, battery: 85, gridExport: 0 },
  { time: '22:00', solar: 0, consumption: 2.4, battery: 80, gridExport: 0 },
];

// Monthly Generation Data
const MONTHLY_YIELD_DATA = [
  { month: 'Jan', actual: 820, target: 800 },
  { month: 'Feb', actual: 950, target: 900 },
  { month: 'Mar', actual: 1180, target: 1100 },
  { month: 'Apr', actual: 1340, target: 1300 },
  { month: 'May', actual: 1520, target: 1450 },
  { month: 'Jun', actual: 1680, target: 1600 },
  { month: 'Jul', actual: 1750, target: 1700 },
  { month: 'Aug', actual: 1690, target: 1650 },
  { month: 'Sep', actual: 1420, target: 1400 },
  { month: 'Oct', actual: 1150, target: 1100 },
  { month: 'Nov', actual: 910, target: 880 },
  { month: 'Dec', actual: 780, target: 750 },
];

const ENERGY_PIE_DATA = [
  { name: 'Direct Solar Use', value: 62, color: '#FFC107' },
  { name: 'Battery Discharge', value: 26, color: '#2E8B57' },
  { name: 'Grid Import', value: 12, color: '#6D28D9' },
];

export const Dashboard: React.FC<DashboardProps> = ({ darkMode, onNavigateToQuote }) => {
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month' | 'year'>('today');
  const [evChargerAuto, setEvChargerAuto] = useState(true);
  const [batteryOptimization, setBatteryOptimization] = useState(true);
  const [gridExportPeak, setGridExportPeak] = useState(true);
  const [isDownloadingReport, setIsDownloadingReport] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  const handleDownloadReport = () => {
    setIsDownloadingReport(true);
    setTimeout(() => {
      setIsDownloadingReport(false);
      setReportSuccess(true);
      setTimeout(() => setReportSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className={`pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn ${
      darkMode ? 'text-slate-100' : 'text-slate-900'
    }`}>
      {/* Top Welcome & Telemetry Header */}
      <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl transition-all ${
        darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#6D28D9]/10 text-[#6D28D9] dark:bg-purple-500/10 dark:text-purple-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>Live System Telemetry • Silicon Valley Residence #1042</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Solar Energy Control & Analytics Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Real-time monitoring of PV generation, PowerVault lithium storage, grid net metering, and carbon offsets.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Time Filter Pills */}
            <div className={`flex items-center p-1 rounded-xl border text-xs font-bold ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
            }`}>
              {(['today', 'week', 'month', 'year'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                    timeRange === range
                      ? 'bg-[#6D28D9] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            <button
              onClick={handleDownloadReport}
              disabled={isDownloadingReport}
              className="bg-[#2E8B57] hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-md transition-transform hover:scale-105"
            >
              <Download className={`w-4 h-4 ${isDownloadingReport ? 'animate-bounce' : ''}`} />
              <span>{isDownloadingReport ? 'Generating...' : reportSuccess ? 'Downloaded!' : 'Export PDF Report'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Real-time System Telemetry KPI Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Solar Generation */}
        <div className={`p-5 rounded-3xl border shadow-md relative overflow-hidden transition-all hover:-translate-y-1 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Live PV Output</span>
            <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500">
              <Sun className="w-5 h-5 fill-amber-400/20" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-black text-amber-500 flex items-baseline gap-1">
              8.8 <span className="text-base font-bold text-slate-400">kW</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
              <ArrowUpRight className="w-4 h-4" />
              <span>Peak Solar Hours • 96% Efficiency</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>Today Total: <strong className="text-slate-800 dark:text-white">42.6 kWh</strong></span>
            <span className="text-emerald-600 font-bold">+18% vs Yesterday</span>
          </div>
        </div>

        {/* Card 2: Home Load */}
        <div className={`p-5 rounded-3xl border shadow-md relative overflow-hidden transition-all hover:-translate-y-1 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Home Power Load</span>
            <div className="p-2.5 rounded-2xl bg-purple-500/10 text-[#6D28D9] dark:text-purple-400">
              <Zap className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-black text-[#6D28D9] dark:text-purple-400 flex items-baseline gap-1">
              3.5 <span className="text-base font-bold text-slate-400">kW</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>HVAC + EV Charger Active</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>Today Usage: <strong className="text-slate-800 dark:text-white">21.8 kWh</strong></span>
            <span className="text-emerald-500 font-bold">100% Solar Powered</span>
          </div>
        </div>

        {/* Card 3: PowerVault Battery */}
        <div className={`p-5 rounded-3xl border shadow-md relative overflow-hidden transition-all hover:-translate-y-1 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">PowerVault Battery</span>
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-[#2E8B57]">
              <BatteryCharging className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-black text-[#2E8B57] flex items-baseline gap-1">
              96% <span className="text-base font-bold text-slate-400">(14.8 kWh)</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Fully Charged • Outage Ready</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>Backup Autonomy: <strong className="text-slate-800 dark:text-white">~18 Hours</strong></span>
            <span className="text-amber-500 font-bold">LiFePO4 Health 99%</span>
          </div>
        </div>

        {/* Card 4: Grid Net Export & Financial Savings */}
        <div className={`p-5 rounded-3xl border shadow-md relative overflow-hidden transition-all hover:-translate-y-1 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Net Metering Export</span>
            <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-500">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400 flex items-baseline gap-1">
              +5.3 <span className="text-base font-bold text-slate-400">kW</span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-purple-500 font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Earning Net Metering Credits</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
            <span>Saved Today: <strong className="text-emerald-500 font-bold">$16.40</strong></span>
            <span>Month: <strong className="text-slate-800 dark:text-white">$384</strong></span>
          </div>
        </div>
      </div>

      {/* Main Charts Section: 24-Hour Energy Flow & Monthly Yield */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: 24-Hour Energy Generation vs Load Area Chart (8 Cols) */}
        <div className={`lg:col-span-8 p-6 sm:p-8 rounded-3xl border shadow-xl flex flex-col justify-between space-y-6 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#6D28D9] dark:text-purple-400" />
                24-Hour Solar Production vs. Home Consumption
              </h3>
              <p className="text-xs text-slate-500">
                Live power curve matching daytime solar output against home appliance demand.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                Solar PV Output
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#6D28D9]"></span>
                Home Usage
              </span>
            </div>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-72 sm:h-80 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HOURLY_ENERGY_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFC107" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FFC107" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="homeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6D28D9" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#6D28D9" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#334155' : '#e2e8f0'} />
                <XAxis dataKey="time" stroke={darkMode ? '#94a3b8' : '#64748b'} fontSize={11} />
                <YAxis stroke={darkMode ? '#94a3b8' : '#64748b'} fontSize={11} unit="kW" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                    borderColor: darkMode ? '#334155' : '#e2e8f0',
                    borderRadius: '12px',
                    color: darkMode ? '#ffffff' : '#0f172a',
                    fontSize: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)'
                  }}
                />
                <Area type="monotone" dataKey="solar" name="Solar Generation (kW)" stroke="#FFC107" strokeWidth={3} fillOpacity={1} fill="url(#solarGrad)" />
                <Area type="monotone" dataKey="consumption" name="Home Usage (kW)" stroke="#6D28D9" strokeWidth={2.5} fillOpacity={1} fill="url(#homeGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-center justify-between text-amber-600 dark:text-amber-400">
            <span className="flex items-center gap-2 font-semibold">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              Peak solar yield recorded at 12:45 PM (9.4 kW). System exported 24.1 kWh surplus energy back to the PG&E grid today.
            </span>
          </div>
        </div>

        {/* Right Column: Energy Distribution & Carbon Impact (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Energy Source Mix Pie */}
          <div className={`p-6 rounded-3xl border shadow-xl space-y-4 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <h3 className="text-base font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" />
              Energy Consumption Mix
            </h3>
            
            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ENERGY_PIE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ENERGY_PIE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              {ENERGY_PIE_DATA.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.name}
                  </span>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Offset Widget */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2E8B57] to-emerald-800 text-white shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
              <TreePine className="w-4 h-4" />
              <span>Lifetime Environmental Impact</span>
            </div>
            
            <h4 className="text-xl font-black">Zero Emissions Milestone</h4>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-black text-amber-300">412</div>
                <div className="text-[10px] text-emerald-100">Trees Planted Equiv.</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="text-2xl font-black text-amber-300">18.4</div>
                <div className="text-[10px] text-emerald-100">Tons CO₂ Offset</div>
              </div>
            </div>

            <p className="text-[11px] text-emerald-100 leading-relaxed">
              Your 14kW solar array has offset electricity equivalent to burning 18,200 lbs of coal since installation.
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Generation Bar Chart & Smart Load Automation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Monthly Yield Bar Chart (8 Cols) */}
        <div className={`lg:col-span-8 p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#2E8B57]" />
                Monthly Solar Generation vs. Estimated Target
              </h3>
              <p className="text-xs text-slate-500">
                Annual performance comparison (kWh) against engineered baseline projections.
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
              +6.4% Above Target
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_YIELD_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#334155' : '#e2e8f0'} />
                <XAxis dataKey="month" stroke={darkMode ? '#94a3b8' : '#64748b'} fontSize={11} />
                <YAxis stroke={darkMode ? '#94a3b8' : '#64748b'} fontSize={11} unit="kWh" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                    borderColor: darkMode ? '#334155' : '#e2e8f0',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="actual" name="Actual Yield (kWh)" fill="#2E8B57" radius={[6, 6, 0, 0]} />
                <Bar dataKey="target" name="Estimated Baseline" fill="#6D28D9" opacity={0.4} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Smart Automation & Health Panel (4 Cols) */}
        <div className={`lg:col-span-4 p-6 sm:p-8 rounded-3xl border shadow-xl space-y-6 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <h3 className="text-base font-bold flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#6D28D9] dark:text-purple-400" />
              Smart Load Automation
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Automated energy management rules for maximum grid bill savings.
            </p>
          </div>

          <div className="space-y-4">
            {/* Rule 1 */}
            <div className={`p-3.5 rounded-2xl border flex items-center justify-between ${
              darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <div className="text-xs font-bold">EV Charger Surplus Sync</div>
                <div className="text-[10px] text-slate-500">Charge Tesla only when solar surplus &gt; 3kW</div>
              </div>
              <button
                onClick={() => setEvChargerAuto(!evChargerAuto)}
                className={`w-11 h-6 rounded-full p-1 transition-colors ${evChargerAuto ? 'bg-[#2E8B57]' : 'bg-slate-600'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${evChargerAuto ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Rule 2 */}
            <div className={`p-3.5 rounded-2xl border flex items-center justify-between ${
              darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <div className="text-xs font-bold">Time-of-Use Peak Discharge</div>
                <div className="text-[10px] text-slate-500">Power home from battery during 4 PM–9 PM peak rates</div>
              </div>
              <button
                onClick={() => setBatteryOptimization(!batteryOptimization)}
                className={`w-11 h-6 rounded-full p-1 transition-colors ${batteryOptimization ? 'bg-[#2E8B57]' : 'bg-slate-600'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${batteryOptimization ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Rule 3 */}
            <div className={`p-3.5 rounded-2xl border flex items-center justify-between ${
              darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <div className="text-xs font-bold">Grid Net Export Boost</div>
                <div className="text-[10px] text-slate-500">Export battery energy to grid during emergency demand events</div>
              </div>
              <button
                onClick={() => setGridExportPeak(!gridExportPeak)}
                className={`w-11 h-6 rounded-full p-1 transition-colors ${gridExportPeak ? 'bg-[#2E8B57]' : 'bg-slate-600'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${gridExportPeak ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Inverter Health Diagnostic</div>
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="flex items-center gap-1.5 text-emerald-500 font-bold">
                <Wifi className="w-3.5 h-3.5" />
                SyncPro 12kW Inverter
              </span>
              <span className="text-slate-400">Firmware v3.4.2 (Up-to-date)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
