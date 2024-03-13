import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const questions = [{
    id: 1,
    question: "What is the main language that we use?",
    answer: "We use TypeScript and JavaScript for the majority of our projects. Using frameworks like NextJS and Svelte kit. We also if needed use rust for backend development."
}, {
    id: 2,
    question: "What is the company culture like?",
    answer: "We are a remote first company, we have a very relaxed and flexible work environment. We are a small team and we are very close knit."
}, {
    id: 3,
    question: "What is the interview process like?",
    answer: "We have a 3 stage interview process. The first stage is a short 30 minute call with the hiring manager. The second stage is a technical test. The third stage is a final interview with the team."
}, {
    id: 4,
    question: "What is the company culture like?",
    answer: "We are a remote first company, we have a very relaxed and flexible work environment. We are a small team and we are very close knit."
}]

export default function FrequentlyAskedQuestions() {
    return (
        <div className="px-6 lg:px-96">
            <h1 className="text-2xl lg:text-4xl my-4 lg:my-6 font-black">Frequently Asked Questions</h1>
            <div>
                <Accordion type="single" collapsible={true}>
                {
                    questions.map((questions) => (
                        <AccordionItem value={`${questions.id}`} key={questions.id}>
                            <AccordionTrigger>{questions.question}</AccordionTrigger>
                            <AccordionContent>{questions.answer}</AccordionContent>
                        </AccordionItem>
                    ))
                }
                </Accordion>
            </div>
        </div>
    )
}
