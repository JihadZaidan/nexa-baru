import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import upper from "../../../public/about/upper-about.png"

export default function UpperAbout() {
    return (
        <div className="max-w-full w-full px-20 lg:pt-16 lg:pb-0 py-16 bg-white">
            <div className="w-full flex flex-col lg:gap-0 gap-12">
                <div className="w-full flex flex-col gap-12 lg:pl-150">
                    <h1 className="font-sans font-medium text-5xl text-black leading-[150%]">
                        An digital agency focused on digital <br />
                        experiences. With every single one <br />
                        of our clients, we bring forth a deep <br />
                        passion for creative problem solving.
                    </h1>

                    <div className="lg:ml-120">
                        <Button className="justify-center gap-[9px] ml-[-10px] border-b-2 border-black">
                            <p className="text-black text-2xl font-medium">Learn More About Us</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>

                <Image 
                  src={upper}
                  alt="upper section"
                  className="lg:w-[50%] w-full lg:relative grayscale"
                />
            </div>
        </div>
    )
}