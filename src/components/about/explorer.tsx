import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Discusion from "../../../public/about/Video-Showcase.png"

export default function AboutExplor() {
    return (
        <div className="max-w-full w-full bg-black px-20 py-20">
            <div className="w-full flex flex-col gap-14">
                <div className="w-full flex flex-col gap-10">
                    <h2 className="font-sans font-medium text-left lext-white text-5xl leading-[150%]">
                        Shaping Tomorrow&apos;s Digital Realms. <br />
                        One Pixel at a Time
                    </h2>

                    <div className="w-full flex flex-col lg:pl-170 lg:gap-10 gap-5">
                        <p className="text-white font-normal font-sans text-lg leading-[170%]">
                            Here, we transform your digital dreams into reality <br />
                            — pushing boundaries and setting new standards in the digital landscape.
                        </p>

                        <div className="lg:ml-140">
                            <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                                <p className="text-white text-lg font-medium">Explore More</p>
                                <ArrowRight height={22} width={22} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                <Image
                    src={Discusion}
                    alt="discusion teams"
                />
            </div>
        </div>
    )
}