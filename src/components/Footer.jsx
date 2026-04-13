import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/FarooqAzam21', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/farooq-azam-121342274/', label: 'LinkedIn' },
    { icon: FaTwitter, link: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, link: 'mailto:azamfarooq891@gmail.com', label: 'Email' },
  ]

  const handleScroll = (id) => {
    const element = document.querySelector(`#${id}`)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary/50 border-t border-gray-700 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <motion.div className="md:col-span-1">
            <motion.h3
              className="text-2xl font-bold gradient-text mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Farooq Azam
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & AI Enthusiast building amazing web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-smooth text-sm"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Frontend Development',
                'Backend Development',
                'API Development',
              ].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-400 hover:text-blue-400 transition-smooth text-sm">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-smooth"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="text-lg" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Your Name. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-smooth"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-smooth"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 rounded-lg glass text-sm font-semibold text-blue-400 hover:border-blue-400/50 transition-smooth"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
