import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { MENU_ITEMS } from '../constants/header';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const getLinkClass = (href: string) => {
    const sectionId = href.replace('#', '');
    return `transition-colors ${
      activeSection === sectionId
        ? 'text-accent'
        : 'text-primary dark:text-gray-300 hover:text-accent'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold dark:text-white">
            wandhx
          </a>
          
          <div className="flex items-center space-x-4">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={getLinkClass(item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-primary dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={getLinkClass(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
