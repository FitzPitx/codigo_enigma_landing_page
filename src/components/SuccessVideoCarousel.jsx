import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LINKS = [
  "https://vimeo.com/1128487656",
  "https://vimeo.com/1128487700",
  "https://vimeo.com/1128487728",
  "https://vimeo.com/1128487753",
];
const getId = (url) => (url.match(/vimeo\.com\/(\d+)/) || [])[1];

export default function SuccessVideoCarousel() {
  const ids = LINKS.map(getId);
  const sectionRef = useRef(null);
  const playerRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Crear players al montar
  useEffect(() => {
    playerRefs.current = playerRefs.current.slice(0, ids.length);
    ids.forEach((id, i) => {
      if (!playerRefs.current[i]) return;
      const player = new Player(playerRefs.current[i], {
        id,
        autoplay: false,
        muted: false,
        loop: false,
        controls: true,
        autopause: true,
        playsinline: true,
        responsive: true,
        dnt: true,
        quality: 'auto',
        volume: 0.8,
      });
      player.on("loaded", () => {
        const iframe = playerRefs.current[i].querySelector("iframe");
        if (iframe) {
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          iframe.style.objectFit = "contain";
          iframe.style.backgroundColor = "#000";
          iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
        }
      });
      playerRefs.current[i].player = player;
    });

    return () => {
      playerRefs.current.forEach((ref) => {
        if (ref?.player) ref.player.unload().catch(() => {});
      });
    };
  }, [ids]);

  // Observa si la sección está visible (pausa fuera de vista)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        setIsVisible(visible);
        if (!visible) {
          playerRefs.current.forEach((r) => r?.player?.pause());
        } else {
          playerRefs.current[active]?.player?.play().catch(() => {});
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [active]);

  // Cambiar slide y reproducir solo el activo
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setActive(newIndex);
    playerRefs.current.forEach((r, i) => {
      if (r?.player) {
        if (i === newIndex && isVisible) r.player.play().catch(() => {});
        else r.player.pause().catch(() => {});
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="py-24 bg-gradient-to-b from-black via-[#0a0f19] to-black"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-wide">
          RESULTADOS Y TESTIMONIOS
        </h2>

        <div className="mt-10 relative bg-white/[0.05] rounded-[28px] backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_-20px_rgba(255,255,255,0.3)] p-6 sm:p-8">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            navigation
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            className="rounded-2xl success-video-swiper"
          >
            {ids.map((id, i) => (
              <SwiperSlide key={id}>
                <div
                  ref={(el) => (playerRefs.current[i] = el)}
                  className="relative mx-auto w-full rounded-[20px] overflow-hidden border border-white/10 bg-black"
                  style={{
                    aspectRatio: "9 / 16",
                    maxWidth: "500px",
                    maxHeight: "720px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <a
            href="#planes"
            className="mt-10 inline-block px-8 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 transition"
          >
            ¡QUIERO INGRESAR!
          </a>
        </div>
      </div>

      <style jsx>{`
        .success-video-swiper :global(.swiper-button-next),
        .success-video-swiper :global(.swiper-button-prev) {
          color: white;
          background: rgba(0, 0, 0, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .success-video-swiper :global(.swiper-button-next:after),
        .success-video-swiper :global(.swiper-button-prev:after) {
          font-size: 18px;
        }

        .success-video-swiper :global(.swiper-pagination-bullet) {
          background: white;
          opacity: 0.5;
        }

        .success-video-swiper :global(.swiper-pagination-bullet-active) {
          opacity: 1;
          background: linear-gradient(to right, #2563eb, #22d3ee);
        }

        @media (min-width: 768px) {
          .success-video-swiper :global(.swiper-button-next),
          .success-video-swiper :global(.swiper-button-prev) {
            width: 50px;
            height: 50px;
          }

          .success-video-swiper :global(.swiper-button-next:after),
          .success-video-swiper :global(.swiper-button-prev:after) {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}
