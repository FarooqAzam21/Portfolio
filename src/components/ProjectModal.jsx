import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

export default function ProjectModal({ isOpen, project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-11/12 max-w-3xl max-h-[90vh] bg-secondary rounded-2xl overflow-auto pointer-events-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-white hover:bg-blue-500/40 transition-smooth z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>

            <div className="p-8">
              {/* Title */}
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {project.title}
              </motion.h2>

              {/* Project Image */}
              {project.image && (
                <motion.div
                  className="mb-6 w-full h-64 md:h-96 rounded-xl overflow-hidden bg-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                    {project.image}
                  </div>
                </motion.div>
              )}

              {/* Description */}
              <motion.div
                className="mb-6 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </motion.div>

              {/* Features */}
              {project.features && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Technologies */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                className="flex gap-4 pt-4 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-700/30 text-gray-300 hover:bg-gray-700/50 transition-smooth font-semibold github-link code-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                    View Repository
                  </motion.a>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-smooth font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>

              {/* Code Protection Notice */}
              <motion.div
                className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-sm text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-blue-400 font-semibold mb-1">💡 Note:</p>
                <p>
                  The code repository is available on GitHub. All code is protected under appropriate licensing terms.
                  Please respect the author's intellectual property rights.
                </p>
              </motion.div>
            </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
