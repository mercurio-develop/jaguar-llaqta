export const siteConfig = {
  name: "Jaguar Llaqta",
  description: "Turismo Ancestral en Cusco - Experiencias que conectan cuerpo, mente y espíritu",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jaguarllaqta.com",
  ogImage: "/images/og-image.jpg",
  links: {
    facebook: "https://facebook.com/jaguarllaqta",
    instagram: "https://instagram.com/jaguarllaqta",
    whatsapp: "https://wa.me/51XXXXXXXXX",
    email: "info@jaguarllaqta.com",
  },
  contact: {
    phone: "+51 XXX XXX XXX",
    email: "info@jaguarllaqta.com",
    address: "Cusco, Perú",
  },
};

export type SiteConfig = typeof siteConfig;
