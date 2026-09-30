"use client";

import { useState } from "react";
import { lugares } from "@/data/lugares";

const tipos = ["Todos", "Laguna", "Mirador", "Reserva natural", "Zona rural"];

export default function ExploradorCliente() {
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("Todos");

  // Se filtra en el navegador, sin recargar la página
  const resultados = lugares.filter((l) => {
    const coincideTexto = l.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTipo = tipo === "Todos" || l.tipo === tipo;
    return coincideTexto && coincideTipo;
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar lugar..."
          className="w-full rounded-lg border border-white/20 bg-slate-900 px-4 py-2 text-white placeholder-slate-500 focus:border-violet-400 focus:outline-none"
        />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="rounded-lg border border-white/20 bg-slate-900 px-4 py-2 text-white focus:border-violet-400 focus:outline-none"
        >
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        {resultados.length} lugar(es) encontrado(s)
      </p>

      {resultados.length === 0 ? (
        <p className="mt-6 text-center text-slate-400">
          No hay lugares que coincidan con tu búsqueda.
        </p>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {resultados.map((l) => (
            <article
              key={l.id}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs text-violet-300">
                {l.tipo}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-white">{l.nombre}</h2>
              <p className="mt-1 text-sm text-slate-300">{l.descripcion}</p>
              <p className="mt-3 text-sm text-slate-400">
                {l.region} · {l.altitud} m · Oscuridad: {l.oscuridad}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
