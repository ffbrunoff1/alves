import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Zap, Target, TrendingUp } from 'lucide-react'

export default function Hero() {
  const handleCTAClick = () => {
    if ('') {
      window.open('', '_blank')
    } else {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingElements = [
    { icon: Star, delay: 0.2, x: 100, y: 50 },
    { icon: Zap, delay: 0.4, x: -80, y: 80 },
    { icon: Target, delay: 0.6, x: 120, y: -40 },
    { icon: TrendingUp, delay: 0.8, x: -100, y: -60 }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-500/20"></div>
      
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1,
              x: [0, element.x, 0],
              y: [0, element.y, 0]
            }}
            transition={{ 
              delay: element.delay,
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-white"
          >
            <IconComponent className="w-16 h-16" />
          </motion.div>
        )
      })}

      <div className="section-container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-200 text-sm font-medium mb-6">
              🚀 Solução Revolucionária Disponível
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Pare de se Sentir{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Perdido
              </span>
              {' '}no Mercado
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Você já tentou de tudo e ainda não conseguiu os resultados que merece? 
              <strong className="text-white"> Chegou a hora de mudar isso para sempre.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              onClick={handleCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:from-primary-700 hover:to-primary-800 hover:shadow-2xl hover:shadow-primary-500/25 flex items-center space-x-3 group"
            >
              <span>Quero Minha Transformação</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
            >
              Descobrir Como Funciona
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary-400 mb-2">1.000+</div>
              <div className="text-gray-300">Pessoas Transformadas</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-accent-400 mb-2">95%</div>
              <div className="text-gray-300">Taxa de Sucesso</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl font-bold text-primary-400 mb-2">24h</div>
              <div className="text-gray-300">Primeiros Resultados</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}