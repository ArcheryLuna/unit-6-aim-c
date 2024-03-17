import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons'

export default function OhHonestlyDidYouNotReadTheCompanyPolicy() {
    return (
        <div>
            <h1 className="text-4xl tracking-tightest font-black">
                That waves your right to autonomy
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4 lg:my-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-black">
                            Company Ideals
                        </CardTitle>
                        <CardDescription>
                          { "// What we stand for" }
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    At Hot Beans, we prioritize skill enhancement and client satisfaction. We&apos;re dedicated to empowering our employees with continuous learning, ensuring our web development solutions exceed client expectations. 
                    Our ethos is built on innovation, collaboration, and crafting websites that not only meet but surpass client visions. Success together is our mantra.
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-black">
                            Company Mission
                        </CardTitle>
                        <CardDescription>
                            { "// Why we stand for it" }
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    Hot Beans aims to revolutionize website development by enhancing employee skills, exceeding client expectations with superior end products, and achieving corporate excellence through an IPO in the next quarter. 
                    Our mission is to blend talent development with client satisfaction, paving our way to global leadership in the tech industry.
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-black">
                            Join Us
                        </CardTitle>
                        <CardDescription>
                            { "// Join us and our mission" }
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    Join Hot Beans, where innovation meets ambition. With a mission to revolutionize website development and a commitment to skill enhancement and client satisfaction, we&apos;re on the path to an IPO. 
                    Be part of a team that values growth, exceeds expectations, and aims for global leadership. Your future starts here.
                    </CardContent>
                    <CardFooter>
                        <Button className="text-[#dfe9e9] rounded-full dark:text-[#191919] font-bold w-full"><FontAwesomeIcon icon={faChevronRight} className="mx-1"/> Join Us</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
