import Image from "next/image"
import railey from "../../../public/blog-detail/railey.png"
import detail from "../../../public/blog-detail/detailhead.png"

export default function DetailUpper() {
    return (
        <div className="max-w-full w-full px-20 py-30 flex flex-col gap-20">
            <div className="w-full flex flex-col gap-20">
                <h1 className="font-sans font-medium text-5xl text-black leading-[150%] z-5">
                    Brand Evolution — <br />
                    Adapting to Changing Markets
                </h1>
                <div className="lg:w-[50%] flex flex-row gap-4 justify-left items-center">
                    <Image
                        src={railey}
                        alt="founder"
                        className="w-[10%] h-[10%]"
                    />
                    <p className="text-black text-2xl font-sans font-medium">Railey Braid</p>
                </div>
            </div>

            <div className="lg:relative">
                <Image 
                  src={detail}
                  alt="photos market"
                  className="lg:absolute lg:z-0 grayscale lg:w-[40%] lg:right-[-10px] lg:top-[-300px]"
                />
            </div>
        </div>
    )
}