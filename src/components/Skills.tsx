
import { Card, CardContent } from './ui/card';
import { Code, Globe, Database, Settings, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "C", "C++"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL", "MongoDB"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: ["Docker", "VS Code", "GitHub"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Subjects",
      icon: BookOpen,
      skills: ["DSA", "OOPs", "DBMS", "OS"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <span className="text-sm font-medium text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-white rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem Solving Achievement</h3>
              <p className="text-3xl font-bold text-blue-600 mb-1">200+</p>
              <p className="text-gray-600">Problems Solved on LeetCode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
