import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import invidi from "../../../public/landing-photos/insight/insight-visa.png"
import invida from "../../../public/landing-photos/insight/insight-vida.png"

export default function Story() {
    return (
        <div className="max-w-full w-full bg-[#F2F2F2] px-20 py-30">
            <div className="w-full flex flex-col justify-left items-left gap-30">
                <div className="w-full flex lg:flex-row flex-col lg:justify-between justify-left items-left gap-10">
                    <h3 className="lg:w-[48%] w-full text-left text-5xl font-medium font-sans text-black leading-[150%]">
                        Latest insights, stories, <br />
                        and news from Nexa.
                    </h3>

                    <div className="relative lg:mt-25">
                        <Button className="flex flex-row justify-center gap-3 ml-[-20px]">
                            <p className="text-black lg:text-lg text-2xl font-medium">Explore the Insight</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black lg:h-[22px] lg:w-[22px] h-[25px] w-[25px]" />
                        </Button>
                    </div>
                </div>

                <div className="w-full flex lg:flex-row flex-col lg:gap-20 gap-10 justify-left items-left">
                    <div className="w-full flex flex-col justify-left gap-10 items-left">
                        <Image
                            src={invidi}
                            alt="insight firstly"
                            className="grayscale"
                        />
                        <div className="lg:w-[75%] w-full flex flex-col gap-6">
                            <h4 className="w-full text-medium text-black text-4xl leading-[140%]">
                                All about the Business <br />
                                Model Canvas
                            </h4>
                            <p className="w-full text-lg font-medium text-black">
                                The Business Model Canvas was proposed by <br />
                                Alexander Osterwalder based on his earlier book.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-left gap-10 items-left pt-40">
                        <Image
                            src={invida}
                            alt="insight secondary"
                        />
                        <div className="lg:w-[75%] w-full flex flex-col gap-6">
                            <h4 className="w-full text-medium text-black text-4xl leading-[140%]">
                                UI + UX: Two Different but <br />
                                Complimenting Practices
                            </h4>
                            <p className="w-full text-lg font-medium text-black">
                                The Business Model Canvas was proposed by <br />
                                Alexander Osterwalder based on his earlier book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}