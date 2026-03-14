"use client";
import { projects } from '@/data';
import React, { useState } from 'react';
import { FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>(
    projects.filter(p => p.featured).map(p => p.id)
  );
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const displayedProjects = showAll ? otherProjects : [];

  const toggleProject = (id: number) => {
    setExpandedProjects(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  const ProjectItem = ({ project, isFeatured }: { project: any; isFeatured?: boolean }) => {
    const isExpanded = expandedProjects.includes(project.id);

    return (
      <div
        className="rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500/50"
      >
        {/* Header - Always Visible */}
        <button
          onClick={() => toggleProject(project.id)}
          className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
          </div>
          {isExpanded ? (
            <FaChevronUp className="text-blue-400" />
          ) : (
            <FaChevronDown className="text-gray-400" />
          )}
        </button>

        {/* Expandable Content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="p-6 pt-2">
            {/* Flex Container: Image Left, Content Right */}
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Project Image - LEFT SIDE */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content - RIGHT SIDE */}
              <div className="lg:w-3/5 flex flex-col gap-4">
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.des}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-xs text-gray-400 font-semibold">Tech Stack:</span>
                  {project.iconLists.map((icon: string, idx: number) => (
                    <div
                      key={idx}
                      className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center border border-gray-600 hover:border-blue-500 transition-colors"
                      title={icon.split('/').pop()?.replace('.svg', '')}
                    >
                      <img src={icon} alt="tech-icon" className="w-6 h-6 object-contain" />
                    </div>
                  ))}
                </div>

                {/* GitHub Link */}
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-center text-3xl font-bold text-gray-100 mb-12">
        My <span className="text-blue-500">Projects</span>
      </h1>

      {/* Featured Projects */}
      <div className="mx-auto space-y-4 mb-8">
        {featuredProjects.map(project => (
          <ProjectItem key={project.id} project={project} isFeatured />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center my-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          {showAll ? 'Show Less' : `Show More Projects (${otherProjects.length})`}
        </button>
      </div>

      {/* Other Projects */}
      <div
        className={`mx-auto space-y-4 transition-all duration-500 ${
          showAll ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {displayedProjects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;