export default function ComunidadSection() {
  return (
    <section id="community" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">Comunidad</h2>
          <p className="mt-3 text-white/70">
            Únete a nuestro Discord: análisis diarios, setups y accountability.
          </p>
          <div className="mt-6 flex gap-6">
            <div><div className="text-3xl font-bold">1.2k+</div><div className="text-white/60">Miembros</div></div>
            <div><div className="text-3xl font-bold">150+</div><div className="text-white/60">Ideas/mes</div></div>
          </div>
          <a href="#discord"
             className="mt-8 inline-block rounded-xl px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/20">
            Entrar a Discord
          </a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/3 aspect-video" />
      </div>
    </section>
  );
}
