import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's in Computer Engineering",
      institution: 'University Name',
      duration: '2020 - 2024',
      description: 'Focused on full-stack web development, distributed systems, and software engineering principles.',
      highlights: ['Web Development', 'Data Structures', 'Algorithms', 'Database Design', 'Software Engineering'],
      gpa: '3.8/4.0',
    },
    {
      id: 2,
      degree: 'Advanced Full Stack Development Bootcamp',
      institution: 'Tech Training Institute',
      duration: '2023 - 2024',
      description: 'Intensive bootcamp covering modern web development stack including React, Node.js, and cloud deployment.',
      highlights: ['MERN Stack', 'Cloud Deployment', 'REST APIs', 'Real-time Applications', 'DevOps'],
    },
    {
      id: 3,
      degree: 'AI & Machine Learning Specialization',
      institution: 'Online Learning Platform',
      duration: '2023',
      description: 'Comprehensive course on AI/ML integration in web applications and data analysis.',
      highlights: ['Machine Learning Fundamentals', 'AI Integration', 'Data Analysis', 'Neural Networks', 'NLP'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:grid-cols-[1fr_1fr]' : 'md:grid-cols-[1fr_1fr]'
                }`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 top-1/2">
                  <motion.div
                    className="w-full h-full bg-blue-500 rounded-full border-4 border-primary shadow-lg shadow-blue-500/50"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                {/* Content - alternate sides */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'} order-2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <motion.div
                    className="glass p-6 rounded-xl hover:border-blue-400/50 transition-smooth"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-blue-400 font-semibold">{edu.institution}</p>
                      </div>
                      <FaGraduationCap className="text-3xl text-blue-400 flex-shrink-0" />
                    </div>

                    <div className="flex flex-col gap-2 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-400" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                    {edu.gpa && (
                      <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        <p className="text-sm text-blue-400 font-semibold">GPA: {edu.gpa}</p>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'React.js Advanced Certification',
              'Node.js & Express.js Expert',
              'MongoDB Database Specialist',
              'AWS Cloud Practitioner',
              'Google Cloud Associate Developer',
              'Full Stack Web Development Master',
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="glass p-4 rounded-lg flex items-center gap-3"
                whileHover={{ translateX: 5 }}
              >
                <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
