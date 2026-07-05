import { motion } from 'framer-motion'
import { FaReact, FaNode, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiTailwindcss, SiExpress } from 'react-icons/si'
import { useState } from 'react'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('languages')

  const skillCategories = {
    languages: {
      name: 'Languages & Frameworks',
      skills: [
        { name: 'JavaScript', icon: null, level: 95, color: 'text-yellow-400' },
        { name: 'Python', icon: null, level: 92, color: 'text-blue-400' },
        { name: 'PHP', icon: null, level: 85, color: 'text-indigo-400' },
        { name: 'HTML/CSS', icon: null, level: 95, color: 'text-orange-400' },
        { name: 'React.js', icon: FaReact, level: 95 },
        { name: 'Node.js', icon: FaNode, level: 90 },
        { name: 'Express.js', icon: SiExpress, level: 90 },
        { name: 'MERN Stack', icon: null, level: 92, color: 'text-green-400' },
      ],
    },
    ai_ml: {
      name: 'AI / ML',
      skills: [
        { name: 'Machine Learning', icon: null, level: 92, color: 'text-blue-400' },
        { name: 'Deep Learning', icon: null, level: 88, color: 'text-indigo-400' },
        { name: 'NLP', icon: null, level: 90, color: 'text-purple-400' },
        { name: 'RAG', icon: null, level: 85, color: 'text-pink-400' },
        { name: 'Transformers', icon: null, level: 88, color: 'text-cyan-400' },
        { name: 'LSTM & Random Forest', icon: null, level: 90, color: 'text-teal-400' },
      ],
    },
    databases: {
      name: 'Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 92 },
        { name: 'MySQL', icon: SiMysql, level: 90 },
      ],
    },
    tools: {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 95 },
        { name: 'GitHub', icon: FaGithub, level: 95 },
        { name: 'Vercel', icon: null, level: 90, color: 'text-gray-300' },
        { name: 'REST APIs', icon: null, level: 92, color: 'text-green-400' },
      ],
    },
    other: {
      name: 'Other',
      skills: [
        { name: 'UI/UX Design', icon: null, level: 85, color: 'text-pink-400' },
        { name: 'SEO', icon: null, level: 90, color: 'text-yellow-400' },
        { name: 'Digital Marketing', icon: null, level: 85, color: 'text-orange-400' },
        { name: 'AI Integration', icon: null, level: 92, color: 'text-purple-400' },
      ],
    },
  }

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
      transition: { duration: 0.5 },
    },
  }

  const currentSkills = skillCategories[selectedCategory]

  return (
    <section id="skills" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I've mastered
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-2 rounded-lg font-semibold transition-smooth ${
                selectedCategory === key
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'glass text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {currentSkills.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass p-6 rounded-xl hover:border-blue-400/50 transition-smooth"
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.5)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon && (
                    <skill.icon className="text-2xl text-blue-400" />
                  )}
                  <span className={`font-semibold text-lg ${skill.color || 'text-white'}`}>
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-blue-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mt-16 glass p-8 rounded-xl border-l-4 border-blue-500"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-4">Approach to Learning</h3>
          <p className="text-gray-300 leading-relaxed">
            I believe in continuous learning and staying updated with the latest industry trends. My approach combines theoretical knowledge with practical implementation. I learn by building real-world projects, contributing to open-source, and exploring new technologies that help me deliver better solutions for my clients.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
