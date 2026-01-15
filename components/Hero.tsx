import { useState, useEffect } from 'react';
import { Github, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/useTheme';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDownloadCV = async () => {
    try {
      // Fetch the PDF file from the public folder
      const response = await fetch('/Chanul.pdf');
      
      if (!response.ok) {
        throw new Error('CV file not found');
      }

      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Chanul_Nanvidu_CV.pdf';
      link.style.display = 'none';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      
      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: try direct download
      const link = document.createElement('a');
      link.href = '/Chanul.pdf';
      link.download = 'Chanul_Nanvidu_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  const handleMobileMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    scrollToSection(e, sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-gradient-to-br from-white via-gray-50 to-blue-50' 
        : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-white border-gray-200'
          : 'bg-slate-900 border-slate-700'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className={`text-xl sm:text-2xl font-bold transition-colors ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              CN<span className="text-cyan-500">.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className={`transition-colors ${
                  activeSection === 'home' 
                    ? 'text-cyan-500' 
                    : theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className={`transition-colors ${
                  activeSection === 'about' 
                    ? 'text-cyan-500' 
                    : theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-300 hover:text-white'
                }`}
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, 'skills')}
                className={`transition-colors ${
                  activeSection === 'skills' 
                    ? 'text-cyan-500' 
                    : theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-300 hover:text-white'
                }`}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className={`transition-colors ${
                  activeSection === 'projects' 
                    ? 'text-cyan-500' 
                    : theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-300 hover:text-white'
                }`}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-cyan-500' 
                    : theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </a>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-cyan-600'
                    : 'bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-cyan-400'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    : 'bg-slate-800 hover:bg-slate-700 text-gray-300'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-300 hover:bg-slate-800'
                }`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden border-t transition-colors ${
              theme === 'light'
                ? 'border-gray-200 bg-white'
                : 'border-slate-700 bg-slate-900'
            }`}>
              <div className="px-4 py-4 space-y-2">
                <a 
                  href="#home" 
                  onClick={(e) => handleMobileMenuClick(e, 'home')}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'home' 
                      ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' 
                      : theme === 'light' 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => handleMobileMenuClick(e, 'about')}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'about' 
                      ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' 
                      : theme === 'light' 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  onClick={(e) => handleMobileMenuClick(e, 'skills')}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'skills' 
                      ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' 
                      : theme === 'light' 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  onClick={(e) => handleMobileMenuClick(e, 'projects')}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'projects' 
                      ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' 
                      : theme === 'light' 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  Portfolio
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleMobileMenuClick(e, 'contact')}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    activeSection === 'contact' 
                      ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' 
                      : theme === 'light' 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className={`text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-4 leading-tight transition-colors ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Hi, I'm <span className="whitespace-nowrap text-cyan-500">Chanul Nanvidu</span>
              </h1>
              <h2 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 transition-colors ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-400'
              }`}>
                Full Stack Developer
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl transition-colors ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                Aspiring AI/ML Researcher & Data Science Enthusiast
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
                <button
                  onClick={scrollToContact}
                  className={`px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg ${
                    theme === 'light'
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-600/50'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-cyan-500/50'
                  }`}
                >
                  Hire Me
                </button>
                <button
                  onClick={handleDownloadCV}
                  className={`px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base border-2 rounded-lg transition-all font-semibold ${
                    theme === 'light'
                      ? 'border-cyan-600 text-cyan-600 hover:bg-cyan-50'
                      : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/chanul26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                    theme === 'light'
                      ? 'border-gray-300 text-gray-600 hover:text-cyan-600 hover:border-cyan-500'
                      : 'border-slate-600 text-gray-400 hover:text-cyan-400 hover:border-cyan-400'
                  }`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chanul-nanvidu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                    theme === 'light'
                      ? 'border-gray-300 text-gray-600 hover:text-cyan-600 hover:border-cyan-500'
                      : 'border-slate-600 text-gray-400 hover:text-cyan-400 hover:border-cyan-400'
                  }`}
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div
              className={`relative transition-all duration-1000 delay-500 order-first lg:order-last ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative w-full max-w-md sm:max-w-lg mx-auto lg:ml-auto lg:mr-0">
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
                          if (theme === 'light') {
                            parent.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-300', 'flex', 'items-center', 'justify-center');
                            parent.innerHTML = '<span class="text-gray-700 text-8xl font-bold">CN</span>';
                          } else {
                            parent.classList.add('bg-gradient-to-br', 'from-slate-700', 'to-slate-900', 'flex', 'items-center', 'justify-center');
                            parent.innerHTML = '<span class="text-white text-8xl font-bold">CN</span>';
                          }
                        }
                      }}
                    />
                    
                    {/* Overlay from Left */}
                    <div className={`absolute inset-0 bg-gradient-to-r pointer-events-none transition-colors ${
                      theme === 'light'
                        ? 'from-white via-transparent to-transparent'
                        : 'from-slate-950 via-transparent to-transparent'
                    }`}></div>
                    
                    {/* Cyan Accent Lines - Diagonal across face */}

                  </div>
                </div>

                {/* Floating Badge */}
                <div className={`absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 border-2 border-cyan-500 rounded-xl p-3 md:p-4 shadow-xl z-20 transition-colors ${
                  theme === 'light'
                    ? 'bg-white border-cyan-600'
                    : 'bg-slate-800 border-cyan-500'
                }`}>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <p className={`text-xs md:text-sm font-semibold transition-colors ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>
                        Available for Work
                      </p>
                      <p className={`text-xs transition-colors ${
                        theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        Full Stack Projects
                      </p>
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