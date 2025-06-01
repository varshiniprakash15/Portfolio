import { Button } from './ui/button';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/varshiniprakash15', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/varshini-prakash-247a0b24b/', icon: Linkedin },
    { name: 'LeetCode', url: 'https://leetcode.com/u/varshiniprakash/', icon: ExternalLink },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              VP
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Varshini Prakash
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Computer Science Engineering Student
            </p>
            
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Amazon Future Engineer Scholar | Full-Stack Developer | Problem Solver
              <br />
              Building innovative solutions with modern technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={scrollToProjects}
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                  <link.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
