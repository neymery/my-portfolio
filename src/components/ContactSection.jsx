import { useState } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sarah@example.com", href: "mailto:sarah@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ]

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">Let's work together on your next project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Let's talk about everything!</h3>
            <p className="text-gray-300/80 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through the form or contact me directly.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-semibold text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-blue-500"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}