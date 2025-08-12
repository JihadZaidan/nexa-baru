"use client"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import work1 from "../../../public/landing-photos/worker/firsly-work.png"
import work2 from "../../../public/landing-photos/worker/secondary-work.png"
import work3 from "../../../public/landing-photos/worker/threel-work.png"
import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/lib/animations"

export default function Worksheet() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const firstRef = useRef<HTMLDivElement>(null);
    const figeRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const sagaRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);
    const tangoRef = useRef<HTMLDivElement>(null);    

    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(buttonRef, 0.3);
    useSlideFromLeft(firstRef, 0.3);
    useSlideFromRight(figeRef, 0.3);
    useSlideFromLeft(secondRef, 0.3);
    useSlideFromRight(sagaRef, 0.3);
    useSlideFromLeft(thirdRef, 0.3);
    useSlideFromRight(tangoRef, 0.3);

    return (
        <div className="max-w-full w-full px-20 lg:py-36 pt-25 pb-30 gap-28 bg-white justify-left items-left">
            <div className="w-full justify-left gap-28 flex flex-col">
                <div className="w-full lg:justify-between items-left flex lg:flex-row flex-col justify-left gap-10">
                    <h2 ref={headRef} className="lg:w-[48%] w-full text-left text-5xl font-medium font-sans text-black leading-[150%]">
                        The work we do, <br />
                        and the people we help
                    </h2>

                    <div ref={buttonRef} className="relative lg:mt-25">
                        <Button className="flex flex-row justify-center gap-3 ml-[-20px]">
                            <p className="text-black lg:text-lg text-2xl font-medium">All Case Study</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black lg:h-[22px] lg:w-[22px] h-[25px] w-[25px]" />
                        </Button>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-between gap-36">
                    <div className="w-full justify-left items-left flex lg:flex-row flex-col gap-18">
                        <div ref={firstRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                            <h5 className="text-2xl font-medium text-left text-black">/ HOUSEL</h5>
                            <h4 className="text-4xl font-medium text-left text-black">
                                Help you to sell, buy, <br />
                                mortgage, invest <br />
                                property, and other <br />
                                real estate service. <br />
                            </h4>
                            <div>
                                <Button className="justify-left gap-[9px] ml-[-20px]">
                                    <p className="text-black text-xl font-medium text-left">View case study</p>
                                    <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                                </Button>
                            </div>
                        </div>

                        <div ref={figeRef} className="lg:w-[40%] w-full">
                            <Image
                                src={work1}
                                alt="worker first photos"
                            />
                        </div>
                    </div>

                    <div className="w-full justify-right items-right lg:ml-105 flex lg:flex-row flex-col gap-18">
                        <div ref={secondRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                            <h5 className="text-2xl font-medium text-left text-black">/ CONTEXT AI</h5>
                            <h4 className="text-4xl font-medium text-left text-black">
                                Empowers developers <br />
                                and companies to <br />
                                build outstanding <br />
                                products.<br />
                            </h4>
                            <div>
                                <Button className="justify-left gap-[9px] ml-[-20px]">
                                    <p className="text-black text-xl font-medium text-left">View case study</p>
                                    <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                                </Button>
                            </div>
                        </div>

                        <div ref={sagaRef} className="lg:w-[40%] w-full">
                            <Image
                                src={work2}
                                alt="worker first photos"
                            />
                        </div>
                    </div>

                    <div className="w-full justify-left items-left flex lg:ml-[-220px] lg:flex-row-reverse flex-col-reverse gap-18">
                        <div ref={thirdRef} className="justify-left items-left flex flex-col gap-6 bg-transparent">
                            <h5 className="text-2xl font-medium text-left text-black">/ CLOODY</h5>
                            <h4 className="text-4xl font-medium text-left text-black">
                                Allowing users to <br/>
                                upload and sync files <br/>
                                to cloud storage and <br/>
                                then access <br/>
                                them via Web Browser <br/>
                                or specific devices. <br/>
                            </h4>
                            <div>
                                <Button className="justify-left gap-[9px] ml-[-20px]">
                                    <p className="text-black text-xl font-medium text-left">View case study</p>
                                    <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                                </Button>
                            </div>
                        </div>

                        <div ref={tangoRef} className="lg:w-[55%] w-full">
                            <Image
                                src={work3}
                                alt="worker first photos"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
