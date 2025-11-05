const team = [
  {
    name: "Alejandro González",
    role: "Educador | Forex – El camino del trader",
    photo: "/public/Alejandro_Educador.png",
  },
  {
    name: "Miguel Gaitán",
    role: "Educador | Forex – Oferta y demanda",
    photo: "/public/Miguel_educador.png",
  },
  {
    name: "Juan David Vargas",
    role: "Educador | Forex – Oferta y demanda",
    photo: "/public/JuanDavid_educador.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-linear-to-b from-[#0a0f19] to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl heading-gradient">El Mejor Equipo</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {team.map((p) => (
            <div key={p.name}
                 className="rounded-3xl bg-white shadow-sm overflow-hidden"
                 style={{ backgroundColor: "#fff" }}>
              <div className="aspect-4/5 w-full bg-white">
                <img src={p.photo} alt={p.name} className="h-full w-full object-contain" />
              </div>
              <div className="px-6 py-5 text-black/90 text-center">
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-black/60 mt-1">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
