import { HeroParallax } from '@/components/ui/projects-paralax-hero';
import HeroParalaxItems from '@/data/about'; 

export default function AboutParalaxLanding() {

    return (
        <div className="relative z-10">
            <HeroParallax products={HeroParalaxItems} />
        </div>
        
    );
}
