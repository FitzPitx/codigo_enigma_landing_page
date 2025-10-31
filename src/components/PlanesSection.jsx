export default function PlanesSection() {
  const plans = [
    { name: "Starter", price: "USD 99", features: ["Acceso comunidad", "2 sesiones/mes", "Material base"] },
    { name: "Pro", price: "USD 249", features: ["Todo Starter", "4 sesiones/mes", "Revisión de plan de trading"], featured: true },
    { name: "Elite", price: "USD 499", features: ["Todo Pro", "Mentoría 1:1 semanal", "Backtesting guiado"] },
  ];
  return (
    <section id="plans" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl">Planes</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Elige el plan que mejor se ajuste a tu etapa.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name}
              className={`rounded-2xl p-6 border bg-white/3
                ${p.featured ? "border-blue-400/40 shadow-[0_0_50px_-20px_rgba(56,189,248,0.6)]" : "border-white/10"}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-blue-300">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#contact"
                 className="mt-6 inline-block w-full text-center rounded-xl px-4 py-2
                            bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300">
                Empezar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
