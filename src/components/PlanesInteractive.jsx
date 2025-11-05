import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const PLANES = [
  { id:"369", nombre:"Código 369", subtitulo:"Manifiesta y opera con Éxito", cover:"/Codigo 369.webp",
    resumen:"Trading desde cero con enfoque en mentalidad y método 369 para resultados consistentes.",
    color:"from-blue-600 to-cyan-400" },
  { id:"enigma", nombre:"Código Enigma", subtitulo:"Elige tu Camino al Éxito", cover:"/Codigo enigma.webp",
    resumen:"Domina fundamentos de trading y transformación personal. Resultados en ~45 días.",
    popular:true, color:"from-sky-500 to-blue-400" },
  { id:"alquimia", nombre:"Código Alquimia", subtitulo:"Transformación total y riqueza exponencial", cover:"/Codigo Alquimia.png",
    resumen:"Mentoría 1-1, reprogramación y plan financiero para escalar a 6–7 cifras.",
    color:"from-purple-500 to-fuchsia-500" },
];

export default function PlanesInteractive() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  // Animations handled with Tailwind transitions (no framer-motion dependency)

  const openDetails = (plan) => { setActive(plan); setOpen(true); };

  return (
    <section id="planes" className="py-24 bg-gradient-to-b from-black to-[#0a0f19] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl font-bold">Elige tu programa</h2>
        <p className="mt-2 text-white/70">Pasa el cursor para ver el resumen o haz clic para ampliar.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {PLANES.map((p) => (
            <article
              key={p.id}
              className={`relative rounded-3xl border border-white/10 overflow-hidden
                          bg-[#0e0e0e]/80 backdrop-blur-sm cursor-pointer transform-gpu
                          transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]
                          ${p.popular ? "ring-1 ring-sky-400/35" : ""}`}
              onClick={() => openDetails(p)}
            >
              {p.popular && (
                <div className="absolute top-0 left-0 right-0 z-10 text-xs font-semibold text-white
                                bg-gradient-to-r from-blue-600 to-cyan-400 py-2">
                  MÁS POPULAR
                </div>
              )}
              <div className="relative h-28">
                <img src={p.cover} alt={p.nombre} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
              </div>
              <div className="px-6 pb-6 pt-4 text-left">
                <h3 className="text-xl font-semibold">{p.nombre}</h3>
                <p className="text-blue-300 text-sm">{p.subtitulo}</p>
                <p className="mt-4 text-white/75 text-sm line-clamp-3">{p.resumen}</p>
                <div className="mt-6">
                  <span className={`inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold
                                    bg-gradient-to-r ${p.color}`}>
                    Ver detalles
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Transition appear show={open && !!active} as={Fragment}>
        <Dialog as="div" open={open} onClose={() => setOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 p-4 md:p-8 overflow-y-auto">
            <div className="mx-auto max-w-3xl">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 translate-y-3"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
              >
                <div className="rounded-3xl border border-white/10 bg-[#0f0f10]/95 backdrop-blur-xl overflow-hidden">
                  <div className="relative h-44">
                    <img src={active?.cover} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
                  </div>
                  <div className="p-6">
                    <Dialog.Title className="text-2xl font-semibold">{active?.nombre}</Dialog.Title>
                    <p className="text-blue-300">{active?.subtitulo}</p>
                    <div className="mt-4 text-white/85">
                      Aquí pones los detalles largos del programa, temario y FAQs.
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <a href="#contacto" className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-400">
                        Aplicar ahora
                      </a>
                      <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-sm">
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
