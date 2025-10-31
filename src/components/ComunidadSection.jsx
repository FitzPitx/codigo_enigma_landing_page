export default function ComunidadSection() {
  const links = [
    { title: "Discord", desc: "Únete a nuestra comunidad", color: "from-purple-500 to-violet-500" },
    { title: "Aplicación Web", desc: "Accede a la plataforma", color: "from-sky-500 to-blue-500" },
    { title: "Foro de Noticias", desc: "Últimas actualizaciones", color: "from-sky-400 to-cyan-400" },
  ];

  const updates = [
    { title: "Dato Curioso", desc: "El 73% de nuestros estudiantes consiguen trabajo en tech en menos de 6 meses.", icon: "💡" },
    { title: "Nueva Actualización", desc: "Acabamos de lanzar el módulo avanzado de Machine Learning en IA369.", icon: "📈" },
    { title: "Logro Destacado", desc: "María López lanzó su startup de IA y consiguió inversión de $500K.", icon: "⚡" },
    { title: "Próximo Evento", desc: "Webinar gratuito: “El futuro de la IA en Latinoamérica” – 15 Nov, 7 pm.", icon: "📅" },
  ];

  return (
    <section id="community" className="py-28 bg-gradient-to-b from-black to-[#04060b]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Comunidad y Recursos
        </h2>
        <p className="mt-3 text-white/70">Conéctate, aprende y crece junto a miles de profesionales en tecnología</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {links.map((l) => (
            <div key={l.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${l.color} text-xl`}>🌐</div>
              <h3 className="mt-4 font-semibold">{l.title}</h3>
              <p className="text-white/70 text-sm">{l.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold text-white/90">Novedades de la Comunidad</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {updates.map(u => (
            <div key={u.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left">
              <div className="text-lg mb-1">{u.icon}</div>
              <h4 className="font-medium">{u.title}</h4>
              <p className="text-white/70 text-sm">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
