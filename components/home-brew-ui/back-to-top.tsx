"use client";

import { faChevronUp } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from "@/components/ui/button"

import React, { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisable, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const ReturnToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <Button onClick={() => ReturnToTop()} size={"icon"} className={(isVisable ? "opacity-100 " : "opacity-0 ") +"fixed bottom-5 w-6 h-6 px-6 transition-all duration-200 py-6 right-5 z-[100]"}>
            <FontAwesomeIcon icon={faChevronUp}  className={"text-xl text-[#dfe9e9] dark:text-[#191919] "}></FontAwesomeIcon>
        </Button>
    )
}