import Image from "next/image";

export default function DescribeDetail() {
  return (
    <div className="max-w-full w-full px-20 py-16">
      <div className="w-full gap-15 flex flex-col">
        <p className="text-[#595E5E] text-2xl leading-[150%] font-sans font-medium">
          In today's rapidly evolving business landscape, brands face <br />
          the constant challenge of staying relevant in the face of <br />
          changing market dynamics. Brand evolution, the process of <br />
          adapting and transforming to meet shifting consumer needs <br />
          and market trends, has become essential for businesses <br />
          seeking long-term success. By embracing brand evolution, <br />
          companies can not only maintain their competitive edge but <br />
          also foster growth and resilience in the face of uncertainty.
        </p>

        {/* image group (wrapper harus relative kalau pakai Image fill) */}
        <div className="relative flex justify-end items-end lg:mt-[-200px] lg:mb-[-700px] gap-4">
          <div className="relative w-[320px] h-[220px] lg:w-[480px] lg:h-[320px]">
            <Image
              src="/insight-blog/inblog-04.png"
              alt="photos"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="relative w-[280px] h-[200px] lg:w-[420px] lg:h-[280px]">
            <Image
              src="/landing-photos/branding.png"
              alt="branding"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:pl-[120px] gap-4">
          <h5 className="text-black text-3xl font-sans font-medium text-left">
            Empowering Businesses to Adapt and Thrive
          </h5>
          <p className="text-[#595E5E] text-2xl leading-[150%] font-sans font-medium">
            This blog post explores the intricacies of brand evolution and its significance in <br />
            modern business strategy. From identifying emerging market trends to implementing <br />
            effective adaptation strategies, businesses can navigate the complexities of brand <br />
            evolution with confidence. Through insightful case studies, actionable strategies, <br />
            and a focus on authenticity, this post aims to equip brands with the knowledge and <br />
            tools they need to thrive in today's ever-changing marketplace.
          </p>
        </div>

        <div className="relative w-full h-[420px]">
          <Image
            src="/about/Video-Showcase.png"
            alt="discussion teams"
            fill
            className="grayscale object-cover"
          />
        </div>
      </div>
    </div>
  );
}
