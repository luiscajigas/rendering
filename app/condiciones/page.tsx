import { generarCondiciones } from "@/data/condiciones";
import CondicionesEnVivo from "@/components/CondicionesEnVivo";
import PatronesUso from "@/components/PatronesUso";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Condiciones del cielo para observar estrellas",
  description:
    "Consulta temperatura, nubosidad, viento y visibilidad para planear una noche de observación astronómica.",
};

export default function CondicionesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Condiciones del cielo</h1>
      <p className="mt-2 text-slate-300">
        Revisa las condiciones antes de planear tu próxima observación.
      </p>
      <PatronesUso
        className="mt-4"
        usos={[
          { patron: "SSR", detalle: "valores iniciales desde el servidor" },
          { patron: "CSR", detalle: "se actualizan cada 15 segundos" },
        ]}
      />
      <CondicionesEnVivo condicionesIniciales={generarCondiciones()} />
      <p className="mt-6 text-xs text-slate-500" role="note">
        Valores de referencia simulados; no corresponden a mediciones meteorológicas en tiempo real.
      </p>
    </div>
  );
}
