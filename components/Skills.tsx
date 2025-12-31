const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS','Flutter', 'Dart'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & Databases',
    skills: ['Git & GitHub', , 'VS Code', 'Figma', 'Firebase', 'MySQL'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Category Header */}
              <div className="bg-slate-800 text-center py-4 rounded-md font-semibold text-lg mb-6">
                {category.title}
              </div>

              {/* Skill List */}
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-slate-900 border border-slate-700 rounded-full px-5 py-2 text-sm text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
