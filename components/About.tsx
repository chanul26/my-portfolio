import { Code, Palette, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that follows best practices',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that users love',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Building fast, optimized applications for the best user experience',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams to deliver successful projects',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Hello! I'm a passionate developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I’m a second-year Computer Science student with a strong interest in software
              and web development. I enjoy learning how modern applications are designed,
              built, and scaled using current technologies.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am actively learning and working with technologies such as Java, Python,
              JavaScript, React, Flutter, and Dart. My goal is to grow into a full-stack
              developer by building a solid foundation in both frontend and backend
              development.
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              As a student, I focus on improving my problem-solving skills, understanding
              core computer science concepts, and continuously learning through coursework
              and personal practice. I am motivated to keep developing my skills and take on
              more challenging projects as I progress.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
