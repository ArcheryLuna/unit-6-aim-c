"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";


export default function FourOhFourButtons() {

    const router = useRouter()
    
    const goHome = () => {
        router.push("/")
    }
    const goBack = () => {
        router.back()
    }

    return (
        <>
            <Button className="text-[#dfe9e9] dark:text-[#191919] " onClick={goHome}>
                Go Home
            </Button>
            <Button variant={"outline"} onClick={goBack}>
                Go to previous
            </Button>
</>
    )

}
