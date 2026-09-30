"use client";

import { useState } from "react";
import Image from "next/image";
import type { Constelacion } from "@/data/constelaciones";

type Props = {
  constelaciones: Constelacion[];
};

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

export default function ConstelacionesCatalogo({ constelaciones }: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [hemisferio, setHemisferio] = useState("Todos");
  const hemisferios = Array.from(
    new Set(constelaciones.map((constelacion) => constelacion.hemisferio)),
  );
  const termino = normalizar(busqueda.trim());
  const resultados = constelaciones.filter((constelacion) => {
    const contenido = normalizar(
      [
        constelacion.nombre,
        constelacion.estrellaPrincipal,
        constelacion.mejorEpoca,
        constelacion.descripcion,
      ].join(" "),
    );

    return (
      contenido.includes(termino) &&
      (hemisferio === "Todos" || constelacion.hemisferio === hemisferio)
    );
  });

  return (
    <section className="mt-6" aria-label="Catálogo de constelaciones">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <label
            htmlFor="buscar-constelacion"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Buscar por nombre, estrella o temporada
          </label>
          <input
            id="buscar-constelacion"
            type="search"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Ej. Orión o Betelgeuse"
            className="w-full rounded-md border border-white/15 bg-slate-950/80 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
          />
        </div>
        <div className="sm:w-52">
          <label
            htmlFor="filtrar-hemisferio"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Hemisferio
          </label>
          <select
            id="filtrar-hemisferio"
            value={hemisferio}
            onChange={(evento) => setHemisferio(evento.target.value)}
            className="w-full rounded-md border border-white/15 bg-slate-950/80 px-3 py-2.5 text-white focus:border-cyan-300 focus:outline-none"
          >
            <option value="Todos">Todos</option>
            {hemisferios.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <p
          className="text-sm text-slate-400 sm:pb-2"
          aria-live="polite"
          aria-atomic="true"
        >
          {resultados.length} resultados
        </p>
      </div>

      {resultados.length === 0 ? (
        <p className="py-12 text-center text-slate-400">
          No encontramos constelaciones con esos filtros.
        </p>
      ) : (
        <div className="grid gap-4 py-6 sm:grid-cols-2">
          {resultados.map((constelacion) => (
            <article
              key={constelacion.id}
              className="rounded-md border border-white/10 border-l-2 border-l-cyan-300/70 bg-slate-950/45 p-5"
            >
              {constelacion.imagen && (
                <figure className="mb-5">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-slate-950">
                    <Image
                      src={constelacion.imagen.url}
                      alt={`Mapa estelar de la constelación ${constelacion.nombre}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={constelacion.id === 1}
                      className="object-contain p-3"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-slate-500">
                    Mapa de Wikimedia Commons ·{" "}
                    <a
                      href={constelacion.imagen.fuente}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-200 underline decoration-cyan-200/40 underline-offset-2 hover:text-white"
                    >
                      {constelacion.imagen.licencia}
                    </a>
                  </figcaption>
                </figure>
              )}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold text-white">
                  {constelacion.nombre}
                </h2>
                <span className="shrink-0 text-xs text-cyan-200">
                  {constelacion.hemisferio}
                </span>
              </div>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-300">
                {constelacion.descripcion}
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div>
                  <dt className="text-xs text-slate-500">Estrella principal</dt>
                  <dd className="mt-1 text-sm text-amber-200">
                    {constelacion.estrellaPrincipal}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Mejor época</dt>
                  <dd className="mt-1 text-sm text-slate-200">
                    {constelacion.mejorEpoca}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}