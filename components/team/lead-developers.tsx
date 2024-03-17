import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import LeadDevContent from '@/data/lead-devs';

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

