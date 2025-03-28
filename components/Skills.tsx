import React from 'react';
import { skillsData } from '@/data';

export const Skills = () => {
  return (
    <div className="py-16" id="skills">
      <h1 className="heading">
        My <span className="text-blue-500">Skills</span>
      </h1>
      
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-[#13162d]/50 rounded-xl p-6 border border-white/[0.1] hover:border-blue-500/50 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="flex items-center gap-2 bg-[#13162d]/80 p-2.5 rounded-lg hover:bg-blue-500/10 transition-all duration-200"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-md">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                  </div>
                  <span className="text-xs md:text-sm whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
