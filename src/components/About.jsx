import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Clock, TrendingDown, X, CheckCircle, Zap, Target } from 'lucide-react'

export default function About() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Você se sente perdido",
      description: "Tantas opções no mercado que você não sabe qual caminho seguir"
    },
    {
      icon: Clock,
      title: "Tempo desperdiçado",
      description: "Tentativas frustradas que só trazem desânimo e insegurança"
    },
    {
      icon: TrendingDown,
      title: "Resultados insatisfatórios",
      description: "Esforço investido sem ver os resultados que você merece"
    }
  ]

  const solutions = [
    {
      icon: CheckCircle,
      title: "Abordagem inovadora",
      description: "Método comprovado que resolve problemas comuns do seu dia a dia"
    },
    {
      icon: Zap,
      title: "Resultados reais",
      description: "Elimine incertezas e obtenha a transformação que você sempre buscou"
    },
    {
      icon: Target,
      title: "Confiança total",
      description: "Sinta-se no controle sabendo que possui a solução ideal"
    }
  ]

  const handleCTAClick = () => {
    if ('') {
      window.open('', '_blank')
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Você Reconhece Estes{' '}
            <span className="gradient-text">Problemas</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A frustração de tentar e não conseguir os resultados que você merece. 
            Isso precisa parar <strong>AGORA</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-red-600 mb-8 flex items-center">
              <X className="w-8 h-8 mr-3" />
              O Que Te Impede de Ter Sucesso
            </h3>
            
            <div className="space-y-6">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-red-50 border border-red-200 rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-red-800 mb-2">{problem.title}</h4>
                        <p className="text-red-700">{problem.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-green-600 mb-8 flex items-center">
              <CheckCircle className="w-8 h-8 mr-3" />
              A Solução Que Você Procurava
            </h3>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-green-800 mb-2">{solution.title}</h4>
                        <p className="text-green-700">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Chega de Promessas Vazias e Tentativas Frustradas
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nossa solução é comprovada e já ajudou <strong>milhares de pessoas</strong> a 
            alcançarem seus objetivos. Não deixe a indecisão te impedir de avançar.
          </p>
          
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:bg-gray-50"
          >
            Quero Começar Minha Transformação Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}