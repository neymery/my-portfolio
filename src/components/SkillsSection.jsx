export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "Python / Django", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker / Kubernetes", level: 80 },
        { name: "AWS / Azure", level: 85 },
        { name: "Git / GitHub", level: 95 },
        { name: "CI/CD", level: 82 },
      ],
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Tailwind",
    "GraphQL",
    "REST API",
    "Redux",
    "Vue.js",
    "Express",
    "Git",
    "Figma",
    "Vercel",
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Skills & <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-500">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 font-medium cursor-default text-gray-300 hover:text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}