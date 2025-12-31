import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'LUVO Clothing (Ongoing)',
    description: 'A full-featured e-commerce platform with cart functionality, user authentication, and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe','Firebase'],
    github: 'https://github.com/ravindu212/FBA',
    live: 'https://fba-frontend-two.vercel.app/',
  },
  {
    title: 'LamiGO (Ongoing)',
    description: 'Last Mile Delivery Optimisation Platfoarm using Route Optimization Algorithms to enhance delivery efficiency and reduce costs for logistics companies.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Flutter','Node.Js','PostgreSQL','DynamoDB','TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/chanul26/LamiGo',
    live: 'https://www.lamigo.lk/',
  },
  {
    title: 'Project SDG',
    description: 'Web Application for Project SDG using HTML & CSS ',
    image: 'data:image/png;base64,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',
    tags: [ 'HTML','CSS'],
    github: 'https://github.com/chanul26/Project-SDG',
    live: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
