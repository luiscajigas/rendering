export type Lugar = {
  id: number;
  nombre: string;
  tipo: "Laguna" | "Mirador" | "Reserva natural" | "Zona rural";
  region: string;
  altitud: number; // metros sobre el nivel del mar
  oscuridad: "Alta" | "Media" | "Baja";
  descripcion: string;
};

export const lugares: Lugar[] = [
  {
    id: 1,
    nombre: "Laguna Verde",
    tipo: "Laguna",
    region: "Nariño",
    altitud: 4000,
    oscuridad: "Alta",
    descripcion: "Laguna de alta montaña con cielos muy limpios y poca contaminación lumínica.",
  },
  {
    id: 2,
    nombre: "Laguna del Otún",
    tipo: "Laguna",
    region: "Risaralda",
    altitud: 3900,
    oscuridad: "Alta",
    descripcion: "Ideal para ver la Vía Láctea en noches despejadas.",
  },
  {
    id: 3,
    nombre: "Mirador Las Palmas",
    tipo: "Mirador",
    region: "Antioquia",
    altitud: 2500,
    oscuridad: "Media",
    descripcion: "Vista amplia del valle; se ven las constelaciones más brillantes.",
  },
  {
    id: 4,
    nombre: "Mirador Cerro Nutibara",
    tipo: "Mirador",
    region: "Antioquia",
    altitud: 1600,
    oscuridad: "Baja",
    descripcion: "Fácil acceso, pero con bastante luz de ciudad. Bueno para principiantes.",
  },
  {
    id: 5,
    nombre: "Reserva Natural Río Claro",
    tipo: "Reserva natural",
    region: "Antioquia",
    altitud: 500,
    oscuridad: "Alta",
    descripcion: "Zona protegida lejos de la ciudad, con cielos oscuros.",
  },
  {
    id: 6,
    nombre: "Reserva Natural Los Nevados",
    tipo: "Reserva natural",
    region: "Tolima y Caldas",
    altitud: 3800,
    oscuridad: "Alta",
    descripcion: "Páramo con aire muy seco y excelente visibilidad.",
  },
  {
    id: 7,
    nombre: "Zona rural Santa Elena",
    tipo: "Zona rural",
    region: "Antioquia",
    altitud: 2500,
    oscuridad: "Media",
    descripcion: "Fincas y senderos con menos luz que la ciudad.",
  },
  {
    id: 8,
    nombre: "Zona rural Villa de Leyva",
    tipo: "Zona rural",
    region: "Boyacá",
    altitud: 2149,
    oscuridad: "Alta",
    descripcion: "Conocida por sus noches despejadas y su tradición de observación astronómica.",
  },
];
