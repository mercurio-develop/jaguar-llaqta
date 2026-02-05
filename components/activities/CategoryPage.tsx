"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Mountain, Users, Sparkles, Clock, MapPin, Calendar, ArrowRight, ArrowLeft, Check } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { packages, type ActivityCategory, getPackagesByCategory } from "@/config/packages";

const categoryConfig: Record<ActivityCategory, {
  icon: typeof Mountain;
  heroImage: string;
  color: string;
}> = {
  rutas: {
    icon: Mountain,
    heroImage: "/images/ausangate-trek/IMG_8942.jpg",
    color: "emerald"
  },
  comunidad: {
    icon: Users,
    heroImage: "/images/comunidad.jpg",
    color: "blue"
  },
  ceremonias: {
    icon: Sparkles,
    heroImage: "/images/machu-picchu.jpg",
    color: "purple"
  },
};

interface CategoryPageProps {
  category: ActivityCategory;
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const t = useTranslations("activities");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] as "es" | "en";

  const config = categoryConfig[category];
  const Icon = config.icon;
  const categoryPackages = getPackagesByCategory(category);

  const titleKey = `category${category.charAt(0).toUpperCase() + category.slice(1)}Title` as const;
  const descKey = `category${category.charAt(0).toUpperCase() + category.slice(1)}Desc` as const;

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${config.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        <div className="relative z-10 container-custom pb-12">
          <Link
            href={`/${locale}/actividades`}
            className="inline-flex items-center gap-2 text-accent hover:text-accent-alt transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "es" ? "Todos los tours" : "All tours"}</span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider">
                {t(titleKey)}
              </h1>
            </div>
          </div>

          <p className="text-white/70 text-lg max-w-2xl">
            {t(descKey)}
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-8 bg-primary-alt border-b border-white/10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-8 justify-center text-center">
            <div>
              <p className="font-display text-3xl text-accent">{categoryPackages.length}</p>
              <p className="text-muted text-sm uppercase tracking-wider">
                {locale === "es" ? "Experiencias" : "Experiences"}
              </p>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div>
              <p className="font-display text-3xl text-accent">
                ${Math.min(...categoryPackages.map(p => p.price))}+
              </p>
              <p className="text-muted text-sm uppercase tracking-wider">
                {locale === "es" ? "Desde" : "Starting from"}
              </p>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div>
              <p className="font-display text-3xl text-accent">100%</p>
              <p className="text-muted text-sm uppercase tracking-wider">
                {locale === "es" ? "Guías locales" : "Local guides"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-white uppercase tracking-wider mb-8 text-center">
            {locale === "es" ? "Nuestras Experiencias" : "Our Experiences"}
          </h2>

          <div className="space-y-8">
            {categoryPackages.map((pkg, index) => (
              <Card key={pkg.id} className="p-0 overflow-hidden border border-support">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 aspect-[4/3] md:aspect-auto bg-support/50 relative min-h-[250px] overflow-hidden">
                    {/* Package image or fallback to category hero */}
                    <img
                      src={pkg.heroImage || (pkg.gallery.find((g) => g.type === "image" && g.url)?.url) || config.heroImage}
                      alt={(locale === "es" ? pkg.name : pkg.nameEn) || "Experience image"}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-2">
                        {locale === "es" ? pkg.name : pkg.nameEn}
                      </h3>

                      <p className="text-accent mb-4">
                        {locale === "es" ? pkg.tagline : pkg.taglineEn}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent" />
                          <span>{pkg.duration}</span>
                        </div>
                        {pkg.difficulty && (
                          <div className="flex items-center gap-2">
                            <Mountain className="w-4 h-4 text-accent" />
                            <span>{pkg.difficulty}</span>
                          </div>
                        )}
                        {pkg.elevation && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{pkg.elevation}</span>
                          </div>
                        )}
                        {pkg.bestSeason && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{pkg.bestSeason}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                        {locale === "es" ? pkg.description : pkg.descriptionEn}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {(locale === "es" ? pkg.highlights : pkg.highlightsEn).slice(0, 4).map((h, i) => (
                          <span key={i} className="flex items-center gap-1 text-xs text-white/70">
                            <Check className="w-3 h-3 text-accent" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-support">
                      <div>
                        <span className="text-muted text-xs uppercase tracking-wider">
                          {locale === "es" ? "Desde" : "From"}
                        </span>
                        <p className="font-display text-2xl text-accent">${pkg.price} <span className="text-sm text-muted">USD</span></p>
                      </div>
                      <Link href={`/${locale}/actividades/${pkg.id}`}>
                        <Button className="flex items-center gap-2">
                          {locale === "es" ? "Ver más" : "View more"}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-alt">
        <div className="container-custom text-center">
          <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-4">
            {locale === "es" ? "¿No encuentras lo que buscas?" : "Can't find what you're looking for?"}
          </h3>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            {locale === "es"
              ? "Diseñamos experiencias personalizadas según tus intereses."
              : "We design custom experiences based on your interests."}
          </p>
          <Link href={`/${locale}/contacto`}>
            <Button variant="outline">
              {locale === "es" ? "Contáctanos" : "Contact us"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
