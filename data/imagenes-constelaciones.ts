import type { ImagenConstelacion } from "@/data/constelaciones";

const respaldo: Record<number, ImagenConstelacion> = {
  1: {
    url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Orion_constellation_map-bs.svg/960px-Orion_constellation_map-bs.svg.png",
    fuente: "https://commons.wikimedia.org/wiki/File:Orion_constellation_map-bs.svg",
    licencia: "CC BY-SA 3.0",
  },
  2: {
    url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Scorpius_constellation_map_ru_lite.png/960px-Scorpius_constellation_map_ru_lite.png",
    fuente: "https://commons.wikimedia.org/wiki/File:Scorpius_constellation_map_ru_lite.png",
    licencia: "Dominio público",
  },
  3: {
    url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Crux_constellation_map.svg/960px-Crux_constellation_map.svg.png",
    fuente: "https://commons.wikimedia.org/wiki/File:Crux_constellation_map.svg",
    licencia: "CC BY-SA 3.0",
  },
  4: {
    url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Cassiopeia_constellation_map_mk.svg/960px-Cassiopeia_constellation_map_mk.svg.png",
    fuente: "https://commons.wikimedia.org/wiki/File:Cassiopeia_constellation_map_mk.svg",
    licencia: "CC BY-SA 3.0",
  },
};

const busquedas = [
  { id: 1, query: "Orion constellation map" },
  { id: 2, query: "Scorpius constellation map" },
  { id: 3, query: "Crux constellation map" },
  { id: 4, query: "Cassiopeia constellation map" },
];

type ResultadoApi = {
  title: string;
  imageinfo?: {
    thumburl?: string;
    url?: string;
    descriptionurl?: string;
    extmetadata?: {
      LicenseShortName?: { value?: string };
    };
  }[];
};

async function buscarImagen(
  query: string,
): Promise<ImagenConstelacion | undefined> {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  const parametros = {
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrnamespace: "6",
    gsrlimit: "5",
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "1000",
    format: "json",
  };

  for (const [key, value] of Object.entries(parametros)) {
    url.searchParams.set(key, value);
  }

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "CieloAndino/1.0 (astronomy guide)" },
      next: { revalidate: 60 * 60 },
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) return undefined;

    const data = (await response.json()) as {
      query?: { pages?: Record<string, ResultadoApi> };
    };
    const resultados = Object.values(data.query?.pages ?? {});
    const resultado =
      resultados.find(
        (pagina) =>
          /map|chart/i.test(pagina.title) &&
          (pagina.imageinfo?.[0]?.thumburl || pagina.imageinfo?.[0]?.url),
      ) ??
      resultados.find(
        (pagina) => pagina.imageinfo?.[0]?.thumburl || pagina.imageinfo?.[0]?.url,
      );
    const info = resultado?.imageinfo?.[0];
    const imageUrl = info?.thumburl || info?.url;

    if (!imageUrl || !info.descriptionurl) return undefined;

    return {
      url: imageUrl,
      fuente: info.descriptionurl,
      licencia: info.extmetadata?.LicenseShortName?.value ?? "Wikimedia Commons",
    };
  } catch {
    return undefined;
  }
}

export async function obtenerImagenesConstelaciones() {
  const entradas = await Promise.all(
    busquedas.map(async ({ id, query }) => [
      id,
      (await buscarImagen(query)) ?? respaldo[id],
    ] as const),
  );

  return Object.fromEntries(entradas) as Record<number, ImagenConstelacion>;
}