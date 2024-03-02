import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCalendarDay, faCoffeeBean } from '@fortawesome/pro-solid-svg-icons';

import {
    HoverCardContent,
    HoverCardTrigger,
    HoverCard
} from "@/components/ui/hover-card";

import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar";
import { Separator } from '../ui/separator';

export default function CeoQuote() {
    return (
        <div className='my-6 lg:my-12 py-6 lg:py-12'>
            <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl lg:text-4xl" />
            <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left">"
                At Hot Beans, we're more than a team; we're a family that thrives on creativity and innovation. Our mission is to transform ideas into digital realities that make a difference. We're on the hunt for passionate developers ready to challenge the status quo and elevate their careers. Join us, and together, let's shape the future of technology.
            "</h2>
            <div className="flex items-center justify-center lg:justify-start mt-4">
                <HoverCard>
                    <HoverCardTrigger className='underline-hover'>
                        <p className="text-base lg:text-lg text-right font-semibold">Felix Harper</p>
                    </HoverCardTrigger>
                    <HoverCardContent className='w-80 ml-4'>
                        <div className="flex justify-between space-x-4">
                        <Avatar>
                            <AvatarImage src="/Employees/CEO.jpeg" />
                            <AvatarFallback><FontAwesomeIcon icon={faCoffeeBean} /></AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">Felix Harper
                                <Separator className='mt-1 dark:bg-[#dfe9e9] bg-[#191919]' decorative={true}/>
                                <span className='text-muted-foreground'>CEO of Hot Beans</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">
                            The Innovator and founder of the Hot Beans corperation.
                            </p>
                            <div className="flex items-center pt-2">
                            <FontAwesomeIcon icon={faCalendarDay} className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Founded May 2007
                            </span>
                            </div>
                        </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}