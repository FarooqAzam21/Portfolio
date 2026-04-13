import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const highlights = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Years of Experience', value: '3+' },
    { label: 'Satisfied Clients', value: '50+' },
    { label: 'Technologies', value: '15+' },
  ]

  return (
    <section id="about" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Getting to know me better
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left side - Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate Full Stack MERN Developer with a strong focus on creating scalable, efficient, and user-centric web applications. With expertise in modern web technologies, I specialize in transforming complex problems into elegant digital solutions.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              My journey in web development has equipped me with skills in frontend frameworks like React and JavaScript, backend technologies using Node.js, and databases like MongoDB and MySQL. I'm particularly interested in AI integration, creating responsive designs, and building APIs that power remarkable applications.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Beyond coding, I'm a problem solver at heart. I believe in continuous learning and stay updated with the latest industry trends and best practices. Whether it's architecting a new system or optimizing existing code, I approach every project with dedication and attention to detail.
            </p>

            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              variants={itemVariants}
            >
              {['Problem Solving', 'Scalability', 'Clean Code', 'User Focus'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={itemVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl text-center hover:border-blue-400/50 transition-smooth"
                whileHover={{ translateY: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              >
                <motion.div
                  className="text-4xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {highlight.value}
                </motion.div>
                <p className="text-gray-400 text-sm">{highlight.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interest areas */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl font-bold">Key Areas of Interest</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Development',
                desc: 'Building responsive, interactive, and performant web applications using modern frameworks and best practices.',
              },
              {
                title: 'AI Integration',
                desc: 'Integrating artificial intelligence and machine learning capabilities into web applications for smart solutions.',
              },
              {
                title: 'Scalable Architecture',
                desc: 'Designing and implementing systems that can grow and handle increased loads efficiently.',
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl hover:border-blue-400/50 transition-smooth"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold mb-3 text-blue-400">{area.title}</h4>
                <p className="text-gray-300 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
