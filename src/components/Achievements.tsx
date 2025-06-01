
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Trophy, Users, Code, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Amazon Future Engineer Scholar",
      description: "Selected as one of the top 500 scholars in India for excellence in computer science and engineering",
      icon: Award,
      type: "Scholarship",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      title: "U-Go Ambassador",
      description: "Represented India in Vietnam as a cultural and technological ambassador",
      icon: Users,
      type: "Leadership",
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      title: "LeetCode Problem Solver",
      description: "Successfully solved 200+ algorithmic problems demonstrating strong problem-solving skills",
      icon: Code,
      type: "Technical",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50"
    },
    {
      title: "National Hackathon - Top 10",
      description: "Secured top 10 position in National Hackathon at AIT, Chikmagalur",
      icon: Trophy,
      type: "Competition",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    }
  ];

  const certifications = [
    "Participated in 5+ hackathons with notable achievements",
    "Open Source contributions via GirlScript Summer of Code (JavaScript, React)",
    "Multiple technical workshops and coding bootcamps",
    "Active contributor to community coding initiatives"
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Achievements & Recognition
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition for academic excellence, technical skills, and community contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-full h-1 bg-gradient-to-r ${achievement.color} mb-6 rounded-full`} />
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`w-8 h-8 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`} style={{WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {achievement.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <Star className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Certifications & Extracurricular Activities
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">9.39</p>
                <p className="text-gray-600 text-sm">Current CGPA</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">200+</p>
                <p className="text-gray-600 text-sm">LeetCode Problems</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">5+</p>
                <p className="text-gray-600 text-sm">Hackathons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
