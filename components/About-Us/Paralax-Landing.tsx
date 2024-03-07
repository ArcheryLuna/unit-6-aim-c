import { HeroParallax } from '@/components/ui/projects-paralax-hero';

const HeroParalaxItems =  [
    {
        title: "usa.gov",
        link: "https://usa.gov",
        thumbnail: "/Photos/US-Federal-Government.png"
    }, {
        title: "Unsplashed",
        link: "https://unsplashed.com",
        thumbnail: "/Photos/Unsplashed-Website.png"
    },{
        title: "Vercel",
        link: "https://vercel.com",
        thumbnail: "/Photos/Vercel-Website.png"
    },{
        title: "The Latin Plaza",
        link: "https://www.thelatinplaza.co.uk/",
        thumbnail: "/Photos/The-Latin-Plaza.png"
    },{
        title: "Tidal",
        link: "https://tidal.com",
        thumbnail: "/Photos/Tidal-Website.png"
    },{
        title: "The Tutoring Club",
        link: "https://thetutoring.club",
        thumbnail: "/Photos/TheTutoringClub.png"
    },{
        title: "Stack Overflow",
        link: "https://stackoverflow.com",
        thumbnail: "/Photos/StackOverFlox.png"
    },{
        title: "Museos Arteyeducation",
        link: "https://museos.arteyeducacion.org/en",
        thumbnail: "/Photos/museos-arteyeduction-org.png"
    },{
        title: "Evervault",
        link: "https://evervault.com",
        thumbnail: "/Photos/Evervault-Website.png"
    },{
        title: "Luna Cleaning Solutions",
        link: "https://lunacs.co.uk",
        thumbnail: "/Photos/LunaCleaningSolutions.png"
    },{
        title: "Convoy Panel",
        link: "https://convoypanel.com",
        thumbnail: "/Photos/Convoy-Panel.png"
    },
    {
        title: "Halvex",
        link: "https://halvex.net",
        thumbnail: "/Photos/Halvex.png"
    },{
        title: "MTA",
        link: "https://mta.info",
        thumbnail: "/Photos/MTA-Website.webp"
    },{
        title: "Feeling Stressed",
        link: "https://media.archery-luna.com",
        thumbnail: "/Photos/Media-Archery-Luna-com.png"
    },{
        title: "Veilock",
        link: "https://veilock.com/",
        thumbnail: "/Photos/Astro-vpn.png"
    },{
        title: "Convoy Panel",
        link: "https://convoypanel.com",
        thumbnail: "/Photos/Convoy-Panel.png"
    },
]

export default function AboutParalaxLanding() {

    return (
        <div className="relative z-10">
            <HeroParallax products={HeroParalaxItems} />
        </div>
        
    );
}