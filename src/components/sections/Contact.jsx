import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Form submitted:', formData)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/FarooqAzam21', label: 'GitHub' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/farooq-azam-121342274/', label: 'LinkedIn' },
    { icon: SiFiverr, link: 'https://fiverr.com', label: 'Fiverr' },
    { icon: SiUpwork, link: 'https://upwork.com', label: 'Upwork' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project, want to collaborate, or just want to say hello, feel free to reach out. I'm always excited to discuss new opportunities and challenges.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.a
                href="mailto:azamfarooq891@gmail.com"
                className="flex items-start gap-4 glass p-4 rounded-xl hover:border-blue-400/50 transition-smooth group"
                whileHover={{ translateX: 5 }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-smooth">
                  <FaEnvelope className="text-xl text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-400 text-sm hover:text-blue-400 transition-smooth">
                    azamfarooq891@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-4 glass p-4 rounded-xl group"
                whileHover={{ translateX: 5 }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-smooth">
                  <FaPhone className="text-xl text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+92 318 9465018</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 glass p-4 rounded-xl group"
                whileHover={{ translateX: 5 }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-smooth">
                  <FaMapMarkerAlt className="text-xl text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400 text-sm">Karachi, Pakistan</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <motion.div className="flex gap-4" variants={containerVariants}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass flex items-center justify-center text-xl text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-smooth"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      variants={itemVariants}
                    >
                      <IconComponent />
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-xl space-y-6"
            variants={itemVariants}
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-smooth"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-smooth"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-smooth resize-none"
              />
            </motion.div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Failed to send message. Please try again.
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            <p className="text-xs text-gray-500 text-center">
              I typically respond within 24 hours
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
