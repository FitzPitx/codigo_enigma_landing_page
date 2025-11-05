const testimonials = [
  {
    name: "Juan Martínez",
    role: "Full Stack Developer",
    avatar: "/avatars/juan.jpg",
    quote:
      "Juan logró fondearse con Código Enigma; ahora trabaja con IA369 y ha triplicado sus ingresos.",
    stars: 5,
  },
  {
    name: "María González",
    role: "AI Specialist",
    avatar: "/avatars/maria.jpg",
    quote:
      "Después de 4 meses en IA369, conseguí mi trabajo soñado en una empresa de Silicon Valley.",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Entrepreneur",
    avatar: "/avatars/carlos.jpg",
    quote:
      "El Club de los 100 me abrió puertas increíbles. Las conexiones que hice aquí son invaluables.",
    stars: 5,
  },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="py-24 bg-linear-to-b from-black via-[#0a0f19] to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl heading-gradient">Historias de Éxito</h2>
        <p className="mt-3 text-white/70">Descubre cómo nuestros estudiantes han transformado sus carreras</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="card text-left relative overflow-hidden">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover bg-white/10" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>

              <div className="mt-3 flex gap-1 text-amber-400" aria-label={`${t.stars} estrellas`}>
                {Array.from({ length: t.stars }).map((_, i) => <span key={i}>★</span>)}
              </div>

              <p className="mt-3 text-white/80 text-sm leading-relaxed">“{t.quote}”</p>

              {/* comillas decorativas */}
              <span className="absolute right-4 top-4 text-white/10 text-5xl select-none">”</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
