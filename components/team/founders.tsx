
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const FoundersInfo = [{
    id: 1,
    name: "Felix Harper",
    designation: "CEO",
    image: "/Employees/CEO.jpeg",
    information: "Felix Harper is the creater of Hot Beans and the CEO of the company. A once very talanted and sucsessful ex-faang employee he got bored of the tedious work at the faang company and decided to create this website development company to chalange himself and grow his skills as a developer.",
    title: "Our CEO",
    description: "The one who started it"
}, {
    id: 2,
    name: "Jade Eliot",
    designation: "CTO",
    image: "/Employees/founders/Founder-1.jpeg",
    information: "Jade Eliot is the CTO of Hot Beans. She is a very talented developer and has a lot of experience in the field. She has worked at many companies and has a lot of experience in the field.",
    title: "Our CTO",
    description: "The one who keeps it running"
}, {
    id: 3,
    name: "Walter Hartwell White",
    designation: "Chemist",
    image: "/Employees/founders/Founder-2.webp",
    information: "His name is Walter Hartwell White. He lives at 308 Negra Arroyo Lane, Albuquerque, New Mexico. 87104. A talented chemist who has a lot of experience selling products in the field.",
    title: "Waltuh",
    description: "The one who knocks"
}, {
    id: 4,
    name: "Ana Singh Kaur",
    designation: "COO",
    image: "/Employees/founders/Founder-3.jpeg",
    information: "Ana Singh Kaur is the COO of Hot Beans. She is a very friendly and talented individual when it comes to business. She has a lot of knowlage in the area of software engineering and web development.",
    title: "Our COO",
    description: "The one who keeps it organized"
}, {
    id: 5,
    name: "Yatin Jason Manuel",
    designation: "Halvex Partner",
    image: "/Employees/founders/Founder-4.jpeg",
    information: "Yatin Jason Manuel is a briliant networking engineer and is a the CEO of Halvex. He created Halvex with two other people at a young age and has been quite sucsessful in the trade.",
    title: "Our Halvex Partner",
    description: "Our biggest friend"
}, {
    id: 6,
    name: "Lana Reyes",
    designation: "CFO",
    image: "/Employees/founders/Founder-6-alt.jpeg",
    information: "Lana Reyes is the CFO of Hot Beans. She makes sure we don&apos;t go bankrupt and makes sure we still have work to do at the end of the day. One of our most valued employees.",
    title: "Our CFO",
    description: "The one who keeps it funded"
}];

export default function Founders() {
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl font-black tracking-wide">Founders</h1>
            <div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 my-4 lg:my-6">
                  {
                    FoundersInfo.map((founder) => (
                    <div key={founder.id} className="break-inside-avoid-column">
                      <Card className="mb-4">
                        <CardContent className="mt-6">
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src={founder.image} alt={`${founder.name} | ${founder.designation}`} />
                                    <AvatarFallback>
                                        {founder.name.split(' ').map((name) => name[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                    <CardTitle>{founder.name}</CardTitle>
                                    <CardDescription>{founder.description}</CardDescription>
                                    <p className="text-sm text-muted-foreground">
                                        {founder.information}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <CardDescription>{founder.designation}</CardDescription>
                        </CardFooter>
                      </Card>
                    </div>
                    ))
                  }
                </div>
            </div>
        </div>
    )
}
