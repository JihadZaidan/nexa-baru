import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"
import team from "../../../public/landing-photos/teams.png"
import contribute from "../../../public/landing-photos/contributors.png"

export default function Introduce() {
    return (
        <div className="max-w-full w-full gap-16 px-20 pt-18 bg-white">
            <div className="w-full flex flex-col justify-between items-left gap-20">
                <div className="w-full flex flex-col justify-left items-left gap-16">
                    <h1 className="text-5xl leading-[130%] w-[75%] font-normal font-sans text-black">
                        An digital agency focused on digital
                        experiences. With every single one of our
                        clients, we bring forth a deep passion for
                        creative problem solving.
                    </h1>
                    <div className="justify-left">
                        <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                            <p className="text-black text-2xl font-medium">Let&apos;s talk</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:flex lg:flex-row lg:justify-between lg:gap-4 flex flex-col justify between gap-10">
                    <div className="lg:w-[40%] w-[80%] flex flex-row gap-12 lg:justify-left justify-center items-center">
                        <Image
                            src={team}
                            alt="photos"
                            className="lg:ml-0 ml-15"
                        />
                        <p className="lg:text-xl text-lg font-medium text-black ">You&apos;ll collaborate with our experts.</p>
                    </div>

                    <Image
                        src={contribute}
                        alt="contributors clients"
                        className="relative lg:w-[50%] w-full lg:left-20"
                    />
                </div>
            </div>
        </div>
    )
}
