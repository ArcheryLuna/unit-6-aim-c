import { Card, CardHeader, CardFooter, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


const InvestorsContent = [{
    id: 1,
    name: "The Primeagen",
    designation: "Senior at netflix",
    image: "/Employees/investors/investor-1.jpg",
    title: "Prime Time",
    description: "Netflix senior, husband to beautiful wife and father of four kids",
    content: "The Primeagen is an early investor to Hot Beans and has been a wonderful partner to work with. Together we can make Hot Beans into a company that goes above and beyond for our clients."
}, {
    id: 2,
    name: "Theo Browne",
    designation: "Founder of Ping.gg",
    image: "/Employees/investors/investor-2.jpeg",
    title: "Theo",
    description: "ping.gg ,create-t3-app and uploadThing",
    content: "Theo is a master of frontend development an ex-engineer at Twitch.tv and an industry leader creating projects such as ping.gg and create-t3-app. With his experties backing us and consulting us we know we can provide brilliance",
}, {
    id: 3,
    name: "Jesse Pinkman",
    designation: "Mr. White's Subordanate",
    imgae: "/Employees/investors/Investor-3.webp",
    title: "Yo Mista White",
    description: "Chemist maybe?",
    content: "Jesse Pinkman is a very secritive investor. All we realy know is that he is supporting the project because Walter Hartwel White is a founder."
}, {
    id: 4,
    name: "Eric Wang",
    designation: "Founder of convoypanel",
    image: "/Employees/investors/investor-4.jpg",
    title: "Genius",
    description: "Genius, Inovator, and Inventor",
    content: "Eric Wang is a very skilled developer who has created one of the most powerful tools for developers. Convoy Panel is a tool that allows developers to create and manage their own websites with ease."
}, {
    id: 5,
    name: "Mathew Patrick",
    designation: "The Theorist",
    image: "/Employees/investors/Investor-5.jpeg",
    title: "That's just a theory",
    description: "A game theory, thanks for watching",
    content: "MatPat has retired, however his soul that he painstakenly placed into every peice of content and thing that he creates can never be removed. His legacy stands strong. As a website development company we had the pleasure of working with him to create his online merchendice store."
}, {
    id: 6,
    name: "Massimo Daccorso",
    designation: "Him",
    image: "/Employees/investors/Investor-6.jpeg",
    title: "Who is he?",
    description: "He is him.",
    content: "17 year-old. masterclass programmer, single, trained astronaut and knowlageable business man. Also did we mention that he is infact Italian."
}]

export default function Investors() {
    return (
        <div className="my-6 lg:my-12">
           <h1 className="text-2xl lg:text-4xl tracking-wide font-black">Investors</h1> 
           <div className="columns-1 mt-4 md:columns-2 lg:columns-3 gap-4">
               {
                    InvestorsContent.map((content) => (
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
