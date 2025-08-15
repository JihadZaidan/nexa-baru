import Image from "next/image"
import Note from "../../../public/insight-blog/inblog-04.png"
import Tims from "../../../public/landing-photos/branding.png"
import Meeting from "../../../public/about/Video-Showcase.png"

export default function DescribeDetail() {
    return (
        <div className="max-w-full w-full px-20 py-15">
            <div className="w-full gap-15 flex flex-col">
                <div className="justify-right items-right relative lg:mt-[-200px] lg:mb-[-700px]">
                    <Image
                        src={Note}
                        alt="photos"
                        className="lg:relative lg:scale-[50%] lg:left-[110px]"
                    />

                    <Image
                        src={Tims}
                        alt="branding"
                        className="relative lg:scale-[50%] lg:w-[70%] lg:top-[-550px] lg:left-50"
                    />
                </div>

                <div className="justify-right items-left flex flex-col lg:pl-120 gap-4">
                    <h5 className="text-black text-3xl font-sans font-medium text-left">Empowering Businesses to Adapt and Thrive</h5>
                </div>

                <Image
                    src={Meeting}
                    alt="discusion teams"
                    className="grayscale"
                />
            </div>
        </div>
    )
}
