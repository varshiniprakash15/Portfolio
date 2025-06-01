
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Risk Forge",
      date: "December 2024",
      description: "Advanced stock portfolio analysis application utilizing machine learning algorithms including LSTM neural networks and Monte Carlo simulation for predictive analytics and risk assessment.",
      technologies: ["Python", "Streamlit", "LSTM", "Machine Learning", "Monte Carlo"],
      features: [
        "Real-time stock analysis",
        "LSTM-based price prediction",
        "Monte Carlo risk simulation",
        "Interactive dashboard"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Farm Unity",
      date: "October 2024",
      description: "Comprehensive platform connecting farmers with laborers and agricultural services, featuring an innovative IVR system for accessibility in rural areas.",
      technologies: ["React", "MongoDB", "Node.js", "IVR System"],
      features: [
        "Farmer-laborer matching",
        "Service marketplace",
        "IVR accessibility",
        "Real-time communication"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Arivu",
      date: "September 2024",
      description: "Self-Help Group (SHG) management platform with comprehensive loan tracking, performance analytics, and financial management tools for rural communities.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      features: [
        "SHG management system",
        "Loan tracking & analytics",
        "Performance monitoring",
        "Financial reporting"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative solutions built with modern technologies, focusing on real-world problems and user impact
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-500 mt-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{project.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 hover:shadow-md transition-shadow"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => window.open('https://github.com/varshiniprakash15', '_blank')}
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
