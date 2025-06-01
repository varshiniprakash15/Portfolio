
import { Card, CardContent } from './ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: "Siddaganga Institute of Technology, Tumkur, Karnataka",
      degree: "Bachelor of Engineering in Computer Science",
      period: "2022–2026",
      grade: "CGPA: 9.39",
      icon: GraduationCap
    },
    {
      institution: "Vijaya PU College, Kunigal, Karnataka",
      degree: "Pre-University",
      period: "2020–2022",
      grade: "98.3%",
      icon: Award
    },
    {
      institution: "Kunigal Valley International Residential School",
      degree: "ICSE",
      period: "2019–2020",
      grade: "97%",
      icon: BookOpen
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Computer Science Engineering student with a strong foundation in 
              full-stack development and problem-solving. As an Amazon Future Engineer Scholar, 
              I've had the opportunity to work on innovative projects and contribute to open-source 
              initiatives while maintaining academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                          <edu.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{edu.institution}</h4>
                          <p className="text-blue-600 font-medium mb-2">{edu.degree}</p>
                          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600">
                            <span>{edu.period}</span>
                            <span className="font-semibold text-green-600">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Core Strengths</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Problem Solving</h4>
                  <p className="text-gray-600 text-sm">Solved 200+ problems on LeetCode with strong expertise in Data Structures & Algorithms</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Full-Stack Development</h4>
                  <p className="text-gray-600 text-sm">Experience with modern web technologies including React, Node.js, and database management</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Leadership & Collaboration</h4>
                  <p className="text-gray-600 text-sm">U-Go Ambassador representing India in Vietnam, active in hackathons and open source</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Machine Learning</h4>
                  <p className="text-gray-600 text-sm">Applied ML techniques including LSTM and Monte Carlo Simulation in real projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
