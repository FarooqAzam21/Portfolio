import { motion } from 'framer-motion'
import { FaBriefcase, FaBuilding } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Founder & Lead Developer',
      company: 'Orvion Digital Agency (theorvion.io)',
      duration: '2024 - Present',
      description: 'Built and operate a full-service digital agency offering web development, AI integration, UI/UX, SEO, and digital marketing. Primary focus on e-commerce brands; delivered multiple client projects spanning React SPAs, CMS integrations, and performance-optimized storefronts. Managed Google Search Console indexing and technical SEO for client sites deployed on Vercel.',
      icon: FaBriefcase,
      features: ['React SPAs', 'CMS integrations', 'SEO', 'AI Integration'],
    },
    {
      id: 2,
      title: 'Machine Learning Intern',
      company: 'Elevvo.Tech',
      duration: '2024',
      description: 'Completed hands-on ML tasks covering supervised learning, model evaluation, and data preprocessing pipelines. Delivered repository of completed internship tasks demonstrating applied ML skills.',
      icon: FaBuilding,
      features: ['Supervised Learning', 'Model Evaluation', 'Data Preprocessing', 'ML Pipelines'],
    }
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
    <section id="experience" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional work experience and leadership roles
          </p>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <motion.div
                key={exp.id}
                className="glass p-8 rounded-xl hover:border-blue-400/50 transition-smooth group"
                variants={itemVariants}
                whileHover={{ translateY: -8, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 relative">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <IconComponent className="text-3xl text-white" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity -z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-smooth">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="inline-block mt-2 md:mt-0 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium whitespace-nowrap self-start">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed mt-4">
                      {exp.description}
                    </p>

                    {/* Features */}
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {exp.features.map((feature) => (
                        <span
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
