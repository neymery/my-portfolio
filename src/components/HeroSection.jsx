import { Github, Linkedin, Mail, Twitter, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 animate-float">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-blue-500 font-medium">Available for opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sarah Chen
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 mb-8">
          Full Stack Developer crafting stellar digital experiences
        </p>

        <p className="text-lg text-gray-400/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building beautiful, functional applications that make a difference. I transform ideas into
          reality using modern technologies and creative problem-solving.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white rounded-lg font-semibold hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-500"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-500"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:sarah@example.com"
            className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-500"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-blue-500/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        </div>
      </div>
    </section>
  )
}