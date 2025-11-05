export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-center py-12 border-t border-white/10">
      <img
        src="/public/logotipo_blanco.png"
        alt="Código Enigma"
        className="mx-auto h-6 mb-4 opacity-80"
      />
      <p className="text-sm text-white/50">
        Copyright © 2025 <span className="font-semibold text-white/70">Código Enigma</span>. 
        Todos los derechos reservados
      </p>
    </footer>
  );
}
