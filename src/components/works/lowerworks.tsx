import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ProDocker from "../../../public/works/docker-pro.png"

export default function LowerSection() {
    return (
        <div className="max-w-full w-full px-20 pt-12 pb-25 bg-white">
            <div className="w-full flex lg:flex-row flex-col-reverse lg:gap-20 gap-12">
                <div className="lg:w-[55%] w-full">
                    <Image
                        src={ProDocker}
                        alt="Docker Project"
                    />
                </div>

                <div className="justify-left items-left flex flex-col gap-6 bg-transparent">
                    <h5 className="text-2xl font-medium text-left text-black">/ DOCKER</h5>
                    <h4 className="text-4xl font-medium text-left text-black">
                        Enhanching digital <br />
                        marketing with <br />
                        innovative design <br />
                        solutions <br />
                    </h4>
                    <div>
                        <Button className="justify-left gap-[9px] ml-[-20px]">
                            <p className="text-black text-xl font-medium text-left">View case study</p>
                            <ArrowRight height={23} width={23} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}