import { HeroParallax } from "@/components/ui/team-paralax-hero";
import HeroParalaxItems from "@/data/junior-devs";

export default function JuniorDevs() {

    return (
        <div className="my-6 lg:my-12">
            <HeroParallax products={HeroParalaxItems} />
        </div>
    )
}
