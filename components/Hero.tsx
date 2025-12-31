import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, Twitter, Facebook } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-white">
              CN<span className="text-cyan-400">.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                Hi, I'm <span className="whitespace-nowrap text-cyan-400">Chanul Nanvidu</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 font-semibold mb-6">
                Full Stack Developer
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                Aspiring AI/ML Researcher & Data Science Enthusiast
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
                >
                  Hire Me
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all font-semibold"
                >
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-slate-600 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-slate-600 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-slate-600 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div
              className={`relative transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
                {/* Profile Image Container with Dark Vignette Effect */}
                <div className="relative">
                  <div className="relative w-full aspect-square">
                    <img
                      src="/profilepic-removebg-preview.png"
                      alt="Chanul Nanvidu"
                      className="w-full h-full object-cover"
                      style={{
                        maskImage: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)'
                      }}
                      onError={(e) => {
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          e.currentTarget.style.display = 'none';
                          parent.classList.add('bg-gradient-to-br', 'from-slate-700', 'to-slate-900', 'flex', 'items-center', 'justify-center');
                          parent.innerHTML = '<span class="text-white text-8xl font-bold">CN</span>';
                        }
                      }}
                    />
                    
                    {/* Dark Overlay from Left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Cyan Accent Lines - Diagonal across face */}

                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-slate-800 border-2 border-cyan-500 rounded-xl p-4 shadow-xl z-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-white font-semibold">Available for Work</p>
                      <p className="text-gray-400 text-sm">Full Stack Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}