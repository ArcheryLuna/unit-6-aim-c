import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

import { CarouselCards } from "@/components/ui/infinite-moving-cards"


export default function Testimonials() {

    const testimonials = [
        {
            title: "Friendly and supportive environment ",
            name: "Mateo Mambuscay",
            quote: "I've been working at Hot Beans for 5 years and I've loved every minute of it. The team is great and the work is challenging."
        }, {
            title: "Empowering and supportive",
            name: "Muhammad Grill",
            quote: "I joined Hot Beans 3 years ago and I've been able to grow and learn in my field of work, and acquire new skills. I now generate 9 figures in revenue for the company."
        }, {
            title: "A great place to work",
            name: "Kayla Kaczinsci",
            quote: "I've been working at Hot Beans for 5 years and I've loved every minute of it. The team is great and the work is challenging."
        }, {
            title: "Best work place",
            name: "Muhammad Shafi",
            quote: "The company of Hot Beans has been a very comforting experience, it has allows me to be able to grow and learn in my varient field of work, and acquire new skills. "
        } , {
            title: "Helped me grow",
            name: "Meow Cattingson",
            quote: "Hot Beans Web helped me cultivate my skills from a novice's to a professional's. There is a place for you here, and I found my place here as a Front-End Developer."
        }
    ]

    return (
        <div className="my-6 lg:my-12 w-full overflow-hidden">
            <h1 className="text-4xl font-black text-center my-6"><FontAwesomeIcon icon={faHandshake} className='mr-2' />Don't just take our word</h1>     
            <CarouselCards items={testimonials} direction={"right"} speed="slow"/>
        </div>
    )
}