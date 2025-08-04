import CenterWork from "@/components/works/centerwork";
import LowerSection from "@/components/works/lowerworks";
import UpperWorks from "@/components/works/upperSection";

export default function WorksPage() {
    return (
        <div className="w-full">
            <UpperWorks/>
            <CenterWork/>
            <LowerSection/>
        </div>
    )
}