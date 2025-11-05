import { useState } from "react";

export default function PlanesEnigma() {
  const [selectedPlan, setSelectedPlan] = useState("bronce");
  const [_hoveredCard, setHoveredCard] = useState(null);

  const planesCentral = {
    bronce: {
      titulo: "Código Enigma",
      subtitulo: "Elige tu Camino al Éxito",
      descripcion: "El inicio de tu camino hacia el trading y la transformación personal. Domina los fundamentos y comienza a generar ingresos en solo 45 días.",
      precio: "$600",
      imagen: "/public/Codigo enigma.webp",
      beneficios: [
        "Acceso por 3 meses a contenido grabado",
        "5 sesiones en vivo semanales",
        "2 sesiones de mindset y desarrollo personal",
        "2 sesiones operativas de trading",
        "App CódigoFX: Replica análisis con un clic",
        "Guía de Pre Mercado Semanal",
        "Bitácora Profesional de Trading",
        "Psicología aplicada al Trading",
      ],
    },
    plata: {
      titulo: "Código Enigma",
      subtitulo: "Elige tu Camino al Éxito",
      descripcion: "Avanza más allá de los fundamentos, optimiza tus hábitos y domina estrategias para generar tus primeros $2,000 de forma consistente",
      precio: "$900",
      imagen: "/public/Codigo enigma.webp",
      beneficios: [
        "Todo lo del Plan Bronce",
        "Acceso por 6 meses",
        "8 sesiones en vivo semanales",
        "1 sesión de preguntas y respuestas",
        "3 sesiones de mindset",
        "4 sesiones operativas de trading",
        "Plan 21 días para hackear hábitos",
        "Plan $2.000 USD consistentes",
        "Mastermind Financiero",
        "Soporte VIP",
      ],
    },
    oro: {
      titulo: "Código Enigma",
      subtitulo: "Elige tu Camino al Éxito",
      descripcion: "Domina el trading, transforma tus hábitos y escala tus ingresos a $200K mientras fortaleces tu mentalidad y relación con el dinero.",
      precio: "$1.200",
      imagen: "/public/Codigo enigma.webp",
      beneficios: [
        "Todo el Plan Plata",
        "Acceso por 1 año completo",
        "15 sesiones en vivo semanales",
        "1 sesión de preguntas y respuestas",
        "4 sesiones de mindset avanzadas",
        "10 sesiones operativas avanzadas",
        "Tracker y Guía de Hábitos",
        "Plan de escalamiento de $0 a $200K",
        "Energía del Dinero: Reprogramación financiera",
      ],
    },
  };

  return (
    <section id="planes" className="py-24 bg-gradient-to-b from-black to-[#0a0f19] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Plan Código 369 */}
          <div 
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e0e]/80 backdrop-blur-sm shadow-[0_0_25px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 hover:border-blue-500/50 cursor-pointer group"
            onMouseEnter={() => setHoveredCard('codigo369')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Imagen de encabezado con padding */}
            <div className="relative h-40 p-6 flex items-center justify-start">
              <img
                src="/public/Codigo 369.webp"
                alt="Código 369"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Contenido */}
            <div className="px-6 pt-6 pb-6">
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Aprende Trading desde cero y genera ingresos mientras alineas tu mentalidad y energía, aplicando el Método 369.
              </p>

              <ul className="text-sm text-white/80 space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Curso de manifestación Código 369</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Curso pregrabado de Trading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>1 sesión en vivo semanal de trading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Estrategias prácticas de Trading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Operarás conmigo cada semana</span>
                </li>
              </ul>

              <a
                href="#contacto"
                className="block w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition"
              >
                ACCEDER
              </a>
            </div>

            {/* Overlay/Modal al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/98 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto overflow-y-auto">
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Código 369
                </h3>
                <p className="text-cyan-400 text-sm mb-4 font-semibold">Manifiesta y opera con Éxito</p>
                
                <div className="flex-1 overflow-y-auto space-y-4 text-sm">
                  <div>
                    <h4 className="text-blue-400 font-bold mb-2">🎯 ¿Qué aprenderás?</h4>
                    <p className="text-white/80 leading-relaxed">
                      Domina el trading desde cero mientras transformas tu mentalidad. Este programa combina estrategias 
                      de manifestación con técnicas prácticas de trading para alinear tu energía con el éxito financiero.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2">📚 Contenido del Curso</h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• Fundamentos del Método 369 aplicado al trading</li>
                      <li>• Análisis técnico y lectura de gráficos</li>
                      <li>• Gestión de riesgo y psicología del trader</li>
                      <li>• Estrategias de entrada y salida</li>
                      <li>• Manifestación consciente de resultados</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2">⏱️ Duración y Formato</h4>
                    <p className="text-white/80 leading-relaxed">
                      Acceso ilimitado al contenido pregrabado más sesiones en vivo semanales donde operarás 
                      junto al instructor. Ideal para principiantes que buscan resultados tangibles.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-2xl font-bold text-cyan-400 mb-2">$50 USD</p>
                    <p className="text-white/60 text-xs">Inversión única • Acceso de por vida</p>
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition"
                >
                  QUIERO EMPEZAR AHORA
                </a>
              </div>
            </div>
          </div>

          {/* Plan Código Enigma (Centro con selector) */}
          <div 
            className="relative rounded-3xl overflow-hidden border border-blue-500/50 bg-[#0e0e0e]/80 backdrop-blur-sm shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.8)] cursor-pointer group"
            onMouseEnter={() => setHoveredCard('enigma')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 left-0 right-0 py-3 z-10 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-400 text-center">
              MÁS POPULAR
            </div>

            {/* Imagen de encabezado con padding */}
            <div className="relative h-40 mt-10 p-6 flex items-center justify-start">
              <img
                src="/public/Codigo enigma.webp"
                alt="Código Enigma"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Contenido */}
            <div className="px-6 pt-6 pb-6">
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                {planesCentral[selectedPlan].descripcion}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm text-white/70 mb-2">Seleccione un plan:</label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-2.5 text-white font-semibold focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="bronce">Plan Bronce</option>
                    <option value="plata">Plan Plata</option>
                    <option value="oro">Plan Oro</option>
                  </select>
                </div>
              </div>

              <ul className="text-sm text-white/80 space-y-3 mb-8 max-h-64 overflow-y-auto">
                {planesCentral[selectedPlan].beneficios.map((b, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="block w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition"
              >
                ACCEDER
              </a>
            </div>

            {/* Overlay/Modal al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/98 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto overflow-y-auto">
              <div className="p-8 h-full flex flex-col">
                <div className="mb-4 py-2 px-4 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs font-bold rounded-full inline-block self-start">
                  ⭐ MÁS POPULAR
                </div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Código Enigma
                </h3>
                <p className="text-cyan-400 text-sm mb-4 font-semibold">Elige tu Camino al Éxito</p>
                
                <div className="flex-1 overflow-y-auto space-y-4 text-sm">
                  <div>
                    <h4 className="text-blue-400 font-bold mb-2">🚀 Transformación Completa</h4>
                    <p className="text-white/80 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Programa diseñado para llevarte 
                      del nivel principiante a trader consistente en 45 días. Combina mentoría grupal, análisis 
                      en vivo y herramientas profesionales para acelerar tu curva de aprendizaje.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2">💎 Niveles de Membresía</h4>
                    <div className="space-y-3">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <p className="font-bold text-white">Plan Bronce - $600</p>
                        <p className="text-white/70 text-xs">3 meses • Fundamentos sólidos para empezar</p>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <p className="font-bold text-white">Plan Plata - $900</p>
                        <p className="text-white/70 text-xs">6 meses • Domina estrategias avanzadas</p>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg border border-cyan-400/30">
                        <p className="font-bold text-cyan-400">Plan Oro - $1.200 ⭐</p>
                        <p className="text-white/70 text-xs">12 meses • Escalamiento a $200K</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-blue-400 font-bold mb-2">🎁 Incluye</h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• Sesiones en vivo con análisis de mercado</li>
                      <li>• App CódigoFX para replicar operaciones</li>
                      <li>• Bitácora profesional de trading</li>
                      <li>• Comunidad privada de traders</li>
                      <li>• Soporte VIP prioritario</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition"
                >
                  ELEGIR MI PLAN
                </a>
              </div>
            </div>
          </div>

          {/* Plan Código Alquimia */}
          <div 
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0e0e0e]/80 backdrop-blur-sm shadow-[0_0_25px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 hover:border-purple-500/50 cursor-pointer group"
            onMouseEnter={() => setHoveredCard('alquimia')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Imagen de encabezado con padding */}
            <div className="relative h-40 p-6 flex items-center justify-start">
              <img
                src="/public/Codigo Alquimia.png"
                alt="Código Alquimia"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Contenido */}
            <div className="px-6 pt-6 pb-6">
              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                Transforma tu mentalidad, optimiza tus hábitos y escala tu trading a 7 cifras con mentoría 1-1 y estrategias avanzadas.
              </p>

              <p className="text-sm text-white/60 mb-2">
                Todo lo del Plan Oro
              </p>
              <p className="text-xs text-white/60 mb-6">
                Genera de <span className="font-bold text-cyan-400">$4k a $8k</span> al mes{" "}
                <span className="font-bold underline">GARANTIZADO POR CONTRATO</span>
              </p>

              <ul className="text-sm text-white/80 space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>1 mentoría 1-1 semanal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Plan de identidad, hábitos y transformación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Reprogramación de creencias y equilibrio energético</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Entrenador y nutricionista personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Hipnosis para reprogramación subconsciente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Plan financiero y termostato del dinero</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Cámara del tiempo y manifestación acelerada 33</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-0.5">✓</span>
                  <span>Soporte exclusivo Alquimia</span>
                </li>
              </ul>

              <a
                href="#contacto"
                className="block w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition"
              >
                ACCEDER
              </a>
            </div>

            {/* Overlay/Modal al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/95 via-black/98 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto overflow-y-auto">
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  Código Alquimia
                </h3>
                <p className="text-purple-400 text-sm mb-4 font-semibold">Transformación Total y Riqueza Exponencial</p>
                
                <div className="flex-1 overflow-y-auto space-y-4 text-sm">
                  <div>
                    <h4 className="text-purple-400 font-bold mb-2">👑 Programa Elite</h4>
                    <p className="text-white/80 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. El programa más completo y 
                      exclusivo para traders que buscan resultados extraordinarios. Mentoría personalizada 1-1, 
                      reprogramación mental profunda y acompañamiento holístico en todos los aspectos de tu vida.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="text-purple-400 font-bold mb-2">💰 Garantía de Resultados</h4>
                    <p className="text-white leading-relaxed">
                      <span className="text-2xl font-bold text-cyan-400">$4.000 - $8.000</span> al mes<br/>
                      <span className="text-xs uppercase font-bold">Garantizado por Contrato</span>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-bold mb-2">🎯 Transformación 360°</h4>
                    <ul className="text-white/80 space-y-2">
                      <li>• Mentoría semanal 1-1 personalizada</li>
                      <li>• Plan de identidad y hábitos de alto rendimiento</li>
                      <li>• Reprogramación subconsciente con hipnosis</li>
                      <li>• Entrenador físico y nutricionista personal</li>
                      <li>• Termostato del dinero y energía financiera</li>
                      <li>• Técnicas de manifestación acelerada</li>
                      <li>• Soporte VIP exclusivo 24/7</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-bold mb-2">⚡ Resultados Esperados</h4>
                    <p className="text-white/80 leading-relaxed">
                      Dominio completo del trading, mentalidad millonaria, hábitos de elite, salud óptima, 
                      y generación consistente de ingresos de 6 cifras. Este programa transforma tu vida entera.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-purple-500/30">
                    <p className="text-2xl font-bold text-purple-400 mb-2">$6.000 USD</p>
                    <p className="text-white/60 text-xs">Inversión completa • Incluye TODO del Plan Oro</p>
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
                >
                  TRANSFORMAR MI VIDA AHORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
