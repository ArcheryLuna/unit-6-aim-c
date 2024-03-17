import { Card, CardFooter, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import InvestorsContent from "@/data/investors-data"

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
