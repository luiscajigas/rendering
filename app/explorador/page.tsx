import ExploradorCliente from "@/components/ExploradorCliente";
import PatronesUso from "@/components/PatronesUso";

export const metadata = {
  title: "Lugares para observar estrellas en Colombia",
  description:
    "Explora lagunas, miradores, reservas naturales y zonas rurales para observar el cielo nocturno en Colombia.",
};

export default function ExploradorPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Explorador de lugares</h1>
      <p className="mt-2 text-slate-300">
        Busca sitios de observación por nombre o tipo de paisaje.
      </p>
      <PatronesUso
        className="my-5"
        usos={[{ patron: "CSR", detalle: "búsqueda y filtros interactivos" }]}
      />
      <ExploradorCliente />
    </div>
  );
}
