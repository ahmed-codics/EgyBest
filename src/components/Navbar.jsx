import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle click events
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-white text-2xl md:text-3xl permanent-marker-regular"
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              EgyBest
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero" 
              className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg"
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              الرئيسية
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg"
              onClick={(e) => handleNavClick(e, 'services')}
            >
              خدماتنا
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              من نحن
            </a>
            <a 
              href="#tracking" 
              className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg"
              onClick={(e) => handleNavClick(e, 'tracking')}
            >
              تتبع الشحن
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              اتصل بنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-800 rounded-lg shadow-lg py-4">
            <div className="flex flex-col space-y-3 px-6">
              <a 
                href="#hero" 
                className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg py-2"
                onClick={(e) => handleNavClick(e, 'hero')}
              >
                الرئيسية
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg py-2"
                onClick={(e) => handleNavClick(e, 'services')}
              >
                خدماتنا
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg py-2"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                من نحن
              </a>
              <a 
                href="#tracking" 
                className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg py-2"
                onClick={(e) => handleNavClick(e, 'tracking')}
              >
                تتبع الشحن
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-blue-200 transition-colors duration-300 tajawal-medium text-lg py-2"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                اتصل بنا
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}