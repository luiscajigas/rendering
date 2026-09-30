"use client";

import { useEffect, useState } from "react";
import {
  generarCondiciones,
  type CondicionesCielo,
} from "@/data/condiciones";

type Props = {
  condicionesIniciales: CondicionesCielo;
};

export default function CondicionesEnVivo({ condicionesIniciales }: Props) {
  const [condiciones, setCondiciones] = useState(condicionesIniciales);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setCondiciones(generarCondiciones());
    }, 15_000);

    return () => window.clearInterval(intervalo);
  }, []);

  const datos = [
    { etiqueta: "Temperatura", valor: `${condiciones.temperatura} °C` },
    { etiqueta: "Nubosidad", valor: `${condiciones.nubosidad} %` },
    { etiqueta: "Viento", valor: `${condiciones.viento} km/h` },
    { etiqueta: "Visibilidad", valor: condiciones.visibilidad },
  ];

  return (
    <section className="mt-8" aria-label="Condiciones actuales del cielo">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {datos.map((dato) => (
          <article
            key={dato.etiqueta}
            className="rounded-lg border border-white/10 bg-white/5 p-5 text-center"
          >
            <h2 className="text-sm text-slate-400">{dato.etiqueta}</h2>
            <p className="mt-2 text-2xl font-bold text-sky-300">
              {dato.valor}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-right text-sm text-slate-400" aria-live="polite">
        Actualizado a las {condiciones.actualizado}
      </p>
    </section>
  );
}