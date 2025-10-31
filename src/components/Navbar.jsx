export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 3 columnas: logo | menú centrado | botón */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
          {/* Izquierda: Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logotipo_blanco.png" /* <-- cambia al nombre de tu archivo */
              alt="Código Enigma"
              className="h-7 w-auto"
            />
          </a>

          {/* Centro: Menú */}
          <nav className="hidden md:flex justify-center">
            <ul className="flex items-center gap-7 font-display text-sm tracking-wide text-white/80">
              <li>
                <a href="#home" className="hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-white">
                  Academia
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white">
                  Planes
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white">
                  Comunidad
                </a>
              </li>
            </ul>
          </nav>

          {/* Derecha: Botón gradiente */}
          <div className="flex justify-end">
            <a
              href="#login"
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
