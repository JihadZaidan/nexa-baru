import { useRef } from "react"
import { useSlideFromLeft, useSlideFromRight } from "@/lib/animations"

export default function Insider() {
    const headRef = useRef<HTMLHeadingElement>(null);
    const graphRef = useRef<HTMLParagraphElement>(null);

    useSlideFromLeft(headRef, 0.3);
    useSlideFromRight(graphRef, 0.3);

    return (
        <div className="max-w-full w-full bg-white lg:px-20 lg:pt-16 lg:pb-20 px-9 pt-9 pb-14">
            <div className="w-full justify-left items-left flex flex-col lg:gap-25 gap-16">
                <h1 ref={headRef} className="w-full text-left text-5xl font-medium font-sans text-black leading-[150%]">
                    Digital Diaries: <br />
                    Strategies and Insights for Success
                </h1>

                <p ref={graphRef} className="lg:text-right text-black font-sans font-medium text-3xl leading-[140%] lg:ml-50">
                    — Unlocking Strategies, Trends, <br/>
                    and Insights to Propel Your Brand <br/>
                    Forward in the Dynamic World of <br/>
                    Digital Marketing.
                </p>
            </div>
        </div>
    )
}
