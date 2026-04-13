import { motion } from 'framer-motion'
import { FaCode, FaRobot, FaDatabase, FaCube, FaNetworkWired, FaMobile } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Complete web application development from frontend to backend, ensuring scalability and performance.',
      icon: FaCode,
      features: ['React/JavaScript', 'Node.js/Express', 'Responsive Design', 'Database Design'],
    },
    {
      id: 2,
      title: 'React Applications',
      description: 'Modern, fast, and interactive web applications built with React and best practices.',
      icon: FaCube,
      features: ['Component Design', 'State Management', 'Performance Optimization', 'Testing'],
    },
    {
      id: 3,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI and machine learning capabilities into your web applications.',
      icon: FaRobot,
      features: ['Chatbots', 'Predictions', 'Analytics', 'Automation'],
    },
    {
      id: 4,
      title: 'Dashboard Development',
      description: 'Interactive and real-time dashboards with data visualization and analytics features.',
      icon: FaDatabase,
      features: ['Data Visualization', 'Real-time Updates', 'Charts & Graphs', 'Export Features'],
    },
    {
      id: 5,
      title: 'REST API Development',
      description: 'Robust and well-documented REST APIs built with best practices and security in mind.',
      icon: FaNetworkWired,
      features: ['Authentication', 'Authorization', 'Rate Limiting', 'Documentation'],
    },
    {
      id: 6,
      title: 'Mobile-First Design',
      description: 'Responsive and mobile-first designs that work seamlessly across all devices and screen sizes.',
      icon: FaMobile,
      features: ['Responsive Design', 'Touch Optimization', 'Cross-browser', 'Performance'],
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-primary relative overflow-hidden">
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
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                className="glass p-8 rounded-xl hover:border-blue-400/50 transition-smooth group"
                variants={itemVariants}
                whileHover={{ translateY: -8, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-smooth">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-400"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.button
                  className="mt-8 w-full py-2 px-4 rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-smooth font-semibold text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 glass p-8 md:p-12 rounded-xl text-center border-l-4 border-blue-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm open to discussing your project requirements and creating custom solutions tailored to your specific needs.
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
