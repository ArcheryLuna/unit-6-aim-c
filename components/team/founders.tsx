
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import FoundersInfo from "@/data/founders-data";

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
