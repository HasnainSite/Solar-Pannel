import React, { useState } from 'react';
import { PROJECTS } from '../data/solarData';
import { ProjectItem } from '../types';
import { Layers, MapPin, Zap, DollarSign, ExternalLink, X, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
  onOpenQuoteModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
  ];

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-[#6D28D9]/10 text-[#6D28D9] dark:bg-purple-500/10 dark:text-purple-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Layers className="w-4 h-4 text-[#FFC107]" />
          <span>Proven Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Featured Solar Installations & Case Studies
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Explore a selection of our recent residential rooftop installations, commercial plazas, and utility-scale industrial solar projects.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center gap-2 mb-10 overflow-x-auto pb-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id as any)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === tab.id
                ? 'bg-[#6D28D9] text-white shadow-md shadow-purple-900/20'
                : darkMode
                ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {/* Image Box */}
            <div className="h-56 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-3">
                <span className="bg-[#6D28D9] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                <ExternalLink className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.location}</span>
                  <span className="ml-auto text-emerald-400 font-bold">{project.completionYear}</span>
                </div>
                <h3 className="text-lg font-bold text-white line-clamp-1 mt-0.5">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-5 space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Capacity</div>
                  <div className="font-extrabold text-[#6D28D9] dark:text-purple-400 mt-0.5">{project.capacity}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Est. Savings</div>
                  <div className="font-extrabold text-[#2E8B57] mt-0.5">{project.savings}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className={`max-w-3xl w-full rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="relative h-72 sm:h-80">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#2E8B57] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedProject.category} Case Study
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Location</div>
                  <div className="font-extrabold text-sm mt-0.5">{selectedProject.location}</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Capacity</div>
                  <div className="font-extrabold text-sm text-[#0A4D9B] dark:text-blue-400 mt-0.5">{selectedProject.capacity}</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Annual Savings</div>
                  <div className="font-extrabold text-sm text-[#2E8B57] mt-0.5">{selectedProject.savings}</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Total PV Panels</div>
                  <div className="font-extrabold text-sm mt-0.5">{selectedProject.panelsCount} Modules</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase text-slate-400">Project Overview & Results</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description} Designed with high-yield Tier 1 solar modules and smart microinverters to maximize shade tolerance and system longevity.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuoteModal();
                  }}
                  className="bg-[#0A4D9B] hover:bg-[#083a75] text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg"
                >
                  Build a Similar System For My Property
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
