"use client"

import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

type Work = {
    id: number;
    title: string;
    avatar: string;
}

const works: Work[] = [
    {
        id: 1,
        title: "01/ DIGITAL STRATEGY",
        avatar: "/expertise/01-digital.png"
    },
    {
        id: 2,
        title: "02/ BRANDING",
        avatar: "/expertise/02-branding.png"
    },
    {
        id: 3,
        title: "03/ WEB DEVELOPMENT",
        avatar: "/expertise/03-website.png"
    },
    {
        id: 4,
        title: "04/ APP DEVELOPMENT",
        avatar: "/expertise/04-application.png"
    }
];

export default function ExpertiseCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth"});
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth"});
    };

    return (
        <div className="relative w-full px-6">
          {/* Arrows */}
          <div className="absolute top-2 right-6 flex gap-2 z-10">
            <button onClick={scrollLeft}>
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button onClick={scrollRight}>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
    
          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-4 no-scrollbar pt-10 pb-6"
          >
            {works.map((work) => (
              <div key={work.id} className="min-w-[300px] flex-shrink-0">
                <div className="mb-2 text-xl text-black font-medium">{work.title}</div>
                <div className="aspect-[3/4] w-full relative overflow-hidden rounded-md shadow">
                  <Image
                    src={work.avatar}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

