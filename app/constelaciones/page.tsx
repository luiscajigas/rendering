import { constelaciones } from "@/data/constelaciones";
import ConstelacionesCatalogo from "@/components/ConstelacionesCatalogo";
import PatronesUso from "@/components/PatronesUso";
import { obtenerImagenesConstelaciones } from "@/data/imagenes-constelaciones";

export const revalidate = 60;

export const metadata = {
  title: "Constelaciones visibles desde Colombia",
  description:
    "Aprende a reconocer Orión, Escorpio, la Cruz del Sur y otras constelaciones: estrellas principales y mejor época para observarlas.",
};

export default async function ConstelacionesPage() {
  const imagenes = await obtenerImagenesConstelaciones();
  const actualizado = new Date().toLocaleString("es-CO", {
    timeZone: "America/Bogota",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div>
      <header className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-cyan-300">
            Guía de observación
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white">Constelaciones</h1>
          <p className="mt-3 text-slate-300">
            Encuentra patrones, estrellas guía y la mejor época para observarlos
            desde Colombia.
          </p>
          <PatronesUso
            className="mt-4"
            usos={[
              { patron: "ISR", detalle: "contenido renovado cada minuto" },
              { patron: "CSR", detalle: "búsqueda y filtros" },
            ]}
          />
        </div>
        <div className="border-l-2 border-amber-300 pl-4 sm:min-w-48">
          <p className="text-sm text-slate-400">En este catálogo</p>
          <p className="mt-1 text-2xl font-semibold text-white">
            {constelaciones.length} constelaciones
          </p>
          <p className="mt-1 text-xs text-slate-500">Actualizado {actualizado}</p>
        </div>
      </header>
      <ConstelacionesCatalogo
        constelaciones={constelaciones.map((constelacion) => ({
          ...constelacion,
          imagen: imagenes[constelacion.id],
        }))}
      />
    </div>
  );
}
