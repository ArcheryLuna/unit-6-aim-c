import { HeroParallax } from "@/components/ui/team-paralax-hero";

const HeroParalaxItems =  [
    {
        title: "Bremen Ramirez Apolinario",
        position: "Jr. Frontend Developer",
        thumbnail: "/Employees/developers/junior-devs/frontend-dev-1.jpeg"
    }, {
        title: "Mateo Mambuscay",
        position: "Jr. QA Developer",
        thumbnail: "/Employees/developers/junior-devs/qa-dev-1.jpeg"
    },{
        title: "Eduard Mihai Lefko",
        position: "Jr. Backend Developer",
        thumbnail: "/Employees/developers/junior-devs/backend-dev-1.jpeg"
    },
    {
        title: "Wasil Qureshi",
        position: "Jr. Data Analyst",
        thumbnail: "/Employees/developers/junior-devs/data-analyst-1.jpeg"
    },{
        title: "Mike Erhmentraut",
        position: "Jr. Designer",
        thumbnail: "/Employees/developers/junior-devs/junior-designer-1.webp"
    },{
        title: "Maria Cervantes",
        position: "Jr. Full-Stack Developer",
        thumbnail: "/Employees/developers/junior-devs/fullstack-dev-1.jpg"
    },{    
        title: "Ivana Cajina",
        position: "Jr. Frontend Developer",
        thumbnail: "/Employees/developers/junior-devs/frontend-dev-2.jpg"
    },{
        title: "Gpios",
        position: "Jr. Data Analyst",
        thumbnail: "/Employees/developers/junior-devs/data-analyst-2.jpg"
    },{
        title: "Nichloas Varga",
        position: "Jr. QA Developer",
        thumbnail: "/Employees/developers/junior-devs/qa-dev-2.webp"
    },{
        title: "Pablo Sanchez",
        position: "Jr. Full-Stack Developer",
        thumbnail: "/Employees/developers/junior-devs/fullstack-dev-2.jpg"
    },{
        title: "Joseph Gonzalez",
        position: "Jr. Designer",
        thumbnail: "/Employees/developers/junior-devs/junior-designer-2.jpg"
    },
    {
        title: "Rafaella Mendes",
        position: "Jr. Backend Developer",
        thumbnail: "/Employees/developers/junior-devs/backend-dev-2.jpg"
    },{
        title: "Luisa Brimble",
        position: "Jr. QA Developer",
        thumbnail: "/Employees/developers/junior-devs/qa-dev-3.jpg"
    },{
        title: "Samantha Jhones",
        position: "Jr. Frontend Developer",
        thumbnail: "/Employees/developers/junior-devs/frontend-dev-3.jpg"
    },{
        title: "Jade Stephens",
        position: "Jr. Frontend Developer",
        thumbnail: "/Employees/developers/junior-devs/frontend-dev-4.jpg"
    },{
        title: "Brooke Cagle",
        position: "Jr. Frontend Developer",
        thumbnail: "/Employees/developers/junior-devs/frontend-dev-5.png"
    },
]


export default function JuniorDevs() {

    return (
        <div className="my-6 lg:my-12">
            <HeroParallax products={HeroParalaxItems} />
        </div>
    )
}
