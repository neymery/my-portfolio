import { Github, Linkedin, Mail, Twitter, Heart, Rocket, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    sections: [
      {
        title: "Navigation",
        links: [
          { name: "Home", href: "#home" },
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
        ]
      },
      {
        title: "Connect",
        links: [
          { name: "Experience", href: "#experience" },
          { name: "Contact", href: "#contact" },
          // { name: "Blog", href: "#blog" },
          // { name: "Resume", href: "#resume" },
        ]
      }
    ]
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:meryem@example.com", label: "Email" },
  ]

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="mt-6 absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white">Meryem's Portfolio</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-stack developer passionate about creating beautiful, functional web applications. 
              Let's build something amazing together!
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-500"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Meryem. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}