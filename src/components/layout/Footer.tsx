import Link from "next/link";
import { navigation } from "@/data/navigation";
import { ArrowUpIcon } from "lucide-react";

export default function Footer() {
    return (
        <div className="max-w-full w-full lg:px-20 lg:py-20 sm:px-5 sm:pt-14 sm:pb-6 flex flex-col gap-30 bg-black">
            <div className="w-full gap-18 flex lg:flex-row sm:flex-col">
                <h1 className="lg:w-[70%] w-[90%] leading-[130%] text-7xl text-white lg:text-left  font-sans font-normal">
                    Let&apos;s Make Something Cool
                </h1>
                <ul className="w-full flex flex-col gap-7 justify-right items-right">
                    {navigation
                        .filter((item) => item.hideInNavbar || item.published)
                        .map((item) => (
                            <li key={item.url} className="nav-item font-medium lg:text-right lg:ml-0 ml-2 text-left text-white text-2xl">
                                <Link href={item.url} className="hover:text-white">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="border-t border-transparent flex lg:flex-row flex-col gap-4 justify-between items-center text-white">
                <p className="text-center md:text-left">Copyright © 2024 Nexa</p>
                <div className="flex items-center cursor-pointer gap-2">
                    <Link href="#" className="hover:text-white">
                        Back to top
                    </Link>
                    <ArrowUpIcon size={16} />
                </div>
            </div>
        </div>
    )
}
