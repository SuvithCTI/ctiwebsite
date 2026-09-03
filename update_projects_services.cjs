const fs = require('fs');
const path = require('path');

// 1. UPDATE mockData.ts with imageUrls
let mockData = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Replace PROJECTS with imageUrl additions
const projectImages = {
  'omni-pay': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  'neuro-scale': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
  'vitalis-medsync': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
  'aura-marketplace': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  'logiflow-prime': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  'skillorbit-pro': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=80',
  'cyberguard-ai': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
  'hypercart-engine': 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=900&q=80'
};

const serviceImages = {
  'ai-automation': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
  'cloud-devops': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  'enterprise-web': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  'mobile-engineering': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
  'fintech-web3': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  'product-design': 'https://images.unsplash.com/photo-1581291518655-9523c932deb6?auto=format&fit=crop&w=900&q=80'
};

// Add imageUrl to SERVICES
Object.entries(serviceImages).forEach(([id, imgUrl]) => {
  mockData = mockData.replace(
    new RegExp(`(id:\\s*'${id}',[\\s\\S]*?deliverables:[\\s\\S]*?\\])`, 'g'),
    `$1,\n    imageUrl: '${imgUrl}'`
  );
});

// Add imageUrl to PROJECTS
Object.entries(projectImages).forEach(([id, imgUrl]) => {
  mockData = mockData.replace(
    new RegExp(`(id:\\s*'${id}',[\\s\\S]*?gradientTheme:[\\s\\S]*?,)`, 'g'),
    `$1\n    imageUrl: '${imgUrl}',`
  );
});

fs.writeFileSync('src/data/mockData.ts', mockData, 'utf8');
console.log('mockData.ts updated with project and service images.');

// 2. UPDATE ServicesSection.tsx with rich background and card image headers
const servicesSectionContent = `import React, { useState } from 'react';
import { SERVICES } from '../../data/mockData';
import { ServiceItem } from '../../types';
import { Cpu, CloudLightning, LayoutGrid, Smartphone, ShieldCheck, Sparkles, ArrowRight, X, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenEstimator: () => void;
  onContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimator, onContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'CloudLightning': return <CloudLightning className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#FAF4EE] text-[#1E1511] overflow-hidden border-t border-[#EADBCE]">
      
      {/* Rich Atmospheric Glow Background & Architectural Grid to replace plain whitespace */}
      <div className="absolute top-20 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#E07A4F]/15 via-[#F6DAC2]/20 to-transparent blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#B85D38]/15 via-[#F6DAC2]/25 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-lines opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-pill text-[11px] font-bold tracking-widest uppercase mb-4 border border-[#EADBCE]">
            Services & Expertise
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-normal text-[#1E1511] tracking-tight leading-[1.1] mb-4">
            Crafting software with <span className="text-editorial-italic">deliberate simplicity & power</span>.
          </h2>
          <p className="text-[#725C4E] text-base leading-relaxed">
            We work across the entire product lifecycle—from zero-to-one architectural scoping to high-concurrency cloud infrastructure and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="warm-card warm-card-hover rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group border border-[#EADBCE] bg-[#FFFFFF] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Optional Service Preview Visual Header */}
              {service.imageUrl && (
                <div className="relative h-40 w-full overflow-hidden bg-[#F4ECE3]">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-black/20" />
                  <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#B85D38] shadow-md border border-[#EADBCE]">
                    {getIcon(service.iconName)}
                  </div>
                </div>
              )}

              <div className="p-7">
                <h3 className="font-editorial text-2xl font-bold text-[#1E1511] group-hover:text-[#B85D38] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#725C4E] leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#523E32]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B85D38] shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 pb-6 pt-3 border-t border-[#F4ECE3] flex items-center justify-between">
                <div className="flex flex-wrap gap-1 max-w-[80%]">
                  {service.technologies.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF4EE] border border-[#EADBCE] text-[#725C4E]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="w-8 h-8 rounded-full bg-[#F4ECE3] flex items-center justify-center text-[#725C4E] group-hover:bg-[#B25329] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#EADBCE] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 text-[#1E1511] max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#8C7362] hover:text-[#1E1511] hover:bg-[#F4ECE3] transition"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedService.imageUrl && (
              <div className="h-48 sm:h-60 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 overflow-hidden relative">
                <img src={selectedService.imageUrl} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-black/20" />
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F4ECE3] text-[#B85D38]">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1E1511]">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            <p className="text-sm text-[#523E32] leading-relaxed mb-8">
              {selectedService.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-[#FAF4EE] border border-[#EADBCE]">
                <h4 className="text-xs font-bold text-[#8C6F5E] uppercase tracking-wider mb-3">Key Capabilities</h4>
                <ul className="space-y-2.5 text-xs text-[#523E32]">
                  {selectedService.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B85D38] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4ECE3] border border-[#EADBCE]">
                <h4 className="text-xs font-bold text-[#B85D38] uppercase tracking-wider mb-3">Deliverables & Specs</h4>
                <ul className="space-y-2.5 text-xs text-[#1E1511] font-medium">
                  {selectedService.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B85D38] shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EADBCE] flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenEstimator();
                }}
                className="btn-warm-outline px-6 py-2.5 rounded-full text-xs font-semibold"
              >
                Estimate This Service
              </button>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onContact();
                }}
                className="btn-terracotta px-7 py-3 rounded-full text-xs font-semibold tracking-wide"
              >
                Start Architectural Scoping
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
`;

fs.writeFileSync('src/components/home/ServicesSection.tsx', servicesSectionContent, 'utf8');
console.log('ServicesSection.tsx updated with background and images.');

// 3. UPDATE ProjectsPage.tsx to render project image previews on every card
const projectsPageContent = `import React, { useState } from 'react';
import { PROJECTS } from '../../data/mockData';
import { ProjectItem, NavigationTab } from '../../types';
import { ProjectModal } from './ProjectModal';
import { Search, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  setActiveTab: (tab: NavigationTab) => void;
  openEstimator: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'FinTech', 'AI & Automation', 'Cloud & SaaS', 'Healthcare', 'Enterprise', 'Mobile Apps'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-[#FAF4EE] text-[#1E1511] overflow-hidden">
      
      {/* Rich Atmospheric Glow Background & Architectural Grid */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#E07A4F]/15 via-[#F6DAC2]/20 to-transparent blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#B85D38]/15 via-[#F6DAC2]/25 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-architectural-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-lines opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-pill text-[11px] font-bold tracking-widest uppercase mb-4 border border-[#EADBCE]">
            Proven Track Record
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl font-normal text-[#1E1511] tracking-tight leading-tight mb-4">
            Selected Works & <span className="text-editorial-italic">Case Studies</span>
          </h1>
          <p className="text-[#725C4E] text-base leading-relaxed">
            Explore our engineering deployments across FinTech gateways, private enterprise AI agents, headless commerce, and HIPAA-compliant telehealth ecosystems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={\`px-4 py-2 rounded-full text-xs font-semibold transition \${
                  selectedCategory === cat
                    ? 'bg-[#1E1511] text-white shadow-md'
                    : 'bg-[#FFFFFF] text-[#725C4E] hover:text-[#1E1511] border border-[#EADBCE]'
                }\`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C7362] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or keyword..."
              className="w-full bg-[#FFFFFF] border border-[#EADBCE] rounded-full pl-10 pr-4 py-2 text-xs text-[#1E1511] placeholder-[#A38F81] outline-none shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="warm-card warm-card-hover rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group bg-[#FFFFFF] border border-[#EADBCE] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Visual Image Preview Header */}
              {project.imageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-[#F4ECE3]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-black/25" />
                  <span className="absolute top-3.5 left-3.5 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#B85D38] border border-[#EADBCE] shadow-sm">
                    {project.category}
                  </span>
                </div>
              )}

              <div className="p-7">
                <div className="text-xs text-[#725C4E] font-medium mb-1">{project.industry.split('&')[0]}</div>
                <h3 className="font-editorial text-2xl font-bold text-[#1E1511] group-hover:text-[#B85D38] transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-[#725C4E] leading-relaxed mb-6 font-normal line-clamp-2">
                  {project.tagline}
                </p>

                <div className="grid grid-cols-2 gap-2 p-3.5 rounded-xl bg-[#FAF4EE] border border-[#EADBCE] mb-4">
                  {project.impactMetrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="text-[10px] text-[#725C4E] truncate">{m.label}</div>
                      <div className="font-editorial text-lg font-bold text-[#B85D38]">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 pb-6 pt-3 border-t border-[#F4ECE3] flex items-center justify-between">
                <div className="flex flex-wrap gap-1 max-w-[80%]">
                  {project.techStack.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF4EE] border border-[#EADBCE] text-[#725C4E]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="w-8 h-8 rounded-full bg-[#F4ECE3] flex items-center justify-center text-[#725C4E] group-hover:bg-[#B25329] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onContact={() => setActiveTab('contact')}
      />
    </div>
  );
};
`;

fs.writeFileSync('src/components/projects/ProjectsPage.tsx', projectsPageContent, 'utf8');
console.log('ProjectsPage.tsx updated with project image headers and ambient background.');

// 4. UPDATE ProjectModal.tsx to display high-res project image header
const projectModalContent = `import React from 'react';
import { ProjectItem } from '../../types';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#EADBCE] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 text-[#1E1511] max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#8C7362] hover:text-[#1E1511] hover:bg-[#F4ECE3] transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {project.imageUrl && (
          <div className="h-52 sm:h-64 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 overflow-hidden relative">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-black/30" />
            <div className="absolute bottom-4 left-6 sm:left-10">
              <span className="text-xs px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#B85D38] font-bold border border-[#EADBCE] shadow-sm">
                {project.category}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-[#725C4E] font-semibold">{project.industry}</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1E1511] mb-2">
          {project.title}
        </h2>
        <p className="text-xs text-[#725C4E] mb-6 font-medium">Client Partner: {project.client}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#FAF4EE] border border-[#EADBCE] mb-6">
          {project.impactMetrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-[11px] text-[#725C4E]">{m.label}</div>
              <div className="font-editorial text-2xl font-bold text-[#B85D38] mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-6">
          <div className="p-5 rounded-2xl bg-[#FAF4EE] border border-[#EADBCE]">
            <h4 className="text-xs font-bold text-[#8C6F5E] uppercase tracking-wider mb-2">The Engineering Challenge</h4>
            <p className="text-xs sm:text-sm text-[#523E32] leading-relaxed">{project.challenge}</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F4ECE3] border border-[#EADBCE]">
            <h4 className="text-xs font-bold text-[#B85D38] uppercase tracking-wider mb-2">Code Thrive Architectural Solution</h4>
            <p className="text-xs sm:text-sm text-[#1E1511] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#1E1511] uppercase tracking-wider mb-2.5">Deployed Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-[#FAF4EE] border border-[#EADBCE] text-xs font-semibold text-[#725C4E]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-5 border-t border-[#EADBCE] flex items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onContact();
            }}
            className="btn-terracotta px-7 py-3 rounded-full text-xs font-semibold tracking-wide shadow-md"
          >
            Request Similar Architecture
          </button>
        </div>

      </div>
    </div>
  );
};
`;

fs.writeFileSync('src/components/projects/ProjectModal.tsx', projectModalContent, 'utf8');
console.log('ProjectModal.tsx updated.');

console.log('All updates finished successfully.');

