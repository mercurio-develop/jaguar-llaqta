import CategoryHero from "@/features/activities/components/CategoryHero";
import CategoryStats from "@/features/activities/components/CategoryStats";
import CategoryPackageList from "@/features/activities/components/CategoryPackageList";
import CategoryCTA from "@/features/activities/components/CategoryCTA";

export default function ComunidadPage() {
  return (
    <div className="pt-20">
      <CategoryHero category="comunidad" />
      <CategoryStats category="comunidad" />
      <CategoryPackageList category="comunidad" />
      <CategoryCTA />
    </div>
  );
}
