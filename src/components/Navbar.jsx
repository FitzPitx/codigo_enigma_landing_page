import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 3 columnas: logo | menú centrado | botón */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-3">
          {/* Izquierda: Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logotipo_blanco.png" /* <-- cambia al nombre de tu archivo */
              alt="Código Enigma"
              className="h-7 w-auto"
            />
          </a>

          {/* Centro: Menú */}
          <nav className="hidden md:flex justify-center w-full">
            <ul className="flex items-center gap-12 md:gap-16 font-display text-[15px] tracking-wider text-white/80">
              {[
                ["home", "Inicio"],
                ["academy", "Academia"],
                ["plans", "Planes"],
                ["community", "Comunidad"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`hover:text-white transition ${
                      active === id
                        ? "text-white font-semibold"
                        : "text-white/70"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Derecha: Botón gradiente */}
          <div className="flex justify-end">
            <a
              href="https://codigoenigma.com/"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold
                         text-white shadow-sm transition
                         bg-linear-to-r from-blue-600 to-cyan-400
                         hover:from-blue-500 hover:to-cyan-300
                         focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
      <div className="header-line" />
    </header>
  );
}
