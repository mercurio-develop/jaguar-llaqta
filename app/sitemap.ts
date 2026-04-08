import { MetadataRoute } from "next";

const BASE_URL = "https://jaguarllaqta.com";

const locales = ["es", "en"];

const staticRoutes = [
  "",
  "/actividades",
  "/actividades/rutas",
  "/actividades/comunidad",
  "/actividades/ceremonias",
  "/sobre-nosotros",
  "/contacto",
  "/reservas",
];

const LAST_MODIFIED = new Date("2025-04-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/actividades" ? 0.9 : 0.8,
        alternates: {
          languages: {
            "x-default": `${BASE_URL}/es${route}`,
            es: `${BASE_URL}/es${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
