import React from 'react';
import { education } from '@/data';

const Education = () => {
  return (
    <div className="py-16" id="education">
      <h1 className="heading text-center text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-12">
        My <span className="text-blue-500">Education</span>
      </h1>
      <div className="flex flex-col gap-12 mx-auto"
      >
        {education.map((edu) => (
          <div key={edu.university} className="p-10 w-full flex flex-col items-center lg:flex-row lg:items-start gap-6  border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#13162d] rounded-2xl shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <img
              src={edu.img}
              alt={edu.university}
              className="w-24 h-24 object-contain"
            />
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{edu.university}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mt-2">{edu.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.date}</p>
              <p className="text-left text-sm text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                <span className="font-semibold">Courses:</span> {edu.courses}
              </p>
              <p className="text-left text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                <span className="font-semibold">Extracurricular Activities:</span> {edu.extracurriculars}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
