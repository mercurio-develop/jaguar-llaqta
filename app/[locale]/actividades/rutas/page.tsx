import CategoryHero from "@/features/activities/components/CategoryHero";
import CategoryStats from "@/features/activities/components/CategoryStats";
import CategoryPackageList from "@/features/activities/components/CategoryPackageList";
import CategoryCTA from "@/features/activities/components/CategoryCTA";

export default function RutasPage() {
  return (
    <div className="pt-20">
      <CategoryHero category="rutas" />
      <CategoryStats category="rutas" />
      <CategoryPackageList category="rutas" />
      <CategoryCTA />
    </div>
  );
}
