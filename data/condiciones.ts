export type CondicionesCielo = {
  temperatura: number;
  nubosidad: number;
  viento: number;
  visibilidad: string;
  actualizado: string;
};

function numeroAleatorio(minimo: number, maximo: number) {
  return Math.round(minimo + Math.random() * (maximo - minimo));
}

export function generarCondiciones(): CondicionesCielo {
  const temperatura = numeroAleatorio(4, 18);
  const nubosidad = numeroAleatorio(0, 100);
  const viento = numeroAleatorio(2, 35);

  let visibilidad = "Mala";
  if (nubosidad < 30 && viento < 20) visibilidad = "Excelente";
  else if (nubosidad < 60) visibilidad = "Regular";

  return {
    temperatura,
    nubosidad,
    viento,
    visibilidad,
    actualizado: new Date().toLocaleTimeString("es-CO", {
      timeZone: "America/Bogota",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };
}