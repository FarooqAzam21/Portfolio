import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleScroll = (href) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-primary via-secondary to-primary relative overflow-hidden pt-20 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Farooq Azam
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Computer Engineer | Full-Stack & AI Developer. Passionate about building scalable web applications, integrating AI solutions, and creating exceptional user experiences. Let's turn your ideas into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => handleScroll('#projects')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.button>
              <motion.button
                onClick={() => handleScroll('#contact')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/FarooqAzam21/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-smooth"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/farooq-azam-121342274/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-smooth"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:azamfarooq891@gmail.com"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-smooth"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Developer Illustration */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-80 h-80 mx-auto"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Glowing circle background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Main content container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-8xl mb-4">💻</div>
                  <p className="text-2xl font-bold text-white">Web Dev</p>
                </div>
              </div>
            </motion.div>

            {/* Floating cards */}
            <motion.div
              className="absolute -left-10 top-20 glass px-4 py-2 rounded-xl text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-blue-400">React</span>
            </motion.div>

            <motion.div
              className="absolute -right-10 bottom-20 glass px-4 py-2 rounded-xl text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-purple-400">JavaScript</span>
            </motion.div>

            <motion.div
              className="absolute right-5 top-10 glass px-4 py-2 rounded-xl text-sm"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-cyan-400">Node.js</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-400 text-sm">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-center justify-center">
            <motion.div
              className="w-1 h-2 bg-blue-500 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
