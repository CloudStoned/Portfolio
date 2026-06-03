'use client';

import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

type FilterType = 'all' | 'workflows' | 'deep-learning' | 'rag' | 'web-app';

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter((p) => {
    if (projectFilter === 'all') return true;
    if (!p.category || p.category === '') return true;
    return p.category === projectFilter;
  });

  return (
    <section id="projects" className="py-20 px-6 sm:px-8 bg-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" id="projects-heading-block">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5] block">
              SELECTED WORK
            </span>
            <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Automation Systems In Action</h2>
            <p className="max-w-xl text-sm text-[#555555]">
              A display of real automation frameworks, deep learning tasks, and integrations completed to optimize workflows.
            </p>
          </div>

          <ul className="flex flex-wrap gap-1 rounded border border-[#E5E5E2] p-1 bg-[#F9F9F7] w-fit shrink-0" id="filter-tabs">
            {(['all', 'workflows', 'deep-learning', 'rag', 'web-app'] as const).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setProjectFilter(tab)}
                  className={`text-[10px] uppercase tracking-wider px-3 py-1.5 rounded font-bold transition-all duration-150 cursor-pointer ${
                    projectFilter === tab 
                      ? 'bg-[#4A6FA5] text-white shadow-xs' 
                      : 'text-[#555555] hover:text-[#1A1A1A]'
                  }`}
                >
                  {tab === 'all' && 'All Projects'}
                  {tab === 'workflows' && 'Workflows'}
                  {tab === 'deep-learning' && 'Computer Vision'}
                  {tab === 'rag' && 'RAG / QA'}
                  {tab === 'web-app' && 'Web Apps'}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects-grid">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <article 
                className="bg-white border border-[#E5E5E2] rounded-md p-6 hover:border-[#4A6FA5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-200 flex flex-col justify-between space-y-4 h-full"
                id={`project-card-${project.id}`}
              >
                <div className="space-y-3">
                  {project.category && (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#4A6FA5] bg-[#4A6FA5]/10 px-2 py-0.5 rounded inline-block">
                      {project.category === 'workflows' ? 'n8n Workflow' :
                       project.category === 'deep-learning' ? 'Computer Vision' :
                       project.category === 'rag' ? 'AI Retrieval' :
                       project.category === 'web-app' ? 'Web App' :
                       project.category}
                    </span>
                  )}

                  <h3 className="text-base font-black text-[#1A1A1A] tracking-tight">{project.title}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed">{project.description}</p>
                  
                  {project.automationAngle && (
                    <div className="bg-[#F9F9F7] border border-[#E5E5E2] rounded p-3 space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#4A6FA5] flex items-center gap-1">
                        ⚡ Automation Impact
                      </span>
                      <p className="text-xs text-[#555555] italic font-normal leading-normal">
                        &ldquo;{project.automationAngle}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <hr className="border-[#E5E5E2]" />
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#EEEFEA] text-[#555555] border border-[#E5E5E2]/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
