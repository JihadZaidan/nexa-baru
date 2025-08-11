"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import team from "../../../public/landing-photos/teams.png"
import contribute from "../../../public/landing-photos/contributors.png"
import { useRef } from "react"
import { useSlideFromLeft, useFadeIn, useSlideFromTop } from "@/lib/animations"

export default function Introduce() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    if (typeof window !== "undefined") {
        if (window.innerWidth >= 1024) {
            // Dekstop Version 
            useSlideFromLeft(headRef, 0.3);
            useSlideFromLeft(buttonRef, 0.3);
            useFadeIn(bottomRef, 0.3);
        } else {
            // Application Version 
            useSlideFromTop(headRef,0.3);
        }
    }

    return (
        <div className="max-w-full w-full gap-16 px-20 pt-24 lg:pb-0 pb-10 bg-white">
            <div className="w-full flex flex-col justify-between items-left gap-20">
                <div className="w-full flex flex-col justify-left items-left gap-16">
                    <h1 ref={headRef} className="text-5xl leading-[130%] w-[75%] font-normal font-sans text-black z-0">
                        An digital agency focused on digital
                        experiences. With every single one of our
                        clients, we bring forth a deep passion for
                        creative problem solving.
                    </h1>
                    <div ref={buttonRef} className="justify-left">
                        <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                            <p className="text-black text-2xl font-medium">Let&apos;s talk</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>
                <div ref={bottomRef} className="w-full lg:flex lg:flex-row lg:justify-between lg:gap-4 flex flex-col justify between gap-10">
                    <div className="lg:w-[40%] w-[80%] flex flex-row gap-12 lg:justify-left justify-center items-center">
                        <Image
                            src={team}
                            alt="photos"
                            className="lg:ml-0 ml-15"
                        />
                        <p className="lg:text-xl text-lg font-medium text-black leading-[120%]">You&apos;ll collaborate with our experts.</p>
                    </div>

                    <Image
                        src={contribute}
                        alt="contributors clients"
                        className="relative lg:w-[50%] w-full lg:left-20 lg:block hidden"
                    />
                </div>
            </div>
        </div>
    )
}
