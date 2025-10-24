import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Solução', href: '#services' },
        { name: 'Contato', href: '#contact' }
      ]
    },
    {
      title: 'Suporte',
      links: [
        { name: 'Central de Ajuda', href: '#contact' },
        { name: 'FAQ', href: '#services' },
        { name: 'Garantias', href: '#services' }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(51) 99281-7276',
      href: 'tel:+5551992817276'
    },
    {
      icon: MapPin,
      text: 'São Paulo, SP',
      href: '#'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCTAClick = () => {
    if ('') {
      window.open('', '_blank')
    } else {
      scrollToSection('#contact')
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-20">
      <div className="section-container">
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold">Alves</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Transformando vidas através de soluções inovadoras. 
                Sua jornada de sucesso começa aqui.
              </p>

              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:from-primary-700 hover:to-accent-600"
              >
                Começar Transformação
              </motion.button>
            </motion.div>

            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{info.text}</span>
                  </motion.a>
                )
              })}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Alves Marketing Digital. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  <em>Papum</em>
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}