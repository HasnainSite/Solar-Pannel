import React from 'react';
import { Shield, Award, Users, Target, Compass, CheckCircle2, Cpu, Zap } from 'lucide-react';

interface AboutUsProps {
  darkMode: boolean;
}

export const AboutUs: React.FC<AboutUsProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#2E8B57]/10 text-[#2E8B57] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Shield className="w-4 h-4 text-[#2E8B57]" />
          <span>About SolarTech Energy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Leading the Clean Energy Transition for Over a Decade
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Founded in 2014, SolarTech Energy has delivered over 500MW of turnkey photovoltaic systems across residential estates, commercial hubs, and industrial microgrids.
        </p>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Intro Tile (7 Cols) */}
        <div
          className={`md:col-span-7 rounded-3xl p-6 sm:p-8 border shadow-sm flex flex-col justify-between ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="space-y-4">
            <span className="text-xs font-extrabold text-[#6D28D9] dark:text-purple-400 uppercase tracking-widest">
              Who We Are
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Engineering Clean Energy Independence with Unmatched Precision
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              At SolarTech Energy, we believe clean electricity should be reliable, affordable, and accessible. Our team of NABCEP-certified electrical engineers, microgrid architects, and structural installers manage every step of your solar journey—from 3D LiDAR roof modeling to utility net metering approval.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>NABCEP Certified Master Engineers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Tier 1 Bloomberg PV Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>In-House Permit Approval Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>25-Year Linear Power Warranty</span>
            </div>
          </div>
        </div>

        {/* Right Stack (5 Cols) */}
        <div className="md:col-span-5 space-y-6">
          {/* Mission Tile */}
          <div
            className={`rounded-3xl p-6 border shadow-sm ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-[#6D28D9]/10 text-[#6D28D9] dark:bg-purple-500/10 dark:text-purple-400 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#6D28D9] dark:text-purple-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase">Our Core</div>
                <div className="text-lg font-bold">Our Mission</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower 100,000 homes and commercial enterprises with clean, self-sustaining solar energy while eliminating reliance on fossil-fuel utility grids.
            </p>
          </div>

          {/* Vision Tile */}
          <div
            className={`rounded-3xl p-6 border shadow-sm ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2E8B57]/10 text-[#2E8B57] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#2E8B57]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase">Future Outlook</div>
                <div className="text-lg font-bold">Our Vision</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To pioneer zero-carbon microgrids and intelligent solar energy storage infrastructure that powers sustainable communities for generations.
            </p>
          </div>
        </div>

        {/* Bottom Banner Image & Quality Badges */}
        <div className="md:col-span-12 rounded-3xl overflow-hidden relative h-64 sm:h-80 shadow-lg border border-slate-200 dark:border-slate-800">
          <img
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
            alt="SolarTech Technicians"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
            <div className="max-w-xl">
              <div className="text-amber-400 font-extrabold text-xs uppercase tracking-widest mb-1">
                Engineering Excellence
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold">
                Every Panel Hand-Inspected. Every Install Certified.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                We never outsource our installations to third-party sub-contractors. Our in-house master electricians guarantee 100% safety, code compliance, and thermal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
