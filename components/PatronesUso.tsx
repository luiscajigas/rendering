type Patron = "SSG" | "ISR" | "SSR" | "CSR";

type Uso = {
  patron: Patron;
  detalle: string;
};

type Props = {
  usos: Uso[];
  className?: string;
};

const estilos: Record<Patron, string> = {
  SSG: "border-sky-300/30 bg-sky-300/10 text-sky-100",
  ISR: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  SSR: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  CSR: "border-rose-300/30 bg-rose-300/10 text-rose-100",
};

export default function PatronesUso({ usos, className = "" }: Props) {
  return (
    <ul
      aria-label="Patrones de renderizado usados"
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {usos.map(({ patron, detalle }) => (
        <li
          key={`${patron}-${detalle}`}
          className={`inline-flex flex-wrap items-baseline gap-x-2 rounded-md border px-3 py-1.5 text-xs ${estilos[patron]}`}
        >
          <strong>{patron}</strong>
          <span>{detalle}</span>
        </li>
      ))}
    </ul>
  );
}