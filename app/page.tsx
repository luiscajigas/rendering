import Link from "next/link";
import PatronesUso from "@/components/PatronesUso";

export const dynamic = "force-static";

const tarjetas = [
  {
    href: "/constelaciones",
    titulo: "Constelaciones",
    texto: "Conoce constelaciones, sus estrellas principales y cuándo observarlas.",
    usos: [
      { patron: "ISR" as const, detalle: "se renueva cada minuto" },
      { patron: "CSR" as const, detalle: "búsqueda y filtros" },
    ],
  },
  {
    href: "/condiciones",
    titulo: "Condiciones del cielo",
    texto: "Consulta temperatura, nubosidad, viento y visibilidad actuales.",
    usos: [
      { patron: "SSR" as const, detalle: "valores iniciales" },
      { patron: "CSR" as const, detalle: "actualización automática" },
    ],
  },
  {
    href: "/explorador",
    titulo: "Lugares de observación",
    texto: "Encuentra lagunas, miradores y reservas para observar las estrellas.",
    usos: [{ patron: "CSR" as const, detalle: "búsqueda y filtros" }],
  },
];

export default function Inicio() {
  return (
    <div>
      <section className="text-center">
        <p className="text-sm uppercase tracking-widest text-sky-300">
          Astronomía en Colombia
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          Cielo <span className="text-violet-400">Andino</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Descubre constelaciones, explora lugares de observación y revisa las
          condiciones del cielo andino.
        </p>
        <PatronesUso
          className="mt-5 justify-center"
          usos={[{ patron: "SSG", detalle: "página principal" }]}
        />
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {tarjetas.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-400/60"
          >
            <h2 className="text-lg font-semibold text-white">{t.titulo}</h2>
            <p className="mt-2 text-sm text-slate-400">{t.texto}</p>
            <PatronesUso className="mt-4" usos={t.usos} />
          </Link>
        ))}
      </section>

      {/* Montañas hechas con SVG */}
      <svg
        viewBox="0 0 600 120"
        className="mt-12 w-full"
        aria-hidden="true"
      >
        <path d="M0 120 L0 80 L90 30 L170 85 L260 20 L350 90 L440 40 L520 85 L600 50 L600 120 Z" fill="#1e1b4b" />
        <path d="M0 120 L0 100 L120 60 L220 105 L320 55 L420 105 L520 65 L600 100 L600 120 Z" fill="#0f0a2e" />
      </svg>
    </div>
  );
}
