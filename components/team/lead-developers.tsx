import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';

const LeadDevContent: {
    id: number,
    name: string,
    designation: string,
    image: string,
    description: string,
    content: string
}[] = [{
    id: 1,
    name: "Ashton Reece Clark",
    designation: "Lead Backend Developer",
    image: "/Employees/developers/lead-dev-1.jpg",
    description: "The one who developes",
    content: "Ashton Reece Clark is a masterclass programmer, apointed by the CEO to this position since the very beginning since the company started. Ashton is a dedicated and loyal employee."
}, {
    id: 2,
    name: "Mark Zanix",
    designation: "QA Lead",
    image: "/Employees/developers/zanix-dev.jpg",
    description: "Quality over quantity",
    content: "Mark Zanix is a masterclass programmer, graduated from one of the most prestigious universities in Romania with a degree in low-level code optimization and performance. Zanix strives for excellence in everything he does."
}, {
    id: 3,
    name: "Marija Liubsyte",
    designation: "Lead Frontend Designer",
    image: "/Employees/developers/lead-dev-3-alt-rose.jpeg",
    description: "The one who designs",
    content: "Marija Liubsyte is a musician and designer by trade. She has been working with us since the inseption of the company. She is a rare talent that is unrivaled within the industry in our professional opinion."
}]

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function LeadDevs() {
    return (
        <div className="my-6 lg:my-12">
           <h1 className="text-2xl lg:text-4xl tracking-wide font-black">Investors</h1> 
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

