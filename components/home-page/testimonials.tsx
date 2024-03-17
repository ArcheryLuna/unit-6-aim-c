import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faUser } from "@fortawesome/free-solid-svg-icons";

import { TestimonialCards } from "@/components/ui/testimonial-cards"
import { Button } from "@/components/ui/button"

import testimonials from "@/data/testimonials"

import Link from "next/link"

export default function Testimonials() {

    return (
        <div className="my-6 lg:my-12 w-full overflow-hidden">
            <h1 className="text-4xl font-black text-center my-6"><FontAwesomeIcon icon={faHandshake} className='mr-2' />Don&apos;t just take our word</h1>     
            <TestimonialCards items={testimonials}/>
            <Link href="/team">
                <Button className="w-full rounded-full mx-auto mt-6 text-[#dfe9e9] dark:text-[#191919] font-semibold"><FontAwesomeIcon icon={faUser} /> Check out our team</Button>
            </Link>
        </div>
    )
}
