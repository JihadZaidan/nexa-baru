import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import work2 from "../../../public/landing-photos/worker/secondary-work.png"
import crop from "../../../public/works/crop-work.png"

export default function CenterWork() {
    return (
        <div className="max-w-full w-full px-20 py-20 bg-black">
            <div className="w-full flex flex-col lg:gap-[-64px] gap-16">
                <div className="w-full justify-left items-left flex lg:flex-row flex-col-reverse gap-18">
                    <div className="lg:w-[40%] w-full">
                        <Image
                            src={work2}
                            alt="second-work-features"
                        />
                    </div>

                    <div className="justify-left items-left flex flex-col gap-6 bg-transparent">
                        <h5 className="text-2xl font-medium text-left text-white">/ CONTEXT AI</h5>
                        <h4 className="text-4xl font-medium text-left text-white">
                            Empowers developers <br />
                            and companies to <br />
                            build outstanding <br />
                            products.<br />
                        </h4>
                        <div>
                            <Button className="justify-left gap-[9px] ml-[-20px]">
                                <p className="text-white text-xl font-medium text-left">View case study</p>
                                <ArrowRight height={23} width={23} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full justify-right items-right flex lg:flex-row flex-col gap-18 lg:pl-100">
                    <div className="justify-left items-left flex flex-col gap-6 bg-transparent relative lg:top-25">
                        <h5 className="text-2xl font-medium text-left text-white">/ CLOODY</h5>
                        <h4 className="text-4xl font-medium text-left text-white">
                            Allowing users to <br />
                            upload and sync files <br />
                            to cloud storage and <br />
                            then access <br />
                            them via Web Browser <br />
                            or specific devices. <br />
                        </h4>
                        <div>
                            <Button className="justify-left gap-[9px] ml-[-20px]">
                                <p className="text-white text-xl font-medium text-left">View case study</p>
                                <ArrowRight height={23} width={23} className="mt-[2px] text-white" />
                            </Button>
                        </div>
                    </div>

                    <div className="lg:w-[44%] w-full">
                        <Image
                            src={crop}
                            alt="worker first photos"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}