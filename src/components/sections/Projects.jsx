import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'
import ProjectModal from '../ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Crime Reporting Website',
      description: 'A web-based crime reporting system for community safety',
      detailedDescription: 'A comprehensive crime reporting platform designed to help communities report and track criminal activities in real-time. Features include secure reporting, interactive maps, incident tracking, and community dashboards.',
      image: '📍',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Google Maps API'],
      features: [
        'Secure crime reporting submission',
        'Real-time incident tracking',
        'Interactive location mapping',
        'Community safety dashboard',
        'Admin verification system',
        'Email notifications'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21/Crime-Reporting-Website',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Application',
      description: 'Full-featured online shopping platform with cart and payments',
      detailedDescription: 'A complete e-commerce solution with product catalog, shopping cart, secure checkout, payment processing, and order management. Includes user authentication, product filtering, and order history.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux', 'Tailwind CSS'],
      features: [
        'Product catalog with search & filtering',
        'Shopping cart management',
        'Secure payment integration (Stripe)',
        'User authentication & profiles',
        'Order tracking & history',
        'Admin dashboard for inventory'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21/e-commerceApp',
      featured: true,
    },
    {
      id: 3,
      title: 'Cricket Analysis Dashboard',
      description: 'AI-powered cricket statistics and player analysis platform',
      detailedDescription: 'An advanced cricket analysis platform featuring AI-powered player comparisons, match predictions, statistical analysis, and real-time data visualization. Includes player performance metrics and match insights.',
      image: '🏏',
      technologies: ['React', 'Python', 'TensorFlow', 'MongoDB', 'Chart.js', 'Express'],
      features: [
        'AI-powered player comparisons',
        'Match predictions using ML',
        'Statistical visualization',
        'Historical data analysis',
        'Performance metrics tracking',
        'Real-time score updates'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21/Cricket-Analysis-Dashboard',
      featured: true,
    },
    {
      id: 4,
      title: 'Student Performance Analysis',
      description: 'ML model analyzing factors affecting student academic performance',
      detailedDescription: 'A machine learning project that analyzes various factors affecting student performance. Uses data science techniques to identify key performance indicators and predict student success rates.',
      image: '📊',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
      features: [
        'Data preprocessing & cleaning',
        'Feature engineering',
        'Multiple ML models',
        'Performance prediction',
        'Visualization dashboards',
        'Statistical analysis'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21/ML-Intershsip-Task/tree/main/StudentPerformanceFactor',
    },
    {
      id: 5,
      title: 'Music Genre Classification',
      description: 'Deep learning model for automatic music genre classification',
      detailedDescription: 'A deep learning project that uses neural networks to classify music into different genres. Includes audio feature extraction, model training, and classification visualization.',
      image: '🎵',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Librosa', 'NumPy', 'Jupyter'],
      features: [
        'Audio feature extraction',
        'Neural network models',
        'Genre classification',
        'Model evaluation metrics',
        'Audio visualization',
        'Prediction confidence scoring'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21/ML-Intershsip-Task/tree/main/Music%20Genre',
    },
    {
      id: 6,
      title: 'AI Email Automation App',
      description: 'Intelligent email system with AI-powered categorization and automation',
      detailedDescription: 'An advanced email management system leveraging AI to automatically categorize emails, prioritize important messages, and automate responses. Uses NLP for smart email handling.',
      image: '📧',
      technologies: ['React', 'Node.js', 'OpenAI API', 'NLP', 'MongoDB', 'Express'],
      features: [
        'AI email categorization',
        'Smart priority detection',
        'Automated response generation',
        'NLP-based sentiment analysis',
        'Email filtering & search',
        'Integration with email providers'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21/AI-email-automation-app',
      featured: true,
    },
    {
      id: 7,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI chatbot with natural language processing',
      detailedDescription: 'A sophisticated AI chatbot powered by advanced NLP models, capable of understanding complex user queries and providing intelligent responses. Includes conversation history and context awareness.',
      image: '🤖',
      technologies: ['Python', 'NLP', 'TensorFlow', 'OpenAI API', 'React', 'Node.js'],
      features: [
        'Natural language understanding',
        'Context-aware responses',
        'Multi-turn conversations',
        'Intent recognition',
        'Entity extraction',
        'Learning from conversations'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/FarooqAzam21/AI-chatbot',
    },
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
