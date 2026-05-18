import { useMemo } from "react";

type Photo = { image: string; title: string; meta: string };

const defaultPhotos: Photo[] = [
  { image: "/assets/gallery/2025/LX3A5728_resized.jpg", title: "II Дальневосточная кинопремия", meta: "Улан-Удэ · 2025" },
  { image: "/assets/gallery/2024/3K6A1134_resized.jpg", title: "I Дальневосточная кинопремия", meta: "2024" },
  { image: "/assets/gallery/2025/LX3A5746_resized.jpg", title: "Деловая программа", meta: "Улан-Удэ · 2025" },
  { image: "/assets/gallery/2024/3K6A2040_resized.jpg", title: "Церемония вручения", meta: "2024" },
  { image: "/assets/gallery/2025/LX3A6180_resized.jpg", title: "Мастер-классы", meta: "Улан-Удэ · 2025" },
  { image: "/assets/gallery/2024/3K6A2829_resized.jpg", title: "Локейшен-тур", meta: "2024" },
  { image: "/assets/gallery/2025/LX3A6615_resized.jpg", title: "Гости церемонии", meta: "Улан-Удэ · 2025" },
  { image: "/assets/gallery/2024/3K6A3214_resized.jpg", title: "Шорт-лист 2024", meta: "I Дальневосточная кинопремия" },
];

export default function PhotoMarquee({ photos = defaultPhotos, duration = 50 }: { photos?: Photo[]; duration?: number }) {
  const doubled = useMemo(() => [...photos, ...photos], [photos]);

  return (
    <section
      className="relative w-full overflow-hidden bg-bg py-20 md:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="px-6 md:px-16 mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div
            className="font-sans text-[13px] tracking-[0.18em] uppercase mb-3"
            style={{ color: "var(--brand-gold)", fontWeight: 600 }}
          >
            Фотоархив
          </div>
          <h2
            className="font-serif font-medium text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-tight"
            style={{ color: "var(--brand-primary)" }}
          >
            Прошлые церемонии
          </h2>
        </div>
        <p
          className="font-sans text-base md:text-lg leading-relaxed max-w-md"
          style={{ color: "var(--text-mid)" }}
        >
          Кадры первого и&nbsp;второго сезонов премии: деловая программа, площадки и&nbsp;церемония.
        </p>
      </div>

      {/* edge fades */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32"
        style={{ background: "linear-gradient(90deg, var(--bg), transparent)" }}
      />
      <div
        className="pointer-events-none absolute top-0 bottom-0 right-0 z-10 w-32"
        style={{ background: "linear-gradient(270deg, var(--bg), transparent)" }}
      />

      <div
        className="group flex w-max gap-6 hover:[animation-play-state:paused]"
        style={{
          // Tailwind theme exposes animate-marquee with --marquee-duration var
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {doubled.map((p, i) => (
          <article
            key={i}
            className="relative shrink-0 w-[280px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-2xl"
            style={{ backgroundColor: "var(--bg-soft)" }}
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-500 ease-out hover:grayscale-0 hover:scale-[1.03]"
            />
            <div
              className="absolute bottom-3 left-3 right-3 rounded-lg px-3 py-2 backdrop-blur"
              style={{ backgroundColor: "rgba(255,255,255,0.88)" }}
            >
              <h3
                className="font-sans text-[15px] font-semibold leading-tight"
                style={{ color: "var(--brand-primary)" }}
              >
                {p.title}
              </h3>
              <p
                className="font-sans text-[12px] mt-0.5"
                style={{ color: "var(--text-soft)" }}
              >
                {p.meta}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
