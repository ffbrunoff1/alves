import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Shield, Clock, Users, ArrowRight, CheckCircle, Zap, Target, Trophy, DollarSign } from 'lucide-react'

export default function Services() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const benefits = [
    {
      icon: Zap,
      title: "Transformação Instantânea",
      description: "Veja mudanças significativas nas primeiras 24 horas de uso"
    },
    {
      icon: Target,
      title: "Resultados Garantidos",
      description: "Método comprovado com 95% de taxa de sucesso"
    },
    {
      icon: Shield,
      title: "Suporte Contínuo",
      description: "Acompanhamento personalizado para garantir seu sucesso"
    },
    {
      icon: Trophy,
      title: "Autoridade no Mercado",
      description: "Torne-se referência na sua área com nossa metodologia"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empreendedora",
      content: "Em apenas 3 dias consegui resultados que buscava há meses. Simplesmente incrível!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Consultor",
      content: "A mudança foi tão significativa que meus clientes notaram imediatamente. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Freelancer",
      content: "Finalmente encontrei a solução que realmente funciona. Valeu cada centavo investido!",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Como posso ter certeza de que funcionará para mim?",
      answer: "Nossa metodologia já foi testada por mais de 1.000 pessoas com uma taxa de sucesso de 95%. Oferecemos garantia total de satisfação."
    },
    {
      question: "Quanto tempo leva para ver os primeiros resultados?",
      answer: "A maioria dos nossos clientes reporta mudanças significativas nas primeiras 24-48 horas. Resultados completos geralmente aparecem em até 30 dias."
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer: "Não! Nossa solução foi desenvolvida para ser simples e intuitiva. Qualquer pessoa pode usar, independente do nível de experiência."
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "O investimento é muito menor do que você imagina, especialmente considerando todos os benefícios e resultados que você vai obter. Entre em contato para conhecer as condições especiais."
    },
    {
      question: "Existe alguma garantia?",
      answer: "Sim! Oferecemos garantia incondicional de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento."
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
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Sua <span className="gradient-text">Transformação</span> Começa Aqui
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ao optar por nosso produto, você não está apenas adquirindo um item. 
            Você está <strong>investindo em uma mudança significativa</strong> em sua vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-primary-900 rounded-3xl p-12 text-white mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Produto: <span className="text-accent-400">jdjdjd</span>
              </h3>
              <p className="text-xl mb-6 opacity-90">
                ndjdjdj
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-accent-500 text-gray-900 px-4 py-2 rounded-lg font-bold">
                  Apenas R$ 3.847
                </div>
                <div className="text-accent-400 font-semibold">
                  Valor muito abaixo do que vale!
                </div>
              </div>
              
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:bg-accent-400 hover:shadow-2xl flex items-center space-x-3"
              >
                <DollarSign className="w-6 h-6" />
                <span>Garantir Minha Cópia Agora</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">100% Digital</h4>
                  <p className="text-white/80">
                    Acesso imediato após a compra. Comece sua transformação agora mesmo!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            O Que Nossos Clientes Dizem
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-2xl p-8 card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-primary-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Perguntas Frequentes
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 card-hover"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3" />
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Não Deixe Essa Oportunidade Passar
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Faça a escolha certa hoje e comece a trilhar o caminho para o 
            <strong> sucesso que você merece</strong>. Sua transformação está a um clique de distância.
          </p>
          
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:bg-gray-50 flex items-center space-x-3 mx-auto"
          >
            <Zap className="w-6 h-6" />
            <span>Sim, Quero Me Transformar Agora!</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}