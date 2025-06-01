import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Trophy, Users, Code, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Amazon Future Engineer Scholar",
      description: "Selected among top 500 scholars in India for excellence in computer science and engineering.",
      icon: Award,
      type: "Scholarship",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-100"
    },
    {
      title: "U-Go Ambassador",
      description: "Represented India in Vietnam as a cultural and technological ambassador.",
      icon: Users,
      type: "Leadership",
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-100"
    },
    {
      title: "LeetCode Problem Solver",
      description: "Solved over 200 algorithmic problems, showcasing analytical and problem-solving ability.",
      icon: Code,
      type: "Technical",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-100"
    },
    {
      title: "National Hackathon - Top 10",
      description: "Achieved top 10 ranking at National Hackathon held at AIT, Chikmagalur.",
      icon: Trophy,
      type: "Competition",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-100"
    }
  ];

  const certifications = [
    "Participated in 5+ hackathons with notable achievements.",
    "Open source contributor via GirlScript Summer of Code (JavaScript, React).",
    "Attended technical workshops and bootcamps (AI/ML, Web Dev).",
    "Active contributor in coding communities and mentorship programs."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Achievements & Recognition
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognized for academic excellence, leadership, and technical contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="group transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl border border-gray-200"
              >
                <CardContent className="p-6">
                  <div className={`h-1 w-full bg-gradient-to-r ${item.color} rounded-full mb-6`} />
                  <div className="flex gap-5 items-start">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      <item.icon
                        className={`w-7 h-7 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 rounded-full">
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white shadow-xl border border-gray-200 rounded-2xl">
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
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-white to-blue-50 border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">9.39</p>
                <p className="text-gray-500 text-sm">Current CGPA</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">200+</p>
                <p className="text-gray-500 text-sm">LeetCode Problems</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">5+</p>
                <p className="text-gray-500 text-sm">Hackathons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
