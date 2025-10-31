export default function AcademiaSection() {
  return (
    <section id="academy" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl">Academia</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Mentoría 1:1, sesiones en vivo y rutas de estudio con proyectos reales.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Price Action + ICT", "Estructura de mercado, FVG, OB, SMT."],
            ["Gestión de Riesgo", "Modelos de entrada, RR, tamaño de posición."],
            ["Psicología", "Sesiones para control emocional y disciplina."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-white/70 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
