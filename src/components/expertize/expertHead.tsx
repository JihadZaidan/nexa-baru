import ExpertiseCarousel from "./preview";

export default function ExpertWorks() {
    return (
        <div className="max-w-full w-full bg-white px-20 py-16">
            <div className="w-full flex flex-col gap-30">
                <h1 className="text-black font-sans font-medium text-5xl leading-[150%]">
                    — Discover Our Expertise: <br/>
                    Crafting Digital Strategy, <br/>
                    Elevating Brands, Web <br/>
                    Wizardry, and App Magic.
                </h1>

                <div className="w-full">
                    <ExpertiseCarousel/>
                </div>
            </div>
        </div>
    )
}