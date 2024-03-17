import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';

const LeadDevContent: {
    id: number,
    name: string,
    designation: string,
    image: string,
    description: string,
    content: string,
    languages: string[],
}[] = [{
    id: 1,
    name: "Ashton Reece Clark",
    designation: "Lead Backend Developer",
    image: "/Employees/developers/lead-dev-1.jpg",
    description: "The one who developes",
    content: "Ashton Reece Clark is a masterclass programmer, apointed by the CEO to this position since the very beginning since the company started. Ashton is a dedicated and loyal employee.",
    languages: ["Typescript", "Javascript", "C", "Go", "Rust", "Python"]
}, {
    id: 2,
    name: "Mark Zanix",
    designation: "QA Lead",
    image: "/Employees/developers/zanix-dev.jpg",
    description: "Quality over quantity",
    content: "Mark Zanix is a masterclass programmer, graduated from one of the most prestigious universities in Romania with a degree in low-level code optimization and performance. Zanix strives for excellence in everything he does.",
    languages: ["Typescript", "Javascript", "C", "Go", "Rust", "Python"]
}, {
    id: 3,
    name: "Marija Liubsyte",
    designation: "Lead Frontend Designer",
    image: "/Employees/developers/lead-dev-3-alt-rose.jpeg",
    description: "The one who designs",
    content: "Marija Liubsyte is a musician and designer by trade. She has been working with us since the inseption of the company. She is a rare talent that is unrivaled within the industry in our professional opinion.",
    languages: ["CSS", "TailwindCSS", "C", "Typescript", "Javascript"]
}, {
    id: 4,
    name: "Gustavo Fring",
    designation: "Lead Full-Stack Developer",
    image: "/Employees/developers/lead-dev-4.webp",
    description: "The one who does it all",
    content: "Gustavo Fring is a masterclass programmer, He is great at his craft and has a maticulous sence of detail and design..",
    languages: ["TypeScript", "Javascript", "C", "Go", "Rust", "Python", "C++", "Haskell", "Java", "C#"]
}, {
    id: 5,
    name: "Shazil Erfan",
    designation: "Lead Data Analyst",
    image: "/Employees/developers/lead-dev-5.jpeg",
    description: "The one who analyses",
    content: "Shazil Erfan is a excelent data analyst, he works with the data and how people use our websites as a whole and advises the development team and the clients on the best decidions for customer retention.",
    languages: ["Python", "R", "SQL", "Javascript", "Typescript"]
}, {
    id: 6,
    name: "Chris Sean",
    designation: "Lead Frontend Developer",
    image: "/Employees/developers/lead-dev-6.jpeg",
    description: "The one who codes",
    content: "Chris Sean is a frontend developer, he is a wizard when it comes to creating visuals and working with libaries like Nextjs and FramerMotion, or animating in 3D with ReactThreeFiber",
    languages: ["CSS", "TailwindCSS", "Python", "Typescript", "Javascript"]
}, {
    id: 7,
    name: "Evan Williams",
    designation: "Lead Cloud Computing Engineer",
    image: "/Employees/developers/lead-dev-7.jpg",
    description: "The basement dweller",
    content: "Evan Williams is the senior the cloud computing engineer, he is the one who makes sure that the servers are running and that the websites are up and running.",
    languages: ["Python", "Rust", "Go", "C", "Bash", "Shell"]
}]

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function LeadDevs() {
    return (
        <div className="my-6 lg:my-12">
           <h1 className="text-2xl lg:text-4xl tracking-wide font-black">Lead Developers</h1> 
           <div className="columns-1 mt-4 md:columns-2 lg:columns-3 gap-4">
               {
                    LeadDevContent.map((content) => (
                    <div key={content.id} className="break-inside-avoid-column">
                      <Card className="mb-4">
                        <CardContent className="mt-6">
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src={content.image} alt={`${content.name} | ${content.designation}`} />
                                    <AvatarFallback>
                                        {content.name.split(' ').map((name) => name[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <CardTitle>{content.name}</CardTitle>
                                    <CardDescription>{content.description}</CardDescription>
                                    <p className="text-sm text-muted-foreground">
                                        {content.content}
                                    </p>
                                    <h2 className="text-lg font-bold">Languages</h2>
                                    <p className="text-sm text-muted-foreground">
                                        {content.languages.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <CardDescription>{content.designation}</CardDescription>
                        </CardFooter>
                      </Card>
                    </div>
                    ))
                } 
           </div>
        </div>
    )
}

