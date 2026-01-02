import { Briefcase, GraduationCap } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications, mentoring junior developers, and implementing best practices across the team.",
      achievements: [
        "Architected microservices infrastructure serving 1M+ users",
        "Reduced application load time by 60% through optimization",
        "Led team of 5 developers on flagship product",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupHub",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects, focusing on modern web technologies and responsive design.",
      achievements: [
        "Built 15+ production-ready web applications",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Improved code quality with comprehensive testing strategies",
      ],
    },
    {
      title: "Junior Developer",
      company: "WebSolutions Ltd.",
      location: "New York, NY",
      period: "2019 - 2020",
      description:
        "Collaborated with senior developers on various projects, learning best practices and modern development workflows.",
      achievements: [
        "Contributed to 10+ client projects",
        "Developed reusable component library",
        "Participated in code reviews and agile ceremonies",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2017 - 2019",
      description: "Specialized in Software Engineering and Web Technologies",
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "MIT",
      period: "2013 - 2017",
      description: "Graduated with Honors, Dean's List all semesters",
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Experience & <span className="text-blue-500">Education</span>
          </h2>
          <p className="text-xl text-gray-400">My professional journey</p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h3 className="text-3xl font-bold text-white">Work Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-gray-900" />

                <div className="pb-8">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold mb-1 text-white">{exp.title}</h4>
                    <p className="text-lg text-blue-500 mb-1">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300/90 mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2 text-gray-300/80">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
              >
                <h4 className="text-xl font-bold mb-2 text-white">{edu.degree}</h4>
                <p className="text-lg text-blue-500 mb-2">{edu.school}</p>
                <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
                <p className="text-gray-300/80">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}