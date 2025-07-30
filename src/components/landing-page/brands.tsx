import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function VisionBrand() {
    return (
        <div className="max-w-full w-full px-20 py-20 bg-black">
            <div className="w-full flex flex-col gap-20">
                <div className="w-full justify-left items-left">
                    <h2 className="lg:w-[53%] w-full text-left text-5xl font-medium font-sans text-white leading-[150%]">
                        Transforming Digital <br />
                        Innovations for Visionary Brands
                    </h2>
                </div>

                <div className="w-full flex flex-col gap-18 justify-left items-left">
                    <div className="w-full flex lg:flex-row flex-col justify-between items-left pr-10 pb-10 gap-8 border-b-[0.25px] border-gray">
                        <div className="w-full flex lg:flex-row flex-col justify-left lg:gap-20 gap-10 items-left">
                            <p className="lg:text-base text-xl font-normal text-white leading-[180%] text-left">
                                Elevating Brands with <br />
                                Digital Transformation Innovation
                            </p>
                            <p className="lg:text-base lg:w-[50%] w-[90%] text-lg font-normal text-white leading-[180%] text-left">
                                We are passionate about uncovering the best digital innovations for forward — thinking brands looking to push boundaries and drive significant impact.
                            </p>
                        </div>

                        <div>
                            <Button className="justify-left gap-[9px] ml-[-20px] border-b-2 border-black">
                                <p className="text-white text-lg font-medium">Explore All Expertise</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
        </div>
    )
} 