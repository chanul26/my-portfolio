import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'Education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Westminster',
    period: '2024-2028',
    description: '2nd Year student',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    type: 'Education',
    title: 'Foundation',
    company: 'Informatics Institute of Technology',
    period: '2023-2024',
    description: '',
    skills: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-slate-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center z-10">
                  {exp.type === 'work' ? (
                    <Briefcase className="text-white" size={24} />
                  ) : (
                    <GraduationCap className="text-white" size={24} />
                  )}
                </div>

                <div
                  className={`ml-28 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
