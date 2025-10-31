export default function PlanesSection() {
  const products = [
    {
      tag: "IA369",
      title: "Programa de Inteligencia Artificial",
      desc: "Domina las herramientas de IA más avanzadas del mercado. Incluye acceso al Estándar DaVinci por 6 meses.",
      features: ["DaVinci 6 meses", "Acceso a comunidad", "Soporte prioritario"],
      price: "$1,250",
      subtitle: "$100 USD/mes",
      color: "from-sky-500 to-blue-500",
      icon: "🧠",
    },
    {
      tag: "Club de los 100",
      title: "Comunidad Élite",
      desc: "Únete a un grupo exclusivo de emprendedores y desarrolladores. Networking, mentorías y oportunidades únicas.",
      features: ["Acceso exclusivo", "Eventos privados", "Mentorías 1-a-1"],
      price: "$2,250",
      subtitle: "Membresía anual",
      color: "from-pink-500 to-fuchsia-500",
      icon: "👥",
    },
    {
      tag: "Estándar",
      title: "Formación Base en Tecnología",
      desc: "Aprende fundamentos de programación, desarrollo web y tecnologías emergentes desde cero.",
      features: ["Cursos básicos", "Material descargable", "Certificados"],
      price: "Acceso general",
      subtitle: "Plan básico",
      color: "from-sky-400 to-cyan-400",
      icon: "🎓",
    },
  ];

  return (
    <section id="plans" className="py-28 bg-gradient-to-b from-black via-[#04060b] to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Nuestros Productos
        </h2>
        <p className="mt-3 text-white/70">Elige el programa que mejor se adapte a tus objetivos y comienza tu transformación</p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-left hover:border-white/20 transition">
              <div className={`absolute -top-6 left-6 text-4xl`}>{p.icon}</div>
              <div className="mt-6">
                <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${p.color} text-white/90`}>
                  {p.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <ul className="mt-4 space-y-1 text-white/80 text-sm">
                  {p.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <div className="mt-6">
                  <p className="text-2xl font-semibold">{p.price}</p>
                  <p className="text-sm text-white/60">{p.subtitle}</p>
                </div>
                <a href="#contact"
                   className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 w-full text-sm
                              bg-gradient-to-r ${p.color} text-white hover:opacity-90 transition`}>
                  Más información →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
