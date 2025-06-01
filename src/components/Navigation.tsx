
import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/14EHzZtvwcJbapcGzaBKW8Uz1jcSez0b8/view?usp=drive_link', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          VP
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionClick(item.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-600",
                activeSection === item.id
                  ? "text-blue-600"
                  : "text-gray-600"
              )}
            >
              {item.label}
            </button>
          ))}
          <Button 
            onClick={handleDownloadResume}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Download Resume
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={cn("w-6 h-0.5 bg-gray-600 transition-all", isMenuOpen && "rotate-45 translate-y-1.5")} />
              <div className={cn("w-6 h-0.5 bg-gray-600 transition-all", isMenuOpen && "opacity-0")} />
              <div className={cn("w-6 h-0.5 bg-gray-600 transition-all", isMenuOpen && "-rotate-45 -translate-y-1.5")} />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionClick(item.id);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "block w-full text-left text-sm font-medium transition-colors hover:text-blue-600",
                  activeSection === item.id
                    ? "text-blue-600"
                    : "text-gray-600"
                )}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={handleDownloadResume}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
