export const siteConfig = {
  name: "Jaguar Llaqta",
  description: "Turismo Ancestral en Cusco - Experiencias que conectan cuerpo, mente y espíritu",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jaguarllaqta.com",
  ogImage: "/images/hero-banner-home.jpg",
  links: {
    instagram: "https://instagram.com/jaguarllaqta",
    whatsapp: "https://wa.me/51926935820",
    email: "jaguarllaqta@gmail.com",
  },
  contact: {
    phone: "+51 926 935 820",
    email: "jaguarllaqta@gmail.com",
    address: "Cusco, Perú",
  },
};

export type SiteConfig = typeof siteConfig;
