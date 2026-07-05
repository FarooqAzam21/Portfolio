import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'
import ProjectModal from '../ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'CyberGuard AI — Final Year Project',
      description: 'Hybrid ML ensemble for real-time cybersecurity threat detection.',
      detailedDescription: 'Hybrid ML ensemble combining Random Forest, LSTM, Isolation Forest, and NLP Transformers for multi-vector threat detection. Achieved 93% detection accuracy across network intrusion, malware, and anomaly use cases. Real-time alerting pipeline with automated threat classification and incident scoring.',
      image: '🛡️',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'NLP Transformers'],
      features: [
        'Multi-vector threat detection',
        '93% detection accuracy',
        'Real-time alerting pipeline',
        'Automated threat classification',
        'Incident scoring'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
      featured: true,
    },
    {
      id: 2,
      title: 'Bank Statement Analyzer',
      description: 'AI-powered tool that parses and categorizes bank transactions.',
      detailedDescription: 'AI-powered tool that parses and categorizes bank transactions from raw statement PDFs. Provides automated financial summaries, spending patterns, and anomaly detection for SMB clients.',
      image: '🏦',
      technologies: ['Python', 'NLP', 'Data Analysis', 'React'],
      features: [
        'Raw PDF parsing',
        'Transaction categorization',
        'Financial summaries',
        'Spending patterns analysis',
        'Anomaly detection'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
      featured: true,
    },
    {
      id: 3,
      title: 'AI-Powered CRM',
      description: 'SaaS CRM platform targeting Pakistani SMBs with AI features.',
      detailedDescription: 'SaaS CRM platform targeting Pakistani SMBs, with AI-driven lead scoring, follow-up automation, and customer insights. Built full-stack with React frontend, Node/Express backend, and MongoDB.',
      image: '💼',
      technologies: ['MERN Stack', 'AI Integration', 'REST API'],
      features: [
        'AI-driven lead scoring',
        'Follow-up automation',
        'Customer insights',
        'Full-stack MERN implementation'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
      featured: true,
    },
    {
      id: 4,
      title: 'E-Commerce Application',
      description: 'Full-stack e-commerce platform with product listing and cart management.',
      detailedDescription: 'Full-stack e-commerce platform with product listing, cart management, and checkout flow.',
      image: '🛒',
      technologies: ['JavaScript', 'React', 'Node.js'],
      features: [
        'Product listing',
        'Cart management',
        'Checkout flow'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
    },
    {
      id: 5,
      title: 'Crime Reporting Website',
      description: 'Web platform for citizens to file and track crime reports.',
      detailedDescription: 'Web platform for citizens to file and track crime reports, with admin dashboard and case management. Built with PHP backend, MySQL database, and responsive HTML/CSS/JS frontend.',
      image: '📍',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      features: [
        'File and track crime reports',
        'Admin dashboard',
        'Case management'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
    },
    {
      id: 6,
      title: 'Cricket Analysis Dashboard',
      description: 'Data analytics dashboard for cricket match statistics.',
      detailedDescription: 'Data analytics dashboard for cricket match statistics with visual charts and player performance comparisons.',
      image: '🏏',
      technologies: ['Python', 'Data Analysis', 'Visualization'],
      features: [
        'Visual charts',
        'Player performance comparisons',
        'Match statistics'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
    },
    {
      id: 7,
      title: 'Bank Data Analysis',
      description: 'Exploratory data analysis of banking datasets.',
      detailedDescription: 'Exploratory data analysis of banking datasets — customer segmentation, churn indicators, and trend reporting.',
      image: '📊',
      technologies: ['Python', 'Pandas', 'Visualization'],
      features: [
        'Customer segmentation',
        'Churn indicators',
        'Trend reporting'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
    },
    {
      id: 8,
      title: 'ML Internship Tasks',
      description: 'Range of supervised and unsupervised ML tasks.',
      detailedDescription: 'Completed a range of supervised and unsupervised ML tasks during internship at Elevvo.Tech.',
      image: '🤖',
      technologies: ['Python', 'Scikit-learn', 'ML Pipelines'],
      features: [
        'Supervised learning',
        'Unsupervised learning',
        'Model evaluation',
        'Data preprocessing'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21',
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing some of my recent work and professional projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`glass rounded-xl overflow-hidden hover:border-blue-400/50 transition-smooth group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
            >
              {/* Project Image / Icon */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-7xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-smooth">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-700 flex-col sm:flex-row">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-smooth text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📖 Details
                  </motion.button>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-700/30 text-gray-400 hover:bg-gray-700/50 transition-smooth text-sm font-semibold github-link code-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            onClick={() => {
              const projectsSection = document.querySelector('#projects')
              projectsSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
