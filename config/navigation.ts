export interface NavItem {
  titleKey: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    titleKey: "nav.activities",
    href: "/actividades",
    children: [
      { titleKey: "nav.allActivities", href: "/actividades" },
      { titleKey: "nav.routes", href: "/actividades/rutas" },
      { titleKey: "nav.community", href: "/actividades/comunidad" },
      { titleKey: "nav.ceremonies", href: "/actividades/ceremonias" },
    ],
  },
  {
    titleKey: "nav.about",
    href: "/sobre-nosotros",
    children: [
      { titleKey: "nav.aboutHistory", href: "/sobre-nosotros#historia" },
      { titleKey: "nav.aboutVision", href: "/sobre-nosotros#vision-mision" },
      { titleKey: "nav.aboutTeam", href: "/sobre-nosotros#asociados" },
      { titleKey: "nav.faq", href: "/sobre-nosotros#faq" },
      { titleKey: "nav.aboutOrganizations", href: "/sobre-nosotros#organizaciones" },
    ],
  },
  {
    titleKey: "nav.contact",
    href: "/contacto",
  },
];

export const activityCategories = [
  { id: "rutas", labelKey: "categories.routes" },
  { id: "comunidad", labelKey: "categories.community" },
  { id: "ceremonias", labelKey: "categories.ceremonies" },
] as const;

export type ActivityCategory = (typeof activityCategories)[number]["id"];

export const footerNavigation = {
  main: [
    { titleKey: "nav.about", href: "/sobre-nosotros" },
    { titleKey: "nav.activities", href: "/actividades" },
    { titleKey: "nav.contact", href: "/contacto" },
  ],
  legal: [
    { titleKey: "Términos y Condiciones", href: "/terminos" },
    { titleKey: "Política de Privacidad", href: "/privacidad" },
  ],
};
