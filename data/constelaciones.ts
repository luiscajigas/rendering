export type Constelacion = {
  id: number;
  nombre: string;
  hemisferio: string;
  mejorEpoca: string;
  estrellaPrincipal: string;
  descripcion: string;
  imagen?: ImagenConstelacion;
};

export type ImagenConstelacion = {
  url: string;
  fuente: string;
  licencia: string;
};

export const constelaciones: Constelacion[] = [
  {
    id: 1,
    nombre: "Orión",
    hemisferio: "Ecuatorial",
    mejorEpoca: "Diciembre a febrero",
    estrellaPrincipal: "Betelgeuse",
    descripcion: "Se reconoce fácilmente por las tres estrellas alineadas de su cinturón.",
  },
  {
    id: 2,
    nombre: "Escorpio",
    hemisferio: "Sur",
    mejorEpoca: "Junio a agosto",
    estrellaPrincipal: "Antares",
    descripcion: "Tiene forma de escorpión y una brillante estrella roja en el centro.",
  },
  {
    id: 3,
    nombre: "Cruz del Sur",
    hemisferio: "Sur",
    mejorEpoca: "Abril a junio",
    estrellaPrincipal: "Acrux",
    descripcion: "La constelación más pequeña del cielo, clave para orientarse en el sur.",
  },
  {
    id: 4,
    nombre: "Casiopea",
    hemisferio: "Norte",
    mejorEpoca: "Septiembre a noviembre",
    estrellaPrincipal: "Schedar",
    descripcion: "Sus cinco estrellas principales forman una W (o una M) en el cielo.",
  },
];
