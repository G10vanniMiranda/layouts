"use client"

import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

export function AosInit(){

    useEffect( () => {
        Aos.init({
            duration: 1800,
            once: true
        })
    }, [])

    return null;
}