import VisionBrand from "@/components/landing-page/brands";
import Introduce from "@/components/landing-page/introduce";
import Worksheet from "@/components/landing-page/projects";
import Story from "@/components/landing-page/story";


export default function RootPage() {
  return (
    <div className="w-full">
      <Introduce/>
      <VisionBrand/>
      <Worksheet/>
      <Story/>
    </div>
  );
}
