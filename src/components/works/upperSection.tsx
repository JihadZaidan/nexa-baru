import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import work1 from "../../../public/landing-photos/worker/firsly-work.png"

export default function UpperWorks() {
    return (
        <section>
            <div className="max-w-full w-full px-20 py-16 bg-white">
                <div className="w-full flex flex-col gap-36 relative lg:top-10">
                    <h1 className="text-5xl leading-[130%] w-[75%] font-normal font-sans text-black">
                        From creative projects that push <br />
                        the boundaries of our team&apos;s <br />
                        imagination. Build in into all of <br />
                        our works.
                    </h1>

                    <div className="w-full flex lg:flex-row flex-col lg:pl-[404px] lg:gap-24 gap-10">
                        <div className="justify-left items-left flex flex-col gap-6 bg-transparent">
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

                        <div className="lg:w-[40%] w-full z-7 relative lg:top-15">
                            <Image
                                src={work1}
                                alt="worker first photos"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full relative bg-black bottom-0 h-20"></div>
        </section>
    )
}