"use client";
import React, { useState } from 'react';
import { skillsData } from '@/data';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    [skillsData[0]?.title] // Only first category expanded
  );

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <section className="py-20" id="skills">
      <h1 className="heading text-center text-3xl font-bold text-gray-100 mb-12">
        My <span className="text-blue-500">Skills</span>
      </h1>

      <div className="mx-auto space-y-4">
        {skillsData.map((category) => {
          const isExpanded = expandedCategories.includes(category.title);
          
          return (
            <div
              key={category.title}
              className="rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500/50"
            >
              {/* Header - Always Visible */}
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                {isExpanded ? (
                  <FaChevronUp className="text-blue-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>

              {/* Expandable Skills Grid */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-2">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all group"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <span className="text-xs text-gray-300 text-center font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
