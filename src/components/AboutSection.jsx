import { Code2, Coffee, Palette, Zap, Heart, Rocket } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    { icon: Code2, label: "5+ Years Experience", color: "text-blue-600" },
    { icon: Rocket, label: "50+ Projects", color: "text-purple-600" },
    { icon: Heart, label: "Passion Driven", color: "text-pink-600" },
    { icon: Zap, label: "Fast Learner", color: "text-blue-600" },
  ]

  const interests = [
    { icon: Code2, text: "Clean Code" },
    { icon: Palette, text: "UI/UX Design" },
    { icon: Coffee, text: "Coffee Enthusiast"},
    { icon: Rocket, text: "Space Exploration" },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-xl text-gray-400">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-pink-500/20 p-1 animate-pulse">
              <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  SC
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl animate-pulse" />
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Hey there! I'm Sarah, a passionate full-stack developer with a love for creating beautiful and functional
              web applications. My journey in tech started 5 years ago, and I haven't looked back since.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              I specialize in building scalable applications using modern technologies like React, Node.js, and cloud
              platforms. I believe in writing clean, maintainable code and creating user experiences that delight.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source
              projects, or stargazing (hence the space theme!). I'm always excited to take on new challenges and
              collaborate on innovative projects.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <item.icon className={`w-8 h-8 mb-2 ${item.color}`} />
                  <p className="font-semibold text-white">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <interest.icon className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-300">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}