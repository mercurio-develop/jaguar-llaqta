export interface NavItem {
  titleKey: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    titleKey: "nav.about",
    href: "/sobre-nosotros",
    children: [
      { titleKey: "nav.aboutHistory", href: "/sobre-nosotros" },
      { titleKey: "nav.aboutVision", href: "/sobre-nosotros/vision-mision" },
      { titleKey: "nav.aboutPartners", href: "/sobre-nosotros/asociados" },
      { titleKey: "nav.faq", href: "/sobre-nosotros/faq" },
    ],
  },
  {
    titleKey: "nav.activities",
    href: "/actividades",
    children: [
      { titleKey: "nav.activitiesBody", href: "/actividades/cuerpo" },
      { titleKey: "nav.activitiesMind", href: "/actividades/mente" },
      { titleKey: "nav.activitiesSpirit", href: "/actividades/espiritu" },
    ],
  },
  {
    titleKey: "nav.packages",
    href: "/paquetes",
    children: [
      { titleKey: "nav.packagesPrivate", href: "/paquetes/privados" },
      { titleKey: "nav.packagesGroup", href: "/paquetes/grupales" },
      { titleKey: "nav.packagesCustom", href: "/paquetes/personalizados" },
    ],
  },
  {
    titleKey: "nav.gallery",
    href: "/galeria",
    children: [
      { titleKey: "nav.galleryPhotos", href: "/galeria/fotos-videos" },
      { titleKey: "nav.galleryMaps", href: "/galeria/mapas" },
    ],
  },
  {
    titleKey: "nav.calendar",
    href: "/calendario",
  },
  {
    titleKey: "nav.contact",
    href: "/contacto",
  },
];

// Categories for filtering packages, gallery, etc.
export const activityCategories = [
  { id: "cuerpo", labelKey: "categories.body", color: "emerald" },
  { id: "mente", labelKey: "categories.mind", color: "blue" },
  { id: "espiritu", labelKey: "categories.spirit", color: "purple" },
] as const;

export type ActivityCategory = (typeof activityCategories)[number]["id"];

export const footerNavigation = {
  main: [
    { titleKey: "nav.about", href: "/sobre-nosotros" },
    { titleKey: "nav.activities", href: "/actividades" },
    { titleKey: "nav.packages", href: "/paquetes" },
    { titleKey: "nav.calendar", href: "/calendario" },
    { titleKey: "nav.contact", href: "/contacto" },
  ],
  legal: [
    { titleKey: "Términos y Condiciones", href: "/terminos" },
    { titleKey: "Política de Privacidad", href: "/privacidad" },
  ],
};
