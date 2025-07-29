import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

export default function Introduce() {
    return (
        <div className="max-w-full w-full gap-16 px-20 py-16 bg-white">
            <div className="w-full flex flex-col justify-between items-left">
                <div className="w-full flex flex-col justify-left items-left gap-16">
                    <h1 className="text-5xl leading-[130%] w-[75%] font-normal font-sans text-black">
                        An digital agency focused on digital
                        experiences. With every single one of our
                        clients, we bring forth a deep passion for
                        creative problem solving.
                    </h1>
                    <div className="justify-left">
                        <Button className="justify-center gap-[9px] ml-[-10px]">
                            <p className="text-black text-lg font-medium">Let&apos;s talk</p>
                            <ArrowRight height={22} width={22} className="mt-[2px] text-black" />
                        </Button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
